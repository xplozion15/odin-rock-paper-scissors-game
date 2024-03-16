
function getComputerChoice() {
    let randomNumber = Math.ceil(Math.random() * 3);

    if (randomNumber === 1) {
        choice = "ROCK";
    }
    else if (randomNumber === 2) {
        choice = "PAPER";
    }
    else {
        choice = "SCISSORS";
    }
    return choice;

}




function playRound(playerSelection, computerSelection) {


    if (playerSelection === "ROCK" && computerSelection === "ROCK") {
        console.log("You and Computer both selected rock! its a Tie!");
    }

    else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        console.log("You selected ROCK and computer selected paper! Computer won!");
    }

    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        console.log("You selected ROCK and computer selected scissors! You won");

    }

    else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
        console.log("You and Computer both seleCTED PAPER! ITS A TIE");
    }

    else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        console.log("You selected PAPER and computer selected ROCK! YOU won!");
    }

    else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        console.log("You selected PAPER and computer selected scissors! COMPUTER won");

    }

    else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
        console.log("You and Computer both seleCTED SCISSORS! ITS A TIE");
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        console.log("You selected SCISSORS and computer selected ROCK! COMPUTER WON!");
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        console.log("You selected SCISSORS and computer selected PAPER! YOU won");
    }

}


function playGame() {
    let playerSelection = prompt("Pls enter your choice from ROCK,PAPER OR SCISSORS").toUpperCase();
    playRound(playerSelection,computerSelection);

    

    playerSelection = prompt("Pls enter your choice from ROCK,PAPER OR SCISSORS").toUpperCase();
    playRound(playerSelection,computerSelection);

    playerSelection = prompt("Pls enter your choice from ROCK,PAPER OR SCISSORS").toUpperCase();
    playRound(playerSelection,computerSelection);

    playerSelection = prompt("Pls enter your choice from ROCK,PAPER OR SCISSORS").toUpperCase();
    playRound(playerSelection,computerSelection);

    playerSelection = prompt("Pls enter your choice from ROCK,PAPER OR SCISSORS").toUpperCase();
    playRound(playerSelection,computerSelection);


}




let myScore = 0;
let computerScore = 0;
let computerSelection = getComputerChoice();



// playRound(playerSelection,computerSelection);
playGame();









