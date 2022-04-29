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

/* Criar raça
const createRace = document.getElementById('btn-create-race');
const race = ['Selecione a raça'];

createRace.addEventListener('click', () => {
    const getRace = document.getElementById('create-race').value;

    race.push(getRace);
});
*/
