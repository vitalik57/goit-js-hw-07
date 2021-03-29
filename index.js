// U 1
// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4
// const ulEL = document.querySelectorAll("#categories");
// console.log(ulEL);
// const newLink = document.querySelectorAll(".item");
// const allLiItem = newLink.length;
// console.log(`В списке ${allLiItem} категории.`);

// const title = document.querySelector("h2");
// const titleContent= title.textContent
// console.log(titleContent);

// newLink.forEach(el =>{
//     console.log(el.querySelector('h2').textContent);
//     console.log(el.querySelectorAll('li').length); 
// })

// Задание 2
// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну
// операцию в список ul.ingredients.Для создания DOM - узлов используй document.createElement().
// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//     'Приправы',]
//     const ulEL = document.querySelector("#ingredients")
   
// const newEL= ingredients.map(el => {
//   const  newLi = document.createElement('li');
//    newLi.textContent = el;
   
//    return newLi
//     })
// ulEL.append(...newEL)
//  Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонны
// е строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-класс
