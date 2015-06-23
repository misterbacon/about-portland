
function checkNetworkPreferences() {
  var audio = new Audio("check-network-preferences.wav");
  audio.play();
  window.alert("HTTP 404 NOT FOUND\n\nCheck Network Preferences");
}

function autoOpenAlert(selector, openDelay) {
  var alert = $(selector).alert();
  window.setTimeout(
    function() {
      alert.alert();
    }, openDelay);
};

function autoCloseAlert(selector, closeDelay) {
  var alert = $(selector).alert();
  window.setTimeout(
    function() {
      alert.alert('close');
    }, closeDelay);
};

function typewriter (element, text) {
  var charCount = text.length;
  var currentCount = 0;
  var speed = 80; // How fast should it type?
  var $input = document.getElementById(element);

  function writeLetter () {
    var currentText = $input.value;
    var currentLetter = text.charAt(currentCount);
    currentCount++;
    $input.value = currentText + currentLetter;
    if (currentCount === charCount) {
      var variance = Math.random() + 1;
      var varied = speed * variance;
      clearInterval(timerId);
      timerId = setInterval(writeLetter, varied);
    }

    if (currentCount === text.length) {
      populateSearchResults();
    };
  };

  var timerId = setInterval(writeLetter, speed);
};

// CARGO CULT FTW!
function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, min = i - size, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

function populateSearchResults () {
  var query = document.getElementById('deep-web-search-input').value;
  var currentWarez = [
    "EXPLOSIVES (GENERAL)"
  ];
  var fireyThings = [
    "AA BATTERIES (EXPLODY)",
    "BATTERIES (NON-EXPLODY)",
    "BEAR FIREARMS",
    "BOMB-MAKING KITS",
    "CROSSFIRE MK1 (UKRAINE)",
    "DOGECOIN FIRESALE",
    "DRUGS (COMBUSTIBLE)",
    "FIREANT SOURCECODE (NSA LEAKED)",
    "HANDMADE ALPACA SOCKS (CHILÉ)",
    "INCENSER NSA/GCHQ DATATAP ACCESS",
    "LAUNDRY SERVICES (HOT!!)",
    "L.S.D. FIREWATER (HOMEOPATHIC)",
    "MARIJUANA, INFLAMMABLE",
    "NSA DOCUMENT FIRESALE",
    "TINDER ACCOUNTS (SPICY!!)",
    "UBER ACCOUNTS (HOT!!)"
  ];
  var sketchThings = fireyThings.concat([
    "BERETTA MACHINE GUNS",
    "COLT DELTA SERIES",
    "DESTROYER CARBINE",
    "ELF-2 SUBMACHINE GUN",
    "FACESITTING PR0N (UK ONLY)",
    "HACKING TEAM EXPLOIT COLLECTION (FULL DUMP)",
    "LAUNDERED BITCOINS",
    "LIBERATOR SCHEMATICS",
    "NUTCRACKER SUITE (SARAJEVO)",
    "PDF EXPLOITS",
    "SELINUX BACKDOOR SOURCECODE (NSA LEAKED)",
  ]);

  function addToWarez (element, index, array) {
    currentWarez.push(element);
    currentWarez.sort();
  }
    
  function replaceWarez (elements) {
    var newWarez = '<ul id="warez" class="shouting collapsible">';

    for (i=0, total=elements.length; i < total; i++) {
      element = elements[i];
      if (element.indexOf("EXPLOSIVES (GENERAL)") >= 0) {
        newWarez += '<li><a id="explosives" type="button" href="#firepower">';
      } else {
        newWarez += '<li><a class="404" onclick="checkNetworkPreferences()">'; 
      };
      newWarez += element + '</li>';
    };
    newWarez += '</ul>';

    $('#warez').replaceWith(newWarez);
    $('.explosives').click(function () { $('#firepower').modal('show') });
  }

  if (query.toLowerCase().match("fire")) {
    window.console.log('Populating search results with firey things...');
    fireyThings.forEach(addToWarez);
  } else {
    window.console.log('Populating search results with sketchy things having to do with "'
                       + query + '"...');
    var results = getRandomSubarray(sketchThings, 2+Math.random()*15);
    results.forEach(addToWarez);
  };

  replaceWarez(currentWarez);
};

function replaceWithEncryptedChat () {
  $('#middle').hide();
  $('#chat-container').show();
  elizaReset();
};


// Uncomment to display the "WANT FIREPOWER THAT WILL MAKE TOTAL DESTROY?"
// modal at/for a given time.
//
// window.setTimeout(function () { $('#firepower').modal('show'); }, 1500);
// window.setTimeout(function () { $('#firepower').modal('hide'); }, 6000);

window.onload = function () {
  $('#cursor386').hide();

  $('#deep-web-search-input').keypress(
    function (event) {
      if (event.key == "Enter") {
        event.preventDefault();
        populateSearchResults();
      }
    });

  typewriter('deep-web-search-input', '“deep web fireworks”');

  // FIXME: The chat hash isn't working.
  if (window.location.hash === '#chat') {
    replaceWithEncryptedChat();
  };

  $('#enterchatbtn').click(
    function () {
      replaceWithEncryptedChat();
    }
  );
};
