function getComputerChoice() {
    // Generate computer choice
        // Generate ramdon number. Multiply by 3 and round up, while not 0
        let choice = Math.ceil(Math.random() * 3)

        // return string based on ramdon number
        if (choice == 1) return "rock"
        else if (choice == 2 ) return "paper"
        else return "scissors"
    }

console.log(getComputerChoice());