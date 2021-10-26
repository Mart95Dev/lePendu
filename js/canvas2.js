/////function code canvas two gamers
const twoGamers = () => {
  const reset = document.getElementById('reset');
  let color = document.getElementById('color');

  const canvas = document.getElementById('draw2');
  const ctx = canvas.getContext('2d');
  let color = document.getElementById('color');
  canvas.width = 350;
  canvas.height = 450;

  const colorCanvas = (e) => {
    color = e.target.value;
    console.log(color);
  };

  color.addEventListener('input', colorCanvas);

  // fucntion mouse position = moveTo on canvas
  const getMousePosition = (e) => {
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };
  // function mouseMove = LineTo on canvas
  const mouseMove = (e) => {
    const mousePos = getMousePosition(e);
    ctx.lineTo(mousePos.x, mousePos.y);
    ctx.stroke();
    ctx.strokeStyle = color;
    ctx.lineWidth = 10;
  };

  // event on canvas with mouse
  canvas.addEventListener('mousedown', (e) => {
    e.preventDefault();
    const mousePos = getMousePosition(e);
    ctx.beginPath();
    ctx.moveTo(mousePos.x, mousePos.y);

    canvas.addEventListener('mousemove', mouseMove);
    canvas.addEventListener('mouseup', () => {
      canvas.removeEventListener('mousemove', mouseMove);
    });
  });

  // event reset canvas
  reset.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
};

export { twoGamers };
