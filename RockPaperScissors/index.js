const choiceButtons = document.querySelectorAll('.button');
let humanScore = 0;
let computerScore = 0;
const maxScore = 5;

choiceButtons.forEach(button => button.addEventListener('click', (e) => {
    if (button.id == "rock-button") playRound('rock', getComputerChoice()); 
    if (button.id == "paper-button") playRound('paper', getComputerChoice());
    if (button.id == "scissors-button") playRound('scissors', getComputerChoice());
    console.log(button.id);    
}));

function isGameFinished(){
    if (humanScore == 5){
        alert("You win!");
        humanScore = 0;
        computerScore = 0;
        return true;
    } else if (computerScore == 5) {
        alert("You lose!");
        humanScore = 0;
        computerScore = 0;
        return true;
    } else return false;
} 

function getComputerChoice(){
    let computerChoice = Math.random();

    if (computerChoice <= 0.33){
        return "rock";
    } else if (computerChoice <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function displayChoices(humanChoice, computerChoice, result) {
    const playDiv = document.querySelector("#game");

    playDiv.textContent = "You chose " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) +
                 ". Computer chose " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
                  + ". \r\nYou " + result + "!";

    console.log("click!");
    
}

function displayScore() {
    const scoreDiv = document.querySelector("#score");

    scoreDiv.textContent = "Your Score: " + humanScore + " Computer Score: " + computerScore + "\n";
}

function playRound(humanChoice, computerChoice) {
    let result = "";

    if (humanChoice == "rock"){
        if (computerChoice == "paper") {
            result = "lose";
            displayChoices(humanChoice, computerChoice, result);
            computerScore++;
            displayScore();  
            isGameFinished();          
            return false;
        } else if (computerChoice == "scissors") {
            result = "win";
            humanScore++;
            displayChoices(humanChoice, computerChoice, result);
            displayScore();
            isGameFinished();  
            return true;
        } else {
            result = "tied";
            displayChoices(humanChoice, computerChoice, result);
            return null;
        }
    }

    if (humanChoice == "paper"){
        if (computerChoice == "scissors") {
            result = "lose";
            computerScore++;
            displayChoices(humanChoice, computerChoice, result);
            displayScore();
            isGameFinished();  
            return false;
        } else if (computerChoice == "rock") {
            result = "win";
            humanScore++;
            displayChoices(humanChoice, computerChoice, result);
            displayScore();
            isGameFinished();  
            return true;
        } else {
            result = "tied";
            displayChoices(humanChoice, computerChoice, result);
            return null;
        }
    }

    if (humanChoice == "scissors"){
        if (computerChoice == "rock") {
            result = "lose";
            computerScore++;
            displayChoices(humanChoice, computerChoice, result);
            displayScore();
            isGameFinished();  
            return false;
        } else if (computerChoice == "paper") {
            result = "win";
            humanScore++;
            displayChoices(humanChoice, computerChoice, result);
            displayScore();
            isGameFinished();  
            return true;
        } else {
            result = "tied";
            displayChoices(humanChoice, computerChoice, result);
            return null;
        }
    }
}