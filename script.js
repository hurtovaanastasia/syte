// Добавим интерактивности: сердечко будет менять цвет при клике
const heart = document.getElementById('heart');

heart.addEventListener('click', () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    heart.style.backgroundColor = randomColor;
    heart.style.setProperty('--heart-color', randomColor);
});