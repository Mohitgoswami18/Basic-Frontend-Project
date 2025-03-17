console.log("Welcome to the Color Guessing Game");
const optionContainer = document.getElementsByClassName('optionContainer')[0];
const question = document.getElementById('question');
let score = document.getElementById('score');
let highScore = document.getElementById('highScore');
// if (localStorage.getItem('highScore') === null) {
//     localStorage.setItem('highScore', 0);
// }

highScore.innerText = `High Score :${window.localStorage.getItem('highScore')}`;

let currentScore = 0;
let currentHighScore = 0;

function genrateNumber(min, max){
    return Math.floor(Math.random()*256);
}

function genrateQuestion(){
    let red = genrateNumber(0,255);
    let green = genrateNumber(0,255);
    let blue = genrateNumber(0,255);
    
    question.innerText = `rgb(${red}, ${green}, ${blue})`;
}

function validateAnswer(el){
    console.log(el.target.style.backgroundColor);
    console.log(question.innerText);
    if(el.target.style.backgroundColor == question.innerText) {
        currentScore++;
        score.innerText = `Score:${currentScore}`;
    } else {
        if(currentHighScore<currentScore){
            currentHighScore = currentScore;
        }
        currentScore = 0;
        score.innerText = `Score:${currentScore}`;
        highScore.innerText = `High Score :${currentHighScore}`;
        window.localStorage.setItem('highScore',currentHighScore);
    }

    startGame();
}

function genrateOptions(){

    let correctIndex = Math.floor(Math.random()*4);
    
    for(let i=0;i<4;i++){
        option = document.createElement('div');
        option.addEventListener('click',validateAnswer)

        let red = genrateNumber(0,255);
        let green = genrateNumber(0,255);
        let blue = genrateNumber(0,255);
        option.style.backgroundColor = i===correctIndex ? `${question.innerText}` : `rgb(${red},${green},${blue})`;
        optionContainer.appendChild(option);
    }
}


function startGame(){
    optionContainer.innerHTML = null;
    genrateQuestion();
    genrateOptions();
}
let option;


window.addEventListener('load',startGame);