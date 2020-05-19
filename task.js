// Напиши скрипт, который после нажатия кнопки Start,
// pаз в секунду меняет цвет фона body на случайное значение из массива
// используя инлайн-стиль.
// При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз.
// Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

// Для генерации случайного числа(индекс элемента массива цветов),
// используй функцию randomIntegerFromInterval.

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const start = document.querySelector('button[data-action="start"');
const stop = document.querySelector('button[data-action="stop"');
const body = document.querySelector("body");
let randomColor;

const setRandomColor = () => {
  const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
  console.log(color);
  body.style.backgroundColor = color;
};

start.addEventListener("click", clickStart);
stop.addEventListener("click", clickStop);

let isActive = false;

function clickStart() {
  if (isActive) return;
  isActive = true;
  randomColor = setInterval(setRandomColor, 1000)
};

function clickStop() {
  isActive = false;
  clearInterval(randomColor);
};
