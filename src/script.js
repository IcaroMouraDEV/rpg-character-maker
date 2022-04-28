const shownRace = document.getElementById('shown-race');
const shownTitle = document.getElementById('shown-title');
const shownPerson = document.getElementById('shown-person');
const form = document.querySelectorAll('.shown');
let active;

shownRace.addEventListener('click', () => {
    active = document.querySelectorAll('.active');

    if (active.length > 0) {
        for (let i = 0; i < form.length; i += 1) {
            form[i].className = '';
        }
    } else {
        form[0].className = 'active';
    }
});

shownTitle.addEventListener('click', () => {
    active = document.querySelectorAll('.active');

    if (active.length > 0) {
        for (let i = 0; i < form.length; i += 1) {
            form[i].className = 'shown';
        }
    } else {
        form[1].className = 'shown active';
    }
});

shownPerson.addEventListener('click', () => {
    active = document.querySelectorAll('.active');

    console.log(active.length)
    if (active.length > 0) {
        for (let i = 0; i < form.length; i += 1) {
            form[i].className = '';
        }
    } else {
        form[2].className = 'active';
    }
});