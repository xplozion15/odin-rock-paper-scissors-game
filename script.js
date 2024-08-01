let myScore = 0;
let computerScore = 0;
let youSelected = document.querySelector("#you-selected");
let computerSelected = document.querySelector("#computer-selected");
let roundResult = document.querySelector("#round-result");
let finalResult = document.querySelector("#final-result");
let computerSelection = getComputerChoice();
let playerSelection;
let rockBtn = document.querySelector("#rock-btn");
let paperBtn = document.querySelector("#paper-btn");
let scissorsBtn = document.querySelector("#scissors-btn");
let yourScoreSelector = document.querySelector("#your-score");
let computerScoreSelector = document.querySelector("#computer-score");

let newGamebtn = document.querySelector("#new-game");
newGamebtn.addEventListener("click", newGame);

newGamebtn.addEventListener("click", () => {
    document.getElementById('new-game').style.display = 'none';
});

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
    computerSelection = getComputerChoice();

    if (playerSelection === "rock" && computerSelection === "rock") {
        youSelected.textContent = `You have selected : ${playerSelection}`;
        computerSelected.textContent = `Computer selected : ${computerSelection}`;
        roundResult.textContent = `Its a draw!`;
        yourScoreSelector.textContent = `Your Score : ${myScore}`;
        computerScoreSelector.textContent = `CPU Score : ${computerScore}`;

    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
        youSelected.textContent = `You have selected : ${playerSelection}`;
        computerSelected.textContent = `Computer selected : ${computerSelection}`;
        roundResult.textContent = `You win! Rock beats Paper`;
        yourScoreSelector.textContent = `Your Score : ${myScore}`;
        computerScoreSelector.textContent = `CPU Score : ${computerScore}`;

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        myScore += 1;
        youSelected.textContent = `You have selected : ${playerSelection}`;
        computerSelected.textContent = `Computer selected : ${computerSelection}`;
        roundResult.textContent = `You win! Rock beats Scissors`;
        yourScoreSelector.textContent = `Your Score : ${myScore}`;
        computerScoreSelector.textContent = `CPU Score : ${computerScore}`;

    } else if (playerSelection === "paper" && computerSelection === "paper") {
        youSelected.textContent = `You have selected : ${playerSelection}`;
        computerSelected.textContent = `Computer selected : ${computerSelection}`;
        roundResult.textContent = `Its a draw!`;
        yourScoreSelector.textContent = `Your Score : ${myScore}`;
        computerScoreSelector.textContent = `CPU Score : ${computerScore}`;

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        myScore += 1;
        youSelected.textContent = `You have selected : ${playerSelection}`;
        computerSelected.textContent = `Computer selected : ${computerSelection}`;
        roundResult.textContent = `You win! Paper beats Rock`;
        yourScoreSelector.textContent = `Your Score : ${myScore}`;
        computerScoreSelector.textContent = `CPU Score : ${computerScore}`;

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        youSelected.textContent = `You have selected : ${playerSelection}`;
        computerSelected.textContent = `Computer selected : ${computerSelection}`;
        roundResult.textContent = `You lose! Scissors beats Paper`;
        yourScoreSelector.textContent = `Your Score : ${myScore}`;
        computerScoreSelector.textContent = `CPU Score : ${computerScore}`;

    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        youSelected.textContent = `You have selected : ${playerSelection}`;
        computerSelected.textContent = `Computer selected : ${computerSelection}`;
        roundResult.textContent = `Its a draw!`;
        yourScoreSelector.textContent = `Your Score : ${myScore}`;
        computerScoreSelector.textContent = `CPU Score : ${computerScore}`;

    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        youSelected.textContent = `You have selected : ${playerSelection}`;
        computerSelected.textContent = `Computer selected : ${computerSelection}`;
        roundResult.textContent = `You lose! Rock beats Scissors`;
        yourScoreSelector.textContent = `Your Score : ${myScore}`;
        computerScoreSelector.textContent = `CPU Score : ${computerScore}`;

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        myScore += 1;
        youSelected.textContent = `You have selected : ${playerSelection}`;
        computerSelected.textContent = `Computer selected : ${computerSelection}`;
        roundResult.textContent = `You win! Scissors beat Paper`;
        yourScoreSelector.textContent = `Your Score : ${myScore}`;
        computerScoreSelector.textContent = `CPU Score : ${computerScore}`;
    }

    if (myScore === 5) {
        finalResult.textContent = "Congratulations, You Won!";
        document.getElementById('new-game').style.display = 'block';
    } else if (computerScore === 5) {
        finalResult.textContent = "You lost, Play again!";
        yourScoreSelector.textContent = `Your Score : ${myScore}`;
        computerScoreSelector.textContent = `CPU Score : ${computerScore}`;
        document.getElementById('new-game').style.display = 'block';
    }
}

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
    finalResult.textContent = "";
    yourScoreSelector.textContent = `Your Score : 0`;
    computerScoreSelector.textContent = `CPU Score : 0`;
}
