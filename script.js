var facts = ['"Genocide is the responsibility of the entire world." - Ann Clwyd',
  '"The only thing necessary for the triumph of evil is for good men to do nothing." - Edmund Burke',
  '"Genocide begins, however improbably, in the conviction that classes of biological distinction indisputably sanction social and political discrimination." - Andre Breton',
  '"Genocide is the antithesis of democracy." - Michael Ignatieff',
  '"When you are innocent, the whole world is full of inquiry."- Elie Wiesel',
  '"I swore never to be silent whenever and wherever human beings endure suffering and humiliation." - Elie Wiesel',
  '"The Holocaust illustrates the consequences of prejudice, racism, and stereotyping on a society. It forces us to examine the responsibilities of citizenship and confront the powerful ramifications of indifference and inaction." - Tim Holden',
  '"The victims of genocide have a unique right: a right to remember." - Samantha Power',
  '"Genocide is more than killing people." - Aun San Suu Kyi',
  '"We cannot let the Holocaust be reduced to a mere mention of genocide or an exhibition of horror and death camps." - Simon Wiesenthal',
  '"Remembering is a noble and necessary act. The call of memory, the call to memory, reaches us from the very dawn of history." - Elie Wiesel',
  '"Denial of genocide is the final stage of genocide." - Gregory H. Stanton',
  '"Genocide is the word, is the name of the greatest crime of all." - Raphael Lemkin',
  '"There are no words to express the abyss between isolation and having one ally." - Elie Wiesel',
  '"The Holocaust was the most evil crime ever committed." - Simon Wiesenthal', '"Genocide is not just a murderous madness; it is, more deeply, a politics that promises a utopia beyond politics." - Michael Ignatieff',
  '"Genocide is a demon." - Roméo Dallaire',
  '"It is important to remember that genocide is not a single event, but a process that evolves over time." - Romeo Dallaire',
  '"Genocide is the systematic extermination of one group of people by another group of people because of differences." - Lorna Jane Cook',
  '"Genocide is not just a crime against humanity; it is an attack on our common humanity." - Ban Ki-moon']
var randomFact = randomlist(facts);

function generateFacts() {
  var randomFact = randomlist(facts);
  document.getElementById('here').innerHTML = randomFact;
}
function randomlist(list) {
  var x = Math.floor(Math.random() * list.length);
  return list[x]
}

fetch('https://bootswatch.com/api/5.json')
  .then(response => response.json())
  .then(data => load(data));


function load(data) {

  const themes = data.themes;
  const select = document.querySelector('select');
  themes.forEach((value, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = value.name;
    select.append(option);
  });
  let selectedCookie = getCookie('theme')
  if (selectedCookie === "") {
    selectedCookie = 16
  }
  select.value = selectedCookie

  select.addEventListener('change', (e) => {
    const theme = themes[e.target.value];
    document.querySelector('#theme').setAttribute('href', theme.css);
    document.querySelector('.alert h1').textContent = theme.name;
  });

  const changeEvent = new Event('change');
  select.dispatchEvent(changeEvent);
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
// game

const player = {
  weight: 0,
  height: 0,
  strength: 0
}
function getstats() {
  let weight = document.getElementById("weight-slider").value;
  // document.getElementById("weight-output").innerHTML = weight;
  player.weight = weight
  document.getElementById('stats').innerHTML = str = JSON.stringify(player);
}
