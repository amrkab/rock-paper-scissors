// write a new function game()
    // use old function inside of game()
    // game is played to the best of 5
    // keeps score
    // winner or loser is declared at the end
// use console.log() to display the results of each round and the winner at the end


// declare variable computerSelection and playerSelection
const playerSelection = playerPicked(); // executed first
const computerSelection = getComputerChoice(); // executed second

// create function getComputerChoice() that randomly returns rock paper or scissors and assign to computerSelection
function getComputerChoice() {

 let randomChoice = Math.floor(Math.random() * 3)+1;

 if (randomChoice === 1) {
    return "Rock";
 } else if (randomChoice === 2) {
    return "Paper";
 } else {
    return "Scissors";
 }
}

// create function getPlayerChoice() that gets rock paper scissors choice from user and assign to playerSelection
    // variable playerSelection needs to be case-insensitive: rOck, ROCK, rocK = rock
function playerPicked() {

    while (true) {
    let promptChoice = prompt("choose rock paper scissors");
    if (promptChoice == null) {
        return null;
    } else if (promptChoice.toLowerCase() === "paper") {
        return "Paper";
    } else if (promptChoice.toLowerCase() === "scissors") {
        return "Scissors";
    } else if (promptChoice.toLowerCase() === "rock") {
        return "Rock";
    } else {
        alert("you entered gibberish, try again");
    }
    }
}

// create function playRound that takes two parameters: computerSelection and playerSelection
    // playRound declares the winner by returning a string using console.log
    // if a tie happens the round is replayed
function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        console.log("It's a tie!")
    } else if ((computerSelection==="Rock" && playerSelection==="Paper") || (computerSelection==="Paper" && playerSelection==="Scissors") || (computerSelection==="Scissors" && playerSelection==="Rock")) {
        console.log("You won! " + playerSelection + " beats " + computerSelection);
    } else {
        console.log("You lost! " + computerSelection + " beats " + playerSelection);
    }
}

console.log(playerSelection);
console.log(computerSelection);
playRound(computerSelection, playerSelection); // executed third
