const player = {
  weight: 0,
  height: 0,
  strength: 0
}
var count = 0;

function getstats() {
  let weight = document.getElementById("weight-slider").value;
  let height = document.getElementById("height-slider").value;
  let strength = document.getElementById("strength-slider").value;
  player.weight = weight
  player.height = height
  player.strength = strength

  document.getElementById('weight_stats').innerHTML = str = JSON.stringify(player.weight);
  document.getElementById('height_stats').innerHTML = str = JSON.stringify(player.height);
  document.getElementById('strength_stats').innerHTML = str = JSON.stringify(player.strength);

  count = 1;

}
x = 0
function setCookie(cookieName, cookieValue, nDays) {
  x = x + 1
  if (x === 1) {
    return;
  }
  var today = new Date();
  var expire = new Date();

  if (!nDays)
    nDays = 1;

  expire.setTime(today.getTime() + 3600000 * 24 * nDays);
  document.cookie = cookieName + "=" + cookieValue + ";expires=" + expire.toGMTString();
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}



function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomize_stats() {
  let random_weight = getRandomNumber(30, 350);
  let random_height = getRandomNumber(45, 90);
  let random_strength = getRandomNumber(0, 100);

  player.weight = random_weight
  player.height = random_height
  player.strength = random_strength

  document.getElementById('weight-slider').value = str = JSON.stringify(player.weight);
  document.getElementById('height-slider').value = str = JSON.stringify(player.height);
  document.getElementById('strength-slider').value = str = JSON.stringify(player.strength);

  count = 2;
}
function submit_stats() {

}
function submit() {
  console.log(player.strength)
  if (count == 0) {
    document.getElementById('submit_warning').innerHTML = str = 'Oh snap! Please get stats first.';
  }
  if (count == 1) {
    getstats()
    setCookie('strength', player.strength, 365)
    setCookie('height', player.height, 365)
    setCookie('weight', player.weight, 365)

    window.location.href = 'game_prep.html';
  }
  if (count == 2) {
    setCookie('strength', player.strength, 365)
    setCookie('height', player.height, 365)
    setCookie('weight', player.weight, 365)

    window.location.href = 'game_prep.html';
  }
  else {
    setCookie('strength', player.strength, 365)
    setCookie('height', player.height, 365)
    setCookie('weight', player.weight, 365)

  }
}
function getCookieStats() {
  player.strength = getCookie('strength')
  player.weight = getCookie('weight')
  player.height = getCookie('height')
  if (player.weight == 30 && player.height == 45 && player.strength == 0) {

    randomize_stats()
  }
  if (player.weight == "" && player.height == "" && player.strength == "") {
    randomize_stats()
  }
}

function display_stats() {
  document.getElementById('allstats').innerHTML = str = JSON.stringify(player);
}

// start of game.html

var currentStep = 0;
function parentfunction() {
  updateGameText(steps[currentStep].text);
  updateGameChoices(steps[currentStep].choices[0], steps[currentStep].choices[1], steps[currentStep].choices[2]);
}

function updateGameText(text) {
  document.getElementById("game-text").innerHTML = text;
}

function updateGameChoices(choice1, choice2, choice3) {
  document.getElementById("choice1").value = choice1;
  document.getElementById("choice2").value = choice2;
  document.getElementById("choice3").value = choice3;
}

var buttonLimit = 0;
var answersWrong = 0;
var buttonpressed = false;
function button1() {
  if (buttonLimit == 0 && currentStep == 0 || buttonLimit == 1 && currentStep == 1 || buttonLimit == 2 && currentStep == 2 || buttonLimit == 3 && currentStep == 3 || buttonLimit == 4 && currentStep == 4 || buttonLimit == 5 && currentStep == 5 || buttonLimit == 6 && currentStep == 6 || buttonLimit == 7 && currentStep == 7 || buttonLimit == 8 && currentStep == 8) {
    document.getElementById("outcome-header").innerHTML = "Your Actions Outcome";
    updateGameOutcome(steps[currentStep].outcomes[0]);
    buttonpressed = true;
    if (currentStep == 3) {
      answersWrong++;
    }
  }
  else {
    document.getElementById("button-limit-error").innerHTML = str = "You can only select one option";
  }
}

function button2() {
  if (buttonLimit == 0 && currentStep == 0 || buttonLimit == 1 && currentStep == 1 || buttonLimit == 2 && currentStep == 2 || buttonLimit == 3 && currentStep == 3 || buttonLimit == 4 && currentStep == 4 || buttonLimit == 5 && currentStep == 5 || buttonLimit == 6 && currentStep == 6 || buttonLimit == 7 && currentStep == 7 || buttonLimit == 8 && currentStep == 8) {
    document.getElementById("outcome-header").innerHTML = "Your Actions Outcome";
    updateGameOutcome(steps[currentStep].outcomes[1]);
    buttonpressed = true;
    if (currentStep == 2 || currentStep == 5) {
      answersWrong++;
    }
  }
  else {
    console.log(buttonLimit);
    console.log(currentStep);
    document.getElementById("button-limit-error").innerHTML = str = "You can only select one option";
  }
}

function button3() {
  if (buttonLimit == 0 && currentStep == 0 || buttonLimit == 1 && currentStep == 1 || buttonLimit == 2 && currentStep == 2 || buttonLimit == 3 && currentStep == 3 || buttonLimit == 4 && currentStep == 4 || buttonLimit == 5 && currentStep == 5 || buttonLimit == 6 && currentStep == 6 || buttonLimit == 7 && currentStep == 7 || buttonLimit == 8 && currentStep == 8) {
    document.getElementById("outcome-header").innerHTML = "Your Actions Outcome";
    updateGameOutcome(steps[currentStep].outcomes[2]);
    buttonpressed = true
    if (currentStep == 0 || currentStep == 1 || currentStep == 4) {
      answersWrong++;
    }
  }

  else {
    document.getElementById("button-limit-error").innerHTML = str = "You can only select one option";
  }
}

function updateGameOutcome(outcome) {
  buttonLimit++;
  document.getElementById("outcome-text").innerHTML = outcome;
}

function continueButton() {

  if (buttonpressed === true) {
    currentStep++;
    if (currentStep == 9) {
      //   setCookie('score',answersWrong,365)
      //   score = getCookie('score')
      //   window.location.href = 'game_end.html';
      //   console.log(score)

      //   document.getElementById("final-score-end").innerHTML = `You got ${score} out of 6 questions.`;
      //   console.log("Nice Job!");
      window.location.href = 'game_end.html';
      setCookie('score', answersWrong, 365)



    }

    if (currentStep == 8) {
      document.getElementById("continue-button").value = "Submit";
      document.getElementById("button-limit-error").innerHTML = str = "";
      document.getElementById("no-selection-error").innerHTML = str = "";

      parentfunction();
      document.getElementById("outcome-header").innerHTML = "";
      document.getElementById("outcome-text").innerHTML = "";
      buttonpressed = false;
    }
    else {
      document.getElementById("button-limit-error").innerHTML = str = "";
      document.getElementById("no-selection-error").innerHTML = str = "";

      parentfunction();
      document.getElementById("outcome-header").innerHTML = "";
      document.getElementById("outcome-text").innerHTML = "";
      buttonpressed = false;
    }
  }
  else {
    document.getElementById("no-selection-error").innerHTML = str = "Please select an option before continuing ";
  }
}
function endhtml() {
  var score = getCookie('score')
  console.log(score)
  document.getElementById("final-score-end").innerHTML = `You got ${score} out of 6 questions.`;
}