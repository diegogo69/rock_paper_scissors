// Total number of rounds
const ROUNDS = 5;
// Initiate score variables
let computerScore = 0;
let humanScore = 0;

// Images references
const imgCharacters = document.querySelector('#imgCharacters');
const imgRockScissors = document.querySelector('#imgRockScissors');
const imgPaperRock = document.querySelector('#imgPaperRock');
const imgScissorsPaper = document.querySelector('#imgScissorsPaper');
const imgRock = document.querySelector('#imgRock');
const imgPaper = document.querySelector('#imgPaper');
const imgScissors = document.querySelector('#imgScissors');

// References for Score and message boards
const playerScoreBoard = document.querySelector('#playerScore');
const computerScoreBoard = document.querySelector('#computerScore');
const msgBoard = document.querySelector('#msgBoard');

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

    // If human chooses Rock
    if (humanChoice === "rock") {
        switch (computerChoice) {
            // Human chose Rock, computer chose Scissors
            case "scissors":
                console.log("Rock beats scissors");
                msgBoard.textContent = 'Rock beats scissors';
                humanScore++
                // change image
                toggleImgBoard();
                toggleCharacterImg(humanChoice, 'win');
                break;
            // Human chose Rock, computer chose Paper
            case "paper":
                console.log("Rock is beaten by paper");
                msgBoard.textContent = 'Rock is beaten by paper';
                computerScore++;

                toggleImgBoard();
                toggleCharacterImg(humanChoice, 'defeat');
                break;

            default:
                console.log(`Both chose ${humanChoice}`);
                msgBoard.textContent = `Both chose ${humanChoice}`;

                toggleImgBoard();
                toggleCharacterImg(humanChoice, 'tie');
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

                toggleImgBoard();
                toggleCharacterImg(humanChoice, 'win');
                break;
            // Human chose Paper, computer chose Scissors
            case "scissors":
                console.log("Paper is beaten by scissors");
                msgBoard.textContent = 'Paper is beaten by scissors';
                computerScore++;

                toggleImgBoard();
                toggleCharacterImg(humanChoice, 'defeat');
                break;

            default:
                console.log(`Both chose ${humanChoice}`);
                msgBoard.textContent = `Both chose ${humanChoice}`;

                toggleImgBoard();
                toggleCharacterImg(humanChoice, 'tie');
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

                toggleImgBoard();
                toggleCharacterImg(humanChoice, 'win');
                break;
            // Human chose Paper, computer chose Rock
            case "rock":
                console.log("Scissors beaten by Rock");
                msgBoard.textContent = 'Scissors beaten by Rock';
                computerScore++;

                toggleImgBoard();
                toggleCharacterImg(humanChoice, 'defeat');
                break;

            default:
                console.log(`Both chose ${humanChoice}`);
                msgBoard.textContent = `Both chose ${humanChoice}`;
                toggleImgBoard();
                toggleCharacterImg(humanChoice, 'tie');
                break;
        }
    }

    updateScoreBoard(humanScore, computerScore);
    checkIfWinner();
    // Hide Choices button
    toggleBtnChoices();
    // Show PLAY button again
    toggleBtnPlay();
    return;
}

// Check winner
function checkIfWinner() {
    if (humanScore >= 5 || computerScore >= 5) {
        if (humanScore > computerScore) msgBoard.textContent = 'Congrats! You won this game';        
        else msgBoard.textContent = 'Sorry. You lost this game';
    
        // Show Try Again
        toggleBtnPlay();
        toggleBtnTryAgain();
    }
}

// Selector for the image at the moment
const imgBoard = document.querySelectorAll('.imgBoard');
// Hide current visible image
function toggleImgBoard() {
    imgBoard.forEach(img => {
        // If not hidden. Then hide
        if (!img.classList.contains('hidden')) {
            img.classList.toggle('hidden');
            // Delete any result shadow if any
            if (img.classList.contains('successShadow')) {
                img.classList.toggle('successShadow')
            } else if (img.classList.contains('defeatShadow')) {
                img.classList.toggle('defeatShadow')
            }
        }
 
    });
}

// Update global scores. And declare a winner
function updateScoreBoard(humanScore, computerScore) {
    playerScoreBoard.textContent = humanScore;
    computerScoreBoard.textContent = computerScore;
}

// Hide Score board when no started game
const scoreBoard = document.querySelector('#scoreBoard');
function toggleScoreBoard() {
    scoreBoard.classList.toggle('hidden')
}

// Display/hide main image with all characters
function toggleImgCharacters() {
    imgCharacters.classList.toggle('hidden');
}

// Hide choice buttons
function toggleBtnChoices() {
    for (const btn of btnChoices) {
        btn.classList.toggle('hidden');
    } 
}

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
function toggleBtnPlay() {btnPlay.classList.toggle('hidden');}
btnPlay.addEventListener('click', () => {
    // Show Choices buttons
    toggleBtnChoices();
    // Hide Play button
    toggleBtnPlay();
})

// Listener for Try Again
const btnTryAgain = document.querySelector('#btnTryAgain');
btnTryAgain.addEventListener('click', () => {
    restartGame();
    toggleImgBoard();
    toggleImgCharacters();
    toggleBtnTryAgain();
})
function toggleBtnTryAgain() {btnTryAgain.classList.toggle('hidden');}


// Restart
function restartGame() {
    humanScore = 0;
    computerScore = 0;
    updateScoreBoard(humanScore, computerScore);
    msgBoard.textContent = "Let's settle this like adults";
    toggleBtnPlay();

}

// Display characters images based on choice and result
function toggleCharacterImg(character, result) {
    if (character === 'rock') {
        switch (result) {
            case 'win':
                imgRockScissors.classList.toggle('hidden');
                imgRockScissors.classList.toggle('successShadow');
                break;
            case 'defeat':
                imgPaperRock.classList.toggle('hidden');
                imgPaperRock.classList.toggle('defeatShadow');
                break;
            default:
                imgRock.classList.toggle('hidden');
                break;
        }
    } else if (character === 'paper') {
        switch (result) {
            case 'win':
                imgPaperRock.classList.toggle('hidden');
                imgPaperRock.classList.toggle('successShadow');
                break;
            case 'defeat':
                imgScissorsPaper.classList.toggle('hidden');
                imgScissorsPaper.classList.toggle('defeatShadow');
                break;
            default:
                imgPaper.classList.toggle('hidden');
                break;
        }
    } else if (character === 'scissors') {
        switch (result) {
            case 'win':
                imgScissorsPaper.classList.toggle('hidden');
                imgScissorsPaper.classList.toggle('successShadow');
                break;
            case 'defeat':
                imgRockScissors.classList.toggle('hidden');
                imgRockScissors.classList.toggle('defeatShadow');
                break;
            default:
                imgScissors.classList.toggle('hidden');
                break;
            }
    } 
}
