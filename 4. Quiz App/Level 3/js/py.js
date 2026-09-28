const quiz = [
  {
    question:
      "Which of the following mathematical theorems relates a surface integral of the curl of a vector field to a line integral around the boundary of that surface?",
    ans1text: "Divergence theorem",
    ans2text: "Green's theorem",
    ans3text: "Stokes' theorem",
    ans4text: "Taylor's theorem",
    answer: "Stokes' theorem",
  },
  {
    question:
      "According to Kepler's second law of planetary motion, the areal velocity of a planet revolving around the sun is constant. This is a direct consequence of the conservation of which physical quantity?",
    ans1text: "Linear momentum",
    ans2text: "Kinetic energy",
    ans3text: "Angular momentum",
    ans4text: "Total mechanical energy",
    answer: "Angular momentum",
  },
  {
    question:
      "When unpolarized light of intensity I_0 is passed through two ideal polaroids whose transmission axes are oriented at an angle of 60 degrees to each other, what is the intensity of the emergent light?",
    ans1text: "I_0 / 2",
    ans2text: "I_0 / 4",
    ans3text: "I_0 / 8",
    ans4text: "3 * I_0 / 8",
    answer: "I_0 / 8",
  },
  {
    question:
      "In electromagnetism, what does the Poynting vector physically represent?",
    ans1text: "The momentum density of the electromagnetic field",
    ans2text:
      "The directional rate of energy transport per unit area by electromagnetic waves",
    ans3text: "The magnetic flux through a closed surface",
    ans4text: "The total charge enclosed by a surface",
    answer:
      "The directional rate of energy transport per unit area by electromagnetic waves",
  },
  {
    question:
      "According to the Clausius-Clapeyron equation, the slope of the phase boundary on a pressure-temperature (P-T) diagram for the melting of ice into water is negative. This occurs primarily because water has a:",
    ans1text: "Higher latent heat than ice",
    ans2text: "Lower density than ice",
    ans3text: "Higher density than ice",
    ans4text: "Lower specific heat than ice",
    answer: "Higher density than ice",
  },
  {
    question:
      "For a particle trapped in a one-dimensional infinite potential box of width L (from x = 0 to x = L), what is the expectation value of its position <x> when it is in its ground state?",
    ans1text: "L / 2",
    ans2text: "L / 3",
    ans3text: "L / 4",
    ans4text: "0",
    answer: "L / 2",
  },
  {
    question:
      "According to de Morgan's theorem in Boolean algebra, the complement of the expression (A + B) is logically equivalent to which of the following?",
    ans1text: "A' + B'",
    ans2text: "A' . B'",
    ans3text: "A . B",
    ans4text: "(A . B)'",
    answer: "A' . B'",
  },
  {
    question:
      "In the mathematical methods of physics, what property always holds true for the eigenvalues of a Hermitian matrix?",
    ans1text: "They are purely imaginary",
    ans2text: "They are real",
    ans3text: "They are always zero",
    ans4text:
      "They are complex conjugates of each other with non-zero imaginary parts",
    answer: "They are real",
  },
  {
    question:
      "Which of the following statistical distributions applies to a system of identical, indistinguishable particles with half-integer spin that obey the Pauli exclusion principle?",
    ans1text: "Maxwell-Boltzmann distribution",
    ans2text: "Bose-Einstein distribution",
    ans3text: "Fermi-Dirac distribution",
    ans4text: "Gibbs distribution",
    answer: "Fermi-Dirac distribution",
  },
  {
    question:
      "A Zener diode is primarily designed to reliably operate in which of the following regions for its most common application as a voltage regulator?",
    ans1text: "Forward breakdown region",
    ans2text: "Reverse breakdown region",
    ans3text: "Active region",
    ans4text: "Saturation region",
    answer: "Reverse breakdown region",
  },
];
// quiz.length = 10

const question = document.getElementById("quiz-question");
// creates a variable and connects it to #quiz-question of the html file
const optionA = document.getElementById("text-option-a");
const optionB = document.getElementById("text-option-b");
const optionC = document.getElementById("text-option-c");
const optionD = document.getElementById("text-option-d");
// create variables and connect them to the option by their id
const answer = document.querySelectorAll(".answer");
const button = document.getElementById("submit");

console.log(question);
// loads/checks the h2(question) tag from html file
console.log(question.textContent);
// loads/checks only the content of h2(question) tag from the html file
console.log(optionA);
console.log(optionA.textContent);
console.log(optionB);
console.log(optionB.textContent);
console.log(optionC);
console.log(optionC.textContent);
console.log(optionD);
console.log(optionD.textContent);
console.log("answer", answer);
// gives you a nodelist with 4 input fields
console.log(button);
console.log(button.textContent);

let currentQuestion = 0;
let score = 0;
// creates two variables and assign them 0 for increment

console.log(quiz[currentQuestion].question);
// loads the first question into currentQuestion variable
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);

question.textContent = quiz[currentQuestion].question;
// assigns the value of updated currentQuestion to question varibale, hence replace the previous value i.e Question Tag
optionA.textContent = quiz[currentQuestion].ans1text;
optionB.textContent = quiz[currentQuestion].ans2text;
optionC.textContent = quiz[currentQuestion].ans3text;
optionD.textContent = quiz[currentQuestion].ans4text;

button.addEventListener("click", () => {
  const checkedAns = document.querySelector('input[type="radio"]:checked');
  console.log(checkedAns);
  //   loads the tag of checked answer
  if (checkedAns === null) {
    alert("Please Select An Answer");
    // if no options chosen, fires alert
  } else {
    if (
      checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer
    ) {
      score++;
      //   if the content of the tag of the chosen option is equal to the answer in the given array then increase score by 1
    }
    currentQuestion++;
    // after the if increase the question by 1
    if (currentQuestion < quiz.length) {
      checkedAns.checked = false;
      // removes the previos checked radio button for new option
      question.textContent = quiz[currentQuestion].question;
      optionA.textContent = quiz[currentQuestion].ans1text;
      optionB.textContent = quiz[currentQuestion].ans2text;
      optionC.textContent = quiz[currentQuestion].ans3text;
      optionD.textContent = quiz[currentQuestion].ans4text;
    } else {
      alert("Your Score is " + score + " out of " + quiz.length);
      // after quiz.length reached = currentQuestion id, fire the alert with the output of score
      location.reload();
      // reloads the quiz
    }
  }
});
