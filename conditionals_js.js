/* Part I */

let userChoice;
let randomNumber;
let computerChoice;

askHeadsOrTails();

function askHeadsOrTails() {
  userChoice = prompt("heads or tails?");
}

randomNumber = (Math.random()<0.5?0:1);
if (randomNumber == 0) {
  computerChoice = "heads";
} else {
  computerChoice = "tails";
}

if (userChoice == computerChoice) {
  alert("You guessed right! The coin flip landed on " + computerChoice);
} else {
  alert("Sorry, the coin flip landed on " + computerChoice);
}

/* Part II */

let birthYear;

birthYear = prompt("What year were you born?");

var age = 2024 - birthYear;
console.log(age);

if (age > 21) {
  alert("You are old enough to drink in the US.");

} else if (age == 21) {
  alert("You are old enough to drink in the US...barely");

} else {
  alert("Sorry, you are not old enough to drink in the US");

}
