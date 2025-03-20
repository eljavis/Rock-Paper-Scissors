function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function round(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! you both picked ${playerSelection}`;
    } else if (
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Please, enter 'Rock, Paper or Scissors'").toLowerCase();
        const computerSelection = getComputerChoice();
        const result = round(playerSelection, computerSelection);
        console.log(result);

        if (result.startsWith("You win")) {
            playerScore++;
        } else if (result.startsWith("You lose")) {
            computerScore++;
        }
    }

    console.log(`Final Score: Player ${playerScore}, Computer ${computerScore}`);

    if (playerScore > computerScore) {
        return "You Win this game.";
    } else if (playerScore === computerScore) {
        return "This game is a tie.";
    } else {
        return "You Lose this game.";
    }
}

console.log(game());
