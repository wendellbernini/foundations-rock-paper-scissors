function getComputerChoice (){
    let randomNum = Math.floor(Math.random()*3)+1
    if (randomNum === 1){
        console.log('Computer choice: rock') 
        return 'rock'
    }
    else if (randomNum === 2) {
        console.log('Computer choice: paper')
        return 'paper'
    }
    else {
        console.log('Computer choice: scissors')
        return 'scissors'
    }
}


function getHumanChoice (){
    let userChoice = parseInt(prompt('1=rock / 2=paper / 3=scissors'))
    if (userChoice===1){
        console.log('rock')
        return 'rock'
    }
    else if(userChoice===2){
        console.log('paper')
        return 'paper'
    }
    else if (userChoice===3){
        console.log('scissors')
        return 'scissors'
    }
    else {
        console.error('invalid input')
        return null
    }
}



let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice==='rock' && computerChoice ==='paper'){
        console.log('Voce perdeu! Papel vence pedra')
        return computerScore+=1
    }
    else if (humanChoice==='paper' && computerChoice ==='scissors')
        {
            console.log('Voce perdeu! Tesoura vence papel')
            return computerScore+=1
    }
    else if (humanChoice==='scissors' && computerChoice ==='rock')
        {
            console.log('Voce perdeu! Pedra vence tesoura')
            return computerScore+=1
    }
    else if (humanChoice===computerChoice)
        {
            console.log('Empate')
            return computerScore+=1
    }
    else {
        console.log('Voce venceu essa rodada!')
        return humanScore+=1
    }
   
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



playRound(humanSelection, computerSelection);

function playGame (){
   
    }
