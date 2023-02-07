const btn = document.getElementById('btn');
const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const color = document.querySelector('.color-hex');
const container = document.querySelector('.container-hex');

btn.addEventListener('click', function() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += colors[getRandomIndex()];
    }
    container.style.backgroundColor = hexColor;
    color.textContent = hexColor;
    color.style.color = hexColor;
})

const getRandomIndex = () => Math.floor(Math.random() * (colors.length));