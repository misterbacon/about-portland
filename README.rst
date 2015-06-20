About:portland Easter Egg
#########################

This version of Torbutton contains an easter egg designed to test the Tor
Browser reproducible build system. A fire drill, so to speak.

This repository contains the complete source code of the easter egg. This
repository was used to build the special torbutton@torproject.org.xpi included
in the 5.0 alpha series of the Tor Browser.

As can be seen in the commit history, the only change in this easter egg is
to create an about:portland URI, in reference to the 4th of July Portlandia
episode where the Mayor of Portland "saves" the 4th of July by using "TOR
BROWSER" to purchase fireworks on the "deep web".
https://youtu.be/D7NVF1jrsSs?t=540

Seemed like a fitting way to conduct a fire drill.

What the hell? Why did you do this?
###################################

We did this to demonstrate that it is important for software developers to
verify the integrity of the software that they produce and distribute.  Both
governments and organized crime have begun targeting software developers in
order to infect their users.
https://firstlook.org/theintercept/2015/05/21/nsa-five-eyes-google-samsung-app-stores-spyware/
.. XXX better URL? Technically this was a MITM vector

The Tor Project has defends against these attacks by ensuring that anyone can
exactly recreate the software that it distributes from the provided source
code. However, this defense only works if people outside of the Tor Project
actually bother to rebuild the source code to ensure that the binaries that
they produce match the binaries distributed by the Tor Project.

This easter egg was created to determine if others were actually reproducing
the Tor Project binaries, and if not, to give them some motivation to do so in
the future.

Did you own the Tor Browser Team?
#################################

This demonstration did not involve any compromise of the Tor Project or their
build infrastructure. The Tor Browser team agreed to include this version of
Torbutton in their alpha releases until such time as someone attempted to
reproduce the build and noticed.

This effort was a collaboration with the Tor Browser Team. They reviewed this
easter egg and determined that it was safe to include in the alpha series.

Should this easter egg go unnoticed in the alpha series, the Tor Browser team
has agreed to include it in the subsequent stable series as well.
