let choice = prompt("rock, paper, or scissors: ", "rock");
if(choice == "rock") {
    choice = "rock";
} else if(choice == "paper") {
    choice = "paper";
} else if(choice == "scissors") {
    choice = "scissors";
} else {
    choice = prompt("Not valid, try again: ");
}
console.log("User chose: " + choice);
let com = Math.floor(Math.random() * 11);
let comchoice;
if(com == 10 || com == 9 || com == 8) {
    comchoice = "rock";
} else if(com == 7 || com == 6 || com == 5) {
    comchoice = "paper";
} else if(com == 4 || com == 3 || com == 2) {
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
console.log("Results: " + winner);

if(confirm("Play again?") == true) {
    location.reload();
} else {
    window.close();
    console.log("Goodbye");
}