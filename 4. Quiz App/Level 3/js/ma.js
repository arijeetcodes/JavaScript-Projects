const quiz = [
  {
    question:
      "According to the Bolzano-Weierstrass theorem, which of the following statements is always TRUE for sequences of real numbers?",
    ans1text: "Every bounded sequence has a convergent subsequence.",
    ans2text: "Every convergent sequence is bounded.",
    ans3text: "Every monotonic sequence is convergent.",
    ans4text: "Every bounded sequence is convergent.",
    answer: "Every bounded sequence has a convergent subsequence.",
  },
  {
    question:
      "What is the radius of convergence of the power series Σ (x^n / (n^2 * 2^n)) from n=1 to infinity?",
    ans1text: "1",
    ans2text: "1/2",
    ans3text: "2",
    ans4text: "Infinity",
    answer: "2",
  },
  {
    question:
      "Using L'Hospital's rule, evaluate the limit as x approaches 0 of (x - sin(x)) / x^3.",
    ans1text: "0",
    ans2text: "1/3",
    ans3text: "1/2",
    ans4text: "1/6",
    answer: "1/6",
  },
  {
    question:
      "For a function of two real variables f(x,y), let D = (f_xx)(f_yy) - (f_xy)^2 evaluated at a critical point (a,b). Which condition guarantees that f has a local minimum at (a,b)?",
    ans1text: "D > 0 and f_xx < 0",
    ans2text: "D > 0 and f_xx > 0",
    ans3text: "D < 0 and f_xx > 0",
    ans4text: "D = 0",
    answer: "D > 0 and f_xx > 0",
  },
  {
    question:
      "When changing the order of integration for the double integral ∫(from 0 to 1) ∫(from 0 to x) f(x,y) dy dx, what will the new integral be?",
    ans1text: "∫(from 0 to 1) ∫(from 0 to y) f(x,y) dx dy",
    ans2text: "∫(from 0 to 1) ∫(from y to 1) f(x,y) dx dy",
    ans3text: "∫(from 0 to x) ∫(from 0 to 1) f(x,y) dx dy",
    ans4text: "∫(from y to 1) ∫(from 0 to 1) f(x,y) dx dy",
    answer: "∫(from 0 to 1) ∫(from y to 1) f(x,y) dx dy",
  },
  {
    question:
      "What is the integrating factor for the first-order linear differential equation dy/dx + (2/x)y = x^2 ?",
    ans1text: "e^x",
    ans2text: "ln(x)",
    ans3text: "x",
    ans4text: "x^2",
    answer: "x^2",
  },
  {
    question:
      "A system of linear equations AX = B (where A is a coefficient matrix and [A|B] is the augmented matrix) has infinitely many solutions if and only if:",
    ans1text: "rank(A) < rank([A|B])",
    ans2text: "rank(A) = rank([A|B]) = number of variables",
    ans3text: "rank(A) = rank([A|B]) < number of variables",
    ans4text: "The determinant of A is non-zero",
    answer: "rank(A) = rank([A|B]) < number of variables",
  },
  {
    question:
      "If a 3x3 matrix A has eigenvalues 1, 2, and 3, what is the determinant of the matrix A^2 ?",
    ans1text: "6",
    ans2text: "12",
    ans3text: "14",
    ans4text: "36",
    answer: "36",
  },
  {
    question:
      "Let T: R^5 -> R^3 be a linear transformation. If the dimension of the null space of T is 2, what is the rank of T according to the rank-nullity theorem?",
    ans1text: "2",
    ans2text: "3",
    ans3text: "5",
    ans4text: "8",
    answer: "3",
  },
  {
    question:
      "According to Lagrange's theorem, which of the following numbers can be the order of a subgroup of a finite group of order 24?",
    ans1text: "5",
    ans2text: "7",
    ans3text: "8",
    ans4text: "10",
    answer: "8",
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
