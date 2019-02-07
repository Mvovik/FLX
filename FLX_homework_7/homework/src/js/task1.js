let login = prompt("Enter your login", "");
let date = new Date().getHours();

if (login) {
  if (login === "User" || login === "Admin") {
    let password = prompt("Enter your password", "");

    if (password) {
      if (login === "User" && password === 'UserPass') {
        if (date < 20) {
          alert("Good day, dear " + login + "!")
        } else {
          alert("Good evening, dear " + login + "!")
        }

      } else if (login === "Admin" && password === 'RootPass') {
        if (date < 20) {
          alert("Good day, dear " + login + "!")
        } else {
          alert("Good evening, dear " + login + "!")
        }

      } else {
        alert("Wrong password")
      }
    } else {
      alert("Canceled");
    }

  } else if (login.length < 4) {
    alert("I don't know any users having name length less than 4 symbols")
  } else {
    alert("I don’t know you")
  }
} else {
  alert("Canceled");
}