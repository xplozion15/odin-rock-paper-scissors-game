let myScore = 0;
let computerScore = 0;
let p = document.querySelector("#p");
let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");

let computerSelection = getComputerChoice();
let playerSelection;

let rockBtn = document.querySelector("#rock-btn");
let paperBtn = document.querySelector("#paper-btn");
let scissorsBtn = document.querySelector("#scissors-btn");


let newGamebtn = document.querySelector("#new-game");
newGamebtn.addEventListener("click", newGame);



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
        p.textContent = "You and the computer both selected Rock. It's a tie!";
        p1.textContent = `😉 ${myScore} : 🤖 ${computerScore}`;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
        p.textContent = "You selected Rock and the computer selected Paper. Computer won!";
        p1.textContent = `😉 ${myScore} : 🤖 ${computerScore}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        myScore += 1;
        p.textContent = "You selected Rock and the computer selected Scissors. You won!";
        p1.textContent = `😉 ${myScore} : 🤖 ${computerScore}`;
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        p.textContent = "You and the computer both selected Paper. It's a tie!";
        p1.textContent = `😉 ${myScore} : 🤖 ${computerScore}`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        myScore += 1;
        p.textContent = "You selected Paper and the computer selected Rock. You won!";
        p1.textContent = `😉 ${myScore} : 🤖 ${computerScore}`;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        p.textContent = "You selected Paper and the computer selected Scissors. Computer won!";
        p1.textContent = `😉 ${myScore} : 🤖 ${computerScore}`;
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        p.textContent = "You and the computer both selected Scissors. It's a tie!";
        p1.textContent = `😉 ${myScore} : 🤖 ${computerScore}`;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        p.textContent = "You selected Scissors and the computer selected Rock. Computer won!";
        p1.textContent = `😉 ${myScore} : 🤖 ${computerScore}`;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        myScore += 1;
        p.textContent = "You selected Scissors and the computer selected Paper. You won!";
        p1.textContent = `😉 ${myScore} : 🤖 ${computerScore}`;
    }
    
    if (myScore === 5) {
        p2.textContent = "Congratulations, You Won!";
    } else if (computerScore === 5) {
        p2.textContent = "You lost, Play again!";
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
    p1.textContent = `😉  0   :  🤖   0`;
    p2.textContent = "";
}


