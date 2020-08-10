const form = document.getElementById('login-form');

const email = document.getElementById('email');
const password = document.getElementById('password');
const small = form.querySelector('small');

//show error
function showError(input, message) {
    const formInput = input;
    formInput.classList.add('error');
    small.classList.add('errorMessage');
    small.innerText = message;
}
//show successs
function showSuccess(input) {
    const formInput = input;
    small.classList.remove('errorMessage');
    formInput.classList.remove('error');
    formInput.classList.add('success');
    console.log("success");
}


function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
        
    }else {
        showError(input,'Email is invalid');
    }
}

form.addEventListener('submit',function(e) {
    e.preventDefault();
    checkEmail(email);

});