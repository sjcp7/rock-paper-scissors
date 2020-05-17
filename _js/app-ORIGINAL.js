const winMessage = "Congrats, you won!";
const drawMessage = "Hm, it's a tie.";
const loseMessage = "Oh no, you lost! Try harder.";

function getRandomNumber() {
    return Math.floor(Math.random() * 3)
}

function getPlayerSelection() {
    let playerSelection = prompt('Rock, Paper, or Scissors?');
    return playerSelection;
}

function computerPlay() {
    let choiceCode = getRandomNumber();

    if(choiceCode === 0) { 
        return "rock"; 
    }

    else if(choiceCode === 1) { 
        return "paper"; 
    }

    else { 
        return "scissors"; 
    }
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.trim().toLowerCase();

    if (computerSelection === "rock") {

        if(playerSelection === "rock") { 
            return drawMessage;
        }

        else if(playerSelection === 'paper') {
            return winMessage;
        }

        else {
            return loseMessage;
        }
    }

    else if(computerSelection === "paper") {

        if(playerSelection === "rock") {
            return loseMessage;
        }

        else if(playerSelection === "paper") {
            return drawMessage;
        }

        else {
            return winMessage;
        }
    }

    else {

        if(playerSelection === "rock") {
            return winMessage;
        }

        else if(playerSelection === "paper") {
            return loseMessage;
        }

        else {
            return drawMessage;
        }
    }
    
}

function game(rounds = 5) {
    let playerScore = 0;
    let computerScore = 0;
    let draws = 0;

    for(let i = 1; i <= rounds; i++) {
        let playerSelection = getPlayerSelection();
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);            

        if(result === winMessage) {
            playerScore++;
            alert(`${winMessage} ${playerSelection} beats ${computerSelection}!`);         
        }

        else if(result === loseMessage) {
            computerScore++;
            alert(`${loseMessage} ${computerSelection} beats ${playerSelection}!`);
        }

        else {
            draws++;
            alert("It's a draw.");
        }
    }

    let scoreMessage = `Player score = ${playerScore} | Computer score = ${computerScore} | Draws = ${draws}`;

    if(playerScore > computerScore) {
        alert(`You won this match!`);
        alert(scoreMessage);
    }

    else if(computerScore > playerScore) {
        alert(`Too bad, you lost to the machine!`);
        alert(scoreMessage);
    }

    else {
        alert(`This match ends up tied!`);
        alert(scoreMessage);
    }
}

game();