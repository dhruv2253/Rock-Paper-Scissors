function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    const result = choices[Math.floor(Math.random() * choices.length)];
    console.log(result)
}

let playerWin = 0;
let compWin = 0;
let tie = 0;
let roundWinner = ''
function playRound(playerSelection, computerSelection){

    if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper"){
        return "You Lose! Paper beats rock";
        compWin++;
        roundWinner = 'Computer'
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors"){
        return "You Win! Rock beats scissors";
        playerWin++;
        roundWinner = 'Player'
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors"){
        return "You Lose! Scissors beat paper";
        compWin++;
        roundWinner = 'Computer'
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock"){
        return "You Win! Paper beats rock";
        playerWin++;
        roundWinner = 'Player'
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper"){
        return "You Win! Scissors beats paper";
        playerWin++;
        roundWinner = 'Player'
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock"){
        return "You Lose! Rock beats scissors";
        compWin++;
        roundWinner = 'Computer'
    }
    else if (playerSelection === computerSelection){
        return "Draw!";
        tie++;
        roundWinner = 'Tie'
    }
}


