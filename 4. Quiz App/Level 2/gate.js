const quiz = [
  {
    question: "Regular languages are strictly NOT closed under which of the following operations?",
    ans1text: "Intersection",
    ans2text: "Complement",
    ans3text: "Kleene Star",
    ans4text: "Infinite Union",
    answer: "Infinite Union",
  },
  {
    question: "Let G be a connected undirected graph with distinct edge weights. Which of the following statements is TRUE?",
    ans1text: "The shortest path between any two vertices is always unique.",
    ans2text: "The minimum spanning tree (MST) of G is unique.",
    ans3text: "The heaviest edge in G can never belong to an MST.",
    ans4text: "The shortest path tree from any source vertex is always the same as the MST.",
    answer: "The minimum spanning tree (MST) of G is unique.",
  },
  {
    question: "Which of the following is NOT one of the four necessary conditions for a deadlock to occur in an operating system?",
    ans1text: "Mutual Exclusion",
    ans2text: "Hold and Wait",
    ans3text: "Preemption",
    ans4text: "Circular Wait",
    answer: "Preemption",
  },
  {
    question: "A relation R(A,B,C) has the functional dependencies A -> B and B -> C. The relation R is in which of the following highest normal forms?",
    ans1text: "1NF",
    ans2text: "2NF",
    ans3text: "3NF",
    ans4text: "BCNF",
    answer: "2NF",
  },
  {
    question: "In the TCP congestion control algorithm, how does the congestion window size (cwnd) change during the 'Slow Start' phase (prior to reaching the threshold)?",
    ans1text: "Increases linearly for every ACK received",
    ans2text: "Increases exponentially for every Round Trip Time (RTT)",
    ans3text: "Remains constant until a timeout occurs",
    ans4text: "Decreases multiplicatively for every ACK",
    answer: "Increases exponentially for every Round Trip Time (RTT)",
  },
  {
    question: "Consider the language 'L={a^n b^n ∣ n≥0'. Which of the following statements is correct?",
    ans1text: "L is regular but not context-free",
    ans2text: "L is context-free but not regular",
    ans3text: "L is neither regular nor context-free",
    ans4text: "L is regular and context-free",
    answer: "L is context-free but not regular",
  },
  {
    question: "Consider the following three-address code: 't1 = a + b, t2 = t1 * c, t3 = a + b, t4 = t3 * d'. Which optimization can eliminate the computation represented by t3 = a + b?",
    ans1text: "Loop unrolling",
    ans2text: "Common subexpression elimination",
    ans3text: "Constant propagation",
    ans4text: "Dead-code elimination",
    answer: "Common subexpression elimination",
  },
  {
    question: "A system has three processes 'P1, P2, P3' and three resource types 'R1, R2, R3'. Each resource has one instance. Suppose: 'P1 holds R1 and waits for R2', 'P2 holds r2 and waits for R3', 'P3 holds R3 and waits for R1'. What is the system state?",
    ans1text: "Starvation",
    ans2text: "Deadlock",
    ans3text: "Race condition only",
    ans4text: "Safe state",
    answer: "Deadlock",
  },
  {
    question: "Which normal form specifically requires that every determinant of a functional dependency be a candidate key?",
    ans1text: "4NF",
    ans2text: "2NF",
    ans3text: "3NF",
    ans4text: "BCNF",
    answer: "BCNF",
  },
  {
    question: "A network uses IPv4 addresses with prefix: '192.168.10.0/26'. How many usable host addresses are available in this subnet?",
    ans1text: "30",
    ans2text: "62",
    ans3text: "64",
    ans4text: "126",
    answer: "62",
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
