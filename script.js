
let myScore = 0;
let computerScore = 0;
let p = document.querySelector("#p");
let p1 = document.querySelector("#p1");




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




        p.textContent = "You and Computer both selected rock! its a Tie!";
        p1.textContent = `You ${myScore} : Computer ${computerScore}`

    }

    else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        computerScore += 1;
        p.textContent = "You selected ROCK and computer selected paper! Computer won!";
        p1.textContent = `You ${myScore} : Computer ${computerScore}`

    }

    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        myScore += 1;
        p.textContent = "You selected ROCK and computer selected scissors! You won";
        p1.textContent = `You ${myScore} : Computer ${computerScore}`



    }

    else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
        p.textContent = "You and Computer both seleCTED PAPER! ITS A TIE";
        p1.textContent = `You ${myScore} : Computer ${computerScore}`
    }

    else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        myScore += 1;

        p.textContent = "You selected PAPER and computer selected ROCK! YOU won!";
        p1.textContent = `You ${myScore} : Computer ${computerScore}`

    }

    else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        computerScore += 1;
        p.textContent = "You selected PAPER and computer selected scissors! COMPUTER won";
        p1.textContent = `You ${myScore} : Computer ${computerScore}`


    }

    else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
        p.textContent = "You and Computer both seleCTED SCISSORS! ITS A TIE";
        p1.textContent = `You ${myScore} : Computer ${computerScore}`
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        computerScore += 1;
        p.textContent = "You selected SCISSORS and computer selected ROCK! COMPUTER WON!";
        p1.textContent = `You ${myScore} : Computer ${computerScore}`

    }
    else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        myScore += 1;
        p.textContent = "You selected SCISSORS and computer selected PAPER! YOU won";
        p1.textContent = `You ${myScore} : Computer ${computerScore}`


    }



    if (myScore === 5) {


        p2.textContent = "Congratulation! You won the game! Click new game to play";




    }


    else if (computerScore === 5) {

        p2.textContent = "Oops you lost! Play again hehe";



    }



}












let computerSelection = getComputerChoice();
let playerSelection;










let rockBtn = document.querySelector("#rock-btn");
let paperBtn = document.querySelector("#paper-btn");
let scissorsBtn = document.querySelector("#scissors-btn");



rockBtn.addEventListener("click", () => {
    if (computerScore < 5  && myScore < 5) {
    (playRound(playerSelection = "ROCK", computerSelection));
    }


})

paperBtn.addEventListener("click", () => {
    if (computerScore < 5  && myScore < 5) {
        playRound("PAPER", computerSelection);
    }
});

scissorsBtn.addEventListener("click", () => {
    if (computerScore < 5 && myScore < 5) {
        playRound("SCISSORS", computerSelection);
    }
});




function newGame() {
    myScore = 0;
    computerScore = 0;
    p1.textContent = `You 0 : Computer 0`
    p2.textContent = "Goodluck have fun!"
}


newGamebtn = document.querySelector("#new-game");
newGamebtn.addEventListener("click", newGame);