let choice = prompt("rock, paper, or scissors: ", "rock");
console.log("User chose: " + choice);
let com = Math.floor(Math.random() * 4);
let comchoice;
if(com == 3) {
    comchoice = "rock";
} else if(com == 2) {
    comchoice = "paper";
} else if(com == 1) {
    comchoice = "scissors";
} else {
    comchoice = "gun";
}
let winner;
if(choice == comchoice){
    winner = "Draw";
} else if(choice == "rock" && comchoice == "paper") {
    winner = "Computer wins!";
} else if(choice == "rock" && comchoice == "scissors") {
    winner = "You win!";
} else if(choice == "scissors" && comchoice == "paper") {
    winner = "You win!";
} else if(choice == "scissors" && comchoice == "rock") {
    winner = "Computer wins!";
} else if(choice == "paper" && comchoice == "rock") {
    winner = "You win!";
} else if(choice == "paper" && comchoice == "scissors") {
    winner = "Computer wins!";
} else {
    winner = "Computer chose gun...shoot";
}
console.log("Computer chose: " + comchoice);
console.log(winner);