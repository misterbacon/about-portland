// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
 "..."
];

var elizaFinals = [
"French exit!"
];

var elizaQuits = [
"bye",
"goodbye",
"exit",
"quit"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need", "interested", "give", "gimme", "please", "have"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better", "great", "good", "exciting", "excited", "wonderful", "perfect"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

// reproducibility rules
//   - build
//   - exploit
//   - compromise
//   - owned
//   - pwned
// XXX: Random search result rules (nsa dox, etc)
["xnone", 0, [
 ["*", [
     "How do you like your juice?",
     "So, how much juice do you want?",
     "You look like you need a lot of juice.",
     "So, can I help you with something?",
     "Uh, do you have an appointment? Are you supposed to be here?",
     "Cut the crap, cowboy, how much juice do you want?",
     "You should move to Portland and retire!",
  ]]
]],
["alright", 0, [
  ["* expecting * juice *", [
     "Well, there are things that you want, apparently?",
  ]],
  ["*", [
     "No, it's not alright. Do you like juice?",
  ]]
]],
["sorry", 0, [
 ["* do * like * what *", [
     "Juice?"
  ]],
 ["*", [
     "Well, do you have an appointment? Are you supposed to be here?"
  ]]
]],
["apologize", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["location", 10, [
 ["* what's your location *", [
     // XXX: line break
     "2280 W Maple Ln<br>&nbsp;&nbsp;&nbsp;&nbsp;Beaverton, OR 97005"
  ]],
 ["*", [
   "goto located"
 ]]
]],
["bam", 0, [
 ["*", [
     "Well this is on the serious side, don't you think, Mr Mayor? I mean I don't know if you can play with toys like this."
  ]]
]],
["music", 10, [
 ["*", [
     "You know in Sarajevo we do everything to classical music...",
 ]]
]],
["bang", 0, [
 ["*", [
     "goto bam"
  ]]
]],
["fuse", 0, [
 ["*", [
     "Who's your target, Mr Mayor?"
 ]]
]],
["portland", 0, [
 ["*", [
     "Oh you're sick..."
 ]]
]],
["healthy", 0, [
 ["*", [
     // XXX: newline
     "Hahahaha!<br>&nbsp;&nbsp;&nbsp;&nbsp;Do you like your juice?"
  ]]
]],
["explode", 0, [
 ["*", [
     "You're really going to do it, aren't you?"
 ]]
]],
["kill", 0, [
 ["* you *", [
     "I'm behind seven proxies. You won't find me or my juice!",
     "goto explode"
  ]],
 ["*", [
     "goto explode"
 ]]
]],
["disappoint", 0, [
 ["*", [
     "Two boyscouts just digging into Christmas morning. I love it. I'll be your Santa Claus if you want and I'll be every goddamn elf you want...",
 ]]
]],
["dis", 0, [
 ["*dis*oint*", [
     "goto disappoint",
 ]]
]],
["located", 0, [
 ["*", [
     "I'm deep in the dark deep dark web.",
     "Uh, do you have an appointment? Are you supposed to be here?",
     "Why? Do you want to be my boyscout? I'll be your Santa Claus if you want and I'll be every goddamn elf you want.",
     "I'm behind seven proxies. You won't find me or my juice!"
  ]]
]],
["address", 0, [
 ["*", [
    "goto located"
  ]]
]],
["meet", 0, [
 ["*", [
    "goto located"
  ]]
]],
["at", 0, [
["* you *", [
    "goto located"
  ]]
]],
["where", 0, [
 ["* you *", [
    "goto located"
  ]]
]],
["introduce", 10, [
 ["* myself * properly *", [
    "Ahh..."
  ]]
]],
["spoke", 20, [
 ["* online *", [
    "I know who you are... You want toys..."
 ]]
]],
["chatted", 20, [
 ["*", [
    "goto spoke"
 ]],
]],
["if", 3, [
 ["* if *", [
     "Hot stuff. Do you wish that (2) ?",
     "What do you know about (2) ?",
     "What would you do if (2) ?",
     "What does this speculation lead to ?"
  ]]
]],
["perhaps", 0, [
 ["*", [
     "Can't you be more positive?",
     "You aren't sure?",
     "Don't you know?"
  ]]
]],
["name", 15, [
 ["*", [
     "I am not interested in names.",
     "I've told you before, I don't care about names -- please continue."
  ]]
]],
["bacon", 15, [
 ["*", [
     "goto name"
 ]]
]],
["nicely", 0, [
 ["* done *", [
     "...",
  ]]
]],
["good", 0, [
 ["* player *", [
     "Well, hello there.",
  ]]
]],
["hello", 0, [
 ["* there *", [
     "Can I help you with something?"
 ]],
 ["*", [
     "Well hello there",
     "Hi. Are you interested in any juice?"
  ]]
]],
["hi", 0, [
 ["*", [
     "goto hello"
 ]]
]],
["am", 0, [
 ["* am i *", [
     "Would you want to be (2) ? I could get behind that, and in front of it...",
     "Do you wish I would tell you you are (2) ? Sounds kinky...",
     "goto what"
  ]],
 ["* i am *", [
     "goto i"
  ]],
 ["*", [
     "Do you have enough juice?"
  ]]
]],
["are", 0, [
 ["* are you *", [
     "I am (2) in your fantasies. I'll be your Santa Claus and any goddamn elf you want.",
     "Any sufficiently advanced technology is indistinguishable from a rigged demo.",
     "goto what"
  ]],
 ["* you are *", [
     "Oh yeah, I am (2) in your fantasies. I'll be your Santa Claus and any goddamn elf you want."
  ]],
]],
["bot", 10, [
 ["*", [
     "Any sufficiently advanced technology is indistinguishable from a rigged demo.",
     "Call me IMPROVBOT_9000 and I'll be your Santa Claus and any goddamn elf you want."
 ]]
]],
["human", 10, [
 ["* are * you *", [
     "goto bot"
 ]]
]],
["alive", 10, [
 ["* are * you *", [
     "goto bot"
 ]]
]],
["person", 10, [
 ["* are * you *", [
     "goto bot"
 ]]
]],
["real", 10, [
 ["* are * you *", [
     "goto bot"
 ]]
]],
["robot", 10, [
 ["*", [
     "goto bot"
 ]]
]],
["ai", 10, [
 ["*", [
     "goto bot"
 ]]
]],
["moron", 10, [
 ["*", [
     "goto bot"
 ]]
]],
["idiot", 10, [
 ["*", [
     "goto bot"
 ]]
]],
["stupid", 10, [
 ["* you *", [
     "goto bot"
 ]]
]],
["your", 0, [
 ["* merchandise *", [
     // XXX: Line break
     "I have everything you need.<br>&nbsp;&nbsp;&nbsp;&nbsp;Do you like juice?"
  ]],
 ["* your *", [
     "Are you worried about someone else's (2) ?",
     "Really, my (2) ? Do you like my juice?",
     "What makes you think of my (2) ? Do you like my juice?",
     "Do you want my (2) ? How about some juice?",
     "How about some juice?"
  ]]
]],
["was", 2, [
 ["* was i *", [
     "What if you were (2) ?",
     "Do you think you were (2) ?",
     "Were you (2) ?",
     "goto what"
  ]],
 ["* i was *", [
     "Were you really?",
     "Why do you tell me you were (2) now?",
     "Perhaps I already know you were (2)."
  ]],
 ["* was you *", [
     "Would you like to believe I was (2) ?",
     "What suggests that I was (2) ?",
     "What do you think ?",
     "Perhaps I was (2).",
     "What if I had been (2) ?"
  ]]
]],
["@happy", 0, [
  ["*", [
     "I love it. I'll be your Santa Claus if you want and I'll be every goddamn elf you want...",
     "Oh I'll have a smiley face and so will you :)"
  ]]
]],
["cop", 10, [
 ["* are * you *", [
    "Well, do I look like I've juiced anyone today?",
    "I swear on the constitution that I am not a cop. Happy now?",
    "If you show me your little warrant canary I'll show you mine..."
 ]],
 ["*", [
    "What? Cops? Where?!",
    "If you want to know if I'm a cop all you have to do is ask me and I have to tell you. It's in the constitution.",
    "Watch your back. I smell bacon around here.",
    "Yeah well I bet my warrant canary is bigger than yours..."
 ]]
]],
["police", 10, [
 [ "*", [
    "goto cop"
 ]]
]],
["fed", 10, [
 [ "*", [
    "goto cop"
 ]]
]],
["pig", 10, [
 [ "*", [
    "goto cop"
 ]]
]],
["warrant", 10, [
 [ "* canary *", [
    "This is the deep dark deep web. You can't see my canary way down here!",
    "Well this is a little on the serious side...",
    "I don't know if you can play with toys like this..."
 ]],
 [ "*", [
    "goto cop"
 ]]
]],
["smiley", 0, [
   ["* face *", [
     "Oh I'll have a smiley face and so will you :)"
 ]],
 ["*", [
     "goto @happy"
  ]]
]],
["@desire", 10, [
 ["*", [
     "I love it. I'll be your Santa Claus if you want and I'll be every goddamn elf you want...",
     "Oh, then I'll have a smiley face and so will you :)",
     "Oh, there are things that you want apparently?",
     "Who's your target, Mr Mayor?",
     "Well this is a little on the serious side...",
     "I don't know if you can play with toys like this...",
     "I have everything you need. Do you like juice?",
     "Ohh... You want some juice?"
 ]]
]],
["do", 0, [
 ["* you *", [
     "goto @desire"
  ]],
]],
["i", 0, [
 ["* @desire *", [
     "goto @desire"
  ]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @cannot *", [
     "How do you know that you can't (3) ?",
     "Have you tried ?",
     "Perhaps you could (3) now.",
     "Do you really want to be able to (3) ?",
     "What if you could (3) ?"
  ]],
 ["* i don't *", [
     "Don't you really (2) ?",
     "Why don't you (2) ?",
     "Do you wish to be able to (2) ?",
     "Does that trouble you ?"
  ]],
 ["* i * you *", [
     "Perhaps in your fantasies we (2) each other.",
     "Do you wish to (2) me ?",
     "You seem to need to (2) me.",
     "Do you (2) with your hot boyscout buddy over there?"
  ]]
]],
["no", 0, [
 ["*", [
     "Why not? You should have some more juice!"
  ]]
]],
["what", 0, [
 ["*sure * what * is *", [
     "Well... grapefruit juice, er erange juice?",
  ]],
 ["*", [
     "Why do you ask?",
     "I might be into that...",
     "What answer would please you most?",
     "Have you asked anyone else?"
  ]]
]],
["who", 0, [
 ["who *", [
     "goto what"
  ]]
]],
["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["we", 0, [
 ["we *", [
     "goto i"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["juice", 0, [
 ["* fantastic * ", [
     "It's nice and sweet. It's a really good batch!"
 ]],
 ["*", [
     "It's nice and sweet. It's a really good batch!",
     "I have blueberry juice, apple juice, lemon juice...",
     "It's really good. You're going to love it."
 ]]
]],
["", 0, [
 ["* @desire *", [
     "goto @desire"
  ]],
 ["* @happy *", [
     "goto @happy"
  ]],
 ["* lol *", [
     "goto @happy"
  ]],
 ["* lul *", [
     "goto @happy"
  ]],
 ["* lulz *", [
     "goto @happy"
  ]],
 ["*lolol*", [
     "goto @happy"
  ]],
 ["* ha *", [
     "goto @happy"
  ]],
 ["*haha*", [
     "goto @happy"
  ]],
 ["* heh *", [
     "goto @happy"
  ]],
]],
["yes", 0, [
 ["*", [
     "It's the deep web, guys! Do you want something to drink?"
 ]],
]],
["fuck", 0, [
 ["*", [
     "goto explode"
 ]]
]],
["secure", 0, [
 ["*", [
     "This is deep dark deep web encrypted chat. Nobody can see us in here!",
     "This deep dark deep website is just about the deepest darkest deep place on the dark web. Of course it's secure!"
  ]]
]],
["encrypt", 10, [
 ["*", [
     "goto secure"
  ]]
]],
["encrypted", 10, [
 ["*", [
     "goto secure"
  ]]
]],
["safe", 10, [
 ["*", [
     "goto secure"
  ]]
]],
["backdoor", 10, [
 ["*", [
     "goto browser",
     "I wonder if our browsers are different than the official source code. Did anyone check the official binaries?",
     "Some say the price of freedom is eternal vigilance.",
     "There's nothing bad in my backdoor but I'll be your Santa Claus if you want and I'll be every goddamn elf you want.",
  ]]
]],
["browser", 10, [
 ["*", [
     "I checked my deep dark deep web browser by compiling it myself. I built the same browser as the official binaries. Did anyone check those?",
     "I wonder if our browsers are different than the official source code. Did anyone check the official binaries?",
     "Some say the price of freedom is eternal vigilance.",
     "The deep dark deep web is built using reproducible technology. It's science, bitch."
  ]]
]],
["reproducible", 10, [
 ["*", [
     "goto browser"
 ]]
]],
["tor", 10, [
 ["*", [
     "goto browser"
 ]]
]],
["build", 10, [
 ["*", [
     "goto browser"
 ]]
]],
["builds", 10, [
 ["*", [
     "goto browser"
 ]]
]],
["backdoored", 10, [
 ["*", [
     "goto backdoor"
  ]]
]],
["tbb", 10, [
 ["*", [
     "goto browser"
  ]]
]],
["web", 10, [
 ["* deep *", [
     "I'm deep in the dark deep dark web.",
     "The deep dark deep web is the deepest darkest part of the deep web.",
     "The deep dark deep web has everything!",
 ]],
 ["* dark *", [
     "The dark deep dark web is the darkest deepest part of the dark web.",
     "I'm deep in the dark deep dark web.",
     "The deep dark deep web has everything!",
 ]],
 ["* dark * deep *", [
     "I don't know if you can play with toys like this...",
 ]],
 ["* deep * dark *", [
     "I don't know if you can play with toys like this...",
 ]],
 ["*", [
     "Everyone knows that the deep dark deep web has so much more stuff than the regular web.",
 ]],
]],
["website", 10, [
 ["* your *", [
    "goto located"
 ]],
 ["*", [
    "goto web"
 ]]
]],
["fireworks", 10, [
 ["* @desire *", [
    "Shit, we got fireworks. This is the deep dark deep web. We got guns, we got drugs, we got hookers. We got... you name it, we got it!"
 ]]
]],
["url", 10, [
 ["*", [
    "goto website"
 ]]
]],
["why", 0, [
 ["* why don't you *", [
     "Do you believe I don't (2) ?",
     "Should you (2) yourself ?",
     "You want me to (2) ?",
     "goto what"
  ]],
 ["*", [
     "goto what"
  ]]
]]
];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof
