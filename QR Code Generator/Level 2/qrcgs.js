const qrinput = document.getElementById("qr-input");
const qrimg = document.getElementById("qr-img");
const qrbutton = document.getElementById("qr-button");
// creates three variables and call the elements by their id

const genTabBtn = document.getElementById("gen-tab-btn");
const scanTabBtn = document.getElementById("scan-tab-btn");
const generatorSection = document.getElementById("generator-section");
const scannerSection = document.getElementById("scanner-section");
const scanResult = document.getElementById("scan-result");
// tab & section elements

let html5QrcodeScanner = null;

// QR Generator
qrbutton.addEventListener("click", () => {
  const inputValue = qrinput.value.trim();

  if (inputValue === "") {
    alert("You did not Write/Paste any Text/URL~!");
    return;
    // If no input given, then fires alert message
  } else {
    // encodeURIComponent ensures URLs with special parameters ('?', '&') don't break the API request
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputValue)}`;
    qrimg.alt = `QR code for ${inputValue}`;
  }
});

// Tab Switching
genTabBtn.addEventListener("click", () => {
  genTabBtn.classList.add("active");
  // on clicking active css is added on Generator Btn
  scanTabBtn.classList.remove("active");
  // on clicking active css is removed from Scanner Btn
  generatorSection.classList.remove("hidden");
  // on clicking hidden css is removed from Generator Section
  scannerSection.classList.add("hidden");
  // on clicking hidden css is added to Scanner Section

  stopScanner();
  // stops the webcam stream when switching off scanner
});

scanTabBtn.addEventListener("click", () => {
  scanTabBtn.classList.add("active");
  genTabBtn.classList.remove("active");
  scannerSection.classList.remove("hidden");
  generatorSection.classList.add("hidden");

  startScanner();
  // strats the webcan stream when opening scanner tab
});

// QR Scanner
function startScanner() {
  if (!html5QrcodeScanner) {
    // (if (!html5QrcodeScanner)): Prevents launching multiple camera streams simultaneously if the function gets called twice
    // html5QrcodeScanner = variable holding the instance
    // Html5QrcodeScanner = class constructor from the external library
    html5QrcodeScanner = new Html5QrcodeScanner("reader", {
      // "reader": The ID of the HTML <div> where the live webcam UI and target overlay will be injected
      fps: 10,
      // fps: 10: Limits scanning to 10 frames per second to keep CPU and battery usage low
      qrbox: { width: 200, height: 200 },
      // qrbox: Sets the visual scanning area square to 200*200 pixels
    });

    html5QrcodeScanner.render(onScanSuccess, onScanError);
    // .render(onScanSuccess, onScanError): Requests camera permissions, starts the video stream, and registers two callback functions for results
  }
}

function stopScanner() {
  if (html5QrcodeScanner) {
    html5QrcodeScanner
      .clear()
      // .clear(): Stops the camera feed, releases the hardware camera lock (turning off the device's camera indicator light), and deletes the UI from <div id="reader">
      .then(() => {
        html5QrcodeScanner = null;
      })
      // .then(() => { html5QrcodeScanner = null; }): Resets the global variable to null after the hardware finishes shutting down, allowing startScanner() to safely run again when the user re-opens the tab
      .catch((err) => console.error("Failed to Stop Scanner:", err));
  }
}

function onScanSuccess(decodedText) {
  // Turn URLs into clickable links automatically
  if (decodedText.startsWith("https://")) {
    scanResult.innerHTML = `<strong>Result:<strong> <a href="${decodedText}" target="_blank" rel="noopener noreferrer">${decodedText}</a>`;
  } else {
    scanResult.innerHTML = `<strong>Result:</strong> ${decodedText}`;
  }
  // Checks if the decoded text is a web link starting with https://. If it is, it formats it as an HTML anchor tag (<a>) opening in a safe new tab (target="_blank"). Otherwise, it renders it as standard text
}

function onScanError(errorMessage) {
  // Ignored continuous scanning frame errors\
  // Because the camera checks 10 frames per second (fps: 10), every single frame where a QR code is not present in the box is treated internally as a failed scan
  // Leaving this function blank prevents the browser console from getting flooded with ~10 error messages every second while the user is simply aligning their camera
}
