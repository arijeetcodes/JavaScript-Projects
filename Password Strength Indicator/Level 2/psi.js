const inputfield = document.querySelector("#password");
const outputfield = document.querySelector("#output");
const container = document.querySelector(".container");
// Grabs your existing <div class="container"> element from the HTML and stores it in a JavaScript variable so you can dynamically manipulate its styles or CSS classes.

inputfield.addEventListener("input", function () {
  console.log(inputfield.value);
  // keeps track of every input letter by letter
  let password = inputfield.value;
  if (password.length < 12) {
    outputfield.innerText = "Password is too short";
    outputfield.style.color = "red";
    // checks length, if too short, prints text in red
    container.classList.remove("valid");
    // Placed inside every error check block. If a user enters a valid password and then deletes characters, this immediately strips the valid class off the container, instantly reverting the UI back to the default red styling.
  } else {
    if (password.search(/[a-z]/) == -1) {
      outputfield.innerText = "Password is missing a lowercase letter";
      outputfield.style.color = "red";
      // checks for smallcase, if none, prints text in red
      container.classList.remove("valid");
    } else if (password.search(/[A-Z]/) == -1) {
      outputfield.innerText = "Password is missing an UpperCase letter";
      outputfield.style.color = "red";
      // checks for UpperCase, if none, prints text in red
      container.classList.remove("valid");
    } else if (password.search(/[0-9]/) == -1) {
      outputfield.innerText = "Password is missing a Number";
      outputfield.style.color = "red";
      // checks for Numbers, if none, prints text in red
      container.classList.remove("valid");
    } else if (
      password.search(
        /[`\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\{\}\[\]\|\/\\\:\;\"\'\<\>\,\.\?]/,
      ) == -1
    ) {
      outputfield.innerText = "Password is missing a Special Character";
      outputfield.style.color = "red";
      // checks for Special Symbols, if none, prints text in red
      container.classList.remove("valid");
    } else {
      outputfield.innerText = "Password is Strong Enough";
      outputfield.style.color = "#00a70e";
      // if all conditions passed, prints text in green
      container.classList.add("valid");
      // Executes inside the final else block when the password passes every single check. It adds the valid class to the container element in the DOM (changing <div class="container"> to <div class="container valid">). This triggers the new CSS rules for the green glow, green border, and green text.
    }
  }
});
