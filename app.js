// create function getComputerChoice() that randomly returns Rock, Paper or Scissors
// create a function
    // takes two parameters: playerSelection() and getComputerChoice()
    // returns a string that declares winner of round using console.log()
    // if a tie happens, the round is re-played
// playerSelection() needs to be case-insensitive

// playerSelection() needs to be a prompt function that ta

// write a new function game()
    // use old function inside of game()
    // game is played to the best of 5
    // keeps score
    // winner or loser is declared at the end
// use console.log() to display the results of each round and the winner at the end

let computerSelection;
let playerSelection;

function getComputerChoice() {

 let randomChoice = Math.floor(Math.random() * 3)+1;

 if (randomChoice === 1) {
    computerSelection = "Rock";
 } else if (randomChoice === 2) {
    computerSelection = "Paper";
 } else {
    computerSelection = "Scissors";
 }
}

function playerPicked() {
    let playerSelection = 1;
    return playerSelection;
}

playerPicked();
console.log(playerSelection);