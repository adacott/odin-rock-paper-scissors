// randomly returns rock, paper, or scissors
function getComputerChoice(){
    /**
     * 
     * @param {int} min 
     * @param {int} max 
     */
    function random(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let num = random(1, 3);

    if(num == 1){
        return "rock";
    }
    else if(num == 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

// function that plays a round; takes two parameters, the 
// playerSelection (rock, paper, or scissors) and (computerSelection)
// then it will return a string that declares the winner of the round like so:
// "You Lose! Paper beats Rock!"
//
// Hint: make your players playerselection parameter case-insensitive
/**
 * 
 * @param {string} playerSelection 
 * @param {string} getComputerChoice 
 * @returns 
 */
function playRound(){
    let player = prompt("Please enter Rock, Paper, or Scissors: ").toLowerCase();
    let computer = getComputerChoice();

    if(player == "rock" && computer == "scissors"){
        return "You win! Rock beats Scissors!";
    }
    else if(player == "scissors" && computer == "paper"){
        return "You win! Scissors beat Paper!";
    }
    else if(player == "paper" && computer == "rock"){
        return "You win! Paper beats Rock!";
    }
    else if(computer == "rock" && player == "scissors"){
        return "You lose! Rock beats Scissors!";
    }
    else if(computer == "paper" && player == "rock"){
        return "You lose! Paper beats Rock!";
    }
    else if(computer == "scissors" && player == "paper"){
        return "You lose! Scissors beat Paper!";
    }
    else {
        return "It was a tie!";
    }
}

// Use the previous function inside of this one to play a 5-round game that keeps score and reports
// a winner or a loser at the end. use prompt() to get input from the user
function game(){
    let result, pscore = 0, cscore = 0, final;

    for(let i = 0; i < 2; i ++){
        result = playRound();
        console.log(result);

        if(result.includes("win")){
            pscore += 1;
        }
        else if(result.includes("lose")){
            cscore += 1;
        }
        else{
            pscore += 1;
            cscore += 1;
        }
    }
    
    if(pscore > cscore){
        final = "The player wins!";
    }
    else if(cscore > pscore){
        final = "The computer wins!";
    }
    else{
        final = "It was a tie!";
    }

    return `The final score was: ${pscore} to ${cscore}. ${final}`;
}

string = "-1, 1: Tie";
num = parseInt(string);


