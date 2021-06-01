

// Computer randomly picks one of three choices function
function computerPlay() {
    // Define array that stores possible choices
    let choices = ["Rock", "Paper", "Scissors"];

    // Declare random number from 0 - 2
    let number = Math.floor(Math.random() * 3);

    // return array at position number
    return choices[number];
}

// Function to play one round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {
    // make playerSelection lowercase
    let plrSelect = playerSelection.toLowerCase();
    let cmpSelect = computerSelection.toLowerCase();
    let computerPoints = 0;
    let playerPoints = 0;

    // first check if they are equal
    if (plrSelect === cmpSelect) {
        return;
    } else if ((plrSelect === "rock" && cmpSelect === "scissors") ||
        (plrSelect === "paper" && cmpSelect === "rock") ||
        (plrSelect === "scissors" && cmpSelect === "paper")
    ) {
        return "player";
    } else {
        return "computer";
    }
}

// UI Function that plays the game for 5 rounds
function game() {
    // Declare points variables for each contestant
    let cPoints = 0;
    let pPoints = 0;

    // Loop to go 5 times
    for(let i = 0; i <= 5; i++) {
        // Take user Input
        let userInput = prompt("Choose Rock, Paper or Scissors: ");
        
        // Take computer input
        let computerSelect = computerPlay();

        // Store result of playRound function in rps
        // to check who won that round.
        let rps = playRound(userInput, computerSelect);

        //conditional to check who won
        if (rps === "player") {
            pPoints++;
        } else if (rps === "computer") {
            cPoints++;
        }

        // for console to check the points as it goes
        console.log(`${cPoints} : ${pPoints}`);
        
    }

    // final conditional to see who the winner is
    if (cPoints > pPoints) {
        alert(`Computer wins with ${cPoints} points!`);
    } else if (pPoints > cPoints) {
        alert(`You wins with ${pPoints} points!`);
    } else {
        alert(`It's a TIE! Player got: ${pPoints} and Computer got: ${cPoints}`);
    }
}

// run the main function
game();
