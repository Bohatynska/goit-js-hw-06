const ulCategoriesRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${ulCategoriesRef.length}`);

ulCategoriesRef.forEach((element) => {
  return console.log(`Category: ${element.querySelector("h2").textContent}
    Elements: ${element.querySelectorAll("li").length}`);
});
