function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0 :
            return "Rock";
        

        case 1 :
            return "Paper";
        
            
        case 2 : 
        return "Scissors";
          
    }


}

const computerSelection = getComputerChoice();
const enterSelection = prompt("Please, enter 'Rock, Paper or Scissors'").toLowerCase();
const playerSelection = enterSelection;

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;


function round(playerSelection, computerSelection) {
    if (playerSelection === "paper" && computerSelection === "Rock") {playerScore++; return "You win! Paper beats Rock";}
    else if (playerSelection === "rock" && computerSelection === "Scissors") {playerScore++; return "You win! Rock beats Scissors"; }
    else if (playerSelection === "scissors" && computerSelection === "Paper") {playerScore++; return "You win! Scissors beats Paper"; }
    else if (playerSelection === "paper" && computerSelection === "Scissors") {computerScore++; return `You lose! Scissors beats Paper.`; }
    else if (playerSelection === "rock" && computerSelection === "Paper") {computerScore++; return `You lose! Paper beats Rock.`; }
    else if (playerSelection === "scissors" && computerSelection === "Rock") {computerScore++; return `You lose! Rock beats Scissors.`;}
    else {tieScore++; return `It's a tie! you both picked ${playerSelection}`; }

} 



function game() {
    for (let i = 0; i < 5; i++) {
        console.log(round(playerSelection, computerSelection));
    }
    if (playerScore>computerScore){
        return "You Win this game.";
      }
        if (playerScore === computerScore){
          return "This game is a tie.";
        }
       else {
        return "You Lose this game.";
      }
 }

 console.log(game());

 