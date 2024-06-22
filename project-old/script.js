// Função para obter a escolha do computador
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        console.log('Computer choice: rock');
        return 'rock';
    } else if (randomNum === 2) {
        console.log('Computer choice: paper');
        return 'paper';
    } else {
        console.log('Computer choice: scissors');
        return 'scissors';
    }
}

// Função para obter a escolha do humano
function getHumanChoice() {
    let userChoice = parseInt(prompt('1=rock / 2=paper / 3=scissors'));
    if (userChoice === 1) {
        console.log('rock');
        return 'rock';
    } else if (userChoice === 2) {
        console.log('paper');
        return 'paper';
    } else if (userChoice === 3) {
        console.log('scissors');
        return 'scissors';
    } else {
        console.error('invalid input');
        return null;
    }
}

// Variáveis globais de pontuação
let humanScore = 0;
let computerScore = 0;

// Função para jogar uma rodada
function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log('Você perdeu! Papel vence pedra');
        computerScore += 1;
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log('Você perdeu! Tesoura vence papel');
        computerScore += 1;
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log('Você perdeu! Pedra vence tesoura');
        computerScore += 1;
    } else if (humanChoice === computerChoice) {
        console.log('Empate');
        // Nenhuma pontuação é alterada em caso de empate
    } else {
        console.log('Você venceu essa rodada!');
        humanScore += 1;
    }
}

// Função para iniciar o jogo
function playGame() {
    console.log(`Pontuação Inicial - Humano: ${humanScore}, Computador: ${computerScore}`);

    let humanChoice = getHumanChoice();
    if (humanChoice !== null) { // Verifica se a escolha do humano é válida
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice); // Joga uma rodada

        console.log(`Pontuação Atual - Humano: ${humanScore}, Computador: ${computerScore}`);
    } else {
        console.log('Escolha inválida, tente novamente.');
    }

    humanChoice = getHumanChoice();
    if (humanChoice !== null) { // Verifica se a escolha do humano é válida
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice); // Joga uma rodada

        console.log(`Pontuação Atual - Humano: ${humanScore}, Computador: ${computerScore}`);
    } else {
        console.log('Escolha inválida, tente novamente.');
    }


    humanChoice = getHumanChoice();
    if (humanChoice !== null) { // Verifica se a escolha do humano é válida
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice); // Joga uma rodada

        console.log(`Pontuação Atual - Humano: ${humanScore}, Computador: ${computerScore}`);
    } else {
        console.log('Escolha inválida, tente novamente.');
    }


     humanChoice = getHumanChoice();
    if (humanChoice !== null) { // Verifica se a escolha do humano é válida
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice); // Joga uma rodada

        console.log(`Pontuação Atual - Humano: ${humanScore}, Computador: ${computerScore}`);
    } else {
        console.log('Escolha inválida, tente novamente.');
    }


     humanChoice = getHumanChoice();
    if (humanChoice !== null) { // Verifica se a escolha do humano é válida
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice); // Joga uma rodada

        console.log(`Pontuação Atual - Humano: ${humanScore}, Computador: ${computerScore}`);
    } else {
        console.log('Escolha inválida, tente novamente.');
    }



}

// Inicia o jogo
playGame();
