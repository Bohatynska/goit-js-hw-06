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
const textInputRef = document.querySelector("input");
const validInputRef = document.querySelector("#validation-input");
console.log(textInputRef);
console.log(validInputRef);
textInputRef.addEventListener("focus", () => {
  textInputRef.border = validInputRef.valid;
});

// const textInput = document.querySelector(".text-input");
// textInput.addEventListener("focus", () => {
//   textInput.value = "This input has focus";
// });

// textInput.addEventListener("blur", () => {
//   textInput.value = "";
// });
