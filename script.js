let computerChoiceResult = "";
let humanChoiceResult = "";


function getComputerChoice(){
    var ChoiceRes = "";

    let randomNumberRes = Math.floor(Math.random() * 100);
    console.log(randomNumberRes);

    if(randomNumberRes <= 33){
        ChoiceRes = "Rock";
    } 
    else if(34 <= randomNumberRes && randomNumberRes <= 66){
        ChoiceRes = "Paper";
    }
    else{
        ChoiceRes = "Scissors";
    }

    return ChoiceRes;

}

function getHumanChoice(){
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    let res = "";

    let userInput = prompt("Enter your choice");
    let low_userInput = userInput.toLowerCase();
    
    if(low_userInput.localeCompare(rock) == 0){
        res = (low_userInput.charAt(0)).toUpperCase() + low_userInput.slice(1);
        return res;
    }
    else if(low_userInput.localeCompare(paper) == 0){
        res = (low_userInput.charAt(0)).toUpperCase() + low_userInput.slice(1);
        return res;
    }
    else if(low_userInput.localeCompare(scissors) == 0){
        res = (low_userInput.charAt(0)).toUpperCase() + low_userInput.slice(1);
        return res;
    }
    else{
        console.log("Wrong input, try again");
    }
}

computerChoiceResult = getComputerChoice();
console.log(computerChoiceResult);
humanChoiceResult = getHumanChoice;
console.log(humanChoiceResult());
