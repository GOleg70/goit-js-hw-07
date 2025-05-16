const itemCategories = document.querySelector('#categories');
const liElements = itemCategories.querySelectorAll('.item');
console.log("Number of categories:" + (liElements.length));


for (const itemLi of liElements) {
    const categoryTitle = itemLi.querySelector('.titleUl');
    console.log("Category: " + categoryTitle.textContent);
    const itemLiCategory = itemLi.querySelectorAll('.itemList')
    console.log("Elements: " + itemLiCategory.length);
 
}

