const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
// const small = form.querySelector('small');

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
function checkUserName(input){
    const re = /^[a-z0-9]+$/i;
    if (re.test(input.value.trim())) {
        //Also check the length
        checkLength(username,6,18);
    }else {
        showError(input,'Only alphanumeric characters');
    }
}

function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    }else {
        showError(input,'Email is invalid');
    }
}
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }

function checkLength(input, min, max) {
    if (input.value.length < min) {
      showError(input,`${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
      showError(input,`${getFieldName(input)} must be less than ${max} characters`);
    } else {
      showSuccess(input);
    }
  }
  
function checkPasswordsMatch(input1, input2) {
    if (input1.value.trim() == input2.value.trim()) {
        showSuccess(input2);
    } else {
        showError(input2, "Passwords Do Not Match");
    }
}
form.addEventListener('submit',function(e) {
    e.preventDefault();
    //check username and length
    checkUserName(username);
    checkEmail(email);
    checkLength(password,6,20);
    checkPasswordsMatch(password, password2);
    
});

