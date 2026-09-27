const qrinput = document.getElementById("qr-input");
const qrimg = document.getElementById("qr-img");
const qrbutton = document.getElementById("qr-button");
// creates three variables and calls the elements by their id

console.log(qrinput, qrimg, qrbutton);
// loads the three element to the console

qrbutton.addEventListener("click", () => {
  const inputValue = qrinput.value;
  console.log(inputValue);

  if (inputValue === "") {
    alert("You did not Paste any URL/Text");
    return;
  } else {
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    qrimg.alt = `QR code for ${inputValue}`;
  }
});
