////////////// canvas one gamer ////////////////////

const canvas = document.getElementById('draw1');
const ctx = canvas.getContext('2d');
canvas.width = 350;
canvas.height = 450;

//function level Difficult potence
const potenceLevelDifficult = () => {
  ctx.beginPath();
  ctx.moveTo(30, 400);
  ctx.lineTo(200, 400);
  ctx.moveTo(102, 400);
  ctx.lineTo(102, 50);
  ctx.moveTo(97, 50);
  ctx.lineTo(257, 50);
  ctx.moveTo(102, 100);
  ctx.lineTo(157, 50);
  ctx.strokeStyle = 'rgb(124, 80, 8)';
  ctx.lineWidth = 10;
  ctx.stroke();
};

// function rope and head level difficult
const ropeHeadLevelDifficult = () => {
  ctx.beginPath();
  ctx.moveTo(250, 54);
  ctx.lineTo(250, 110);
  ctx.strokeStyle = 'rgb(243, 241, 233)';
  ctx.lineWidth = 7;
  ctx.stroke();
  hair();
  head();
  eyes();
  mouth();
};

// function arm left and arm right
const armLevelDifficult = () => {
  ctx.beginPath();
  ctx.moveTo(250, 165);
  ctx.lineTo(205, 195);
  ctx.moveTo(250, 165);
  ctx.lineTo(295, 195);
  ctx.strokeStyle = '#e5bca1';
  ctx.lineWidth = 5;
  ctx.fill();
  ctx.stroke();
};

//function foot left and foot rignt
const footLevelDifficult = () => {
  ctx.beginPath();
  ctx.moveTo(250, 240);
  ctx.lineTo(295, 283);
  ctx.moveTo(250, 240);
  ctx.lineTo(203, 283);
  ctx.strokeStyle = '#e5bca1';
  ctx.lineWidth = 5;
  ctx.fill();
  ctx.stroke();
};

// function level easy potence 1
const potencePartLevelEasy1 = () => {
  ctx.beginPath();
  ctx.moveTo(30, 400);
  ctx.lineTo(200, 400);
  ctx.strokeStyle = 'rgb(124, 80, 8)';
  ctx.lineWidth = 10;
  ctx.stroke();
};
// function level easy potence 2
const potencePartLevelEasy2 = () => {
  ctx.beginPath();
  ctx.moveTo(102, 400);
  ctx.lineTo(102, 50);
  ctx.strokeStyle = 'rgb(124, 80, 8)';
  ctx.lineWidth = 10;
  ctx.stroke();
};
// function level easy potence 3
const potencePartLevelEasy3 = () => {
  ctx.beginPath();
  ctx.moveTo(97, 50);
  ctx.lineTo(257, 50);
  ctx.strokeStyle = 'rgb(124, 80, 8)';
  ctx.lineWidth = 10;
  ctx.stroke();
};
// function level easy potence 4
const potencePartLevelEasy4 = () => {
  ctx.beginPath();
  ctx.moveTo(102, 100);
  ctx.lineTo(157, 50);
  ctx.strokeStyle = 'rgb(124, 80, 8)';
  ctx.lineWidth = 10;
  ctx.stroke();
};

// function level Medium potence 1
const potencePartLevelMedium1 = () => {
  ctx.beginPath();
  ctx.moveTo(30, 400);
  ctx.lineTo(200, 400);
  ctx.moveTo(102, 400);
  ctx.lineTo(102, 50);
  ctx.strokeStyle = 'rgb(124, 80, 8)';
  ctx.lineWidth = 10;
  ctx.stroke();
};

//function level Medium  potence 2
const potencePartLevelMedium2 = () => {
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

const drawPenduLevelEasy = new Map();
drawPenduLevelEasy.set(1, potencePartLevelEasy1);
drawPenduLevelEasy.set(2, potencePartLevelEasy2);
drawPenduLevelEasy.set(3, potencePartLevelEasy3);
drawPenduLevelEasy.set(4, potencePartLevelEasy4);
drawPenduLevelEasy.set(5, rope);
drawPenduLevelEasy.set(6, completHead);
drawPenduLevelEasy.set(7, body);
drawPenduLevelEasy.set(8, leftArm);
drawPenduLevelEasy.set(9, rightArm);
drawPenduLevelEasy.set(10, rightFoot);
drawPenduLevelEasy.set(11, leftFoot);

const drawPenduLevelMedium = new Map();
drawPenduLevelMedium.set(1, potencePartLevelMedium1);
drawPenduLevelMedium.set(2, potencePartLevelMedium2);
drawPenduLevelMedium.set(3, rope);
drawPenduLevelMedium.set(4, completHead);
drawPenduLevelMedium.set(5, body);
drawPenduLevelMedium.set(6, leftArm);
drawPenduLevelMedium.set(7, rightArm);
drawPenduLevelMedium.set(8, rightFoot);
drawPenduLevelMedium.set(9, leftFoot);

const drawPenduLevelDifficult = new Map();
drawPenduLevelDifficult.set(1, potenceLevelDifficult);
drawPenduLevelDifficult.set(2, ropeHeadLevelDifficult);
drawPenduLevelDifficult.set(3, body);
drawPenduLevelDifficult.set(4, armLevelDifficult);
drawPenduLevelDifficult.set(5, footLevelDifficult);

////////////// canvas two gamers ///////////////////////

/* const reset = document.getElementById('reset');
let color = document.getElementById('color');

const canvasTwo = document.getElementById('draw2');
const ctxTwo = canvasTwo.getContext('2d');
canvasTwo.width = 350;
canvasTwo.height = 450;

const colorCanvas = (e) => {
  color = e.target.value;
  console.log(color);
};

color.addEventListener('input', colorCanvas); */

// fucntion mouse position = moveTo on canvasTwo
/* const getMousePosition = (e) => {
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
}); */

///////////////////// MODALES ///////////////////////////////

const modalRule = document.querySelector('.modal-rules');
const modalParameter = document.querySelector('.modal-parameter');
const buttonParameter = document.getElementById('begin');
const contentGame = document.querySelector('.modal-game');
const stopGame = document.querySelector('.modal-stop-game');
/// AJOUTER MODALES EN FONCTION DU NOMBRE DE JOUEURS/// function two gamers disabled

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

const buttonGamer = document.querySelectorAll('input[name="gamer"]');
const pseudoOne = document.getElementById('p1');
const pseudoTwo = document.getElementById('p2');
const numberWord = document.getElementById('word');
const levelGame = document.querySelectorAll('input[name="level"]');
const numberHitWord = document.querySelector('.container-hideword');
const resetParameters = document.querySelector('.reset-parameters');
const valid = document.querySelector('.btn');

//variables
let temp = [];
let nameOne = null;
let nameTwo = null;
let numberPlayer = 1;
let wordEndGame = null;
let difficult = null;
let error = false;
let tabWord = 0;
let countNumberHitWord = 0;
let tempdifficult = 0;

// choice player number
/* buttonGamer.forEach((gamer) => {
  gamer.addEventListener('click', (e) => {
    numberPlayer = e.target.id;
    if (numberPlayer == 1) {
      pseudoTwo.classList.add('boxDisabled');
    } else {
      pseudoTwo.classList.remove('boxDisabled');
    } 
    gamer.setAttribute('checked', '');
  });
}); */

//choice pseudo player
pseudoOne.addEventListener('input', (e) => {
  let one = e.target.value;
  temp.push(one);
  nameOne = temp.pop();
  temp = [];
});

/* pseudoTwo.addEventListener('input', (e) => {
  let two = e.target.value;
  temp.push(two);
  nameTwo = temp.pop();
  temp = [];
}); */

// choice number word
numberWord.addEventListener('input', (e) => {
  let number = parseInt(e.target.value);
  if (isNaN(number)) {
    alert('Veuillez saisir uniquement des chiffres !');
    numberWord.value = '';
    return;
  }
  if (number === 0) {
    alert('Veuillez Saisir un chiffre supérieur à 0');
    numberWord.value = '';
    return;
  }
  temp.push(number);
  wordEndGame = temp.pop();
});

levelGame.forEach((level) => {
  level.addEventListener('click', (e) => {
    difficult = e.target.id;
    level.setAttribute('checked', '');
  });
});

/// verified input
const verify = () => {
  if (
    /* numberPlayer === null || */ difficult === null ||
    wordEndGame === null ||
    nameOne === null
  ) {
    alert('Veuillez renseigner tous les paramètres');
    error = true;
    return;
  }

  /*  if (nameOne === null && nameTwo === null) {
    alert('Vous avez oublié de saisir les pseudos');
    error = true;
    return;
  } */

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
  // temporary two gammer disabled
  numberPlayer = 1;
  const idGamer = document.getElementById('1');
  idGamer.checked = true;
  return;
};

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
    const level = document.querySelector('.level');
    const pseudo = document.querySelector('.pseudo');
    const wordGame = document.querySelector('.word-game');

    // number hit word game
    const numberHitWord = document.querySelector('.container-hideword');

    if (difficult == 'Facile') {
      countNumberHitWord = 11;
    } else if (difficult == 'Moyen') {
      countNumberHitWord = 9;
    } else {
      countNumberHitWord = 5;
    }

    tempdifficult++;
    wordGame.textContent = `Choix du nombre mots à trouver : ${wordEndGame}`;
    pseudo.textContent = `Pseudo : ${nameOne.toString().toUpperCase()}`;
    level.textContent = `Niveau de difficulté : ${difficult
      .toString()
      .toUpperCase()}`;
    if (tempdifficult === 1) {
      numberHitWord.insertAdjacentHTML(
        'afterbegin',
        `<p class="number-hit">Vous avez <button class="hit">${countNumberHitWord}</button> tentatives pour retrouver le mot caché</p>`
      );
    } else {
      const hitNumber = document.querySelector('.number-hit');
      hitNumber.remove();
      numberHitWord.insertAdjacentHTML(
        'afterbegin',
        `<p class="number-hit">Vous avez <button class="hit">${countNumberHitWord}</button> tentatives pour retrouver le mot caché</p>`
      );
    }

    /// AJOUTER MODALES EN FONCTION DU NOMBRE DE JOUEURS !!! AVEC CONDITION PLAYERS
    ////////Verify word game////
    if (tabWord === 0) {
      gameWordPendu();
      tabWord = 1;
    }
  }
});

//////////////////////////// GAME //////////////////////////////

const gameWordPendu = () => {
  const hideWord = document.querySelector('.hideword');
  const buttonAlphabet = document.querySelectorAll('.alphabet button');
  let count = 0;
  let letterFound = false;
  let tempWord = [];
  let wordHide = document.createElement('p');
  wordHide.classList.add('content-hide-word');
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
  console.log(tempWord);
  let selectWord = wordRandomArray.toString().toUpperCase();
  console.log(selectWord);

  ///////////////////////////////////////
  // code new word
  if (tempWord.length > 1) {
    if (tempWord.includes(selectWord)) {
      for (let i = 0; i < words.length; i++) {
        if (words[i] === wordRandomArray) {
          words.splice(i, 1);
        }
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
      resetParameters.classList.add('boxDisabled');
      const numberHit = document.querySelector('.number-hit');
      countNumberHitWord--;
      numberHit.remove();
      numberHitWord.insertAdjacentHTML(
        'afterbegin',
        `<p class="number-hit">Vous avez <button class="hit">${countNumberHitWord}</button> tentatives pour retrouver le mot caché</p>`
      );
      //////////////////////////////////
      if (countNumberHitWord === 0) {
        console.log('passer au mot suivant');
      }
      ////////////////////////////////////////
      /// box seek letters/////////////
      let boxSeekLetters = document.querySelector('.seek');
      boxSeekLetters.insertAdjacentHTML(
        'beforeend',
        `<button id="${buttonLetter}" class="btn-letter-seek">${buttonLetter}</button>`
      );

      /////////////////////////////
      displayLetter = seekLetter(buttonLetter);
      if (!letterFound) {
        // if choice letter is not found - draw pendu
        if (difficult === 'Facile') {
          ++count;
          drawPenduLevelEasy.get(count)();
        } else if (difficult === 'Moyen') {
          ++count;
          drawPenduLevelMedium.get(count)();
        } else {
          ++count;
          drawPenduLevelDifficult.get(count)();
        }

        letterFound = false;
      }
      letterFound === true ? (letterFound = false) : '';
      wordHide.textContent = displayLetter.join(''); // display DOM
    });
  });
};

// reset parameters gamer
resetParameters.addEventListener('click', () => {
  modalParameter.classList.add('active');
  modalParameter.classList.remove('modal-parameter');
  contentGame.classList.remove('active');
  contentGame.classList.add('modal-game');
});

// button stop game
const endGame = document.querySelector('.end');
endGame.addEventListener('click', () => {
  contentGame.classList.remove('active');
  contentGame.classList.add('modal-game');
  stopGame.classList.add('active');
  stopGame.classList.remove('modal-stop-game');
  const warning = document.querySelector('.warning');
  warning.textContent = 'Voulez-vous quitter le jeu du pendu ?';
});

const btnGame = document.querySelector('.go-game');
btnGame.addEventListener('click', () => {
  contentGame.classList.add('active');
  contentGame.classList.remove('modal-game');
  stopGame.classList.remove('active');
  stopGame.classList.add('modal-stop-game');
});

const stopG = document.querySelector('.stop');
stopG.addEventListener('click', () => {
  temp = [];
  nameOne = null;
  nameTwo = null;
  numberPlayer = 1;
  wordEndGame = null;
  difficult = null;
  error = false;
  tabWord = 0;
  resetInputs();

  stopGame.classList.remove('active');
  stopGame.classList.add('modal-stop-game');
  modalRule.classList.add('active');
  modalRule.classList.remove('modal-rules');
});
