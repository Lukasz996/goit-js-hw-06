const superAnimal = document.querySelector("#categories");
const categories = superAnimal.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);
categories.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});




// const categoriesList = document.querySelector('#categories')
// const categoriesItems = categoriesList.querySelectorAll('.item')
// console.log(`Number of categories: ${categoriesItems.length}`)

// categoriesItems.forEach(category => {
// 	const categoryName = category.querySelector('h2').textContent
// 	const elementsCount = category.querySelectorAll('li').length
// 	console.log(`Category: ${categoryName} Elements: ${elementsCount}`)
// });
