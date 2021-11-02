////////////////////////////////////////////////////////////////
// canvas one gamer

const canvas = document.getElementById('draw1');
const ctx = canvas.getContext('2d');
canvas.width = 350;
canvas.height = 450;

// function potence 1
const potencePart1 = () => {
  ctx.beginPath();
  ctx.moveTo(30, 400);
  ctx.lineTo(200, 400);
  ctx.moveTo(102, 400);
  ctx.lineTo(102, 50);
  ctx.strokeStyle = 'rgb(124, 80, 8)';
  ctx.lineWidth = 10;
  ctx.stroke();
};

//function potence 2
const potencePart2 = () => {
  ctx.beginPath();
  ctx.moveTo(97, 50);
  ctx.lineTo(257, 50);
  ctx.moveTo(102, 100);
  ctx.lineTo(157, 50);
  ctx.strokeStyle = 'rgb(124, 80, 8)';
  ctx.lineWidth = 10;
  ctx.stroke();
};

//function rope
const rope = () => {
  ctx.beginPath();
  ctx.moveTo(250, 54);
  ctx.lineTo(250, 110);
  ctx.strokeStyle = 'rgb(243, 241, 233)';
  ctx.lineWidth = 7;
  ctx.stroke();
};

//function head
const head = () => {
  ctx.beginPath();
  ctx.arc(250, 125, 25, 0, 2 * Math.PI);
  ctx.strokeStyle = '#e5bca1';
  ctx.fillStyle = '#e5bca1';
  ctx.fill();
  ctx.stroke();
};
// function hair of head
const hair = () => {
  ctx.beginPath();
  ctx.arc(250, 118, 26, 0, 2 * Math.PI);
  ctx.strokeStyle = 'black';
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.stroke();
};
//function eyes of head
const eyes = () => {
  ctx.beginPath();
  ctx.moveTo(235, 118);
  ctx.lineTo(245, 118);
  ctx.moveTo(257, 118);
  ctx.lineTo(267, 118);
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 1;
  ctx.fill();
  ctx.stroke();
};

//function mouth of head
const mouth = () => {
  ctx.beginPath();
  ctx.moveTo(250, 130);
  ctx.lineTo(260, 136);
  ctx.moveTo(250, 130);
  ctx.lineTo(240, 136);
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 1;
  ctx.fill();
  ctx.stroke();
};

//function body
const body = () => {
  ctx.beginPath();
  ctx.moveTo(250, 153);
  ctx.lineTo(250, 240);
  ctx.strokeStyle = '#e5bca1';
  ctx.lineWidth = 5;
  ctx.fill();
  ctx.stroke();
};

//function arm left
const leftArm = () => {
  ctx.beginPath();
  ctx.moveTo(250, 165);
  ctx.lineTo(205, 195);
  ctx.strokeStyle = '#e5bca1';
  ctx.lineWidth = 5;
  ctx.fill();
  ctx.stroke();
};

//function arm right
const rightArm = () => {
  ctx.beginPath();
  ctx.moveTo(250, 165);
  ctx.lineTo(295, 195);
  ctx.strokeStyle = '#e5bca1';
  ctx.lineWidth = 5;
  ctx.fill();
  ctx.stroke();
};

//function foot right
const rightFoot = () => {
  ctx.beginPath();
  ctx.moveTo(250, 240);
  ctx.lineTo(295, 283);
  ctx.strokeStyle = '#e5bca1';
  ctx.lineWidth = 5;
  ctx.fill();
  ctx.stroke();
};

//function foot left
const leftFoot = () => {
  ctx.beginPath();
  ctx.moveTo(250, 240);
  ctx.lineTo(203, 283);
  ctx.strokeStyle = '#e5bca1';
  ctx.lineWidth = 5;
  ctx.fill();
  ctx.stroke();
};

// function head completed
const completHead = () => {
  hair();
  head();
  eyes();
  mouth();
};

const penduOneGamer = new Map();
penduOneGamer.set(1, potencePart1);
penduOneGamer.set(2, potencePart2);
penduOneGamer.set(3, rope);
penduOneGamer.set(4, completHead);
penduOneGamer.set(5, body);
penduOneGamer.set(6, leftArm);
penduOneGamer.set(7, rightArm);
penduOneGamer.set(8, rightFoot);
penduOneGamer.set(9, leftFoot);

//end canvas on gamer
//////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
// canvas two gamers

const reset = document.getElementById('reset');
let color = document.getElementById('color');

const canvasTwo = document.getElementById('draw2');
const ctxTwo = canvasTwo.getContext('2d');
canvasTwo.width = 350;
canvasTwo.height = 450;

const colorCanvas = (e) => {
  color = e.target.value;
  console.log(color);
};

color.addEventListener('input', colorCanvas);

// fucntion mouse position = moveTo on canvasTwo
const getMousePosition = (e) => {
  const rect = canvasTwo.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
};
// function mouseMove = LineTo on canvasTwo
const mouseMove = (e) => {
  const mousePos = getMousePosition(e);
  ctxTwo.lineTo(mousePos.x, mousePos.y);
  ctxTwo.stroke();
  ctxTwo.strokeStyle = color;
  ctxTwo.lineWidth = 10;
};

// event on canvasTwo with mouse
canvasTwo.addEventListener('mousedown', (e) => {
  e.preventDefault();
  const mousePos = getMousePosition(e);
  ctxTwo.beginPath();
  ctxTwo.moveTo(mousePos.x, mousePos.y);

  canvasTwo.addEventListener('mousemove', mouseMove);
  canvasTwo.addEventListener('mouseup', () => {
    canvasTwo.removeEventListener('mousemove', mouseMove);
  });
});

// event reset canvasTwo
reset.addEventListener('click', () => {
  ctxTwo.clearRect(0, 0, canvasTwo.width, canvasTwo.height);
});

//end canvas two gamers
//////////////////////////////////////////////////////////////////////

const title = document.querySelector('.title');
const hideWord = document.querySelector('.hideword');
const buttonAlphabet = document.querySelectorAll('.alphabet button');
let count = 0;
let letterFound = false;
let tempWord = [];

title.textContent = 'LE JEU DU PENDU';
let wordHide = document.createElement('p');
let buttonLetter = '';

//base of words
const words = [
  'physique',
  'voiture',
  'argentine',
  'forestier',
  'voyage',
  'australie',
  'etats-unies',
  'echelle',
  'autoroute',
  'constitution',
  'histoire',
  'geographie',
];

// Choice word
let wordRandomArray = words[Math.floor(Math.random() * words.length)];
tempWord.push(wordRandomArray.toUpperCase());
let selectWord = wordRandomArray.toString().toUpperCase();

///////////////////////////////////////
// code new part
if (tempWord.includes(selectWord)) {
  for (let i = 0; i < words.length; i++) {
    if (words[i] === wordRandomArray) {
      words.splice(i, 1);
    }
  }
  wordRandomArray = words[Math.floor(Math.random() * words.length)];
  console.log('word random apres if ' + wordRandomArray);
  selectWord = wordRandomArray.toString().toUpperCase();
}
//////////////////////////////////////

let wordDisplayHide = selectWord.replace(/[A-Z]/g, '_'); //replace letter for "_" via regex

//display hide word
wordHide.textContent = wordDisplayHide;
hideWord.appendChild(wordHide);

let displayLetter = [...wordDisplayHide]; // extend hide word in array

//function seek letter of word
const seekLetter = (userLetter) => {
  return [...selectWord].map((letter, i) => {
    if (displayLetter[i] !== '_') return displayLetter[i];
    if (letter === userLetter) {
      letterFound = true;
      return userLetter;
    } else {
      return '_';
    }
  });
};

//event alphabet button
buttonAlphabet.forEach((letters) => {
  letters.addEventListener('click', (e) => {
    buttonLetter = e.target.id.toUpperCase();
    letters.classList.add('boxDisabled');
    displayLetter = seekLetter(buttonLetter);
    if (!letterFound) {
      // if choice letter is not found - draw pendu
      ++count;
      penduOneGamer.get(count)();
      letterFound = false;
    }
    letterFound === true ? (letterFound = false) : '';
    wordHide.textContent = displayLetter.join(''); // display DOM
  });
});

//////////Choice parameters game///////////////////////////////

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
let error = false;
const parameter = {};

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
const resetInputs = () => {
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
    resetInputs();
    document.location = '../html/game.html';
  }
});
