let inputLength = document.querySelector('#validation-input');
const focusValidinput=()=>{
    console.log(inputLength.value.length);
    console.log(inputLength.getAttribute('data-length'));

if (Number(inputLength.dataset.number) !== inputLength.value.length) {
    inputLength.classList.remove('valid');
    inputLength.classList.add('invalid')
    
} else {
     inputLength.classList.remove('invalid');
    inputLength.classList.add('valid')
    }
};
inputLength.addEventListener('blur',focusValidinput)