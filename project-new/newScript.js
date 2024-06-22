const body = document.querySelector('body')
const div = document.createElement('div')
const buttonRock = document.createElement('button')
const buttonPaper = document.createElement('button')
const buttonScissors = document.createElement('button')
const answer = document.createElement('p')
const div2 = document.createElement('div')
const title = document.createElement('h2')
const myScore = document.createElement('h3')
const pcScore = document.createElement('h3')

buttonRock.textContent = "Rock"
buttonPaper.textContent = "Paper"
buttonScissors.textContent = "Scissors"
title.textContent = "Your choice:"

myScore.textContent = "You:0"
pcScore.textContent = "Computer:0"

div.setAttribute('id', "div-buttons")
buttonRock.setAttribute('id', "idRock")
buttonPaper.setAttribute('id', "idPaper")
buttonScissors.setAttribute('id', "idScissors")


buttonPaper.style.margin = "10px"
body.appendChild(title)
body.appendChild(div)
div2.appendChild(answer)
div.appendChild(buttonRock)
div.appendChild(buttonPaper)
div.appendChild(buttonScissors)
div.appendChild(div2)
div2.appendChild(myScore)
div2.appendChild(pcScore)

let myScoreboard = 0
let pcScoreboard = 0

div.addEventListener('click', (e)=>{
let userChoice = ""
    switch(e.target.id){
        case 'idRock':
            userChoice = "rock"
            break;
        case 'idPaper':
            userChoice = "paper"   
            break;
        case 'idScissors':
            userChoice = "scissors"
            break;
    }
    console.log('Minha escolha: ' + userChoice)

    const machineChoice = () => {
        let randomNum = Math.floor(Math.random() * 3) + 1;
        if (randomNum === 1) {
            return 'rock';
        } else if (randomNum === 2) {
            return 'paper';
        } else {
            return 'scissors';
        }
    }

    
    const computerChoice = machineChoice();
    console.log('Escolha do computador: ' + computerChoice)


    if (userChoice === computerChoice){
        answer.textContent = "Draw :/"
    }
    else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice ==='rock') ||
        (userChoice === 'scissors' && computerChoice ==='paper') 
    ){
        answer.textContent = "You Win :D"
        myScoreboard +=1
        myScore.textContent = "You:" + myScoreboard

    }
    else {
    answer.textContent = "You Lose :("
    pcScoreboard +=1
    pcScore.textContent = "Computer:" + pcScoreboard
}
    if (myScoreboard + pcScoreboard >= 5 ) {
        if(myScoreboard>pcScoreboard){
            div2.removeChild(myScore)
            div2.removeChild(pcScore)
            pcScoreboard = 0
            myScoreboard = 0
            answer.textContent = "YOU WIN THE GAME! END."
            myScore.textContent = "You:0"
            pcScore.textContent = "Computer:0"
            div2.appendChild(myScore)
            div2.appendChild(pcScore)
        }
        else {
            div2.removeChild(myScore)
            div2.removeChild(pcScore)
            pcScoreboard = 0
            myScoreboard = 0
            answer.textContent = "YOU LOSE THE GAME!! THE END :("
            myScore.textContent = "You:0"
            pcScore.textContent = "Computer:0"
            div2.appendChild(myScore)
            div2.appendChild(pcScore)
        }

    }
})




