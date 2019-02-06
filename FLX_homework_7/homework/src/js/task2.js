let randomNumber = 3;
let scores = 0;
// let attemps = 1;
if (confirm("Do you want to play a game?")) {

  let userNumber = Number(prompt("Guess a number from: 0 to: 5", ""));

  if (userNumber === randomNumber) { //1 attemp
    scores = 10;
    alert("Congratulation! Your prize is: " + scores)

  } else {
    userNumber = Number(prompt("Guess a number from: 0 to: 5", ""));

    if (userNumber === randomNumber) { //2 attemp
      scores = 5;
      alert("Congratulation! Your prize is: " + scores)

    } else {
      userNumber = Number(prompt("Guess a number from: 0 to: 5", ""));
        if (userNumber === randomNumber) { //3 attemp
          scores = 2;
          alert("Congratulation! Your prize is: " + scores)
        } else {
          scores = 0;
          alert("Thank you for a game. Your prize is: " + scores)
        }
    }
  }


  // } else if (userNumber === randomNumber && attemps === 2) {
  //   scores = 5;
  //   attemps++; //2
  //   alert("Congratulation! Your prize is: " + scores + " Attemps" + attemps)

  // } else if (userNumber === randomNumber && attemps === 3) {
  //   scores = 2;
  //   attemps++; //3
  //   alert("Congratulation! Your prize is: " + scores + " Attemps" + attemps)

  // } else {
  //   alert("Thank you for a game. Your prize is: " + scores + " Attemps" + attemps)
  // }

} else {
  alert("You did not become a millionaire, but can.");
}