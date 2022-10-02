const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createLiRef = (ingredients) => {
  return ingredients.map((ingredient) => {
    const liRef = document.createElement("li");
    liRef.textContent = ingredient;
    liRef.classList.add("item");
    // console.log(liRef);
    return liRef;
  });
};
const ulRef = document.querySelector("#ingredients");
const list = createLiRef(ingredients);
console.log(ulRef);
ulRef.append(...list);
