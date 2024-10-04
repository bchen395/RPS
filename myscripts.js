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

function getHumanChoice(){
    return prompt("rock, paper, or scissors?");
}



function playGame(){
    let humanScore, computerScore = 0;

    function playRound(humanChoice, computerChoice){
        humanChoice.toLowerCase();
        if (humanChoice === computerChoice){
            console.log("Tie!")
        }
        if (humanChoice === "paper" && computerChoice === "scissors"){
            console.log("You lose! Scissors beats Paper")
            computerScore+=1;
        }
        if (humanChoice === "paper" && computerChoice === "rock"){
            console.log("You win! Paper beats Rock")
            humanScore+=1;
        }
        if (humanChoice === "rock" && computerChoice === "scissors"){
            console.log("You win! Rock beats Scissors")
            humanScore+=1;
        }
        if (humanChoice === "rock" && computerChoice === "paper"){
            console.log("You lose! Paper beats Rock")
            computerScore+=1;
        }
        if (humanChoice === "scissors" && computerChoice === "rock"){
            console.log("You lose! Rock beats Scissors")
            computerScore+=1;
        }
        if (humanChoice === "scissors" && computerChoice === "paper"){
            console.log("You win! Scissors beats Paper")
            humanScore+=1;
        }
    }

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }


}

playGame()
