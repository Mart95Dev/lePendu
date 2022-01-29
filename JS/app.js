/////////////////////////////////--variables--///////////////////////////////////
const modalRule = document.querySelector(".modal-rules");
const buttonParameter = document.getElementById("begin");
const contentGame = document.querySelector(".modal-game");
const modalParameter = document.querySelector(".modal-parameter");
const idGamer = document.getElementById("1");
const pseudoOne = document.getElementById("p1");
const levelGame = document.querySelectorAll('input[name="level"]');
const idPseudo = document.getElementById("pseudo");
const idLevel = document.getElementById("level");
const idWord = document.getElementById("word");
const valid = document.querySelector(".btn");
const idHit = document.getElementById("hit");
let countNumberHit = 0;
let numberWordGame = 1;
let tempNumberWordGame = 0;
let tempCountHit = 0;
let nameOne = null;
let difficult = null;
let error = false;

export { countNumberHit, difficult };
///////////////////////-- Import ---//////////////////////////////////////////////////////////
import { gameWordPendu } from "./game.js"; /// --> fonction qui permet de jouer au jeu du pendu

///////////////////// MODALE d'ouverture du jeu ///////////////////////////////
window.onload = () => {
  console.log("yes");
  modalRule.classList.add("active");
  modalRule.classList.remove("modal-rules");
};

buttonParameter.addEventListener("click", () => {
  modalRule.classList.remove("active");
  modalRule.classList.add("modal-rules");
  modalParameter.classList.add("active");
  modalParameter.classList.remove("modal-parameter");
});
////////////// Parameters game ///////////////////////////
idGamer.checked = true;
//choice pseudo player
pseudoOne.addEventListener("input", e => {
  nameOne = e.target.value;
});

// choice level difficult
levelGame.forEach(level => {
  level.addEventListener("click", e => {
    difficult = e.target.id;
    level.setAttribute("checked", "");
  });
});

/// valid parameters choices
valid.addEventListener("click", e => {
  verify();
  if (error) {
    e.preventDefault;
    error = false;
  } else {
    modalParameter.classList.remove("active");
    modalParameter.classList.add("modal-parameter");
    contentGame.classList.add("active");
    contentGame.classList.remove("modal-game");
    tempNumberWordGame = numberWordGame;

    idPseudo.textContent = nameOne.toString().toUpperCase();
    idLevel.textContent = difficult.toString().toUpperCase();
    idWord.textContent = numberWordGame;

    if (difficult == "Facile") {
      countNumberHit = 11;
      tempCountHit = 11;
    } else if (difficult == "Moyen") {
      countNumberHit = 9;
      tempCountHit = 9;
    } else {
      countNumberHit = 5;
      tempCountHit = 5;
    }

    idHit.textContent = countNumberHit;
    gameWordPendu();
  }
});

////////----function verified inputs----////////
const verify = () => {
  if (difficult === null && nameOne === null) {
    alert("Veuillez renseigner tous les paramètres");
    error = true;
    return;
  }

  if (nameOne === null || nameOne === "") {
    alert("Vous avez oublié de saisir le pseudo");
    error = true;
    return;
  }

  if (difficult === null) {
    alert("Veuillez choisir un niveau de difficulté !");
    error = true;
    return;
  }
};
