// Qno.2 : Create a game where you start with any random game number. Ask the use to keep guessing the game number until user enters correct value.

let gameNum = 25;
let userNum = prompt("Guess the number : ");

while( userNum != gameNum){
   userNum = prompt("You entered wrong number, Guess again !");
}

console.log ( "Congratualations,you entered the right number !");