function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const index = Math.floor(Math.random() * options.length);
    return options[index];
}

function getHumanChoice() {
    let answer = prompt("rock, paper, or scissors?");
    return answer;
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        const player = humanChoice.trim().toLowerCase();
        const cpu = computerChoice.trim().toLowerCase();

        const winsAgainst = {
            rock: "scissors",
            paper: "rock",
            scissors: "paper"
        };

        if (player === cpu) {
            console.log(`Tie! You both picked ${player}.`);
            return;
        }

        if (winsAgainst[player] === cpu) {
            humanScore++;
            console.log(`You win! ${player} beats ${cpu}.`);
        } else {
            computerScore++;
            console.log(`You lose! ${cpu} beats ${player}.`);
        }
    }

    // const humanSelection = getHumanChoice();
    // const computerSelection = getComputerChoice();

    // playRound(humanSelection, computerSelection);

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Score -- You: ${humanScore} | CPU: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log(`Final result: You win!`);
    } else if (computerScore > humanScore) {
        console.log(`Final result: Computer wins!`);
    } else {
        console.log(`Final result: It's a draw!`);
    }


}

playGame();