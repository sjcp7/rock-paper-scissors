function getRandomNumber() {
    return Math.floor(Math.random() * 3)
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
            return "Hm, it's a tie.";
        }

        else if(playerSelection === 'paper') {
            return "Congrats, you won!";
        }

        else {
            return "Oh no, you lost! Try harder.";
        }
    }

    else if(computerSelection === "paper") {

        if(playerSelection === "rock") {
            return "Oh no, you lost! Try harder.";
        }

        else if(playerSelection === "paper") {
            return "Hm, it's a tie.";
        }

        else {
            return "Congrats, you won!";
        }
    }

    else {

        if(playerSelection === "rock") {
            return "Congrats, you won!";
        }

        else if(playerSelection === "paper") {
            return "Oh no, you lost! Try harder.";
        }

        else {
            return "Hm, it's a tie.";
        }
    }
    
}

