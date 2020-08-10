const form = document.getElementById('form');
const email = document.getElementById('email');

//show error
function showError(input, message) {
    const formInput = input;
    const sm = input.nextElementSibling;
    formInput.classList.add('error');
    sm.classList.add('errorMessage');
    sm.innerText = message;
}
//show successs
function showSuccess(input) {
    const formInput = input;
    const sm = input.nextElementSibling;
    sm.classList.remove('errorMessage');
    formInput.classList.remove('error');
    formInput.classList.add('success');
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

