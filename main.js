// Total number of rounds
const ROUNDS = 5;
// Initiate score variables
let computerScore = 0;
let humanScore = 0;

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
    computerChoice = computerChoice.toLowerCase();
    humanChoice = humanChoice.toLowerCase();

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
                break;
            // Human chose Rock, computer chose Paper
            case "paper":
                console.log("Rock is beaten by paper");
                msgBoard.textContent = 'Rock is beaten by paper';
                computerScore++;
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
                break;
            // Human chose Paper, computer chose Scissors
            case "scissors":
                console.log("Paper is beaten by scissors");
                msgBoard.textContent = 'Paper is beaten by scissors';
                computerScore++;
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
                break;
            // Human chose Paper, computer chose Rock
            case "rock":
                console.log("Scissors beaten by Rock");
                msgBoard.textContent = 'Scissors beaten by Rock';
                computerScore++;
                break;
        }
    }

    updateScores(humanScore, computerScore);
    return;
}

function updateScores(humanScore, computerScore) {
    playerScoreBoard.textContent = humanScore;
    computerScoreBoard.textContent = computerScore;

    if (humanScore >= 5) {
        msgBoard.textContent = 'Congrats! You won this game';
        hideBtnChoices();
    } else if (computerScore >= 5) {
        msgBoard.textContent = 'Sorry. You lost this game';
        hideBtnChoices();
    }
}

const btnChoices = document.querySelectorAll('.btnChoices');
const playerScoreBoard = document.querySelector('#playerScore');
const computerScoreBoard = document.querySelector('#computerScore');
const msgBoard = document.querySelector('#msgBoard');

btnChoices.forEach(btn => {
    btn.addEventListener('click', event => {
        let humanSelection = event.target.textContent;
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    })
});

function hideBtnChoices() {
    for (const btn of btnChoices) {
        btn.classList.toggle('hidden');
    } 
}

btnPlay.addEventListener('click', () => {
    hideBtnChoices();

    // Get human and computer choices
    computerSelection = getComputerChoice();
})



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