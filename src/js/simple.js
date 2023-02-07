const btn = document.getElementById('btn');
const colors = ['red', 'blue', 'yellow', 'black', 'brown', 'violet'];
const color = document.querySelector('.color');
const container = document.querySelector('.container');

btn.addEventListener('click', function () {
    const randomColor = colors[getRandomIndex()];
    container.style.backgroundColor = randomColor;
    color.textContent = randomColor;
    color.style.color = randomColor;
})

const getRandomIndex = () => Math.floor(Math.random() * (colors.length));