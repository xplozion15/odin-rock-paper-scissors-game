let myScore = 0;
let computerScore = 0;
let p = document.querySelector("#p");
let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let choice;
    if (randomNumber === 1) {
        choice = "rock";
    } else if (randomNumber === 2) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
        p.textContent = "You and the computer both selected rock! It's a tie!";
        p1.textContent = `You ${myScore} : Computer ${computerScore}`;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
        p.textContent = "You selected rock and the computer selected paper! Computer won!";
        p1.textContent = `You ${myScore} : Computer ${computerScore}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        myScore += 1;
        p.textContent = "You selected rock and the computer selected scissors! You won!";
        p1.textContent = `You ${myScore} : Computer ${computerScore}`;
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        p.textContent = "You and the computer both selected paper! It's a tie!";
        p1.textContent = `You ${myScore} : Computer ${computerScore}`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        myScore += 1;
        p.textContent = "You selected paper and the computer selected rock! You won!";
        p1.textContent = `You ${myScore} : Computer ${computerScore}`;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        p.textContent = "You selected paper and the computer selected scissors! Computer won!";
        p1.textContent = `You ${myScore} : Computer ${computerScore}`;
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        p.textContent = "You and the computer both selected scissors! It's a tie!";
        p1.textContent = `You ${myScore} : Computer ${computerScore}`;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        p.textContent = "You selected scissors and the computer selected rock! Computer won!";
        p1.textContent = `You ${myScore} : Computer ${computerScore}`;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        myScore += 1;
        p.textContent = "You selected scissors and the computer selected paper! You won!";
        p1.textContent = `You ${myScore} : Computer ${computerScore}`;
    }

    if (myScore === 5) {
        p2.textContent = "Congratulations! You won the game! Click new game to play.";
    } else if (computerScore === 5) {
        p2.textContent = "Oops, you lost! Play again!";
    }
}

let computerSelection = getComputerChoice();
let playerSelection;

let rockBtn = document.querySelector("#rock-btn");
let paperBtn = document.querySelector("#paper-btn");
let scissorsBtn = document.querySelector("#scissors-btn");

rockBtn.addEventListener("click", () => {
    if (computerScore < 5 && myScore < 5) {
        playRound(playerSelection = "rock", computerSelection);
    }
});

paperBtn.addEventListener("click", () => {
    if (computerScore < 5 && myScore < 5) {
        playRound("paper", computerSelection);
    }
});

scissorsBtn.addEventListener("click", () => {
    if (computerScore < 5 && myScore < 5) {
        playRound("scissors", computerSelection);
    }
});

function newGame() {
    myScore = 0;
    computerScore = 0;
    p1.textContent = "You 0 : Computer 0";
    p2.textContent = "Good luck, have fun!";
}

let newGamebtn = document.querySelector("#new-game");
newGamebtn.addEventListener("click", newGame);
