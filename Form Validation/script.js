const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password');
const password2 = document.getElementById('confirm-password');

form.addEventListener('submit', function(e){
    e.preventDefault();
    checkInput([username, email, password1, password2]);

    if(email.value === '') {
        showError(email, "please enter your Email");
    }else if(!validateEmail(email.value.trim())){
        showError(email, "your email is incorrect")
    }
    else{
        showSuccess(email);
    }

    checkPassword(password1, password2);
    checkInputLength(username, 5, 10);
    checkInputLength(password1, 5, 12);
});

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function checkInput(inputArray) {
    inputArray.forEach(function(input) {
        if(input.value.trim() === ''){
            showError(input, `please enter your ${getInputCase(input)}`)
        }else {
            showSuccess(input);
        }
    })
}

function getInputCase(input) {
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

function checkPassword(password1, password2) {
    if(password1.value !== password2.value) {
        showError(password2, "Your Confirm-password is incorrect");
    }
}

function checkInputLength(input, min, max) {
    if(input.value.length <= min){
        showError(input, `${getInputCase(input)} should longer than ${min} alphabets`)
    }else if(input.value.length >= max) {
        showError(input, `${getInputCase(input)} shouldn't longer than ${max} alphabets`)
    }else{
        showSuccess(input);
    }
}