let choice = "";
let comchoice;
function Rock(choice) {
    choice = "rock";
    console.log("User chose: " + choice);
    let com = Math.floor(Math.random() * 11);
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
}
function Paper(choice) {
    choice = "paper";
    console.log("User chose: " + choice);
    let com = Math.floor(Math.random() * 11);
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
}
function Scissors(choice) {
    choice = "scissors";
    console.log("User chose: " + choice);
    let com = Math.floor(Math.random() * 11);
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
}
document.getElementById("button1").addEventListener("click", changeText);
document.getElementById("button2").addEventListener("click", changeText);
document.getElementById("button3").addEventListener("click", changeText);
function changeText() {
document.getElementByID("changetext").innerText = "User chose: " + choice + "Computer chose: " + comchoice + "Results: " + winner;
}