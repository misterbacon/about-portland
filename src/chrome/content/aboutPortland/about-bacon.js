
var eliza = new ElizaBot();
var elizaLines = new Array();

var displayCols = 60;
var displayRows = 20;

var mayorPrefix = '<p class="chat chat-mayor">&gt;&gt;MAYOR_9000<br>&nbsp;&nbsp;&nbsp;&nbsp;<i>';
var baconPrefix = '<p class="chat chat-bacon">&gt;&gt;MR_BACON<br>&nbsp;&nbsp;&nbsp;&nbsp;<i>';

function elizaReset() {
	eliza.reset();
	elizaLines.length = 0;

    var userinput = "";
    var chatdisplay = document.getElementById('chatdisplay');

    // XXX: Scrolling?? fade??
    document.addEventListener("keydown", function(e) {
        e.preventDefault();
        // Enter is pressed
        if (e.key == "Backspace") {
           userinput = userinput.substring(0, userinput.length-1);
  	       chatdisplay.innerHTML = elizaLines.join('') + mayorPrefix + userinput + "</i></p>";
        } else if (e.key == "Enter") {
           //window.alert(userinput);
           elizaStep(chatdisplay, userinput);
           userinput = "";
        } else if (e.key.length == 1) {
          if (userinput == "") {
	        chatdisplay.innerHTML = elizaLines.join('') + mayorPrefix + e.key + "</i></p>";
            userinput += e.key;
          } else {
            userinput += e.key;
  	        chatdisplay.innerHTML = elizaLines.join('') + mayorPrefix + userinput + "</i></p>";
          }
        }
    }, false);
}

function elizaStep(display, input) {
	if (eliza.quit) {
		if (confirm("This session is over.\nStart over?")) elizaReset();
		return;
	}
	else if (input != '') {
		var rpl = baconPrefix + eliza.transform(input) + "</i></p>";
        elizaLines.push(mayorPrefix+input+"</i></p>");
		elizaLines.push(rpl);
		//elizaLines.push(usr);
		// display nicely
		// (fit to textarea with last line free - reserved for extra line
		// caused by word wrap)
        /*
		var temp  = new Array();
		var l = 0;
		for (var i=elizaLines.length-1; i>=0; i--) {
			l += 1 + Math.floor(elizaLines[i].length/displayCols);
			if (l >= displayRows) break;
			else temp.push(elizaLines[i]);
		}
		elizaLines = temp.reverse();
        */
        setTimeout(function () {
   	      display.innerHTML = elizaLines.join('');
          display.focus();
        }, Math.random()*1000+250);
	}
	else if (elizaLines.length == 0) {
		// no input and no saved lines -> output initial
		var initial = baconPrefix + eliza.getInitial() + "</i></p>";
		elizaLines.push(initial);
		display.innerHTML = initial;
	}
    //display.focus();
}
