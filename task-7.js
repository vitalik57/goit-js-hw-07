let newInputElement = document.querySelector('#font-size-control');
let newText = document.querySelector('#text')
newInputElement.addEventListener('input',changeFont)
function changeFont(el) {
    console.log(el);
    newText.style.fontSize = `${el.target.value}px`
}