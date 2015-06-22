/*************************************************************************
 * Copyright (c) 2015, Anonymous Developers who have nothing to do with the Tor Project, Inc
 * Copyright (c) 2015, MR_BACON
 * See LICENSE for licensing information.
 * Any resemblence to fictional characters is purely coincidental.
 *
 * vim: set sw=2 sts=2 ts=8 et syntax=javascript:
 * 
 * about:portland component
 *************************************************************************/

// Module specific constants
const kMODULE_NAME = "about:portland";
const kMODULE_CONTRACTID = "@mozilla.org/network/protocol/about;1?what=portland";
const kMODULE_CID = Components.ID("70447eb9-79c3-4661-aa9f-8049476f7bf5");

const kAboutPortlandURL = "chrome://torbutton/content/aboutPortland/aboutPortland.html";
const kAboutBaconURL = "chrome://torbutton/content/aboutPortland/aboutBacon.html";

const Cc = Components.classes;
const Ci = Components.interfaces;
const Cu = Components.utils;
 
Cu.import("resource://gre/modules/XPCOMUtils.jsm");
 
function AboutPortland()
{
}


AboutPortland.prototype =
{
  QueryInterface: XPCOMUtils.generateQI([Ci.nsIAboutModule]),

  // nsIClassInfo implementation:
  classDescription: kMODULE_NAME,
  classID: kMODULE_CID,
  contractID: kMODULE_CONTRACTID,

  // nsIAboutModule implementation:
  newChannel: function(aURI)
  {
    let ioSvc = Cc["@mozilla.org/network/io-service;1"]
                  .getService(Ci.nsIIOService);
    let channel = ioSvc.newChannel(kAboutPortlandURL, null, null);
    let logger = Cc["@torproject.org/torbutton-logger;1"]
                     .getService(Components.interfaces.nsISupports).wrappedJSObject;
    let prefs =  Components.classes["@mozilla.org/preferences-service;1"]
           .getService(Components.interfaces.nsIPrefBranch);

    // XXX: nsiURI with crazy format
    channel.originalURI = aURI;

    var wm = Cc["@mozilla.org/appshell/window-mediator;1"]
                                .getService(Components.interfaces.nsIWindowMediator);
    var win = wm.getMostRecentWindow("navigator:browser");
    
    // if !popup.. (opener or name??)
    //if (!win.document.defaultView.opener)
    // log current window.name
    logger.eclog(4, "window.name: "+win.name+", view name: "+win.document.defaultView.name); 

    // set pref browser.link.open_newwindow.restriction=1
    prefs.setIntPref("browser.link.open_newwindow.restriction", 1);
    var popup;

    if (aURI.spec == "about:bacon") {
      popup = win.open(kAboutBaconURL,'mywindow',
              'location=no,menubar=no,resizable=no,scrollbars=no,status=no,toolbar=no,titlebar=no');
    } else {
      if (prefs.getIntPref("network.cookie.cookieBehavior") == 2) {
        popup = win.open(kAboutPortlandURL + "#nocookies", 'mywindow',
              'location=no,menubar=no,resizable=no,scrollbars=no,status=no,toolbar=no,titlebar=no');
      } else {
        popup = win.open(kAboutPortlandURL,'mywindow',
              'location=no,menubar=no,resizable=no,scrollbars=no,status=no,toolbar=no,titlebar=no');
      }
    }
    // cancel current load.
    channel.cancel(0x804b0002); // NS_BINDING_ABORTED
    prefs.setIntPref("browser.link.open_newwindow.restriction", 0);

    let title_fixer = function () {
      let enumerator = wm.getXULWindowEnumerator(null);
      while(enumerator.hasMoreElements()) {
        let xul_window = enumerator.getNext();
        if (xul_window instanceof Ci.nsIXULWindow) {
          xul_window.QueryInterface(Ci.nsIBaseWindow);
          /* Hack to reset our title */
          if (xul_window.title.search("chrome") != -1) {
            win.setTimeout(title_fixer, 50);
          }
          if (xul_window.title.search("TOR BROWSER") != -1) {
            xul_window.title = "TOR BROWSER                                                                                                                                                 ";
          }
        }
      }
    }
   
    /* Timer hacks because there is a race condition where the titelbar updates itself
     * magically even after we set it once. This happens well after onload fires, 
     * which rules out postmessage+onload handlers :( */ 
    win.setTimeout(title_fixer, 25);
    win.setTimeout(title_fixer, 50);
    win.setTimeout(title_fixer, 100);
    win.setTimeout(title_fixer, 200);
    win.setTimeout(title_fixer, 500);
    win.setTimeout(title_fixer, 1000);

    return channel;
  },

  getURIFlags: function(aURI)
  {
    return Ci.nsIAboutModule.ALLOW_SCRIPT;
  }
};


const NSGetFactory = XPCOMUtils.generateNSGetFactory([AboutPortland]);
