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
function playRound(computerChoice, humanChoice) {
    computerChoice = computerChoice.toLowerCase();
    humanChoice = humanChoice.toLowerCase();

    // If human chooses Rock
    if (humanChoice === "rock") {
        switch (computerChoice) {
            // Human chose Rock, computer chose Scissors
            case "scissors":
                console.log("You win! Rock beats scissors");
                humanScore++
                break;
            // Human chose Rock, computer chose Paper
            case "paper":
                console.log("You lose! Rock is beaten by paper");
                computerScore++;
                break;
            // Human chose Rock, computer chose Rock
            default:
                console.log("It's a tie. Both chose rock")
        }
    }
    // Human chooses Paper
    else if (humanChoice === "paper") {
        switch (computerChoice) {
            // Human chose Paper, computer chose Rock
            case "rock":
                console.log("You win! Paper beats rock");
                humanScore++
                break;
            // Human chose Paper, computer chose Scissors
            case "scissors":
                console.log("You lose! Paper is beaten by scissors");
                computerScore++;
                break;
            // Human chose Paper, computer chose Paper
            default:
                console.log("It's a tie. Both chose paper")
        }
    }
    // Human chooses Scissors
    else {
        switch (computerChoice) {
            // Human chose Paper, computer chose Paper
            case "paper":
                console.log("You win! Scissors beats Paper");
                humanScore++
                break;
            // Human chose Paper, computer chose Rock
            case "rock":
                console.log("You lose! Scissors beaten by Rock");
                computerScore++;
                break;
            // Human chose Paper, computer chose Scissors
            default:
                console.log("It's a tie. Both chose Scissors")
        }
    }
    return;
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
playGame();