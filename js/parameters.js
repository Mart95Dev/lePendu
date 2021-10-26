/// HTML element
const buttonGamer = document.querySelectorAll('input[name="gamer"]');
const pseudoOne = document.getElementById('p1');
const pseudoTwo = document.getElementById('p2');
const numberWord = document.getElementById('word');
const levelGame = document.querySelectorAll('input[name="level"]');

const valid = document.querySelector('.btn');

//variables
let temp = [];
let nameOne = null;
let nameTwo = null;
let numberPlayer = null;
let wordEndGame = null;
let difficult = null;
let parameter = {};
let error = false;

// choice player number
buttonGamer.forEach((gamer) => {
  gamer.addEventListener('click', (e) => {
    numberPlayer = e.target.id;
    if (numberPlayer == 1) {
      pseudoTwo.classList.add('boxDisabled');
    } else {
      pseudoTwo.classList.remove('boxDisabled');
    }
    gamer.setAttribute('checked', '');
  });
});

//choice pseudo player
pseudoOne.addEventListener('input', (e) => {
  let one = e.target.value;
  temp.push(one);
  nameOne = temp.pop();
  temp = [];
});

pseudoTwo.addEventListener('input', (e) => {
  let two = e.target.value;
  temp.push(two);
  nameTwo = temp.pop();
  temp = [];
});

// choice number word
numberWord.addEventListener('input', (e) => {
  let number = parseInt(e.target.value);
  if (isNaN(number)) {
    alert('Veuillez saisir uniquement des chiffres !');
    numberWord.value = '';
    return;
  }
  temp.push(number);
  wordEndGame = temp.pop();
});

// choice level game
levelGame.forEach((level) => {
  level.addEventListener('click', (e) => {
    difficult = e.target.id;
    level.setAttribute('checked', '');
  });
});

/// verified input
const verify = () => {
  if (numberPlayer === null || difficult === null || wordEndGame === null) {
    alert('Veuillez renseigner tous les paramètres');
    error = true;
    return;
  }

  if (nameOne === null && nameTwo === null) {
    alert('Vous avez oublié de saisir les pseudos');
    error = true;
    return;
  }

  if (numberPlayer == 1 && nameOne === null) {
    alert('Veuillez saisir le pseudo 1');
    error = true;
    return;
  } else if (numberPlayer == 2 && nameTwo === null) {
    alert('Veuillez saisir le pseudo 2');
    error = true;
    return;
  }
};

/// reset input
const reset = () => {
  const radios = document.querySelectorAll('input[type="radio"]');
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].hasAttribute('checked')) {
      radios[i].checked = false;
    }
  }
  pseudoOne.value = '';
  pseudoTwo.value = '';
  numberWord.value = '';
  return;
};

/// valid parameters
valid.addEventListener('click', (e) => {
  verify();
  if (error) {
    e.preventDefault;
    error = false;
  } else {
    parameter.players = numberPlayer;
    parameter.pseudo1 = nameOne;
    parameter.pseudo2 = nameTwo;
    parameter.wordNumber = wordEndGame;
    parameter.level = difficult;
    reset();
    if (parameter.players === 1) {
      document.location = '../html/player1.html';
    } else {
      document.location = '../html/player2.html';
    }
  }
});

export { parameter };
