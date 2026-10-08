function playRockPaperScissors() {
    let userChoice;
    
    while (true) {
        userChoice = prompt("Choose rock, paper, or scissors:").toLowerCase().trim();
        if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
            break;
        }
        alert("Invalid entry! Please enter either rock, paper, or scissors.");
    }

    const randomNum = Math.random();
    let computerChoice;

    if (randomNum < 0.34) {
        computerChoice = "rock";
    } else if (randomNum <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    // Step 4 & 5: Determine Winner or Tie
    if (userChoice === computerChoice) {
        alert(`It's a tie! Both chose ${userChoice}.`);
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        alert(`You win! ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)} beats ${computerChoice}.`);
    } else {
        alert(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${userChoice}.`);
    }
}

playRockPaperScissors();