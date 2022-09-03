//Buttons declaration
const buttons = document.querySelectorAll('[data-selection]');
const scoreOfPlayer = document.querySelector('.player-score');
const scoreOfComp = document.querySelector('.comp-score');
const roundMessage = document.querySelector('.message');
const player = document.querySelector('.player-selection');
const comp = document.querySelector('.comp-selection');


buttons.forEach((button)=> {
    button.addEventListener('click',e => {
        const selectionName = button.dataset.selection
        if (playerWin >=5 || compWin >= 5)
            return;
           
        game(selectionName);
})})




// function to return the choice of the computer
function getComputerChoice(){
    // List of possible choices in the game 
    const choices = ["Rock", "Paper", "Scissors"];
    // Randomly select a choice from the list above and return it
    const result = choices[Math.floor(Math.random() * choices.length)];
    return result;
}

//#region Variables and function to play the round
// Variable to count how many wins the player has
let playerWin = 0;
// Variable to count how many wins the computer has
let compWin = 0;

// Function to play the round 
function playRound(playerSelection, computerSelection){

    // Ff player chooses rock and computer chooses paper
    if (playerSelection === "rock" && computerSelection === "Paper"){
        // Display what happens, and increment compWin by 1
        
        roundMessage.textContent = "You Lose! Paper beats rock";
        compWin++;
    }
    // If player chooses rock and computer chooses scissors
    else if (playerSelection === "rock" && computerSelection === "Scissors"){
       // Display what happens, and increment playerWin by 1
       roundMessage.textContent = "You Win! Rock beats scissors";
        playerWin++;

    }
    // If player chooses paper and computer chooses scissors
    else if (playerSelection === "paper" && computerSelection === "Scissors"){
        // Display what happens, and increment compWin by 1
        roundMessage.textContent = "You Lose! Scissors beat paper";
        compWin++;
    }
    // If player chooses paper and computer chooses rock
    else if (playerSelection === "paper" && computerSelection === "Rock"){
        // Display what happens, and increment playerWin by 1
        roundMessage.textContent = "You Win! Paper beats rock";
        playerWin++;  
    }
    // If player chooses scissors and computer chooses paper
    else if (playerSelection  === "scissors" && computerSelection === "Paper"){
        // Display what happens, and increment playerWin by 1
        roundMessage.textContent = "You Win! Scissors beats paper";
        playerWin++; 
    }
    // If player chooses scissors and computer chooses rock
    else if (playerSelection === "scissors" && computerSelection === "Rock"){
        // Display what happens, and increment compWin by 1
        roundMessage.textContent = "You Lose! Rock beats scissors";
        compWin++;  
    }
    // If player and computer choose the same thing
    else{
        // Display what happens, and increment tie by 1
        roundMessage.textContent = "Draw!";  
    }

    // Display the score 

    scoreOfPlayer.textContent = playerWin;
    scoreOfComp.textContent = compWin;
}

function paragraph(text) {
    const p = document.createElement('p');
    p.textContent = text;
    return p;
}

function winner(){
    let t = ""
    if (playerWin === 5)
        t = "You win the game!";
    else if (compWin === 5)
        t = "Computer wins the game!"
    
    win.appendChild(paragraph(t));
}

// Main game function to play the game
function game(playerSelect){
 
    let playerSelection = playerSelect
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    player.appendChild(paragraph(playerSelection));
    comp.appendChild(paragraph(computerSelection));

    if (playerWin >= 5 && compWin < 5){
        roundMessage.textContent = "You won the game!"
    }
    else if (playerWin <5 && compWin === 5){
        roundMessage.textContent = "The computer won the game!"
    }

    
}



