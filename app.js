const userScore = 0;
const computerScore = 0;
const userScorePrint = document.getElementById("user-score");
const computerScorePrint = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            console.log("USER WINS");
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            console.log("USER LOSES");
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            console.log("DRAW");
            break;
    }
}

function main() {
    rock.addEventListener('click', function () {
        game("rock");
    });

    paper.addEventListener('click', function () {
        game("paper");
    });

    scissors.addEventListener('click', function () {
        game("scissors");
    });
}

main();