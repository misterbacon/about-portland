
function checkNetworkPreferences() {
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
  var speed = 5; // How fast should it type?
  var $input = document.getElementById(element);

  function writeLetter () {
    var currentText = $input.value;
    var currentLetter = text.charAt(currentCount);
    currentCount++;
    $input.value = currentText + currentLetter;
    if (currentCount === charCount) {
      var variance = Math.random() + 1;
      clearInterval(timerId);
      timerId = setInterval(writeLetter, speed * variance);
    }

    if (currentCount === text.length) {
      populateSearchResults();
    };

  };

  var timerId = setInterval(writeLetter, speed);
};

function populateSearchResults () {
  var query = document.getElementById('deep-web-search-input').value;
  var currentWarez = [];
  var fireyThings = [
    "AA BATTERIES (EXPLODY)",
    "BATTERIES (NON-EXPLODY)",
    "BEAR FIREARMS",
    "BOMB-MAKING KITS",
    "CROSSFIRE MK1 (UKRAINE)",
    "DOGECOIN FIRESALE",
    "DRUGS (COMBUSTIBLE)",
    "EXPLOSIVES (GENERAL)",
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
    $('#explosives').click(function () { $('#firepower').modal('show') });
  }

  if (query.toLowerCase().match("fire")) {
    window.console.log('Populating search results with firey things...');
    fireyThings = fireyThings.forEach(addToWarez);
  } else {
    window.console.log('Populating search results with sketchy things having to do with "'
                       + query + '"...');
    sketchThings = sketchThings.forEach(addToWarez);
  };

  replaceWarez(currentWarez);
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

  typewriter('deep-web-search-input', '"deep web fireworks"');
};

