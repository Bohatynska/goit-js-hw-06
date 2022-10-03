function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyRef = document.querySelector("body");
const btnRef = document.querySelector(".change-color");
const colorRef = document.querySelector(".color");
// console.log(btnRef);
btnRef.addEventListener("click", changeColor);
function changeColor() {
  let newColor = getRandomHexColor();
  bodyRef.style.backgroundColor = newColor;
  colorRef.textContent = newColor;
}
