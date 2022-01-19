//////////////////---IMPORT FUNCTIONS ---///////////////////////////
import { words } from './baseWords.js'; //-- import base of words
import {
  drawPenduLevelEasy,
  drawPenduLevelMedium,
  drawPenduLevelDifficult,
} from './canvas.js'; // -- import functions to draw pendu
import { hitNumber, playVideoEnd } from './functions.js';

//////////////////////////// GAME //////////////////////////////

//variables
const boxLetters = document.querySelector('.letters');
const resetParameters = document.querySelector('.reset-parameters');
const endGame = document.querySelector('.end');
const btnGame = document.querySelector('.go-game');
const btnGame2 = document.querySelector('.go-game-2');
const stopG = document.querySelector('.stop');
const stopG2 = document.querySelector('.stop-2');
const stopGame = document.querySelector('.modal-stop-game');

let wordHide = document.createElement('p');
const buttonAlphabet = document.querySelectorAll('.alphabet button');
let count = 0;
let endLost = false;

export const gameWordPendu = () => {
  let tempSelectWord = [];
  let buttonLetter = '';
  let letterFound = false;
  const hideWord = document.querySelector('.hideword');
  let wordDisplayHide = '';
  wordHide.classList.add('content-hide-word');

  // Choice word
  let wordRandomArray = words[Math.floor(Math.random() * words.length)];
  let selectWord = wordRandomArray.toString().toUpperCase();
  console.log(selectWord);

  //////////////////////////////////////
  wordDisplayHide = selectWord.replace(/[A-Z]/g, '_'); //replace letter for "_" via regex
  //display hide word
  wordHide.textContent = wordDisplayHide;
  hideWord.appendChild(wordHide);
  let displayLetter = [...wordDisplayHide]; // extend hide word in array

  //event alphabet button
  buttonAlphabet.forEach((letter) => {
    letter.addEventListener('click', (e) => {
      buttonLetter = e.target.id.toUpperCase();
      console.log(buttonLetter);
      letter.classList.add('boxDisabled');
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
        playVideoEnd();
      }

      if (countNumberHitWord === 0) {
        endLost = true;
        playVideoEnd();
      }
    });
  });
};

//////////////////////////////////////////////////////////////////////////////////
//addEventListener of all buttons
resetParameters.addEventListener('click', () => {
  modalParameter.classList.add('active');
  modalParameter.classList.remove('modal-parameter');
  contentGame.classList.remove('active');
  contentGame.classList.add('modal-game');
  return;
});

// button choice stop game
endGame.addEventListener('click', () => {
  contentGame.classList.remove('active');
  contentGame.classList.add('modal-game');
  stopGame.classList.add('active');
  stopGame.classList.remove('modal-stop-game');
  const warning = document.querySelector('.warning');
  warning.textContent = 'Voulez-vous quitter le jeu du pendu ?';
});

// button go game
btnGame.addEventListener('click', () => {
  contentGame.classList.add('active');
  contentGame.classList.remove('modal-game');
  noVisibleStopGame();
});

// button go game 2
btnGame2.addEventListener('click', () => {
  noVisibleStopGame();
  window.location.replace('index.html');
});

// button stop game

stopG.addEventListener('click', () => {
  noVisibleStopGame();
  window.location.replace('https://www.google.fr');
});

// button stop game 2
stopG2.addEventListener('click', () => {
  stopGame.classList.remove('active');
  stopGame.classList.add('modal-win-lost-game');
  window.location.replace('https://www.google.fr');
});

//function no visible modal stopGame
const noVisibleStopGame = () => {
  stopGame.classList.remove('active');
  stopGame.classList.add('modal-stop-game');
};

/////////////////////////////////////////////////////////////////////////////////
//function seek letter of the word
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
