const body = document.body;
const container = document.querySelector(".container");

drawGrid(16);

const button = document.querySelector('button');

button.addEventListener('click', reset);
body.appendChild(button);

function drawGrid(userSize) {
  if (userSize > 100 || userSize < 1 || userSize === null || userSize === undefined || userSize === '') return;

  let currentSize = document.querySelectorAll('.row').length;
  for (let i = 0; i < currentSize; i++) {
    let element = document.querySelector('.row');
    element.remove();
  }
  for (let i = 0; i < userSize; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < userSize; j++) {
      let column = document.createElement('div');
      column.classList.add('column');
      column.addEventListener('mouseover', () => {
        let color = getRandomColor();
        column.style.backgroundColor = color;
      })
      row.appendChild(column);
    }
    container.appendChild(row);
  }
}

function reset() {
  let userSize = prompt('How many sides?');
  drawGrid(userSize);
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}