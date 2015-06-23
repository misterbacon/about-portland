about:portland Easter Egg
#########################

This version of Torbutton contains an easter egg designed to test the Tor
Browser reproducible build system. A fire drill, so to speak.

The repository at https://github.com/misterbacon/about-portland contains the
complete source code of the easter egg. This repository was used to build the
special torbutton@torproject.org.xpi included in the 5.0 alpha series of the
Tor Browser.

As can be seen in the commit history and the corresponding distributed xpi
contents, the only change in this easter egg is to create some about: URLs and
associate content. This URL was inspired by the 4th of July Portlandia episode
where the Mayor of Portland "saves" the 4th of July by using "TOR BROWSER" to
purchase "fireworks" on the "deep web" from "MR_BACON", who definitely was not
an undercover cop. No really, he just likes juice.
https://www.youtube.com/watch?v=D7NVF1jrsSs&t=540&html5=1

Why did you do this?
####################

We did this to demonstrate that it is important for software developers to
ensure the integrity of the software that they produce and distribute.
Governments and organized crime have begun targeting software developers in
order to infect their users, and the NSA sure as shit isn't going to protect
anyone from that. Retaining the ability to distribute malware to terrists is
more important to them.
https://firstlook.org/theintercept/2015/05/21/nsa-five-eyes-google-samsung-app-stores-spyware/

The Tor Project defends against these attacks by ensuring that anyone can
exactly recreate the software that it distributes from the provided source
code. However, this defense only works if people outside of the Tor Project
regularly rebuild the source code to ensure that the binaries that they
produce match the binaries distributed by the Tor Project.

This easter egg was created to determine if others were actually reproducing
the Tor Project binaries, and if not, to give them some motivation to do so in
the future.

Did you exploit the Tor Project?
################################

This demonstration did not involve any compromise of the Tor Project or their
build infrastructure. The Tor Browser team agreed to include this version of
Torbutton in their alpha releases until such time as someone attempted to
reproduce the build and noticed.

This effort was a collaboration with the Tor Browser Team. They reviewed this
easter egg and determined that it was safe to include in the alpha series.

Should this easter egg go unnoticed in the alpha series, the Tor Browser team
has agreed to include it in the subsequent stable series as well.

But the Dark Web is Bad, Mmmk?
##############################

Actually, the terms "dark web" and "deep web" were originally coined by
computer science academics and software engineers to describe all of the
websites that were not indexed by search engines. The set of all pages that
cannot be indexed by search engines is in fact very large.

However, in order enable sensationalist claims like "The dark web is 500X
bigger than the public web and it's filled with bad stuff!", sloppy
journalists began to conflate Tor hidden services and other encryption systems
(sometimes called "darknets" because their encrypted traffic is not visible to
surveillance) with the more general "dark web" term. Repurposing or mixing up
terminology is one thing, but doing so in a seemingly deliberate attempt to
sensationalize and exaggerate is at best bad journalism, and at worst outright
dishonest. 

In truth the Tor Network is primarily used by people who simply want more
privacy when they access the normal public Internet. It turns out that less
than 3% of the traffic on the Tor network is used for its internal "darknet"
hidden service functionality.
https://www.wired.com/2015/06/dark-web-know-myth/

We interpreted the Portlandia 4th of July episode as a clever satirization of
this exaggeration (in addition to poking some fun at Tor Browser usability).
It is in fact not the case that once you download the latest Tor Browser, "it
will pretty much direct you from there [to the dark web]". Well, at least it
didn't, until we created this easter egg :).

Understanding the changes
#########################

The code adds the following files:

* src/chrome/content/aboutPortland/aboutPortland.html
 - The main about:portland html file. Unprivileged code.
*  src/chrome/content/aboutPortland/about-portland.js
 - The main Javascript file for the about:portland page. Unprivileged code.
*  src/chrome/content/aboutPortland/circle-bomb.gif
 - Firepower animated gif
*  src/chrome/content/aboutPortland/elizabot.js
 - Elizabot source (for MR_BACON chatbot). Unprivileged code.
*  src/chrome/content/aboutPortland/elizadata.js
 - Elizabot response rules (for MR_BACON chatbot). Unprivileged code.
*  src/chrome/skin/aboutBacon.css
 - Stylesheet for the chatbot (unprivileged code)
*  src/chrome/skin/aboutPortland.css
 - Stylesheet for about:portland (unprivileged code)
*  src/chrome/skin/profontwindows-webfont.woff
 - Webfont used by Portlandia's Tor Browser
*  src/chrome/skin/BOOTSTRA.386/*
 - Bootstrap theme and jquery library (unprivileged code)
*  src/components/aboutPortland.js
 - Privileged code that registers the about:portland pages and reset window titles to TOR BROWSER

Nearly every added file runs with normal "content window" privileges which
poses no additional security risk. The one exception is the privileged
src/components/aboutPortland.js XPCOM about url registration code, which has
some hacks for resetting window titles and detecting cookie settings (you have
to disable cookies to use the dark web, man!), but is otherwise minimal.

CREDITS
#######

This easter egg includes the following redistributable components, without which
it would not be possible:

1. BOOTSTRA.386. https://github.com/kristopolous/BOOTSTRA.386
2. ProFont. http://tobiasjung.name/profont/
3. elizabot.js. http://www.masswerk.at/elizabot/
