const ulCategoriesRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${ulCategoriesRef.length}`);

ulCategoriesRef.forEach((element) => {
  return console.log(`Category: ${element.firstElementChild.textContent}
    Elements: ${element.lastElementChild.children.length}`);
});

// Напиши скрипт который:
// Посчитает и выведет в консоль количество категорий в ul#categories,
//   то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories,
//   найдет и выведет в консоль текст заголовка элемента(тега < h2 >) и
//   количество элементов в категории(всех вложенных в него < li >).
// В результате, в консоли будут выведены такие сообщения.
