let playerSelection;
let computerScore=0;
let playerScore=0;

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

const roundCounter = document.querySelector('#round');
const currentScores = document.querySelector('#scores');
const roundInfo = document.querySelector('#roundInfo');
const tip = document.querySelector('#tip');

// create 3 buttons in html -> rock , paper , scissors
// assign value of playerSelection to which ever button is pressed
// create 3 separate event listeners, one for each button
// once button is pressed, game is started
// create div for current score, round counter, moves played
// automatically announce winner of the game once either score reaches 5
// reset data for next game

rockButton.addEventListener('click', () => {
    if (playerScore < 5 && computerScore < 5) {
    playerSelection = 'Rock';
    playRound(playerSelection);
    currentScores.textContent = "You: " + playerScore + " - Opponent: " + computerScore;
    } else {
        resetData();
    }
});

paperButton.addEventListener('click', () => {
    if (playerScore < 5 && computerScore < 5) {
    playerSelection = 'Paper';
    playRound(playerSelection);
    currentScores.textContent = "You: " + playerScore + " - Opponent: " + computerScore;
    } else {
        resetData();
    }
});

scissorsButton.addEventListener('click', () => {
    if (playerScore < 5 && computerScore < 5) {
    playerSelection = 'Scissors';
    playRound(playerSelection);
    currentScores.textContent = "You: " + playerScore + " - Opponent: " + computerScore;
    } else {
        resetData();
    }
});


// resets game data after either player reaches 5 points
function resetData() {
    playerScore = 0;
    computerScore = 0;
    roundCounter.textContent = "NEW GAME";
    currentScores.textContent = "You: " + playerScore + " Opponent: " + computerScore;
    roundInfo.textContent = '';
    tip.textContent = '';
}

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


function playRound(playerSelection) {

    let computerSelection = getComputerChoice();

    

    if (computerSelection === playerSelection) {
        roundCounter.textContent = "TIE";
        roundInfo.textContent = "Rematch";
    } else if (
    (computerSelection==="Rock" && playerSelection==="Paper") ||
    (computerSelection==="Paper" && playerSelection==="Scissors") ||
    (computerSelection==="Scissors" && playerSelection==="Rock")) {
        roundCounter.textContent = "WIN";
        roundInfo.textContent = playerSelection + " beats " + computerSelection;
        playerScore++;
    } else {
        roundCounter.textContent = "LOST";
        roundInfo.textContent = computerSelection + " beats " + playerSelection;
        computerScore++;
    }

    if ( playerScore === 5 ) {
        roundCounter.textContent = "YOU WON THE WHOLE GAME";
        tip.textContent = "(Press any button to start a new game)";
    } else if ( computerScore === 5 ) {
        roundCounter.textContent = "YOU LOST THE WHOLE GAME";
        tip.textContent = "(Press any button to start a new game)";
    }

}