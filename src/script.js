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

  console.log(active.length);
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
  console.log(title);

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
