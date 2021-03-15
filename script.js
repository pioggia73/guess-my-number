'use strict';


const btnCheck = document.querySelector('.check');
const message = document.querySelector('.message');


const secretNumber = (Math.trunc(Math.random() * 20) ) + 1;
document.querySelector('.number').textContent = secretNumber;


btnCheck.addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)
    
    if (!guess) {
        message.textContent = 'No number! 😢'
    }
    else if (guess === secretNumber) {
        message.textContent = 'Correct number! 😁'
    }
    else if (guess > secretNumber) {
        message.textContent = 'Too high! 😒'
    }
    else if (guess < secretNumber) {
        message.textContent = 'Too low! 😒'
    }
   
});

