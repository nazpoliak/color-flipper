const btn = document.getElementById('btn');
const colors = ['Red', 'Blue', 'Yellow', 'Black', 'Brown', 'Violet'];
const color = document.querySelector('.color-simple');
const container = document.querySelector('.container-simple');

btn.addEventListener('click', function () {
    const randomColor = colors[getRandomIndex()];
    container.style.backgroundColor = randomColor;
    color.textContent = randomColor;
    color.style.color = randomColor;
})

const getRandomIndex = () => Math.floor(Math.random() * (colors.length));