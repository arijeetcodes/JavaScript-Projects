const quiz = [
  {
    question:
      "According to the Central Limit Theorem, what happens to the sampling distribution of the sample mean as the sample size becomes sufficiently large, assuming a finite variance?",
    ans1text: "It approaches a uniform distribution.",
    ans2text: "It approaches an exponential distribution.",
    ans3text: "It approaches a normal distribution.",
    ans4text: "It approaches a binomial distribution.",
    answer: "It approaches a normal distribution.",
  },
  {
    question:
      "In the Singular Value Decomposition (SVD) of a real matrix A, represented as A = UΣV^T, what do the columns of the matrix V represent?",
    ans1text: "Left singular vectors",
    ans2text: "Right singular vectors",
    ans3text: "Eigenvalues of A",
    ans4text: "Projection matrices",
    answer: "Right singular vectors",
  },
  {
    question:
      "For a twice-differentiable function of a single variable f(x), if at a point c, the first derivative f'(c) = 0 and the second derivative f''(c) > 0, then the point c is a:",
    ans1text: "Point of local maximum",
    ans2text: "Point of local minimum",
    ans3text: "Point of inflection",
    ans4text: "Point of discontinuity",
    answer: "Point of local minimum",
  },
  {
    question:
      "What is the worst-case time complexity of the standard QuickSort algorithm?",
    ans1text: "O(n log n)",
    ans2text: "O(n^2)",
    ans3text: "O(n)",
    ans4text: "O(log n)",
    answer: "O(n^2)",
  },
  {
    question:
      "Which of the following operations in relational algebra is specifically used to extract specific columns (attributes) from a relation?",
    ans1text: "Selection",
    ans2text: "Projection",
    ans3text: "Cartesian Product",
    ans4text: "Set Difference",
    answer: "Projection",
  },
  {
    question:
      "In supervised Machine Learning, what is the typical effect on bias and variance as the complexity of a model increases significantly?",
    ans1text: "Bias increases and variance decreases",
    ans2text: "Bias decreases and variance increases",
    ans3text: "Both bias and variance increase",
    ans4text: "Both bias and variance decrease",
    answer: "Bias decreases and variance increases",
  },
  {
    question:
      "In Principal Component Analysis (PCA), the first principal component is defined as the direction in space along which the data projections exhibit:",
    ans1text: "Minimum variance",
    ans2text: "Maximum variance",
    ans3text: "Minimum correlation",
    ans4text: "Maximum entropy",
    answer: "Maximum variance",
  },
  {
    question:
      "In informed search algorithms like A*, a heuristic function h(n) is considered 'admissible' if it strictly satisfies which of the following conditions?",
    ans1text: "It never overestimates the true cost to reach the goal.",
    ans2text: "It always computes the exact cost to reach the goal.",
    ans3text: "It never underestimates the true cost to reach the goal.",
    ans4text: "It is completely independent of the goal state.",
    answer: "It never overestimates the true cost to reach the goal.",
  },
  {
    question:
      "For a discrete random variable X following a Poisson distribution, what is the theoretical relationship between its mean and variance?",
    ans1text: "The mean is strictly greater than the variance.",
    ans2text: "The mean is strictly less than the variance.",
    ans3text: "The mean is exactly equal to the variance.",
    ans4text: "The mean is the square root of the variance.",
    answer: "The mean is exactly equal to the variance.",
  },
  {
    question:
      "According to the Rank-Nullity Theorem in linear algebra, for a linear transformation represented by an m x n matrix A, what is the sum of the rank of A and the nullity of A?",
    ans1text: "m",
    ans2text: "n",
    ans3text: "m x n",
    ans4text: "m + n",
    answer: "n",
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
