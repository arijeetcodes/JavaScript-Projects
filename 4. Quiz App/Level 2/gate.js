const quiz = [
  {
    question: "What is the most used programming language in 2021?",
    ans1text: "Java",
    ans2text: "C",
    ans3text: "Python",
    ans4text: "JavaScript",
    answer: "JavaScript",
  },
  {
    question: "Who is the President of US?",
    ans1text: "Joe Biden",
    ans2text: "Donald Trump",
    ans3text: "Barack Obama",
    ans4text: "George Bush",
    answer: "Joe Biden",
  },
  {
    question: "What does HTML stand for?",
    ans1text: "Hypertext Markup Language",
    ans2text: "Cascading Style Sheet",
    ans3text: "Jason Object Notation",
    ans4text: "Helicopters Terminals Motorboats Lamborginis",
    answer: "Hypertext Markup Language",
  },
  {
    question: "What year was JavaScript launched?",
    ans1text: "1996",
    ans2text: "1995",
    ans3text: "1994",
    ans4text: "none of the above",
    answer: "1995",
  },
];
// quiz.length = 4

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
