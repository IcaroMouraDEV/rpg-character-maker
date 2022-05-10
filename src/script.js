// Dark Mode
const theme = document.getElementById('theme');
const body = document.getElementsByTagName('body');

theme.addEventListener('click', () => {
  const themeNow = window.getComputedStyle(theme).getPropertyValue('background-color');

  if (themeNow === 'rgb(26, 30, 33)') {
    body[0].style.backgroundColor = '#262626';
    body[0].style.color = 'whitesmoke';

    theme.className = 'btn btn-light light'
    theme.innerHTML = 'White Mode'
  } else {
    body[0].style.backgroundColor = 'whitesmoke';
    body[0].style.color = '#262626';

    theme.className = 'btn btn-dark dark'
    theme.innerHTML = 'Dark Mode'
  }
});


// Eventos para Mostrar e não mostrar os Forms
const shownRace = document.getElementById("shown-race");
const shownTitle = document.getElementById("shown-title");
const shownPerson = document.getElementById("shown-person");
const occult = document.getElementById("occult");
const form = document.querySelectorAll(".shown");
let active;

shownRace.addEventListener("click", () => {
  active = document.querySelectorAll(".active");

  if (active.length > 0) {
    for (let i = 0; i < form.length; i += 1) {
      form[i].className = "shown";
    }
  }

  form[0].className = "shown active";
});

shownTitle.addEventListener("click", () => {
  active = document.querySelectorAll(".active");

  if (active.length > 0) {
    for (let i = 0; i < form.length; i += 1) {
      form[i].className = "shown";
    }
  }

  form[1].className = "shown active";
});

shownPerson.addEventListener("click", () => {
  active = document.querySelectorAll(".active");

  if (active.length > 0) {
    for (let i = 0; i < form.length; i += 1) {
      form[i].className = "shown";
    }
  }

  form[2].className = "shown active";
});

occult.addEventListener("click", () => {
  for (let i = 0; i < form.length; i += 1) {
    form[i].className = "shown";
  }
});

const btnCreateRace = document.getElementById('btn-create-race');
const btnCreateTitle = document.getElementById('btn-create-title');
const btnCreatePerson = document.getElementById('btn-create-person');

btnCreateRace.addEventListener('click', (event) => {
  event.preventDefault();
});
btnCreateTitle.addEventListener('click', (event) => {
  event.preventDefault();
});

btnCreatePerson.addEventListener('click', (event) => {
  event.preventDefault();
});

const race = [];

btnCreateRace.addEventListener('click', () => {
  const getRace = document.getElementById('create-race').value;
  
  race.push(getRace);

  document.getElementById('create-race').value = '';
});

const title = [];

btnCreateTitle.addEventListener('click', () => {
  const getTitle = document.getElementById('create-title').value;
  
  title.push(getTitle);

  document.getElementById('create-title').value = '';
});

btnCreateRace.addEventListener('click', () => {
    const select = document.getElementById('person-race');
    const option = document.createElement('option');
    option.className = 'option';
    option.innerHTML = race[race.length - 1];
    option.value = race[race.length - 1];

    select.appendChild(option);    
});

btnCreateTitle.addEventListener('click', () => {
  const select = document.getElementById('person-title');
  const option = document.createElement('option');
  option.className = 'option';
  option.innerHTML = title[title.length - 1];
  option.value = title[title.length - 1];

  select.appendChild(option);    
});

const formula = () => {
  const str = document.getElementById('person-str').value;
  const vit = document.getElementById('person-vit').value;
  const int = document.getElementById('person-int').value;
  const wis = document.getElementById('person-wis').value
  const calcHp = 100 + (vit * 50);
  const calcMp = 50 + (int * 25);
  const calcRegenerationHp = (calcHp * str) / 1000;
  const calcRegenerationMp = (calcMp * wis) / 1000;
  const calc = {
    hp: `${calcHp}/${calcHp} | regen: ${calcRegenerationHp}`,
    mp: `${calcMp}/${calcMp} | regen: ${calcRegenerationMp}`
  };

  return Object.entries(calc);;
}

btnCreatePerson.addEventListener('click', () => {
  const person = {
    Name: document.getElementById('person-name').value,
    Level: document.getElementById('person-level').value,
    Race: document.getElementById('person-race').value,
    Title: document.getElementById('person-title').value,
    Hp: `${formula()[0][1]} hp/m`,
    Mp: `${formula()[1][1]} mp/m`,
    Str: document.getElementById('person-str').value,
    Vit: document.getElementById('person-vit').value,
    Dex: document.getElementById('person-dex').value,
    Int: document.getElementById('person-int').value,
    Wis: document.getElementById('person-wis').value,
    Lck: document.getElementById('person-lck').value
  }

  const object  = Object.entries(person);
  const card = document.getElementById('cards-container');
  const div = document.createElement('div');
  div.className = 'card';

  card.appendChild(div);

  const get = document.querySelectorAll('.card');
  const divCard = get[get.length - 1];

  const themeNow = window.getComputedStyle(theme).getPropertyValue('background-color');

  if (themeNow === 'rgb(26, 30, 33)') {
    divCard.style.backgroundColor = '#262626';
    divCard.style.color = 'whitesmoke';
  } else {
    divCard.style.backgroundColor = 'whitesmoke';
    divCard.style.color = '#262626';
  }

  for (let index = 0; index < Object.keys(person).length; index += 1) {
    const p = document.createElement('p');
    p.innerHTML = `${object[index][0]}:\u00A0\u00A0\u00A0${object[index][1]}`;

    divCard.appendChild(p);
  }
});

btnCreatePerson.addEventListener('click', () => {
  document.getElementById('person-name').value = '';
  document.getElementById('person-level').value = '';
  document.getElementById('person-race').value = '';
  document.getElementById('person-title').value = '';
  document.getElementById('person-str').value = '';
  document.getElementById('person-vit').value = '';
  document.getElementById('person-dex').value = '';
  document.getElementById('person-int').value = '';
  document.getElementById('person-wis').value = '';
  document.getElementById('person-lck').value = '';
});
