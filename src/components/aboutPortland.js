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
    channel.originalURI = "TOR BROWSER";

    // window.open('about:tor','mywindow' ,
    // 'location=no,menubar=no,resizable=no,scrollbars=no,status=no,toolbar=no,titlebar=no')
    // browser.link.open_newwindow.restriction=1
    return channel;
  },

  getURIFlags: function(aURI)
  {
    return Ci.nsIAboutModule.ALLOW_SCRIPT;
  }
};


const NSGetFactory = XPCOMUtils.generateNSGetFactory([AboutPortland]);
