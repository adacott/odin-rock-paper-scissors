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

/**
 * 
 * @param {string} playerSelection 
 * @param {string} getComputerChoice 
 * @returns 
 */
function playRound(player, computer) {

    result = document.querySelector(".round-declaration h3");
    sub_result = document.querySelector(".round-subtext div");

    if (player == "rock" && computer == "scissors") {
        result.innerHTML = "You won the round!";
        sub_result.innerHTML = "Rock beats scissors!";
    }
    else if (player == "scissors" && computer == "paper") {
        result.innerHTML = "You won the round!";
        sub_result.innerHTML = "Scissors beat paper!";
    }
    else if (player == "paper" && computer == "rock") {
        result.innerHTML = "You won the round!";
        sub_result.innerHTML = "Paper beats rock!";
    }
    else if (computer == "rock" && player == "scissors") {
        result.innerHTML = "You lost the round!";
        sub_result.innerHTML = "Scissors loses to rock!";
    }
    else if (computer == "paper" && player == "rock") {
        result.innerHTML = "You lost the round!";
        sub_result.innerHTML = "Rock loses to paper!";
    }
    else if (computer == "scissors" && player == "paper") {
        result.innerHTML = "You lost the round!";
        sub_result.innerHTML = "Paper loses to scissors!";
    }
    else {
        result.innerHTML = "It was a tie!";
        sub_result.innerHTML = "No points given!";
    }
}

function game() {
    let result, pscore = 0, cscore = 0, final;
    result = playRound();

    // Tally score
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

    // Game declaration
    if ((pscore == 5 || cscore == 5) && pscore > cscore) {
        final = "The player wins!";
    }
    else if ((pscore == 5 || cscore == 5) && cscore > pscore) {
        final = "The computer wins!";
    }
}

function myFunction(e) {
    // Read each button's event class, then adjust the player image to be the same:
    cl = e.target.className;
    pim = document.querySelectorAll(".boxes .box img");
    pim.forEach(each => each.style.width = "65%");
    pim.forEach(each => each.style.height = "65%");
    pc = getComputerChoice();

    pim[0].src = `svg-assets/${cl}.svg`;
    pim[1].src = `svg-assets/${pc}.svg`;

    playRound(cl, pc);
    // Here, the function for game will go, which will tally the score and reset at 5 points


}

const btns = document.querySelectorAll("button");
btns.forEach(btn => btn.addEventListener("click", myFunction));


