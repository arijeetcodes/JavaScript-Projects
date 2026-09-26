const inputfield = document.querySelector("#password");
const outputfield = document.querySelector("#output");

inputfield.addEventListener("input", function () {
  console.log(inputfield.value);
  // keeps track of every input letter by letter
  let password = inputfield.value;
  if (password.length < 12) {
    outputfield.innerText = "Password is too short";
    outputfield.style.color = "red";
    // checks length, if too short, prints text in red
  } else {
    if (password.search(/[a-z]/) == -1) {
      outputfield.innerText = "Password is missing a lowercase letter";
      outputfield.style.color = "red";
      // checks for smallcase, if none, prints text in red
    } else if (password.search(/[A-Z]/) == -1) {
      outputfield.innerText = "Password is missing an UpperCase letter";
      outputfield.style.color = "red";
      // checks for UpperCase, if none, prints text in red
    } else if (password.search(/[0-9]/) == -1) {
      outputfield.innerText = "Password is missing a Number";
      outputfield.style.color = "red";
      // checks for Numbers, if none, prints text in red
    } else if (
      password.search(
        /[`\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\{\}\[\]\|\/\\\:\;\"\'\<\>\,\.\?]/,
      ) == -1
    ) {
      outputfield.innerText = "Password is missing a Special Character";
      outputfield.style.color = "red";
      // checks for Special Symbols, if none, prints text in red
    } else {
      outputfield.innerText = "Password is Strong Enough";
      outputfield.style.color = "green";
      // if all conditions passed, prints text in green
    }
  }
});
