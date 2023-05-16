// base stats
const player = {
  weight: 0,
  height: 0,
  strength: 0
}

// show player stats live on slider
// var weight_output = document.getElementById("weight_span");
// var height_output = document.getElementById("height_span");
// var strength_output = document.getElementById("strength_span");

// var weight_slider = document.getElementById("weight-slider").oninput = function() {
//   var weight_value = (this.weight_value-this.) 
// }
// var height_slider = document.getElementById("height-slider")
// var strength_slider = document.getElementById("strength-slider")

var count = 0;

function getstats() {
  // get stats
  let weight = document.getElementById("weight-slider").value;
  let height = document.getElementById("height-slider").value;
  let strength = document.getElementById("strength-slider").value;
  player.weight = weight
  player.height = height
  player.strength = strength
  // display stats
  // document.getElementById('allstats').innerHTML = str = JSON.stringify(player);
  document.getElementById('weight_stats').innerHTML = str = JSON.stringify(player.weight);
  document.getElementById('height_stats').innerHTML = str = JSON.stringify(player.height);
  document.getElementById('strength_stats').innerHTML = str = JSON.stringify(player.strength);

  count = 1;

}






//Cookies
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



// function to get random num
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomize_stats() {
  // generate random stats
  let random_weight = getRandomNumber(30, 350);
  let random_height = getRandomNumber(45, 90);
  let random_strength = getRandomNumber(0, 100);

  player.weight = random_weight
  player.height = random_height
  player.strength = random_strength

  document.getElementById('weight_stats').innerHTML = str = JSON.stringify(player.weight);
  document.getElementById('weight-slider').value = str = JSON.stringify(player.weight);
  document.getElementById('height_stats').innerHTML = str = JSON.stringify(player.height);
  document.getElementById('height-slider').value = str = JSON.stringify(player.height);
  document.getElementById('strength_stats').innerHTML = str = JSON.stringify(player.strength);
  document.getElementById('strength-slider').value = str = JSON.stringify(player.strength);


  count = 2;
}

function submit_stats() {

}

// submit stats
function submit() {
  console.log(player.strength)
  if (count == 0) {
    document.getElementById('submit_warning').innerHTML = str = 'Oh Snap! Please get stats first.';
  }
  if (count == 1) {
    // get final stats
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
    
    // console.log("Fate has decided");
  }
}
// end of game setup
// game prep start

function getCookieStats(){
  player.strength = getCookie('strength')
  player.weight = getCookie('weight')
  player.height = getCookie('height')
}

function display_stats() {
    document.getElementById('allstats').innerHTML = str = JSON.stringify(player);
}

/* Give the user a cookie to track or something to track weight, height, and strength data */


// document.addEventListener('DOMContentLoaded', function () {
//     const startButton = document.getElementById('start-button');
//     const gameText = document.getElementById('game-text');
//     let currentStep = 0;

const steps = [
  {
    text: "You witness an incident where an individual is being discriminated against because of their ethnicity. What do you do?",
    choices: [
      "Intervene and try to defuse the situation peacefully.",
      "Report the incident to the authorities.",
      "Choose to observe silently without taking action."
    ],
    outcomes: [
      "Your intervention helps deescalate tensions, fostering a sense of unity. Your actions contribute to preventing further discrimination and violence.",
      "The authorities take action and investigate the situation, holding those responsible accountable. By raising awareness, you play a role in preventing future conflicts.",
      "Although it may seem safer in the short term, your silence allows discrimination to continue. Remember, your voice can make a difference in preventing violence and injustice."
    ]
  },
  {
    text: "As you travel further, you encounter a community in need of support. What do you do?",
    choices: [
      "Organize a humanitarian effort to provide immediate aid.",
      "Advocate for long-term solutions to address their needs.",
      "Ignore their plight and continue your journey."
    ],
    outcomes: [
      "You organize a humanitarian effort, gathering supplies and distributing them to the community. Your actions help alleviate their immediate suffering and provide hope for a better future. Your compassion and support make a tangible impact.",
      "You raise awareness about the community's needs and advocate for long-term solutions. By engaging with policymakers and organizations, you help address the root causes of their hardships. Your dedication contributes to creating sustainable change.",
      "By ignoring their plight, you continue your journey without making a difference. Remember, every action counts when it comes to preventing suffering and promoting unity."
    ]
  }
];

var currentSteps = 0;
function startButton() {
  // console.log(steps[1]);
  // console.log(steps[0].choices[1]);
  console.log('before start');
  window.location.href = 'game.html';
  console.log(steps[currentStep].text);
  console.log(steps[currentStep].choices[0], steps[currentStep].choices[1], steps[currentStep].choices[2]);
  console.log("start");
  condole.log('after start');
  updateGameText(steps[currentStep].text);
  console.log("ran first one");
  updateGameChoices(steps[currentStep].choices[0], steps[currentStep].choices[1], steps[currentStep].choices[2]);
  console.log("done");
}

function updateGameText(text) {
  console.log(text);
  document.getElementById("game-text").innerHTML = str = JSON.stringify(text);
}

function updateGameChoices(choice1, choice2, choice3) {
  console.log(choice1);
  console.log(choice2);
  console.log(choice3);
  document.getElementById("choice1").innerHTML = str = JSON.stringify(choice1);
  document.getElementById("choice2").innerHTML = str = JSON.stringify(choice2);
  document.getElementById("choice3").innerHTML = str = JSON.stringify(choice3);
}