const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
    'Приправы',]
    const ulEL = document.querySelector("#ingredients")
   
const newEL= ingredients.map(el => {
  const  newLi = document.createElement('li');
   newLi.textContent = el;
   
   return newLi
    })
ulEL.append(...newEL)