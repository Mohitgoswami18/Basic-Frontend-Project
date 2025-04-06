console.log('hello');

const form = document.getElementById('auth-form');
const signIn = document.getElementById('signInBtn');
const main = document.getElementsByTagName('main')[0];
const signUp = document.getElementById('signUpBtn');
const plate = document.getElementById('plate');
const username = document.getElementById('username');
const suggestion = document.getElementById('suggestion-para');
const submit = document.getElementById('submit-btn');
userDetails = [];
let name = document.getElementById('Username');
let email = document.getElementById('email');
let password = document.getElementById('password');

mainEvent = 'signUp';
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (mainEvent === 'signIn') {
        signing_in();
    } else {
        signing_up();
    }
});


signIn.addEventListener('click',()=>{
    plate.style.transform = 'TranslateX(70px)';
    signIn.classList.remove('disabled');
    signUp.classList.add('disabled');
    username.classList.add('hidden');
    mainEvent = 'signIn';
    clearTheValue();
    suggestion.innerHTML = 'Forgot password <a href="#" class="text-blue-950 outline-none "> &nbsp; click here!</a>'
})

signUp.addEventListener('click',()=>{   
    plate.style.transform = 'TranslateX(0px)';
    signIn.classList.add('disabled');
    signUp.classList.remove('disabled');
    username.classList.remove('hidden');
    mainEvent = 'signUp';
    clearTheValue();
    suggestion.innerHTML = 'Suggest strong password <a href="#" class="text-blue-950 outline-none "> &nbsp; click here!</a>'
})

function clearTheValue() {
   
    name.value = "";
    email.value = '';
    password.value = '';

}
// main logic of JavaScript


function signing_in() {
    let flag = false;
    userDetails.forEach((elem,idx) => {
        currentEmail = userDetails[idx].email;
        currentPassword = userDetails[idx].password;

        if(currentEmail === email.value && currentPassword === password.value) {
            console.log(main);
            main.innerHTML= `<h1> welcome ${userDetails[idx].username} :) </h1>`;
            main.style.display = 'flex';
            main.style.alignItems = 'center';
            main.style.justifyContent = 'center';
            main.style.fontSize = '20px';
            flag = true;
            return;
        }  

    });

    if(!flag) {
        alert('Invalid Credentials , Try Again with correct email and password');
    }
}

function signing_up() {
    currentUser = {
        'username':name.value ,
        'email' : email.value ,
        'password' : password.value
    };

    userDetails.push(currentUser);
    window.localStorage.setItem('UserDetail',JSON.stringify(userDetails));
    
    alert('sign up was successfull !');
}
