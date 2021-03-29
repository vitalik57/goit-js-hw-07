// const input = document.querySelector('name-input');
// const output = document.querySelector('name-output');
const refs = {
    input: document.querySelector('name-input'),
    output: document.querySelector('name-output')
}
const word = 'незнакомец';
refs.output.textContent = word;
refs.input.addEventListener('input', onInputChange);
function onInputChange(event) {
    if (event.target.value.length > 0) {
        refs.output.textContent =event.target.value
    } else {
        refs.output.textContent = word
    }
  
    
 }