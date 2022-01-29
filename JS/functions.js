/// revoir toutes les fonctions pour eliminer tout le code HTML javascript et l'inséer en fix dans le code HTMl
/// afin de l réduire et simplifier le code - fait le 29-01-22
//////////////////////////////////////////////////////////////////
//function that decreases the number of attempts
export const hitNumber = () => {
  const numberHit = document.querySelector(".number-hit");
  numberHit.remove();
  numberHitWord.insertAdjacentHTML(
    "afterbegin",
    `<p class="number-hit">Vous avez <button class="hit">${numberHitCount}</button> tentatives pour retrouver le mot caché</p>`
  );
};

// video function that triggers depending on the end of the game: win or lose
export const playVideoEnd = () => {
  const containerVideo = document.querySelector(".container-video");
  containerVideo.classList.add("active-video");
  containerVideo.classList.remove("container-video");
  const videoEnd = document.getElementById("playVid");
  if (endLost) {
    videoEnd.insertAdjacentHTML(
      "afterbegin",
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
  if (countNumberHitWord === 0) {
    scorePercentEnd = (wordEndGame - tempWordEndGame) / wordEndGame * 100;
  } else {
    scorePercentEnd = tempWordEndGame / wordEndGame * 100;
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

//function that displays the end modal with the smiley face and the percentage and number of attempts
const modalEnd = () => {
  let titleEndGame = "";
  let numberWordEndGame = 0;
  let percentWord = 0;
  let numberHitEndGame = 0;
  if (countNumberHitWord === 0) {
    titleEndGame = `MALHEUREUSEMENT ! ${nameOne.toUpperCase()}, vous avez perdu la partie `;
    numberWordEndGame = wordEndGame - tempWordEndGame;
    percentWord = (wordEndGame - tempWordEndGame) / wordEndGame * 100;
    numberHitEndGame = tempCountHit;
  } else {
    titleEndGame = `SUPER ! ${nameOne.toUpperCase()}, vous avez gagné la partie `;
    numberWordEndGame = tempWordEndGame;
    percentWord = tempWordEndGame / wordEndGame * 100;
    numberHitEndGame = (countNumberHitWord - tempCountHit) * -1;
  }
  contentGame.classList.remove("active");
  contentGame.classList.add("modal-game");
  modalLostWinGame.classList.add("active");
  modalLostWinGame.classList.remove("modal-win-lost-game");
  modalLostWinGame.insertAdjacentHTML(
    "afterbegin",
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
