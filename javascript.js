//Buttons declaration
const buttons = document.querySelectorAll('[data-selection]');

// scores
const scoreOfPlayer = document.querySelector('.player-score');
const scoreOfComp = document.querySelector('.comp-score');

// round message
const roundMessage = document.querySelector('.message');

// choices of both player and computer
const player = document.querySelector('.player-selection');
const comp = document.querySelector('.comp-selection');

// Variable to count how many wins the player has
let playerWin = 0;
// Variable to count how many wins the computer has
let compWin = 0;

// Event for clicking the buttons
buttons.forEach((button)=> {
    button.addEventListener('click',e => {
        // set which button was clicked as a variable, selectionName
        const selectionName = button.dataset.selection
        // end game when a score is 5
        if (playerWin >=5 || compWin >= 5)
            return;
        // Start game when a button is clicked
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

// Function to play the round 
function playRound(playerSelection, computerSelection){

    // Ff player chooses rock and computer chooses paper
    if (playerSelection === "Rock" && computerSelection === "Paper"){

        // Display what happens, and increment compWin by 1
        roundMessage.textContent = "You Lose! Paper beats rock";
        compWin++;
    }
    // If player chooses rock and computer chooses scissors
    else if (playerSelection === "Rock" && computerSelection === "Scissors"){

       // Display what happens, and increment playerWin by 1
       roundMessage.textContent = "You Win! Rock beats scissors";
        playerWin++;

    }
    // If player chooses paper and computer chooses scissors
    else if (playerSelection === "Paper" && computerSelection === "Scissors"){

        // Display what happens, and increment compWin by 1
        roundMessage.textContent = "You Lose! Scissors beat paper";
        compWin++;
    }
    // If player chooses paper and computer chooses rock
    else if (playerSelection === "Paper" && computerSelection === "Rock"){

        // Display what happens, and increment playerWin by 1
        roundMessage.textContent = "You Win! Paper beats rock";
        playerWin++;  
    }
    // If player chooses scissors and computer chooses paper
    else if (playerSelection  === "Scissors" && computerSelection === "Paper"){

        // Display what happens, and increment playerWin by 1
        roundMessage.textContent = "You Win! Scissors beats paper";
        playerWin++; 
    }
    // If player chooses scissors and computer chooses rock
    else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        
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

// Create paragraph function
function paragraph(text) {
    const p = document.createElement('p');
    p.textContent = text;
    return p;
}

// Main game function to play the game
function game(playerSelect){
 
    // player choice is the button clicked
    let playerSelection = playerSelect

    // computer choice is the randomized choice
    let computerSelection = getComputerChoice();
    // play a round
    playRound(playerSelection, computerSelection);
   
    // display selection history
    player.appendChild(paragraph(playerSelection));
    comp.appendChild(paragraph(computerSelection));

    // Display final winner of the game
    if (playerWin >= 5 && compWin < 5){
        roundMessage.textContent = "You won the game! The world is saved!"
    }
    else if (playerWin <5 && compWin === 5){
        roundMessage.textContent = "The computer won the game... The world is destroyed."
    } 
}



