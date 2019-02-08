let attemps = 3;
let maxAttempts = 3;
let scores = 10;
let totalPrize = 0;
let rangeOfNumbers = 5;

let startPlay = confirm("Do you want to play a game?");
if (startPlay) {
  let randomNumber = Math.round(Math.random() * rangeOfNumbers);
  console.log(randomNumber);
  while (attemps > 0) {

    let userNumber = parseInt(prompt("Guess a number from: 0 to: " + rangeOfNumbers +
      "\n    Attemps left: " + attemps +
      "\n    Total prize: " + totalPrize + "$" +
      "\n    Possible prize: " + Math.floor(scores / Math.pow(2, maxAttempts - attemps)) + "$", "0"));

    if (userNumber === randomNumber) {
      totalPrize += Math.floor(scores / Math.pow(2, maxAttempts - attemps));

      let letPlay = confirm("Congratulation! Your prize is: " + totalPrize + "$" + " Do you want to continue?");
      if (letPlay) {
        randomNumber = Math.round(Math.random() * rangeOfNumbers);
        console.log(randomNumber);
        rangeOfNumbers *= 2;
        attemps = 4;
        scores *= 3;
      } else {
        alert("Thank you for a game. Your prize is: " + totalPrize + "$");
        // break;
        let playAgain = confirm("Do you want to play a again?")
        attemps = 4;
        totalPrize = 0;
        rangeOfNumbers = 5;
        scores = 10;
        if (playAgain) {
          //
        } else {
          break;
        }
      }
    }
    attemps--;

    if (userNumber !== randomNumber && attemps === 0) { // не вгадав і немає спроб
      alert("Thank you for a game. Your prize is: " + totalPrize + "$")
      let playAgain = confirm("Do you want to play a again?")
      if (playAgain) {
        attemps = 3;
      } else {
        alert("You did not become a millionaire, but can.");
      }
    }
  }

} else {
  alert("You did not become a millionaire, but can.");
}