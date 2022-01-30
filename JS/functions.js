////////////////////////-- import --//////////////////////////////
import {
  elementHit,
  parametersChoices,
  wordPendu,
  contentGame
} from "./app.js";

//////////////////////////////////////////////////////////////////
////////////////////////-- Variables --//////////////////////////
const endLost = {
  content: false
};
const modalLostWinGame = document.querySelector(".modal-win-lost-game");
/////////////////////////////////////////////////////////////////

// video function that triggers depending on the end of the game: win or lose
const playVideoEnd = () => {
  const containerVideo = document.querySelector(".container-video");
  containerVideo.classList.add("active-video");
  containerVideo.classList.remove("container-video");
  const videoEnd = document.getElementById("playVid");
  if (endLost.content) {
    videoEnd.insertAdjacentHTML(
      "afterbegin",
      `<source src="./video/LePendu.mp4" type="video/mp4">`
    );
    videoEnd.play();
    setTimeout(() => {
      modalEnd();
      smileysEnd();
    }, 12000);
    endLost.content = false;
    return;
  } else {
    videoEnd.insertAdjacentHTML(
      "afterbegin",
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

//smileys function which is displayed according to the number of attempts made to find the word
const smileysEnd = () => {
  const smileyWordHit = document.getElementById("img");
  let scorePercentEnd = "";
  if (elementHit.count === 0) {
    scorePercentEnd =
      (elementHit.tempCountHit - elementHit.count) /
      elementHit.tempCountHit *
      100;
  } else {
    scorePercentEnd = elementHit.tempCountHit / elementHit.tempCountHit * 100;
  }

  if (scorePercentEnd < 26) {
    smileyWordHit.setAttribute("src", "/svg/en-colere.svg");
  }
  if (scorePercentEnd > 25 && scorePercentEnd < 51) {
    smileyWordHit.setAttribute("src", "svg/malheureux.svg");
  }
  if (scorePercentEnd > 50 && scorePercentEnd < 76) {
    smileyWordHit.setAttribute("src", "/svg/sourire.svg");
  }
  if (scorePercentEnd > 75) {
    smileyWordHit.setAttribute("src", "/svg/heureux.svg");
  }
  return;
};
//// revoir la logique des calculs je suis perdu!! le 30/01/22
/// ajouter un bouton modifier à la modale paramètres désactiver au choix des paramètres. activer à la
//modification des paramètres et désactiver le bouton valider

//function that displays the end modal with the smiley face and the percentage and number of attempts
const modalEnd = () => {
  let titleEndGame = "";
  let numberWordEndGame = 0;
  let percentWord = 0;
  let numberHitEndGame = 0;
  if (elementHit.count === 0) {
    titleEndGame = `MALHEUREUSEMENT ! ${parametersChoices.name.toUpperCase()}, vous avez perdu la partie `;
    numberWordEndGame = elementHit.tempCountHit - berWordGame;
    percentWord =
      (wordPendu.numberWordGame - wordPendu.tempNumberWordGame) /
      wordPendu.numberWordGame *
      100;
    numberHitEndGame = elementHit.tempCountHit;
  } else {
    titleEndGame = `SUPER ! ${parametersChoices.name.toUpperCase()}, vous avez gagné la partie `;
    numberWordEndGame = wordPendu.tempNumberWordGame;
    percentWord = wordPendu.tempNumberWordGame / wordPendu.numberWordGame * 100;
    numberHitEndGame = (elementHit.count - elementHit.tempCountHit) * -1;
  }
  contentGame.classList.remove("active");
  contentGame.classList.add("modal-game");
  modalLostWinGame.classList.add("active");
  modalLostWinGame.classList.remove("modal-win-lost-game");
  modalLostWinGame.insertAdjacentHTML(
    "afterbegin",
    `<div class="lost-win">
        <p class="win-lost-text1">${titleEndGame}</p>        
       <p class="win-lost-text2"> Il vous a fallu <button class="total-hit btn-end-display">${numberHitEndGame}</button> tentatives  / <button class="total-hit btn-end-display">${elementHit.tempCountHit} </button> pour essayer de trouver le mot caché</p> 
       <div class="smileys">          
       <div class="smiley-word-hit"><img id="img"></div>
   </div>
    </div>`
  );
  return;
};

export { endLost, playVideoEnd };