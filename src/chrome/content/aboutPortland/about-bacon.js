//
// Copyright (c) 2015 The Tor Project, Inc.
// Copyright (c) 2015 Isis Agora Lovecruft
// Copyright (c) 2015 Mister Bacon
//

var eliza = new ElizaBot();

var displayCols = 60;
var displayRows = 20;

var cursor = '<blink>_</blink>';
var spokePrefix = '&nbsp;&nbsp;&nbsp;&nbsp;<i>';
var mayorPrefix = '<p class="chat chat-mayor">&gt;&gt;MAYOR_9000<br>' + spokePrefix;
var baconPrefix = '<p class="chat chat-bacon">&gt;&gt;MR_BACON<br>' + spokePrefix;
var spokeSuffix = '</i></p>';
var fakeHistory = mayorPrefix + cursor + spokeSuffix;

var control = ["Control", "OS", "Alt", "AltGraph", "Compose", "Tab", "Esc",
               "CapsLock", "Pause", "PrintScreen"];

function isControlChar(key) {
  return (control.indexOf(key) > -1);
}

function autoscroll() {
  setTimeout(
    function(){
      $('#chat-scroll').animate(
        { scrollTop: $('#chat-scroll')[0].scrollHeight - $('#chat-scroll').height()},
        { duration: 600 }
      );
      console.log("Keep scrollin', scrollin', scrollin', though the streams " +
                  "are swollen, keep them divsies rollin', rawhide!");
    }, 1);
}

function resizeChat() {
  $('#chat-scroll').css("height",
    function (index, value) {
      // WARNING: If you change the 'bottom' attribute in the CSS for the
      //          '#chat-scroll' element to some value that isn't pixel based,
      //          this function will totally break.
      var thisBottom = parseInt($(this).css('bottom').replace("px", ""));

      var goodMeasure = function () {
        var factor;
        var total = $(window).height();
        if (1 <= total && total <= 480) {
          factor = 0.20;
        } else if (480 <= total && total <= 640) {
          factor = 0.15;
        } else if (640 <= total && total <= 980) {
          factor = 0.10;
        } else {
          factor = 0.05;
        }
        return total * factor;
      }();

      var newHeight = $(window).height() -
        $('#top').height() -
        $('#cthunk').height() -
        $('#encrypted-correspondence').outerHeight() -
        $('#chat-initiated').outerHeight() -
        thisBottom - goodMeasure;  // And an additional percentage of the viewport,
                                   // just for good measure.

      // And then round down to the nearest 40 pixels:
      var rounded = Math.floor(newHeight / 40.0) * 40;

      console.log("Updating height of #chat-scroll container... old height: " +
                  value + " new height: " +
                  // $(window).height() + "-" +
                  // $('#top').height() + "-" +
                  // $('#cthunk1').height() + "-" +
                  // $('#encrypted-correspondence').outerHeight() + "-" +
                  // $('#chat-initiated').outerHeight() + "-" +
                  // thisBottom + "-" + goodMeasure + "=" +
                  newHeight + " rounded: " + rounded);

      console.log("Resizing chat to " + rounded + " pixels in height...");
      return rounded;
    });
}

function initialiseResizeHandlers() {
  resizeChat();

  $(window).resize(
    function() {
      console.log('AH! OUR WINDOW IS BEING RESIZED! NOOOOOOO!');
      if (this.resizeTO) {
        clearTimeout(this.resizeTO);
      }
      this.resizeTO = setTimeout(
        function() {
          $(this).trigger('resizeEnd');
        }, 500);
    });

  $(window).bind('resizeEnd',
    function() {
      resizeChat();
    });
}

function initialiseChatHistory() {
  console.log("Initialising datastore for ENCRYPTED CORRESPONDENCE history");
  $('#chat-history').data('history', {'lines': []});
  $('#chat-history').append(fakeHistory);
}

function publishChatHistory() {
  var line = retrieveLastLineFromChatHistory();
  $('#chat-history').append(line);
  autoscroll();
}

function storeLineInChatHistory(line) {
  $('#chat-history').data('history').lines.push(line);
  // Remove chat history from more than 12 lines ago:
  if ($('#chat-history').data('history').lines.length > 12) {
    $('#chat-history').data('history').lines.shift();
  }
}

function storeMayorLineInChatHistory(line) {
  var spoken = mayorPrefix + line + spokeSuffix;
  setTimeout(
    function() {
      storeLineInChatHistory(spoken);
      publishChatHistory();
    }, 1);
}

function storeBaconLineInChatHistory(line) {
  var spoken = baconPrefix + line + spokeSuffix;
  setTimeout(
    function() {
      var audio = new Audio("message-received.wav");
      audio.play();
      storeLineInChatHistory(spoken);
      publishChatHistory();
    }, Math.random() * 1000 + 1350);
}

function retrieveLastLineFromChatHistory() {
  var line = $('#chat-history').data('history').lines.slice().pop();
  console.log("Got last line from chat history: " + line);
  return line;
}

function hasHistory() {
  var past = $('#chat-history').data('history').lines.slice().join('');
  return (past.length > 0);
}

function hasNoHistory() {
  var past = $('#chat-history').data('history').lines.slice().join('');
  return (past.length == 0);
}

function eraseFakeHistory() {
  document.getElementById('chat-history').innerHTML = "";
}

function elizaReset() {
  initialiseResizeHandlers();
  initialiseChatHistory();
  eliza.reset();

  var userinput = "";
  var chatdisplay = document.getElementById('chat-display');

  $(document).keydown(
    function(e) {
      if (isControlChar(e.key)) {
        return;
      } else {
        e.preventDefault();
      }
      if (userinput == "") {
        autoscroll();
      }
      if (e.key == "Enter") {
        elizaStep(chatdisplay, userinput);
        userinput = "";
        return;
      }

      function updateChatDisplay (input) {
        if (hasNoHistory()) {
          eraseFakeHistory();
        }
        chatdisplay.innerHTML = mayorPrefix + input + cursor + spokeSuffix;
      }

      if (e.key == "Backspace") {
        userinput = userinput.substring(0, userinput.length - 1);
      } else if (e.key == "DeadAcute") {
        userinput += "'";
      } else if (e.key == "DeadUmlaut") {
        userinput += '"';
      } else if (e.key.length == 1) {
        userinput += e.key;
      }
      updateChatDisplay(userinput);
    });
}

function elizaStep(display, input) {
  if (eliza.quit) {
	if (confirm("This session is over.\nStart over?")) {
      elizaReset();
	  return;
	}
  }

  if (input != '') {
    storeMayorLineInChatHistory(input);
    var reply = eliza.transform(input);
    storeBaconLineInChatHistory(reply);

    setTimeout(
      function() {
        display.innerHTML = "";
      }, 1);

  }	else if (hasNoHistory()) {
	var reply = eliza.getInitial();
    storeBaconLineInChatHistory(reply);
	display.innerHTML = initial;
  }
}
