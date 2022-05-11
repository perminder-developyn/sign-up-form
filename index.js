const form = document.getElementById('form');
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('mail');
const password = document.getElementById('password');



function validate(){
    form.addEventListener("click", clear);
    function clear(){
        document.querySelector('#fn-error').style.display = "none";
        document.querySelector('#ln-error').style.display = "none";
        document.querySelector('#email-error').style.display = "none";
        document.querySelector('#password-error').style.display = "none";
    }
   
if(firstName.value === ""){
    document.querySelector('#fn-error').style.display = "block";
}
if(lastName.value === ""){
    document.querySelector('#ln-error').style.display = "block";
}
if(email.value === ""){
    document.querySelector('#email-error').style.display = "block";
}
if(password.value === ""){
    document.querySelector('#password-error').style.display = "block";
}
console.log(firstName.value)
}

