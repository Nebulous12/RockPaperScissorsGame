const computerChoiceDisplay = document.getElementById('Computer-Choice');
const userChoiceDisplay = document.getElementById('User-Choice');
const resultDisplay = document.getElementById('Result');
const possibleChoice =  document.querySelectorAll('button')

let userChoice;
let compChoice;

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener
    ('click', function(e){
         userChoice = e.target.id;
        userChoiceDisplay.innerHTML = userChoice

        generateComputerChoice()
    }))


function generateComputerChoice(){
    
    
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if(randomNumber === 1){
        compChoice = 'Rock'
    }else if(randomNumber === 2){
        compChoice = 'Paper'
    }else{
        compChoice = 'Scissor'
    }

    computerChoiceDisplay.innerHTML = compChoice;
    getResult();
}
function getResult(){

if (compChoice === 'Paper' && userChoice ==='Rock'){
    resultDisplay.innerHTML = 'You Lose'
}else if(compChoice === 'Scissor'&& userChoice === 'Paper'){
    resultDisplay.innerHTML = 'You Lose'
}else if(compChoice === 'Rock'&& userChoice === 'Scissor' ){
    resultDisplay.innerHTML = 'You Lose'
}else if(compChoice === userChoice){
    resultDisplay.innerHTML = `It's a Draw`
}else{
    resultDisplay.innerHTML = 'You Win'
}
}

