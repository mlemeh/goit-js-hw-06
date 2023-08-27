const catItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${catItems.length}`);
console.log("");

catItems.forEach(item => {
    console.log('Category: '+item.firstElementChild.textContent);
    console.log('Elements: '+item.lastElementChild.children.length);
    console.log("");
})