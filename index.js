let playerResult=prompt("Enter your choice: ").toLowerCase();


function getComputerChoice() {
    let random= Math.floor(Math.random()*3)+1;

    if (random==1) {
        random = "scissors"
    }
    else if (random==2) {
        random ="paper"
    }
    else (
        random= "rock"
    )
    return random
}
const computerResult = getComputerChoice();

if (playerResult == computerResult) {
  console.log("It's a tie!");
}
else if (playerResult == "rock" && computerResult == "scissors" || playerResult == "paper" && computerResult == "rock" || playerResult == "scissors" && computerResult == "paper") {
  console.log("Player 1 wins!");
}
else {
  console.log("The computer wins!");
}

