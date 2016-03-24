var playToFive = function () {

    var playerScore = 0;
    var computerScore = 0;

    var userMakesAChoice = function () {
        var userChoice = prompt("Let's play rock, paper, scissors!\nEnter your choice");
        return userChoice;
    };

    var computerMakesAChoice = function() {
        var computerThink = Math.random();
        if (computerThink <= 0.33) {
            computerChoice = "rock";
        } else if (computerThink <= 0.66) {
            computerChoice = "scissors";
        } else if (computerThink >= 0.66) {
            computerChoice = "paper";
        }
        return computerChoice;
    };

    console.log("Let's play rock paper scissors");

    var choice1 = null;
    var choice2 = null;

    var playGame = function(choice1, choice2) {
        choice1 = userMakesAChoice();
        choice2 = computerMakesAChoice();

        console.log("Computer chooses " + choice2);
        console.log("Player chooses  " + choice1);

        if (choice1 == choice2) {
            console.log("Its a tie")
            return false;
        }
        if (choice1 == "rock") {
            if (choice2 == "scissors") {
                playerScore++;
                console.log("Player wins");
            }
            else {
                computerScore++;
                console.log("Computer wins");
            }
        }
        if (choice1 == "paper") {
            if (choice2 == "rock") {
                playerScore++;
                console.log("Player wins");
            }
            else {
                computerScore++;
                console.log("Computer wins");
            }
        }
        if (choice1 == "scissors") {
            if (choice2 == "paper") {
                playerScore++;
                console.log("Player wins");
            }
            else {
                computerScore++;
                console.log("Computer wins");
            }
        }
    };
    do {
        playGame(choice1, choice2);
        } while(playerScore < 5 && computerScore < 5);
    return [playerScore, computerScore];
};

playToFive();
