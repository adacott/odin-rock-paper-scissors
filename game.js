// randomly returns rock, paper, or scissors
function getComputerChoice() {
    /**
     * 
     * @param {int} min 
     * @param {int} max 
     */
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let num = random(1, 3);

    if (num == 1) {
        return "rock";
    }
    else if (num == 2) {
        return "paper";
    }
    else {
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
function playRound() {
    let player = prompt("Please enter Rock, Paper, or Scissors: ").toLowerCase();
    let computer = getComputerChoice();

    if (player == "rock" && computer == "scissors") {
        return "You win! Rock beats Scissors!";
    }
    else if (player == "scissors" && computer == "paper") {
        return "You win! Scissors beat Paper!";
    }
    else if (player == "paper" && computer == "rock") {
        return "You win! Paper beats Rock!";
    }
    else if (computer == "rock" && player == "scissors") {
        return "You lose! Rock beats Scissors!";
    }
    else if (computer == "paper" && player == "rock") {
        return "You lose! Paper beats Rock!";
    }
    else if (computer == "scissors" && player == "paper") {
        return "You lose! Scissors beat Paper!";
    }
    else {
        return "It was a tie!";
    }
}

// Use the previous function inside of this one to play a 5-round game that keeps score and reports
// a winner or a loser at the end. use prompt() to get input from the user
function game() {
    let result, pscore = 0, cscore = 0, final;
    result = playRound();

    if (result.includes("win")) {
        pscore += 1;
    }
    else if (result.includes("lose")) {
        cscore += 1;
    }
    else {
        pscore += 1;
        cscore += 1;
    }

    if (pscore > cscore) {
        final = "The player wins!";
    }
    else if (cscore > pscore) {
        final = "The computer wins!";
    }
    else {
        final = "It was a tie!";
    }

    return `The final score was: ${pscore} to ${cscore}. ${final}`;
}


// Always make sure that you have your script tag at the very end of your file. 
// If you do not then try to use queryselector, it will not work properly because the DOM tree
// has not been built and populated yet
//
// To add a custom function to this, instead use this format:
// btns.forEach(btn => btn.addEventListener("click", myfunction()));

// To see what you are working with you can create any console then log the event like so:
// function playRound(e){
//     console.log(e);
// }
// This will allow you to gain insight into the "click" event. This is functionally similar to defining function(e){} inside of the event listener function, but much cleaner while laying the ground-work for implementing a function that will actually do something

const btns = document.querySelectorAll("button");
console.log(btns);

// Adds an event listener to each button, running the function for each
// btns.forEach(btn => btn.addEventListener("click", function (e) {
//     console.log(e);
// }));

function myFunction(e) {
    // player = document.querySelector("div.player");
    // console.log(player);

    // npc = document.querySelector("div.npc");
    // console.log(npc);

    // npc.innerHTML = "New Text!";
    // player.innerHTML = "Now, we have to use word-wrap property. So, we have to place the cursor between the head tag just after the title tag. And, then we have to define a class and ";

    // console.log(e.target.className); // returns the class name to use to select the results

    // Selects the image element for the player and changes the image and size
    // im = document.querySelector(".box img");
    // console.log(im);
    // im.src = "svg-assets/rock.svg";
    // im.width = 200;
    // im.height = 200;

    // Reach each button's event class, then adjust the player image to be the same:
    if (e.target.className == "rock") {
        console.log("It is a rock");
    }
    else if (e.target.className == "paper") {
        console.log("It is paper");
    }
    else if (e.target.className == "scissors") {
        console.log("It is scissors");
    }
}

btns.forEach(btn => btn.addEventListener("click", myFunction));

