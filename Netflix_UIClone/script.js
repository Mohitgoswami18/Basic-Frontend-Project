console.log("script is working");



const submit = document.getElementById('submit');
const user = document.getElementById('email-id');
const password = document.getElementById('password');
const heading = document.getElementById('main-heading');

submit.addEventListener('click', ()=>{
    users = {
        email:user.value ,
        password:password.value
    }

    window.localStorage.setItem('user',JSON.stringify(users));
    heading.innerText = `Welcome ${user.value}`;
})
