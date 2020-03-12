function computerPlay() {
    let choiceCode = Math.floor(Math.random() * 3);

    if(choiceCode === 0) { return 'rock'; }
    else if (choiceCode === 1) { return 'paper'; }
    else { return 'scissors'; }
}
