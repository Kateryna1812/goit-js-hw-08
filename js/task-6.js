

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function createBoxes() {
  const inputNumber = document.querySelector('.number-one');
  const boxesContainer = document.getElementById('boxes');

  const amount = Number(inputNumber.value);

  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100');
    return;
  }

  clearBoxes();

  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);

    size += 10;
  }

  inputNumber.value = '';
}

function clearBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
}

function destroyBoxes() {
  clearBoxes();
}

document.addEventListener('DOMContentLoaded', function () {
  const createButton = document.querySelector('.number-two');
  const destroyButton = document.querySelector('.number-three');

  createButton.addEventListener('click', createBoxes);
  destroyButton.addEventListener('click', destroyBoxes);
});
