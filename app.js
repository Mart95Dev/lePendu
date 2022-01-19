///////////////--- import---//////////////
import { gameWordPendu } from './game.js';
/////////////////////////////////////////

///////////////////// MODALES structure de l'application du pendu ///////////////////////////////

const modalRule = document.querySelector('.modal-rules');
const modalParameter = document.querySelector('.modal-parameter');
const buttonParameter = document.getElementById('begin');
const contentGame = document.querySelector('.modal-game');

window.onload = () => {
  modalRule.classList.add('active');
  modalRule.classList.remove('modal-rules');
};

buttonParameter.addEventListener('click', () => {
  modalRule.classList.remove('active');
  modalRule.classList.add('modal-rules');
  modalParameter.classList.add('active');
  modalParameter.classList.remove('modal-parameter');
});
////////////// Choice parameters game ///////////////////////////
const pseudoOne = document.getElementById('p1');
const levelGame = document.querySelectorAll('input[name="level"]');
const idPseudo = document.getElementById('pseudo');
const idLevel = document.getElementById('level');
const idWord = document.getElementById('word');
let boxSeekLetters = document.querySelector('.seek');
const valid = document.querySelector('.btn');
const idHit = document.getElementById('hit');

//variables
let nameOne = null;
let difficult = null;
const idGamer = document.getElementById('1');
idGamer.checked = true;
let wordEndGame = 1;
let error = false;
let countNumberHitWord = 0;
let tempCountHit = 0;
let tempWordEndGame = 0;

//choice pseudo player
pseudoOne.addEventListener('input', (e) => {
  nameOne = e.target.value;
});

levelGame.forEach((level) => {
  level.addEventListener('click', (e) => {
    difficult = e.target.id;
    console.log(difficult);
    level.setAttribute('checked', '');
  });
});

/// valid parameters
valid.addEventListener('click', (e) => {
  verify();
  if (error) {
    e.preventDefault;
    error = false;
  } else {
    modalParameter.classList.remove('active');
    modalParameter.classList.add('modal-parameter');
    contentGame.classList.add('active');
    contentGame.classList.remove('modal-game');
    tempWordEndGame = wordEndGame;

    idPseudo.textContent = nameOne.toString().toUpperCase();
    idLevel.textContent = difficult.toString().toUpperCase();
    idWord.textContent = wordEndGame;

    if (difficult == 'Facile') {
      countNumberHitWord = 11;
      tempCountHit = 11;
    } else if (difficult == 'Moyen') {
      countNumberHitWord = 9;
      tempCountHit = 9;
    } else {
      countNumberHitWord = 5;
      tempCountHit = 5;
    }

    idHit.textContent = countNumberHitWord;
    gameWordPendu();
  }
});

////////----function verified inputs----////////
const verify = () => {
  if (difficult === null && nameOne === null) {
    alert('Veuillez renseigner tous les paramètres');
    error = true;
    return;
  }

  if (nameOne === null || nameOne === '') {
    alert('Vous avez oublié de saisir le pseudo');
    error = true;
    return;
  }

  if (difficult === null) {
    alert('Veuillez choisir un niveau de difficulté !');
    error = true;
    return;
  }
};
