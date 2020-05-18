const options = document.querySelectorAll('div[class="options"]');
options.forEach(option => option.addEventListener("click", playRound));
options.forEach(option => option.addEventListener("transitionend", removeTransition));

let victories = 0;
let losses = 0;
let draws = 0;

function getRandomNumber() {
    return Math.floor(Math.random() * 3)
}

function getPlayerSelection(e) {
    const playerSelection = document.querySelector(`div[id="${e.toElement.id}"]`);
    playerSelection.classList.add('clicked');
    return playerSelection.id;
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('clicked');
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

function playRound(e) {
    const arenaPlayerSelectionEl = document.querySelector("#arena-player > span");
    const arenaIndicatorEl = document.querySelector("#arena-indicator > span");
    const arenaCpuSelectionEl = document.querySelector("#arena-cpu > span");

    const victoriesEl = document.querySelector("#player-victories > h3.points");
    const lossesEl = document.querySelector("#player-losses > h3.points");
    const drawsEl = document.querySelector("#draws > h3.points");

    playerSelection = getPlayerSelection(e);
    cpuSelection = computerPlay();

    arenaCpuSelectionEl.className = `fas fa-hand-${cpuSelection}`;
    arenaPlayerSelectionEl.className = `fas fa-hand-${playerSelection}`;

    if (cpuSelection === "rock") {        

        if(playerSelection === "rock") { 
            draws++;
            arenaIndicatorEl.className = 'fas fa-equals';
        }

        else if(playerSelection === 'paper') {
            victories++;
            arenaIndicatorEl.className = 'fas fa-greater-than';
        }

        else {
            losses++;
            arenaIndicatorEl.className = 'fas fa-less-than';
        }
    }

    else if(cpuSelection === "paper") {

        if(playerSelection === "rock") {
            losses++;
            arenaIndicatorEl.className = 'fas fa-less-than';
        }

        else if(playerSelection === "paper") {
            draws++;
            arenaIndicatorEl.className = 'fas fa-equals';
        }

        else {
            victories++;
            arenaIndicatorEl.className = 'fas fa-greater-than';
        }
    }

    else {

        if(playerSelection === "rock") {
            victories++;
            arenaIndicatorEl.className = 'fas fa-greater-than';
        }

        else if(playerSelection === "paper") {
            losses++;
            arenaIndicatorEl.className = 'fas fa-less-than';
        }

        else {
            draws++;
            arenaIndicatorEl.className = 'fas fa-equals';
        }
    }

    victoriesEl.innerHTML = victories;
    lossesEl.innerHTML = losses;
    drawsEl.innerHTML = draws;
    console.log(`Victories=${victories}, defeats=${losses}, draws=${draws}`);

    if(victories == 5) {
        alert('You won! To play again, reload the page');
    }
    else if(losses == 5) {
        alert('You lost! To play again, reload the page');
    } 
    
}

