const quiz = [
  {
    question:
      "According to Leibnitz's test for alternating series, an alternating series converges if its terms satisfy which of the following conditions?",
    ans1text:
      "The absolute values of the terms are monotonically increasing and approach infinity.",
    ans2text:
      "The absolute values of the terms are monotonically decreasing and approach zero.",
    ans3text:
      "The absolute values of the terms are bounded but do not approach zero.",
    ans4text: "The absolute values of the terms remain constant.",
    answer:
      "The absolute values of the terms are monotonically decreasing and approach zero.",
  },
  {
    question:
      "Let A be an idempotent matrix. What are the only possible characteristic roots (eigenvalues) of A?",
    ans1text: "0 and -1",
    ans2text: "1 and -1",
    ans3text: "0 and 1",
    ans4text: "-1, 0, and 1",
    answer: "0 and 1",
  },
  {
    question:
      "For a function of two real variables f(x, y), let the determinant of the Hessian matrix evaluated at a critical point be strictly negative. This critical point is classified as a:",
    ans1text: "Local maximum",
    ans2text: "Local minimum",
    ans3text: "Global maximum",
    ans4text: "Saddle point",
    answer: "Saddle point",
  },
  {
    question:
      "Which of the following statements best describes Boole's inequality for a countable set of events?",
    ans1text:
      "The probability of the intersection of events is greater than or equal to the sum of their individual probabilities.",
    ans2text:
      "The probability of the union of events is less than or equal to the sum of their individual probabilities.",
    ans3text:
      "The probability of the union of events is exactly equal to the product of their individual probabilities.",
    ans4text:
      "The probability of the intersection of events is exactly equal to the sum of their individual probabilities.",
    answer:
      "The probability of the union of events is less than or equal to the sum of their individual probabilities.",
  },
  {
    question:
      "Which of the following continuous univariate probability distributions exhibits the memoryless property?",
    ans1text: "Normal distribution",
    ans2text: "Gamma distribution",
    ans3text: "Exponential distribution",
    ans4text: "Cauchy distribution",
    answer: "Exponential distribution",
  },
  {
    question:
      "In a bivariate normal distribution of two random variables X and Y, if the covariance between X and Y is zero, which of the following must necessarily be TRUE?",
    ans1text: "X and Y are independent.",
    ans2text: "The marginal distributions of X and Y are non-normal.",
    ans3text: "The variance of X must be equal to the variance of Y.",
    ans4text: "X and Y have a high negative correlation.",
    answer: "X and Y are independent.",
  },
  {
    question:
      "According to the hierarchy of limit theorems and convergence of random variables, which of the following statements is always TRUE?",
    ans1text: "Convergence in distribution implies convergence in probability.",
    ans2text: "Convergence in probability implies convergence in mean square.",
    ans3text: "Almost sure convergence implies convergence in probability.",
    ans4text: "Convergence in distribution implies almost sure convergence.",
    answer: "Almost sure convergence implies convergence in probability.",
  },
  {
    question:
      "If a random variable X follows a central t-distribution with 'n' degrees of freedom, what is the distribution of X^2?",
    ans1text: "Central Chi-square distribution with n degrees of freedom.",
    ans2text: "Central F-distribution with (1, n) degrees of freedom.",
    ans3text: "Central F-distribution with (n, 1) degrees of freedom.",
    ans4text: "Normal distribution with mean 0 and variance n.",
    answer: "Central F-distribution with (1, n) degrees of freedom.",
  },
  {
    question:
      "Which of the following theorems is fundamentally used to improve an unbiased estimator by conditioning it on a sufficient statistic?",
    ans1text: "Lehmann-Scheffe Theorem",
    ans2text: "Neyman-Pearson Lemma",
    ans3text: "Rao-Blackwell Theorem",
    ans4text: "Factorization Theorem",
    answer: "Rao-Blackwell Theorem",
  },
  {
    question:
      "In the context of discrete time Markov chains, what do the Chapman-Kolmogorov equations compute?",
    ans1text:
      "The n-step transition probabilities in terms of intermediate transition probabilities.",
    ans2text: "The stationary limiting distribution of the Markov chain.",
    ans3text: "The interarrival waiting times of a Poisson process.",
    ans4text:
      "The classification of states into recurrent and transient classes.",
    answer:
      "The n-step transition probabilities in terms of intermediate transition probabilities.",
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
