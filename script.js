'use strict';


const btnCheck = document.querySelector('.check');
const message = document.querySelector('.message');
const displayScore = document.querySelector('.score');
const btnAgain = document.querySelector('.again');
const guess = document.querySelector('.guess');
//const highScore = document.querySelector('.highscore')


let score = 20;
let highscore = 0;
let secretNumber = (Math.trunc(Math.random() * 20) ) + 1;

btnCheck.addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)

    // when there is no imput 
    if (!guess) {
        message.textContent = 'No number! 😢'
    }
    // when the player wins
    else if (guess === secretNumber) {
        message.textContent = 'Correct number! 😁'
        document.querySelector('body').style.background = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber;

        if (score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = score
        }
    
    // when the guess is too high
    } else if (guess > secretNumber) {

        if (score > 1) {
            message.textContent = 'Too high! 😒'
            score--
            displayScore.textContent = score
        } else {
            message.textContent = 'You lost the game! 😒'
            displayScore.textContent = 0
        }
        
    }
    // when the guess is too low
    else if (guess < secretNumber) {
        if (score > 1) {
            message.textContent = 'Too low! 😒'
            score--
            displayScore.textContent = score
        } else {
            message.textContent = 'You lost the game! 😒'
            displayScore.textContent = 0
        }   
    }
});

///  Again Button

btnAgain.addEventListener('click', function() {

    secretNumber = (Math.trunc(Math.random() * 20) ) + 1;
    score = 20;
    message.textContent = 'Start guessing! 😍';
    guess.textContent = '';
    displayScore.textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem' 
    document.querySelector('.number').textContent = '?'; 
    guess.value = '';
});



