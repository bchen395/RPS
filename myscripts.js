function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0){
        return "rock";
    }
    else if (choice === 1){
        return "paper";
    }
    else {
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

const results = document.querySelector(".results");
const human = document.querySelector(".human");
const computer = document.querySelector(".computer");
const winner = document.querySelector(".winner");

function playRound(humanChoice, computerChoice){
    humanChoice.toLowerCase();
    if (humanChoice === computerChoice){
        results.textContent = "Tie!";
    }
    if (humanChoice === "paper" && computerChoice === "scissors"){
        results.textContent = "You lose! Scissors beats Paper";
        computerScore+=1;
    }
    if (humanChoice === "paper" && computerChoice === "rock"){
        results.textContent = "You win! Paper beats Rock";
        humanScore+=1;
    }
    if (humanChoice === "rock" && computerChoice === "scissors"){
        results.textContent = "You win! Rock beats Scissors";
        humanScore+=1;
    }
    if (humanChoice === "rock" && computerChoice === "paper"){
        results.textContent = "You lose! Paper beats Rock";
        computerScore+=1;
    }
    if (humanChoice === "scissors" && computerChoice === "rock"){
        results.textContent = "You lose! Rock beats Scissors";
        computerScore+=1;
    }
    if (humanChoice === "scissors" && computerChoice === "paper"){
        results.textContent = "You win! Scissors beats Paper";
        humanScore+=1;
    }
    human.textContent = " You: " + humanScore;
    computer.textContent = " Computer: " + computerScore;

    if (humanScore === 5){
        winner.textContent = "You win!";
        humanScore = 0;
        computerScore = 0;
        human.textContent = " You: " + humanScore;
        computer.textContent = " Computer: " + computerScore;
    }
    if (computerScore === 5){
        winner.textContent = "Computer wins!";
        humanScore = 0;
        computerScore = 0;
        human.textContent = " You: " + humanScore;
        computer.textContent = " Computer: " + computerScore;
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () =>{
    let humanSelection = "rock";
    playRound(humanSelection, getComputerChoice());
});

paper.addEventListener("click", () =>{
    let humanSelection = "paper";
    playRound(humanSelection, getComputerChoice());
});

scissors.addEventListener("click", () =>{
    let humanSelection = "scissors";
    playRound(humanSelection, getComputerChoice());
});







