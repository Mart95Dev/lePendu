//////////////////////////////////
// ce fichier est le code du demarrage du jeu avec les regles, les paramètres de choix et lancement du jeu du pendu
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
const buttonValid = document.querySelector(".btn");
const idHit = document.getElementById("hit");

const elementHit = {
  countHit: 0,
  tempCountHit: 0
};

const wordPendu = {
  numberWordGame: 1,
  tempNumberWordGame: 0
};

const parametersChoices = {
  name: null,
  difficult: null,
  error: null
};

export {
  idPseudo,
  idLevel,
  idHit,
  elementHit,
  parametersChoices,
  wordPendu,
  contentGame,
  modalParameter,
  buttonValid,
  choicesInputParameters,
  choiceLevelAndCountHit
};
///////////////////////-- Import ---//////////////////////////////////////////////////////////
import { gameWordPendu } from "./game.js"; /// --> fonction qui permet de jouer au jeu du pendu

///////////////////// MODALE d'ouverture du jeu ///////////////////////////////
window.onload = () => {
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

const choicesInputParameters = () => {
  //choice pseudo player
  pseudoOne.addEventListener("input", e => {
    parametersChoices.name = e.target.value;
  });

  // choice level difficult
  levelGame.forEach(level => {
    level.addEventListener("click", e => {
      parametersChoices.difficult = e.target.id;
      level.setAttribute("checked", "");
    });
  });
  return;
};

choicesInputParameters();

/// button Valid parameters choices
buttonValid.addEventListener("click", e => {
  verify();
  if (parametersChoices.error) {
    e.preventDefault;
    parametersChoices.error = false;
  } else {
    modalParameter.classList.remove("active");
    modalParameter.classList.add("modal-parameter");
    contentGame.classList.add("active");
    contentGame.classList.remove("modal-game");
    wordPendu.tempNumberWordGame = wordPendu.numberWordGame;

    idPseudo.textContent = parametersChoices.name.toString().toUpperCase();
    idLevel.textContent = parametersChoices.difficult.toString().toUpperCase();
    idWord.textContent = wordPendu.numberWordGame;

    choiceLevelAndCountHit();

    idHit.textContent = elementHit.countHit;
    gameWordPendu();
  }
});

////////----function verified inputs----////////
const verify = () => {
  if (parametersChoices.difficult === null && parametersChoices.name === null) {
    alert("Veuillez renseigner tous les paramètres");
    parametersChoices.error = true;
    return;
  }

  if (parametersChoices.name === null || parametersChoices.name === "") {
    alert("Vous avez oublié de saisir le pseudo");
    parametersChoices.error = true;
    return;
  }

  if (parametersChoices.difficult === null) {
    alert("Veuillez choisir un niveau de difficulté !");
    parametersChoices.error = true;
    return;
  }
};

////////////
const choiceLevelAndCountHit = () => {
  if (parametersChoices.difficult == "Facile") {
    elementHit.countHit = 11;
    elementHit.tempCountHit = 11;
  } else if (parametersChoices.difficult == "Moyen") {
    elementHit.countHit = 9;
    elementHit.tempCountHit = 9;
  } else {
    elementHit.countHit = 5;
    elementHit.tempCountHit = 5;
  }
  return;
};
