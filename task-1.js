const newLink = document.querySelectorAll(".item");
const allLiItem = newLink.length;
console.log(`В списке ${allLiItem} категории.`);

const title = document.querySelector("h2");
const titleContent= title.textContent
console.log(titleContent);

newLink.forEach(el =>{
    console.log(el.querySelector('h2').textContent);
    console.log(el.querySelectorAll('li').length); 
})