const quiz = [
  {
    question:
      "In a 3D coordinate system, how many independent parameters are required to completely specify a general homogeneous transformation matrix representing both position and orientation of a robotic manipulator?",
    ans1text: "3",
    ans2text: "4",
    ans3text: "6",
    ans4text: "9",
    answer: "6",
  },
  {
    question:
      "Which of the following actuators is best suited for providing precise, open-loop angular positioning in an automated system?",
    ans1text: "Hydraulic Cylinder",
    ans2text: "DC Series Motor",
    ans3text: "AC Induction Motor",
    ans4text: "Stepper Motor",
    answer: "Stepper Motor",
  },
  {
    question:
      "A piezoelectric sensor is most suitable for measuring which of the following physical quantities?",
    ans1text: "Steady-state temperature",
    ans2text: "Static pressure",
    ans3text: "Constant linear displacement",
    ans4text: "Dynamic force or acceleration",
    answer: "Dynamic force or acceleration",
  },
  {
    question:
      "If a 3x3 matrix has eigenvalues 2, 3, and -1, what is the trace of this matrix?",
    ans1text: "-6",
    ans2text: "-1",
    ans3text: "4",
    ans4text: "5",
    answer: "4",
  },
  {
    question:
      "In control systems, which of the following compensators is primarily used to improve the transient response and increase the bandwidth of a linear time-invariant system?",
    ans1text: "Lag compensator",
    ans2text: "Lead compensator",
    ans3text: "PI controller",
    ans4text: "Low-pass filter",
    answer: "Lead compensator",
  },
  {
    question:
      "According to Euler's theory of columns, how is the critical buckling load of a long column with both ends pinned related to its effective length (L)?",
    ans1text: "Directly proportional to L",
    ans2text: "Inversely proportional to L",
    ans3text: "Directly proportional to L squared",
    ans4text: "Inversely proportional to L squared",
    answer: "Inversely proportional to L squared",
  },
  {
    question:
      "In Python programming, which of the following data structures is mutable and stores elements as key-value pairs?",
    ans1text: "Tuple",
    ans2text: "List",
    ans3text: "Set",
    ans4text: "Dictionary",
    answer: "Dictionary",
  },
  {
    question:
      "In microprocessor architecture, what happens immediately after a maskable hardware interrupt is accepted by the CPU?",
    ans1text: "The CPU ignores all future interrupts indefinitely.",
    ans2text: "The current program counter is pushed to the stack.",
    ans3text: "The CPU halts execution completely until reset.",
    ans4text: "The system memory is completely cleared.",
    answer: "The current program counter is pushed to the stack.",
  },
  {
    question:
      "The gyroscopic couple acting on a rotating disc is directly proportional to which of the following?",
    ans1text: "Angular velocity of spin only",
    ans2text: "Mass of the disc only",
    ans3text: "Ratio of spin velocity to precession velocity",
    ans4text:
      "Product of moment of inertia, spin velocity, and precession velocity",
    answer:
      "Product of moment of inertia, spin velocity, and precession velocity",
  },
  {
    question:
      "According to Shannon's sampling theorem, to perfectly reconstruct a continuous-time baseband signal with a maximum frequency of f_max, the minimum sampling frequency must be:",
    ans1text: "Exactly equal to f_max",
    ans2text: "Less than f_max",
    ans3text: "Greater than or equal to 2 * f_max",
    ans4text: "Exactly 1.5 * f_max",
    answer: "Greater than or equal to 2 * f_max",
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
