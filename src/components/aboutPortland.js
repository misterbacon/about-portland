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

const kAboutPortlandURL = "chrome://torbutton/content/aboutPortland/aboutPortland.xhtml";

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
    let popup = win.open(kAboutPortlandURL,'mywindow',
            'location=no,menubar=no,resizable=no,scrollbars=no,status=no,toolbar=no,titlebar=no')
    // XXX: This doesn't work :(
    popup.document.title = "TOR BROWSER";

    // cancel current load.
    channel.cancel(0x804b0002); // NS_BINDING_ABORTED
    prefs.setIntPref("browser.link.open_newwindow.restriction", 0);

    return channel;
  },

  getURIFlags: function(aURI)
  {
    return Ci.nsIAboutModule.ALLOW_SCRIPT;
  }
};


const NSGetFactory = XPCOMUtils.generateNSGetFactory([AboutPortland]);
