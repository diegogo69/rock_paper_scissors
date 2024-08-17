// Total number of rounds
const ROUNDS = 5;
// Initiate score variables
let computerScore = 0;
let humanScore = 0;

// Selector for the image at the moment
const imgBoard = document.querySelectorAll('.imgBoard');
// Hide current visible image
function hideImgBoard() {
    imgBoard.forEach(img => {
        if (!img.classList.contains('hidden')) {
            img.classList.toggle('hidden');
        }
        
    });
}
// Images references
const imgCharacters = document.querySelector('#imgCharacters');
const imgRockScissors = document.querySelector('#imgRockScissors');
const imgPaperRock = document.querySelector('#imgPaperRock');
const imgScissorsPaper = document.querySelector('#imgScissorsPaper');

function toggleImgRockScissors() {
    imgRockScissors.classList.toggle('hidden');
}
function toggleImgPaperRock() {
    imgPaperRock.classList.toggle('hidden');
}
function toggleImgScissorsPaper() {
    imgScissorsPaper.classList.toggle('hidden');
}

function toggleImgCharacters() {
    imgCharacters.classList.toggle('hidden');
}

// Get computer random choice
function getComputerChoice() {
    // Generate computer choice
        // Generate ramdon number. Multiply by 3 and round up, while not 0
        let choice = Math.ceil(Math.random() * 3)

        // return string based on ramdon number
        if (choice == 1) return "rock"
        else if (choice == 2 ) return "paper"
        else return "scissors"
    }

// Get human choice
function getHumanChoice() {
    let choice;
    // Ask user to enter a choice between 1 and 0
    do {
        choice = Number(prompt(
            `Make your choice! Enter the number that match your choice.
            1. Rock
            2. Paper
            3. Scissors`
        ));
    } while (choice !== 1 && choice !== 2 && choice !== 3)

    // return string based on ramdon number
    if (choice == 1) return "rock"
    else if (choice == 2 ) return "paper"
    else if (choice == 3) return "scissors"
}

// Play a single round of the game
function playRound(humanChoice, computerChoice) {
    // Make choices case insensitive
    computerChoice = computerChoice.toLowerCase();
    humanChoice = humanChoice.toLowerCase();

    // If there's a Tie
    if (humanChoice === computerChoice) {
        console.log(`Both chose ${humanChoice}`);
        msgBoard.textContent = `Both chose ${humanChoice}`;

    }

    // If human chooses Rock
    else if (humanChoice === "rock") {
        switch (computerChoice) {
            // Human chose Rock, computer chose Scissors
            case "scissors":
                console.log("Rock beats scissors");
                msgBoard.textContent = 'Rock beats scissors';
                humanScore++

                // change image
                hideImgBoard();
                toggleImgRockScissors();
                break;
            // Human chose Rock, computer chose Paper
            case "paper":
                console.log("Rock is beaten by paper");
                msgBoard.textContent = 'Rock is beaten by paper';
                computerScore++;

                hideImgBoard();
                toggleImgPaperRock();
                break;
        }
    }
    // Human chooses Paper
    else if (humanChoice === "paper") {
        switch (computerChoice) {
            // Human chose Paper, computer chose Rock
            case "rock":
                console.log("Paper beats rock");
                msgBoard.textContent = 'Paper beats rock';
                humanScore++

                hideImgBoard();
                toggleImgPaperRock();
                break;
            // Human chose Paper, computer chose Scissors
            case "scissors":
                console.log("Paper is beaten by scissors");
                msgBoard.textContent = 'Paper is beaten by scissors';
                computerScore++;

                hideImgBoard();
                toggleImgScissorsPaper();
                break;
        }
    }
    // Human chooses Scissors
    else if (humanChoice === "scissors") {
        switch (computerChoice) {
            // Human chose Paper, computer chose Paper
            case "paper":
                console.log("Scissors beats Paper");
                msgBoard.textContent = 'Scissors beats Paper';
                humanScore++

                hideImgBoard();
                toggleImgScissorsPaper();
                break;
            // Human chose Paper, computer chose Rock
            case "rock":
                console.log("Scissors beaten by Rock");
                msgBoard.textContent = 'Scissors beaten by Rock';
                computerScore++;

                hideImgBoard();
                toggleImgRockScissors();
                break;
        }
    }

    updateScoreBoard(humanScore, computerScore);

    if (humanScore >= 5 || computerScore >= 5) {
        if (humanScore > computerScore) msgBoard.textContent = 'Congrats! You won this game';        
        else msgBoard.textContent = 'Sorry. You lost this game';

        // Show Try Again
        hideBtnPlay();
        hideBtnTryAgain();
    }
    // Hide Choices button
    hideBtnChoices();
    // Show PLAY button again
    hideBtnPlay();
    return;
}

// Update global scores. And declare a winner
function updateScoreBoard(humanScore, computerScore) {
    playerScoreBoard.textContent = humanScore;
    computerScoreBoard.textContent = computerScore;
}

// Select player score board
const playerScoreBoard = document.querySelector('#playerScore');
// Select computer score board
const computerScoreBoard = document.querySelector('#computerScore');
// Select div for showing messages
const msgBoard = document.querySelector('#msgBoard');

// Select all three buttons for rock, paper and scissors
const btnChoices = document.querySelectorAll('.btnChoices');
// Add event listener for choice buttons
btnChoices.forEach(btn => {
    btn.addEventListener('click', event => {
        // Get value from button for human choice
        let humanSelection = event.target.textContent;
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    })
});


// Listener for PLAY Button.
const btnPlay = document.querySelector('#btnPlay');
btnPlay.addEventListener('click', () => {
    // Show Choices buttons
    hideBtnChoices();
    // Hide Play button
    hideBtnPlay();
})
// Hide PLAY button
function hideBtnPlay() {btnPlay.classList.toggle('hidden');}

// Listener for Try Again
const btnTryAgain = document.querySelector('#btnTryAgain');
btnTryAgain.addEventListener('click', () => {
    restartGame();
    hideBtnTryAgain();
})
function hideBtnTryAgain() {btnTryAgain.classList.toggle('hidden');}

// Hide choice buttons
function hideBtnChoices() {
    for (const btn of btnChoices) {
        btn.classList.toggle('hidden');
    } 
}

// Restart
function restartGame() {
    humanScore = 0;
    computerScore = 0;
    updateScoreBoard(humanScore, computerScore);
    msgBoard.textContent = "Let's settle this like adults";
    hideBtnPlay();

}

// Play a full game of five rounds
function playGame() {
    // Declare variables for human and computer choices
    let humanSelection, computerSelection;
    // Repeat ROUNDS number of times the dynamic of a single round
    for (let i = 0; i < ROUNDS; i++) {
        // Get human and computer choices
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        // Play single round
        playRound(computerSelection, humanSelection);
    }
    // Computer wins
    if (humanScore < computerScore) {
        alert(`Computers wins by a score of ${computerScore}-${humanScore}.`)
    }
    // Human wins
    else if (humanScore > computerScore) {
        alert(`You win!. Final score is ${computerScore}-${humanScore}.`)
    }
    // It's a tie
    else {
        alert(`It's a tie! Final score is ${computerScore}-${humanScore}.`)

    }
}

// Run game
// playGame();