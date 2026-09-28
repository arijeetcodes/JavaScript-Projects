const quiz = [
  {
    question:
      "In propositional logic, which of the following expressions is logically equivalent to the implication P -> Q?",
    ans1text: "NOT P AND Q",
    ans2text: "NOT P OR Q",
    ans3text: "P AND NOT Q",
    ans4text: "NOT P OR NOT Q",
    answer: "NOT P OR Q",
  },
  {
    question:
      "For a square matrix A, if A = LU is the LU decomposition where L is a lower triangular matrix and U is an upper triangular matrix, what is the determinant of A?",
    ans1text: "The sum of the diagonal elements of L and U.",
    ans2text: "The product of the diagonal elements of L and U.",
    ans3text: "The trace of the matrix L multiplied by the trace of matrix U.",
    ans4text: "The product of the off-diagonal elements of L and U.",
    answer: "The product of the diagonal elements of L and U.",
  },
  {
    question:
      "In digital logic design, how many 2-to-1 multiplexers are minimally required to implement a single 4-to-1 multiplexer?",
    ans1text: "2",
    ans2text: "3",
    ans3text: "4",
    ans4text: "5",
    answer: "3",
  },
  {
    question:
      "In a direct-mapped cache memory system, which field of the generated main memory address is used to determine if the required block is currently present in the cache line?",
    ans1text: "Index",
    ans2text: "Offset",
    ans3text: "Tag",
    ans4text: "Valid bit",
    answer: "Tag",
  },
  {
    question:
      "Which of the following tree traversals on a standard Binary Search Tree (BST) will always output the stored elements in ascending sorted order?",
    ans1text: "Pre-order traversal",
    ans2text: "In-order traversal",
    ans3text: "Post-order traversal",
    ans4text: "Level-order traversal",
    answer: "In-order traversal",
  },
  {
    question:
      "Which specific algorithmic design technique is primarily utilized by Dijkstra's algorithm to find the single-source shortest path in a weighted graph?",
    ans1text: "Dynamic Programming",
    ans2text: "Divide and Conquer",
    ans3text: "Greedy Method",
    ans4text: "Backtracking",
    answer: "Greedy Method",
  },
  {
    question:
      "Acc. to the pumping lemma for regular lang., if a lang. L is regular, any sufficiently long string in L can be divided into 3 parts (xyz). Which part can be 'pumped' (repeated) any no. of times to produce another valid string in L?",
    ans1text: "The prefix x",
    ans2text: "The middle part y",
    ans3text: "The suffix z",
    ans4text: "Both x and z simultaneously",
    answer: "The middle part y",
  },
  {
    question:
      "During the compiler design process, which phase is primarily responsible for verifying the structural validity of the token stream using Context-Free Grammars?",
    ans1text: "Lexical Analysis",
    ans2text: "Semantic Analysis",
    ans3text: "Syntax Analysis (Parsing)",
    ans4text: "Intermediate Code Generation",
    answer: "Syntax Analysis (Parsing)",
  },
  {
    question:
      "In an operating system utilizing virtual memory, what is the technical term for the severe performance degradation that occurs when a process spends more time handling page faults than executing actual instructions?",
    ans1text: "Thrashing",
    ans2text: "Fragmentation",
    ans3text: "Starvation",
    ans4text: "Deadlock",
    answer: "Thrashing",
  },
  {
    question:
      "In the context of database management systems, which ACID property ensures that once a transaction has been successfully committed, its updates remain permanently in the database, even in the event of a system crash?",
    ans1text: "Atomicity",
    ans2text: "Consistency",
    ans3text: "Isolation",
    ans4text: "Durability",
    answer: "Durability",
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
