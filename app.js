//// import base words ///////////
import { words } from './base.js';
/////////////////////////////////
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
// modification pour éliminer le choix de nombre de mot suite aux problème de non résolu sur le mot displayLetter et TempSelectWord--//
/* const numberWord = document.getElementById('word'); */
//////////////////////////////////////////
const levelGame = document.querySelectorAll('input[name="level"]');
const boxLetters = document.querySelector('.letters');
const numberHitWord = document.querySelector('.container-hideword');
const resetParameters = document.querySelector('.reset-parameters');
const parameters = document.querySelector('.parameters');
let boxSeekLetters = document.querySelector('.seek');
const valid = document.querySelector('.btn');
const modalLostWinGame = document.querySelector('.modal-win-lost-game');

//variables
let temp = [];
let nameOne = null;
let nameTwo = null;
let numberPlayer = 1;
let number = null;
// modification pour éliminer le choix de nombre de mot suite aux problème de non résolu sur le mot displayLetter et TempSelectWord--//
let wordEndGame = 1;
/////////////////////////
let difficult = null;
let error = false;
let tabWord = 0;
let countNumberHitWord = 0;
let tempdifficult = 0;
let tempCountHit = 0;
let tempWordEndGame = 0;
let countParameters = 0;
let countBoxLetters = 0;
let wordLost = 0;
let wordWin = 0;
let styleWord1 = '';
let styleword2 = '';

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

//// ici script pseudo two ////

// choice number word
//-- modification pour éliminer le choix de nombre de mot suite aux problème de non résolu sur le mot displayLetter et TempSelectWord--//
/* numberWord.addEventListener('input', (e) => {
  number = parseInt(e.target.value);
  if (isNaN(number)) {
    alert('Veuillez saisir uniquement des chiffres !');
    numberWord.value = '';
    return;
  }
  temp.push(number);
  wordEndGame = temp.pop();
});*/
///////////////////////////////////////////////////////

levelGame.forEach((level) => {
  level.addEventListener('click', (e) => {
    difficult = e.target.id;
    level.setAttribute('checked', '');
  });
});

/// verified input
const verify = () => {
  // modification pour éliminer le choix de nombre de mot suite aux problème de non résolu sur le mot displayLetter et TempSelectWord--//
  if (
    difficult === null &&
    nameOne === null /* && wordEndGame === null */ /* numberPlayer === null ||*/
  ) {
    alert('Veuillez renseigner tous les paramètres');
    error = true;
    return;
  }

  if (nameOne === null /* && nameTwo === null */) {
    alert('Vous avez oublié de saisir les pseudos');
    error = true;
    return;
  }

  if (numberPlayer == 1 && nameOne === null) {
    alert('Veuillez saisir le pseudo 1');
    error = true;
    return;
  } //// ici condition pseudo two //////

  // modification pour éliminer le choix de nombre de mot suite aux problème de non résolu sur le mot displayLetter et TempSelectWord--//
  /* if (number === 0) {
    alert('Veuillez Saisir un chiffre supérieur à 0 !');
    numberWord.value = '';
    error = true;
    return;
  } else if (number === null) {
    alert('Veuillez Saisir un chiffre pour le paramètre nombre de mot !');
    numberWord.value = '';
    error = true;
    return;
  } */
  //////////////////////////////////////////////////

  if (difficult === null) {
    alert('Veuillez choisir un niveau de difficulté !');
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
  // modification pour éliminer le choix de nombre de mot suite aux problème de non résolu sur le mot displayLetter et TempSelectWord--//
  /* numberWord.value = ''; */
  ///////////////////////
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

    if (wordEndGame === 1) {
      styleWord1 = 'mot';
      styleword2 = 'retrouvé';
    } else {
      styleWord1 = 'mots';
      styleword2 = 'retrouvés';
    }

    tempWordEndGame = wordEndGame;
    // modification pour éliminer le choix de nombre de mot suite aux problème de non résolu sur le mot displayLetter et TempSelectWord--//
    /*  countBoxLetters++;
    
    if (countBoxLetters === 1) {
      boxLetters.insertAdjacentHTML(
        'afterbegin',
        `<p class="box-choice-word">Il vous reste <button class="rest-choice-word-win-game">${tempWordEndGame}</button> ${styleWord1} à ${styleword2}</p>`
      );
    } else {
      resetChoiceWordWinGame();

      boxLetters.insertAdjacentHTML(
        'afterbegin',
        `<p class="box-choice-word">Il vous reste <button class="rest-choice-word-win-game">${tempWordEndGame}</button> ${styleWord1} à ${styleword2}</p>`
      );
    } */
    ///////////////////////////////////////
    countParameters++;
    if (countParameters === 1) {
      parameters.insertAdjacentHTML(
        'afterbegin',
        `<p class="pseudo">Pseudo : <button class="btn-style-choice-parameters">${nameOne
          .toString()
          .toUpperCase()}</button></p>`
      );
      parameters.insertAdjacentHTML(
        'beforeend',
        `<p class="level">Niveau de difficulté :  <button class="btn-style-choice-parameters">${difficult
          .toString()
          .toUpperCase()}</button></p>`
      );
      parameters.insertAdjacentHTML(
        'beforeend',
        `<p class="word-game">Nombre de mot à trouver : <button class="btn-style-choice-word-game">${wordEndGame}</button></p>`
      );
    } else {
      /* resetChoiceWordWinGame(); */
      resetPseudoLevelWordEndGame();

      parameters.insertAdjacentHTML(
        'afterbegin',
        `<p class="pseudo">Pseudo : <button class="btn-style-choice-parameters">${nameOne
          .toString()
          .toUpperCase()}</button></p>`
      );
      parameters.insertAdjacentHTML(
        'beforeend',
        `<p class="level">Niveau de difficulté :  <button class="btn-style-choice-parameters">${difficult
          .toString()
          .toUpperCase()}</button></p>`
      );
      parameters.insertAdjacentHTML(
        'beforeend',
        `<p class="word-game">Nombre de mot à trouver : <button class="btn-style-choice-word-game">${tempWordEndGame}</button></p>`
      );
    }

    // number hit word game
    const numberHitWord = document.querySelector('.container-hideword');

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

    tempdifficult++;
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
    ////////Verify word game and no find a new word////
    if (tabWord === 0) {
      gameWordPendu();
      tabWord = 1;
    }
  }
});
//////////////////////////// GAME //////////////////////////////

//variables
let wordHide = document.createElement('p');
const buttonAlphabet = document.querySelectorAll('.alphabet button');
const blockWordWininLost = document.querySelector('.blok-word-win-lost');
let count = 0;
let tempWord = [];
let countWinLostTitle = 0;
let countLostGame = 0;
let countWinGame = 0;
let scoreHitTab = [];
let resetDisplayLetter = 0;
let countTempSelectWord = 0;
let endLost = false;

const gameWordPendu = () => {
  let tempSelectWord = [];
  let buttonLetter = '';
  let letterFound = false;
  const hideWord = document.querySelector('.hideword');
  let wordDisplayHide = '';
  wordHide.classList.add('content-hide-word');

  // Choice word
  let wordRandomArray = words[Math.floor(Math.random() * words.length)];
  tempWord.push(wordRandomArray.toUpperCase());

  let selectWord = wordRandomArray.toString().toUpperCase();
  console.log(selectWord);

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
  wordDisplayHide = selectWord.replace(/[A-Z]/g, '_'); //replace letter for "_" via regex
  //display hide word
  wordHide.textContent = wordDisplayHide;
  hideWord.appendChild(wordHide);
  let displayLetter = [...wordDisplayHide]; // extend hide word in array
  console.log('mot caché avant sélection alphabet ' + displayLetter);

  // modification pour éliminer le choix de nombre de mot suite aux problème de non résolu sur le mot displayLetter et TempSelectWord--//
  /* countWinLostTitle++;
  if (countWinLostTitle === 1) {
    blockWordWininLost.insertAdjacentHTML(
      'afterbegin',
      `<p class="word-win-title">Nombre de mots retrouvés : <button class="score-word-win">${countWinGame}</btton</p>`
    );
    blockWordWininLost.insertAdjacentHTML(
      'beforeend',
      `<p class="word-lost-title">Nombre de mots perdu   : <button class="score-word-lost">${countLostGame}</button></p>`
    );
  } else {
    resetWinLostTitle();

    blockWordWininLost.insertAdjacentHTML(
      'afterbegin',
      `<p class="word-win-title">Nombre de mots retrouvés : <button class="score-word-win">${countWinGame}</btton</p>`
    );
    blockWordWininLost.insertAdjacentHTML(
      'beforeend',
      `<p class="word-lost-title">Nombre de mots perdu  : <button class="score-word-lost">${countLostGame}</button></p>`
    );
  } */
  /////////////////////////////////////

  //function seek letter of word
  const seekLetter = (userLetter) => {
    tempSelectWord = [...selectWord];
    return tempSelectWord.map((letter, i) => {
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
      console.log(buttonLetter);
      letters.classList.add('boxDisabled');
      resetParameters.classList.add('boxDisabled');

      /// box seek letters/////////////
      boxSeekLetters.insertAdjacentHTML(
        'beforeend',
        `<button id="${buttonLetter}" class="btn-letter-seek">${buttonLetter}</button>`
      );
      /////////////////////////////

      displayLetter = seekLetter(buttonLetter);
      console.log(buttonLetter);
      if (!letterFound) {
        // if choice letter is not found - draw pendu
        console.log('compteur au debut ' + count);
        if (difficult === 'Facile') {
          ++count;
          drawPenduLevelEasy.get(count)();
          console.log(count);
        } else if (difficult === 'Moyen') {
          ++count;
          drawPenduLevelMedium.get(count)();
          console.log(count);
        } else {
          ++count;
          drawPenduLevelDifficult.get(count)();
          console.log(count);
        }

        countNumberHitWord--;
        hitNumber();
        letterFound = false;
      }
      letterFound === true ? (letterFound = false) : '';
      wordHide.textContent = displayLetter.join(''); // display DOM

      /// verify hit number and count drawPenduLevel ////
      if (!displayLetter.includes('_')) {
        if (tempWordEndGame === 1) {
          playVideoEnd();
          if (tempWordEndGame > 1) {
            console.log('non fait encore');
          }
        }
      }

      if (countNumberHitWord === 0) {
        if (tempWordEndGame === 1) {
          endLost = true;
          playVideoEnd();
        } /* else {
          if (tempWordEndGame > 1) {
             numberWordLost();
            console.log('fonction numberWordLost fini de travailler');
            console.log('non fait encore');
          }
        } */
      }
    });
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//function reset pseudo, level, wordEndGame of parameters
const resetPseudoLevelWordEndGame = () => {
  const level = document.querySelector('.level');
  const pseudo = document.querySelector('.pseudo');
  // modification pour éliminer le choix de nombre de mot suite aux problème de non résolu sur le mot displayLetter et TempSelectWord--//
  /* const wordGame = document.querySelector('.word-game'); */
  //////////////////////////
  level.remove();
  pseudo.remove();
  // modification pour éliminer le choix de nombre de mot suite aux problème de non résolu sur le mot displayLetter et TempSelectWord--//
  /*   wordGame.remove(); */
  ///////////////
  return;
};

const resetWordHide = () => {
  const displayWordHide = document.querySelector('.content-hide-word');
  displayWordHide.remove();
};

// modification pour éliminer le choix de nombre de mot suite aux problème de non résolu sur le mot displayLetter et TempSelectWord--//
/* const resetChoiceWordWinGame = () => {
  const choiceLetters = document.querySelector('.box-choice-word');
  choiceLetters.remove();
  return;
}; */
///////////////////////////

//function reset buttons selected
const resetButtonSelected = () => {
  const buttonSeek = document.querySelectorAll('.btn-letter-seek');
  buttonSeek.forEach((letter) => {
    letter.remove();
  });
};

//function reset canvas and count of pendudraw
const resetCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  return;
};

//function reset disabled letters seek
const resetDisabledLettersSeek = () => {
  buttonAlphabet.forEach((btnLetter) => {
    if (btnLetter.hasAttribute('class', 'boxDisabled')) {
      btnLetter.removeAttribute('class', 'boxDisabled');
    }
  });
  return;
};

// reset parameters gamer
resetParameters.addEventListener('click', () => {
  modalParameter.classList.add('active');
  modalParameter.classList.remove('modal-parameter');
  contentGame.classList.remove('active');
  contentGame.classList.add('modal-game');
  return;
});

// reset win and lost title
const resetWinLostTitle = () => {
  const wordWinTitle = document.querySelector('.word-win-title');
  const wordLostTitle = document.querySelector('.word-lost-title');
  wordLostTitle.remove();
  wordWinTitle.remove();
  return;
};

//function reset score hit and score word
const resetScoreWordAndHit = () => {
  const lostWinDom = document.querySelector('.lost-win');
  lostWinDom.remove();
};

//function no visible modal stopGame
const noVisibleStopGame = () => {
  stopGame.classList.remove('active');
  stopGame.classList.add('modal-stop-game');
};

// button choice stop game
const endGame = document.querySelector('.end');
endGame.addEventListener('click', () => {
  contentGame.classList.remove('active');
  contentGame.classList.add('modal-game');
  stopGame.classList.add('active');
  stopGame.classList.remove('modal-stop-game');
  const warning = document.querySelector('.warning');
  warning.textContent = 'Voulez-vous quitter le jeu du pendu ?';
});

// button go game
const btnGame = document.querySelector('.go-game');
btnGame.addEventListener('click', () => {
  contentGame.classList.add('active');
  contentGame.classList.remove('modal-game');
  noVisibleStopGame();
});

// button go game 2
const btnGame2 = document.querySelector('.go-game-2');
btnGame2.addEventListener('click', () => {
  noVisibleStopGame();
  window.location.replace('index.html');
});

// button stop game
const stopG = document.querySelector('.stop');
stopG.addEventListener('click', () => {
  noVisibleStopGame();
  window.location.replace('https://www.google.fr');
});

// button stop game 2
const stopG2 = document.querySelector('.stop-2');
stopG2.addEventListener('click', () => {
  stopGame.classList.remove('active');
  stopGame.classList.add('modal-win-lost-game');
  window.location.replace('https://www.google.fr');
});

//function remove dom hit
const hitNumber = () => {
  const numberHit = document.querySelector('.number-hit');
  numberHit.remove();
  numberHitWord.insertAdjacentHTML(
    'afterbegin',
    `<p class="number-hit">Vous avez <button class="hit">${countNumberHitWord}</button> tentatives pour retrouver le mot caché</p>`
  );
};
// function video end win our lost game
const playVideoEnd = () => {
  const containerVideo = document.querySelector('.container-video');
  containerVideo.classList.add('active-video');
  containerVideo.classList.remove('container-video');
  const videoEnd = document.getElementById('playVid');
  if (endLost) {
    videoEnd.insertAdjacentHTML(
      'afterbegin',
      `<source src="./video/LePendu.mp4" type="video/mp4">`
    );
    videoEnd.play();
    setTimeout(() => {
      modalEnd();
      smileysEnd();
    }, 12000);
    endLost = false;
    return;
  } else {
    videoEnd.insertAdjacentHTML(
      'afterbegin',
      `<source src="./video/LePenduLiberer.mp4" type="video/mp4">`
    );
    videoEnd.play();
    setTimeout(() => {
      modalEnd();
      smileysEnd();
    }, 14000);
    return;
  }
};

/* // function video end lost game
const playVideoLost = () => {
  const containerVideo = document.querySelector('.container-video');
  containerVideo.classList.add('active-video');
  containerVideo.classList.remove('container-video');
  const videoEnd = document.getElementById('playVid');
  videoEnd.insertAdjacentHTML(
    'afterbegin',
    `<source src="./video/LePendu.mp4" type="video/mp4">`
  );
  videoEnd.play();
  setTimeout(() => {
    modalEnd();
    smileysEnd();
  }, 12000);
  return;
};

const playVideoWin = () => {
  const containerVideo = document.querySelector('.container-video');
  containerVideo.classList.add('active-video');
  containerVideo.classList.remove('container-video');
  const videoEnd = document.getElementById('playVid');
  videoEnd.insertAdjacentHTML(
    'afterbegin',
    `<source src="./video/LePenduLiberer.mp4" type="video/mp4">`
  );
  videoEnd.play();
  setTimeout(() => {
    modalEnd();
    smileysEnd();
  }, 14000);
  return;
}; */

//function smileys
const smileysEnd = () => {
  const smileyWordHit = document.getElementById('img');
  let scorePercentEnd = '';
  if (countNumberHitWord === 0) {
    scorePercentEnd = ((wordEndGame - tempWordEndGame) / wordEndGame) * 100;
  } else {
    scorePercentEnd = (tempWordEndGame / wordEndGame) * 100;
  }

  if (scorePercentEnd < 26) {
    smileyWordHit.setAttribute('src', '/svg/en-colere.svg');
  }
  if (scorePercentEnd > 25 && scorePercentEnd < 51) {
    smileyWordHit.setAttribute('src', 'svg/malheureux.svg');
  }
  if (scorePercentEnd > 50 && scorePercentEnd < 76) {
    smileyWordHit.setAttribute('src', '/svg/sourire.svg');
  }
  if (scorePercentEnd > 75) {
    smileyWordHit.setAttribute('src', '/svg/heureux.svg');
  }
  return;
};

//function modale end
const modalEnd = () => {
  let titleEndGame = '';
  let numberWordEndGame = 0;
  let percentWord = 0;
  let numberHitEndGame = 0;
  if (countNumberHitWord === 0) {
    titleEndGame = `MALHEUREUSEMENT ! ${nameOne.toUpperCase()}, vous avez perdu la partie `;
    numberWordEndGame = wordEndGame - tempWordEndGame;
    percentWord = ((wordEndGame - tempWordEndGame) / wordEndGame) * 100;
    numberHitEndGame = tempCountHit;
  } else {
    titleEndGame = `SUPER ! ${nameOne.toUpperCase()}, vous avez gagné la partie `;
    numberWordEndGame = tempWordEndGame;
    percentWord = (tempWordEndGame / wordEndGame) * 100;
    numberHitEndGame = (countNumberHitWord - tempCountHit) * -1;
  }
  contentGame.classList.remove('active');
  contentGame.classList.add('modal-game');
  modalLostWinGame.classList.add('active');
  modalLostWinGame.classList.remove('modal-win-lost-game');
  modalLostWinGame.insertAdjacentHTML(
    'afterbegin',
    `<div class="lost-win">
        <p class="win-lost-text1">${titleEndGame}</p>        
       <p class="win-lost-text2"> Il vous a fallu <button class="total-hit btn-end-display">${numberHitEndGame}</button> tentatives  / <button class="total-hit btn-end-display">${tempCountHit} </button> pour essayer de retrouver le mot caché</p> 
       <div class="smileys">          
       <div class="smiley-word-hit"><img id="img"></div>
   </div>
    </div>`
  );
  return;
};
