// Счетчик состоит из спана и кнопок, которые,
//     при клике, должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение
// счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или
// уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;
const valueRef = document.querySelector("#value");
const btnDecRef = document.querySelector('button[data-action="decrement"]');
const btnIncRef = document.querySelector('button[data-action="increment"]');
function makeDec() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}
function makeInc() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}
btnDecRef.addEventListener("click", makeDec);
btnIncRef.addEventListener("click", makeInc);
