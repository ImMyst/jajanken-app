const userScore = 0;
const computerScore = 0;
const userScorePrint = document.getElementById("user-score");
const computerScorePrint = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            console.log("USER WINS");
            break;
        case "rp":
        case "ps":
        case "sr":
            console.log("USER LOSES");
            break;
        case "rr":
        case "pp":
        case "ss":
            console.log("DRAW");
            break;
    }
}

function main() {
    rock.addEventListener('click', function () {
        game("r");
    });

    paper.addEventListener('click', function () {
        game("p");
    });

    scissors.addEventListener('click', function () {
        game("s");
    });
}

main();