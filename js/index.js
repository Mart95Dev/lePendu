import { pendu } from './canvas1.js';
import { twoGamers } from './canvas2.js';

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
      pendu.get(count)();
      letterFound = false;
    }
    letterFound === true ? (letterFound = false) : '';
    wordHide.textContent = displayLetter.join(''); // display DOM
  });
});
