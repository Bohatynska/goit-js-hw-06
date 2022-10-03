// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// проверяет его содержимое на правильное количество введённых символов.

//     Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.
{
  /* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>; */
}

const inputRef = document.querySelector("#validation-input");
const symbolLength = inputRef.getAttribute("data-length");
// console.log(inputRef);
// console.log(symbolLength);

inputRef.addEventListener("blur", (event) => inputFocus(event));
function inputFocus(event) {
  if (event.currentTarget.value.length == symbolLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
}
event.addEventListener("blur", (event) => inputFocus(event));
