////////////////////////////////////////////////////////////////
// canvas one gamer

const canvas = document.getElementById('draw1');
const ctx = canvas.getContext('2d');
canvas.width = 350;
canvas.height = 450;

// function potence 1
const potencePart1 = () => {
  ctx.beginPath();
  ctx.moveTo(30, 400);
  ctx.lineTo(200, 400);
  ctx.moveTo(102, 400);
  ctx.lineTo(102, 50);
  ctx.strokeStyle = 'rgb(124, 80, 8)';
  ctx.lineWidth = 10;
  ctx.stroke();
};

//function potence 2
const potencePart2 = () => {
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

const pendu = new Map();
pendu.set(1, potencePart1);
pendu.set(2, potencePart2);
pendu.set(3, rope);
pendu.set(4, completHead);
pendu.set(5, body);
pendu.set(6, leftArm);
pendu.set(7, rightArm);
pendu.set(8, rightFoot);
pendu.set(9, leftFoot);

export { pendu };
