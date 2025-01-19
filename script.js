let computerChoiceResult = "";
let humanChoiceResult = "";
let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let ChoiceRes = "";

    let randomNumberRes = Math.floor(Math.random() * 100);
    if(randomNumberRes <= 33){
        ChoiceRes = "Rock";
    } 
    else if(34 <= randomNumberRes && randomNumberRes <= 66){
        ChoiceRes = "Paper";
    }
    else{
        ChoiceRes = "Scissors";
    }

    console.log("Compuper choice:", ChoiceRes);
    return ChoiceRes;

}

function getHumanChoice(){
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    let res = "";
    let flag = true;

    while(flag){

        let userInput = prompt("Enter your choice");
        let low_userInput = userInput.toLowerCase();

        if(low_userInput.localeCompare(rock) == 0){
            res = (low_userInput.charAt(0)).toUpperCase() + low_userInput.slice(1);
            flag = false;
            console.log("Your choice:", res);
            return res;
        }
        else if(low_userInput.localeCompare(paper) == 0){
            res = (low_userInput.charAt(0)).toUpperCase() + low_userInput.slice(1);
            flag = false;
            console.log("Your choice:", res);
            return res;
        }
        else if(low_userInput.localeCompare(scissors) == 0){
            res = (low_userInput.charAt(0)).toUpperCase() + low_userInput.slice(1);
            flag = false;
            console.log("Your choice:", res);
            return res;
        }
        else{
            //console.log("Wrong input, try again");
            window.alert("Wrong input, try again.");
        }
    }

}

function playRound(humanChoice, computerChoice){
    switch(humanChoice){
        case "Rock":
            if(computerChoice == "Rock"){
                console.log("Draw.");
            }
            else if(computerChoice == "Paper"){
                console.log("You lose. Paper beats Rock.");
                computerScore++;
            }
            else{
                console.log("You win.");
                humanScore++;
            }
        break;
        case "Paper":
            if(computerChoice == "Paper"){
                console.log("Draw.");
            }
            else if(computerChoice == "Scissors"){
                console.log("You lose. Scissors beat Paper.");
                computerScore++;
            }
            else{
                console.log("You win.");
                humanScore++;
            }
        break;
        case "Scissors":
            if(computerChoice == "Scissors"){
                console.log("Draw.");
            }
            else if(computerChoice == "Rock"){
                console.log("You lose. Rock beats Scissors.");
                computerScore++;
            }
            else{
                console.log("You win.");
                humanScore++;
            }
        break;
    }

    console.log("Computer Score: ", computerScore, "Your Score: ", humanScore);
}

function playGame(){
    for(let i =0; i <= 4; i++){
        computerChoiceResult = getComputerChoice();
        humanChoiceResult = getHumanChoice();
        playRound(humanChoiceResult, computerChoiceResult);
    }
    console.log("");
    console.log("The final result: Computer Score: ", computerScore, "Your Score: ", humanScore);
    if(computerScore < humanScore){
        console.log("The winner is You.");
    }
    else if(computerScore > humanScore){
        console.log("The winner is the Computer.");
    }
    else{
        console.log("Draw.");
    }
}

playGame();
