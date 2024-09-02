const categories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((value, index, array) => {
    console.log(`Category: ${value.querySelector("h2").textContent}`);
    console.log(`Elements: ${value.querySelectorAll("li").length}`);
});
