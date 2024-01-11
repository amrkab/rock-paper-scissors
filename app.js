// declare variable computerSelection and playerSelection
let playerSelection = playerPicked(); // executed first
let computerSelection = getComputerChoice(); // executed second
let computerScore=0;
let playerScore=0;
let count=1;

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
        console.log("Round " + count);
        console.log("You used: " + playerSelection);
        console.log("Opponent used: " + computerSelection);
        console.log("It's a tie! Here's a REMATCH!")
    } else if ((computerSelection==="Rock" && playerSelection==="Paper") || (computerSelection==="Paper" && playerSelection==="Scissors") || (computerSelection==="Scissors" && playerSelection==="Rock")) {
        console.log("Round " + count);
        console.log("You used: " + playerSelection);
        console.log("Opponent used: " + computerSelection);
        count++;
        console.log("You won! " + playerSelection + " beats " + computerSelection);
        playerScore++;
    } else {
        console.log("Round " + count);
        console.log("You used: " + playerSelection);
        console.log("Opponent used: " + computerSelection);
        count++;
        console.log("You lost! " + computerSelection + " beats " + playerSelection);
        computerScore++;
    }

}

// create a new function
 // keeps score, plays best of five and declares game winner
function game() {
// game is played to best of 5 by seeing if both the scores are less than 3
    // if score isn't less than 3, then the other player has no chance of winning
    while ( playerScore < 3 && computerScore < 3 ){
// uses old function playRound()
        playRound(computerSelection, playerSelection);
// keeps score
        console.log("You: " + playerScore + " " + "Opponent: " + computerScore)

// makes sure that the game doesn't keep on going if one of the players scores 3
        if ( playerScore < 3 && computerScore < 3 ) {
        playerSelection = playerPicked();
        computerSelection = getComputerChoice();
        }

    }

// winner or loser is declared via console.log()
    if (playerScore>computerScore) {
        console.log("You won the game!");
    } else (
        console.log("You lost the game :(")
    )
}

game();