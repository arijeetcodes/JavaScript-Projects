const quiz = [
  {
    question:
      "In carbonic anhydrase, which metal ion is present at the active site and plays a crucial role in the physiological hydration of carbon dioxide?",
    ans1text: "Fe2+",
    ans2text: "Zn2+",
    ans3text: "Cu2+",
    ans4text: "Mg2+",
    answer: "Zn2+",
  },
  {
    question:
      "According to VSEPR theory, what is the molecular geometry of the xenon tetrafluoride (XeF4) molecule?",
    ans1text: "Tetrahedral",
    ans2text: "Square planar",
    ans3text: "See-saw",
    ans4text: "Octahedral",
    answer: "Square planar",
  },
  {
    question:
      "In the Michaelis-Menten mechanism for enzyme kinetics, what does the Michaelis constant (Km) signify physically?",
    ans1text: "The maximum velocity of the enzyme-catalyzed reaction",
    ans2text:
      "The substrate concentration at which the reaction rate is half of the maximum velocity",
    ans3text: "The turnover number of the enzyme active site",
    ans4text:
      "The activation energy required to form the enzyme-substrate complex",
    answer:
      "The substrate concentration at which the reaction rate is half of the maximum velocity",
  },
  {
    question:
      "For a particle of mass 'm' in a one-dimensional box of length 'L', what is the zero-point energy (the lowest possible energy state)?",
    ans1text: "0",
    ans2text: "h^2 / (8mL^2)",
    ans3text: "h^2 / (4mL^2)",
    ans4text: "3h^2 / (8mL^2)",
    answer: "h^2 / (8mL^2)",
  },
  {
    question:
      "The Diels-Alder reaction between a conjugated diene and a dienophile is classically categorized as which type of pericyclic reaction?",
    ans1text: "[2+2] cycloaddition",
    ans2text: "[4+2] cycloaddition",
    ans3text: "[3+3] sigmatropic rearrangement",
    ans4text: "Electrocyclic ring opening",
    answer: "[4+2] cycloaddition",
  },
  {
    question:
      "Wilkinson's catalyst, heavily utilized for the homogeneous hydrogenation of alkenes, has which of the following chemical formulations?",
    ans1text: "[RhCl(PPh3)3]",
    ans2text: "[RuCl2(PPh3)3]",
    ans3text: "[Co2(CO)8]",
    ans4text: "TiCl4 + Al(C2H5)3",
    answer: "[RhCl(PPh3)3]",
  },
  {
    question:
      "Which thermodynamic equation relates the changes in the chemical potentials of the components of a mixture to the changes in their mole fractions at a constant temperature and pressure?",
    ans1text: "Clausius-Clapeyron equation",
    ans2text: "Gibbs-Helmholtz equation",
    ans3text: "Gibbs-Duhem equation",
    ans4text: "Van't Hoff equation",
    answer: "Gibbs-Duhem equation",
  },
  {
    question:
      "Which of the following classes of compounds can exhibit optical isomerism despite lacking a standard chiral stereocenter?",
    ans1text: "Meso-tartaric acid",
    ans2text: "Properly substituted allenes",
    ans3text: "1,4-Dimethylcyclohexane",
    ans4text: "Cis-decalin",
    answer: "Properly substituted allenes",
  },
  {
    question:
      "In the study of solid-state defects in ionic crystals, a Frenkel defect fundamentally occurs when:",
    ans1text:
      "Equal numbers of cations and anions are missing entirely from their lattice sites",
    ans2text:
      "An ion leaves its regular lattice site and occupies an interstitial position",
    ans3text: "An extra anion occupies an interstitial site",
    ans4text: "A cation vacancy is strongly paired with an anion vacancy",
    answer:
      "An ion leaves its regular lattice site and occupies an interstitial position",
  },
  {
    question:
      "In an Ellingham diagram (a plot of standard Gibbs free energy of formation versus temperature), the intersection of two metal oxide lines indicates the temperature at which:",
    ans1text: "Both metals undergo a phase transition to a liquid state",
    ans2text:
      "The standard free energy change of the coupled reduction reaction is exactly zero",
    ans3text: "The metal oxides decompose fully into gaseous elements",
    ans4text:
      "The metals spontaneously achieve their highest possible oxidation states",
    answer:
      "The standard free energy change of the coupled reduction reaction is exactly zero",
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
