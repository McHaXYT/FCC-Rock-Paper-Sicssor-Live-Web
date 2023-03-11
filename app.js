const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDsiplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice 
let computerChoice
let final


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.innerHTML
    userChoiceDsiplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
    if (randomNumber === 1) {
        computerChoice = '🗿'
    }
    if (randomNumber === 2) {
        computerChoice = '✂️'
    }
    if (randomNumber === 3) {
        computerChoice = '📄'
    }
    computerChoiceDisplay.innerHTML = computerChoice
};

function getResult() {
    if (computerChoice === userChoice) {
        final = 'Its A Draw !'
    }
    if (computerChoice === '🗿' && userChoice === '📄') {
        final = 'You Win !'
    }
    if (computerChoice === '🗿' && userChoice === '✂️') {
        final = 'You Lost !'
    }
    if (computerChoice === '📄' && userChoice === '✂️') {
        final = 'You Win !'
    }
    if (computerChoice === '📄' && userChoice === '🗿') {
        final = 'You Lost !'
    }
    if (computerChoice === '✂️' && userChoice === '🗿') {
        final = 'You Win !'
    }
    if (computerChoice === '✂️' && userChoice === '📄') {
        final = 'You Lost !'
    }
 
    resultDisplay.innerHTML = final
}





