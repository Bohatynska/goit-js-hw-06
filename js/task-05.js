// Напиши скрипт который, при наборе текста в инпуте input#name - input
//     (событие input), подставляет его текущее значение в span#name - output.
//     Если инпут пустой, в спане должна отображаться строка "Anonymous".

{
  /* <input type="text" id="name-input" placeholder="Please enter your name" />
    <h1>Hello, <span id="name-output">Anonymous</span>!</h1> */
}
const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");
inputRef.addEventListener("input", (event) => {
  outputRef.textContent = event.currentTarget.value;
  if (event.currentTarget.value === " ") {
    outputRef = "Anonymous";
  }
});
