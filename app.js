const form = document.querySelector('.container__form');
const inputEmail = document.querySelector('.container__email');
const error = document.querySelector('.container__error');

form.addEventListener('submit', (event)=>{
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(re.test(inputEmail.value) == true){
        inputEmail.style.border = '1px solid hsl(0, 36%, 70%)';
        inputEmail.style.backgroundImage = 'url("")';
        error.innerHTML = '';

    }else{
        event.preventDefault();
        inputEmail.style.border = '1px solid red';
        inputEmail.style.backgroundImage = 'url("../images/icon-error.svg")';
        error.innerHTML = 'please provide a valid email';
    }
})