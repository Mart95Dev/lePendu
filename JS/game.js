////////////////////////////////////////////////////////////////////////////
// ce fichier est le code purement du jeu du pendu, de la fenetre du score, des vidéos et des modification des paramètres

/////////////////////////////////--Import--///////////////////////////////////
import {
  parametersChoices,
  elementHit,
  idHit,
  modalParameter,
  contentGame
} from "./app.js";
import { words } from "./baseWords.js"; ///--> liste des mots aléatoires pour le jeu du pendu
import {
  drawPenduLevelEasy,
  drawPenduLevelMedium,
  drawPenduLevelDifficult
} from "./canvas.js";
import { endLost, playVideoEnd } from "./functions.js";

///////////////////////-- Variables --//////////////////////////////////////
let boxSeekLetters = document.querySelector(".seek");
const buttonAlphabet = document.querySelectorAll(".alphabet button");
const resetParameters = document.querySelector(".reset-parameters");
const endGame = document.querySelector(".end");
const btnGame = document.querySelector(".go-game");
const btnGame2 = document.querySelector(".go-game-2");
const stopG = document.querySelector(".stop");
const stopG2 = document.querySelector(".stop-2");
const stopGame = document.querySelector(".modal-stop-game");
let selectWord = [];
let tempSelectWord = [];
let displayLetter = [];
let wordHide = document.createElement("p");
let count = 0;
let letterFound = false;

//////////////////////////// GAME ////////////////////////////////
export const gameWordPendu = () => {
  let buttonLetter = "";
  const hideWord = document.querySelector(".hideword");
  let wordDisplayHide = "";
  wordHide.classList.add("content-hide-word");

  // Choice word
  let wordRandomArray = words[Math.floor(Math.random() * words.length)];
  selectWord = wordRandomArray.toString().toUpperCase();
  console.log(selectWord);

  //////////////////////////////////////
  wordDisplayHide = selectWord.replace(/[A-Z]/g, "_"); //replace letter for "_" via regex
  //display hide word
  wordHide.textContent = wordDisplayHide;
  hideWord.appendChild(wordHide);
  displayLetter = [...wordDisplayHide]; // extend hide word in array

  //event alphabet button
  buttonAlphabet.forEach(letter => {
    letter.addEventListener("click", e => {
      buttonLetter = e.target.id.toUpperCase();
      letter.classList.add("boxDisabled");
      resetParameters.classList.add("boxDisabled");

      /// box seek letters/////////////
      boxSeekLetters.insertAdjacentHTML(
        "beforeend",
        `<button id="${buttonLetter}" class="btn-letter-seek">${buttonLetter}</button>`
      );
      /////////////////////////////

      displayLetter = seekLetter(buttonLetter);
      console.log(buttonLetter);
      if (!letterFound) {
        if (parametersChoices.difficult === "Facile") {
          ++count;
          drawPenduLevelEasy.get(count)();
        } else if (parametersChoices.difficult === "Moyen") {
          ++count;
          drawPenduLevelMedium.get(count)();
        } else {
          ++count;
          drawPenduLevelDifficult.get(count)();
        }

        elementHit.countHit--;
        idHit.textContent = elementHit.countHit;
        letterFound = false;
      }
      letterFound === true ? (letterFound = false) : "";
      wordHide.textContent = displayLetter.join(""); // display DOM

      /// verify hit number and count drawPenduLevel ////
      if (!displayLetter.includes("_")) {
        playVideoEnd();
      }

      if (elementHit.countHit === 0) {
        endLost.content = true;
        playVideoEnd();
      }
    });
  });
};

//////////////////////////////////////////////////////////////////////////////////
//addEventListener of all buttons
resetParameters.addEventListener("click", () => {
  modalParameter.classList.add("active");
  modalParameter.classList.remove("modal-parameter");
  contentGame.classList.remove("active");
  contentGame.classList.add("modal-game");
  return;
});

// button choice stop game
endGame.addEventListener("click", () => {
  contentGame.classList.remove("active");
  contentGame.classList.add("modal-game");
  stopGame.classList.add("active");
  stopGame.classList.remove("modal-stop-game");
  const warning = document.querySelector(".warning");
  warning.textContent = "Voulez-vous quitter le jeu du pendu ?";
});

// button go game modale du jeu
btnGame.addEventListener("click", () => {
  contentGame.classList.add("active");
  contentGame.classList.remove("modal-game");
  noVisibleStopGame();
});

// button go game 2 modal du score
btnGame2.addEventListener("click", () => {
  noVisibleStopGame();
  window.location.replace("index.html");
});

// button stop game modal du jeu
stopG.addEventListener("click", () => {
  noVisibleStopGame();
  window.location.replace("https://www.google.fr");
});

// button stop game 2 modal du score
stopG2.addEventListener("click", () => {
  stopGame.classList.remove("active");
  stopGame.classList.add("modal-win-lost-game");
  window.location.replace("https://www.google.fr");
});

//function no visible modal stopGame
const noVisibleStopGame = () => {
  stopGame.classList.remove("active");
  stopGame.classList.add("modal-stop-game");
};

/////////////////////////////////////////////////////////////////////////////////
//function seek letter of the word
const seekLetter = userLetter => {
  tempSelectWord = [...selectWord];
  return tempSelectWord.map((letter, i) => {
    if (displayLetter[i] !== "_") return displayLetter[i];
    if (letter === userLetter) {
      letterFound = true;
      return userLetter;
    } else {
      return "_";
    }
  });
};
