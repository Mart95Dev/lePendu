////////////// canvas two gamers ///////////////////////

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

color.addEventListener('input', colorCanvas); */

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
////////////////////////////////////////////////
///////////////////////////////////////////////
pseudoTwo.addEventListener('input', (e) => {
  let two = e.target.value;
  temp.push(two);
  nameTwo = temp.pop();
  temp = [];
});
////////////////////////////////////////////////
 else if (numberPlayer == 2 && nameTwo === null) {
    alert('Veuillez saisir le pseudo 2');
    error = true;
    return;
  }
   ///////////////////////////////////////////////////
   //// phrase a rajouter en cas de modification du code avec choix de plusieurs mots pour gagner une partie
   <p class="win-lost-text2"> Vous avez trouvé <button class="total-word btn-end-display">${numberWordEndGame} </button> mot, soit <button class="word-percent btn-end-display">${percentWord}%</button> du total des mots choisis</p>
   //////////////////////////////////////////////////