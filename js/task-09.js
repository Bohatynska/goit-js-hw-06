const btnRef = document.querySelector(".change-color");
// console.log(btnRef);
const handleClick = () => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
};

btnRef.addEventListener("click", handleClick);

// Напиши скрипт, который изменяет цвета фона элемента < body >
//   через инлайн стиль при клике на button.change - color и выводит
//   значение цвета в span.color.
//   Для генерации случайного цвета используй функцию getRandomHexColor.

{
  /* <div class="widget">
  <p>
    Background color: <span class="color">-</span>
  </p>
  <button type="button" class="change-color">
    Change color
  </button>
</div>; */
}
