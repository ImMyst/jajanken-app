const userScorePrint = document.getElementById("user-score");
const computerScorePrint = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result > p");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");
let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Pierre";
    if (letter === "p") return "Papier";
    if (letter === "s") return "Ciseaux";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScorePrint.innerHTML = userScore;
    computerScorePrint.innerHTML = computerScore;
    const smallUserWord = "toi".fontsize(3).sub();
    const smallComputerWord = "ordi".fontsize(3).sub();
    result.innerHTML = `${convertToWord(userChoice)}${smallUserWord} gagne contre ${convertToWord(computerChoice)}${smallComputerWord} . Tu gagnes ! \u{1F624}`;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScorePrint.innerHTML = userScore;
    computerScorePrint.innerHTML = computerScore;
    const smallUserWord = "toi".fontsize(3).sub();
    const smallComputerWord = "ordi".fontsize(3).sub();
    result.innerHTML = `${convertToWord(userChoice)}${smallUserWord} perd face à ${convertToWord(computerChoice)}${smallComputerWord} . Tu perds !\u{1F627}`;
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "toi".fontsize(3).sub();
    const smallComputerWord = "ordi".fontsize(3).sub();
    result.innerHTML = `${convertToWord(userChoice)}${smallUserWord} annihile ${convertToWord(computerChoice)}${smallComputerWord} . Égalité ! \u{1F612}`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
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