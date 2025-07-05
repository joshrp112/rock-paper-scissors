function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const index = Math.floor(Math.random() * options.length);
    return options[index];
}
console.log(getComputerChoice());

function getHumanChoice() {
    let answer = prompt("rock, paper, or scissors?");
    return answer;
}
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

