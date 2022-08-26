//#region Computer choice function
// function to return the choice of the computer
function getComputerChoice(){
    // List of possible choices in the game 
    const choices = ["Rock", "Paper", "Scissors"];
    // Randomly select a choice from the list above and return it
    const result = choices[Math.floor(Math.random() * choices.length)];
    return result;
}
//#endregion

//#region Variables and function to play the round
// Variable to count how many wins the player has
let playerWin = 0;
// Variable to count how many wins the computer has
let compWin = 0;
//Variable to count how many ties occured 
let tie = 0;
// Variable that initializes the winner of each round
let roundWinner = ''
// Function to play the round 
function playRound(playerSelection, computerSelection){

    // Ff player chooses rock and computer chooses paper
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper"){
        // Display what happens, and increment compWin by 1
        console.log("You Lose! Paper beats rock");
        compWin++;
        // round winner is...
        roundWinner = 'Computer'
    }
    // If player chooses rock and computer chooses scissors
    else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors"){
       // Display what happens, and increment playerWin by 1
        console.log("You Win! Rock beats scissors");
        playerWin++;
        // round winner is...
        roundWinner = 'Player'
    }
    // If player chooses paper and computer chooses scissors
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors"){
        // Display what happens, and increment compWin by 1
        console.log("You Lose! Scissors beat paper");
        compWin++;
         // round winner is...
        roundWinner = 'Computer'
    }
    // If player chooses paper and computer chooses rock
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock"){
        // Display what happens, and increment playerWin by 1
        console.log("You Win! Paper beats rock");
        playerWin++;
         // round winner is...
        roundWinner = 'Player'
    }
    // If player chooses scissors and computer chooses paper
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper"){
        // Display what happens, and increment playerWin by 1
        console.log("You Win! Scissors beats paper");
        playerWin++;
         // round winner is...
        roundWinner = 'Player'
    }
    // If player chooses scissors and computer chooses rock
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock"){
        // Display what happens, and increment compWin by 1
        console.log("You Lose! Rock beats scissors");
        compWin++;
         // round winner is...
        roundWinner = 'Computer'
    }
    // If player and computer choose the same thing
    else if (playerSelection === computerSelection){
        // Display what happens, and increment tie by 1
        console.log("Draw!");
        tie++;
         // round winner is...
        roundWinner = "tie";
    }
    // Display winner of round
    console.log(`Winner of round: ${roundWinner}`);
  
}
//#endregion

//#region Who won the game function
// function to determine who wins the entire game
function whoWon(playerWin, compWin, tie){
    // If player wins more rounds, player wins
    if (playerWin > compWin){
        // Display player wins
        console.log("You won the whole game!");
    }
    // If computer wins more rounds, computer wins
    else if (playerWin < compWin){
        // Display player loses
        console.log("You lose");
    }
    // if amount of wins is equal
    else{
        // Display no winner
        console.log("NO Winner");
    }
}
//#endregion

//#region Main game function to play the game
function game(){
    for (let i = 0; i < 5; i++){
        
        const playerSelection = prompt("Rock Paper Scissors?");
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        
        
    }
    whoWon(playerWin, compWin, tie,);

}
//#endregion

// Play the game.

game();
