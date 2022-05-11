const form = document.getElementById('form');
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('mail');
const password = document.getElementById('password');



function validate(){
   
if(firstName.innerHTML === ''){
    document.querySelector('#fn-error').style.display = "block";
}
if(lastName.innerHTML === ''){
    document.querySelector('#ln-error').style.display = "block";
}
if(email.innerHTML === ''){
    document.querySelector('#email-error').style.display = "block";
}
if(password.innerHTML === ''){
    document.querySelector('#password-error').style.display = "block";
}
console.log("hi")
}

