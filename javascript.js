function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    const result = choices[Math.floor(Math.random() * choices.length)];
    return result;
}
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
        roundWinner = 'Tie'
    }
}


const playerSelection = prompt();
const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);



