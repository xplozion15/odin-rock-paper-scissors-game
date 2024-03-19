
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
        return "You and Computer both selected rock! its a Tie!";

    }

    else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        computerScore += 1;
        return "You selected ROCK and computer selected paper! Computer won!";

    }

    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        myScore += 1;
        return "You selected ROCK and computer selected scissors! You won";



    }

    else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
        return "You and Computer both seleCTED PAPER! ITS A TIE";
    }

    else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        myScore += 1;
        return "You selected PAPER and computer selected ROCK! YOU won!";

    }

    else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        computerScore += 1;
        return "You selected PAPER and computer selected scissors! COMPUTER won";


    }

    else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
        return "You and Computer both seleCTED SCISSORS! ITS A TIE";
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        computerScore += 1;
        return "You selected SCISSORS and computer selected ROCK! COMPUTER WON!";

    }
    else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        myScore += 1;
        return "You selected SCISSORS and computer selected PAPER! YOU won";


    }

}





function playGame() {
    let playerSelection = prompt("Pls enter your choice from ROCK,PAPER OR SCISSORS").toUpperCase();
    console.log(playRound(playerSelection, computerSelection));



    // playerSelection = prompt("Pls enter your choice from ROCK,PAPER OR SCISSORS").toUpperCase();
    // console.log(playRound(playerSelection, computerSelection));




    // playerSelection = prompt("Pls enter your choice from ROCK,PAPER OR SCISSORS").toUpperCase();
    // console.log(playRound(playerSelection, computerSelection));



    // playerSelection = prompt("Pls enter your choice from ROCK,PAPER OR SCISSORS").toUpperCase();
    // console.log(playRound(playerSelection, computerSelection));





    // playerSelection = prompt("Pls enter your choice from ROCK,PAPER OR SCISSORS").toUpperCase();
    // console.log(playRound(playerSelection, computerSelection));



}




let myScore = 0;
let computerScore = 0;
let computerSelection = getComputerChoice();
let playerSelection;


// playRound(playerSelection,computerSelection);
// playGame();






console.log(`

            The final score is You  ${myScore} - computer ${computerScore}`);


if(computerScore > myScore) {
    console.log(`                Oops! You lost!`);
}
else if(myScore > computerScore) {
    console.log(`                congrats u won!`);
}
else {
    console.log(`                hahhaha its a tie`);
}



let rockBtn = document.querySelector("#rock-btn");
let paperBtn = document.querySelector("#paper-btn");
let scissorsBtn = document.querySelector("#scissors-btn");



rockBtn.addEventListener("click", () => {
    // playRound(playerSelection = "ROCK", computerSelection);
    console.log(playRound(playerSelection = "ROCK", computerSelection));
    

})


paperBtn.addEventListener("click", () => {
    console.log(playRound(playerSelection = "PAPER", computerSelection));
})

scissorsBtn.addEventListener("click", () => {
    console.log(playRound(playerSelection = "SCISSORS", computerSelection));
})