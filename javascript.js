//#region Computer choice function
function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    const result = choices[Math.floor(Math.random() * choices.length)];
    return result;
}
//#endregion

//#region Variables and function to play the round
let playerWin = 0;
let compWin = 0;
let tie = 0;
let roundWinner = ''
function playRound(playerSelection, computerSelection){

    if (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper"){
        console.log("You Lose! Paper beats rock");
        compWin++;
        roundWinner = 'Computer'
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors"){
        console.log("You Win! Rock beats scissors");
        playerWin++;
        roundWinner = 'Player'
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors"){
        console.log("You Lose! Scissors beat paper");
        compWin++;
        roundWinner = 'Computer'
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock"){
        console.log("You Win! Paper beats rock");
        playerWin++;
        roundWinner = 'Player'
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper"){
        console.log("You Win! Scissors beats paper");
        playerWin++;
        roundWinner = 'Player'
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock"){
        console.log("You Lose! Rock beats scissors");
        compWin++;
        roundWinner = 'Computer'
    }
    else if (playerSelection === computerSelection){
        console.log("Draw!");
        tie++;
        roundWinner = "tie";
    }
    console.log(`Winner of round: ${roundWinner}`);
  
}
//#endregion

//#region Who won the game function
function whoWon(playerWin, compWin, tie){
    if (playerWin > compWin){
        console.log("You won the whole game!");
    }
    else if (playerWin < compWin){
        console.log("You lose");
    }
    else{
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
