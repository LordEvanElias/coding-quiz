// Global Variables
let startQuizbtn = document.querySelector("#startQuiz");
let questionDiv = document.querySelector("#questions");
let questions = [
  {
    title: "What is the B in BUNSO?",
    choices: ["Boolean", "Undefined", "Number", "String"],
    answer: "Boolean",
  },
  {
    title: "Who lives in a pineapple under the sea?",
    choices: ["Patrick", "Sandy", "Squidward", "Spongebob Square Pants"],
    answer: "Spongebob SquarePants",
  },

  {
    title: "What are the objects in JavaScript?",
    choices: ["Boolean", "Undefined", "Number", "String"],
    answer: "Boolean",
  },

  {
    title: "What are the objects in JavaScript?",
    choices: ["Boolean", "Undefined", "Number", "String"],
    answer: "Boolean",
  },
];

let button1;
let button2;
let button3;
let button4;

let questionsIndex = 0;

let score = 0;

// Functions
function startQuiz() {
  // Bring up question 1
  let title = document.createElement("h2");
  title.textContent = questions[questionsIndex].title;
  questionDiv.appendChild(title);
  // Add four answer options

  //   Make a function to create all of these buttons
  let btnOne = document.createElement("button");
  btnOne.textContent = questions[questionsIndex].choices[0];

  questionDiv.appendChild(btnOne);

  let btnTwo = document.createElement("button");
  btnTwo.textContent = questions[questionsIndex].choices[1];

  questionDiv.appendChild(btnTwo);

  let btnThree = document.createElement("button");
  btnThree.textContent = questions[questionsIndex].choices[2];

  questionDiv.appendChild(btnThree);

  let btnFour = document.createElement("button");
  btnFour.textContent = questions[questionsIndex].choices[3];
  questionDiv.appendChild(btnFour);

  btnOne.classList.add("button1");
  button1 = document.querySelector(".button1");

  btnTwo.classList.add("button2");
  button2 = document.querySelector(".button2");

  btnThree.classList.add("button3");
  button3 = document.querySelector(".button3");

  btnFour.classList.add("button4");
  button4 = document.querySelector(".button4");

  button1.addEventListener("click", selectAnswer);
  button2.addEventListener("click", selectAnswer);
  button3.addEventListener("click", selectAnswer);
  button4.addEventListener("click", selectAnswer);
}
// A function to register an answer
function selectAnswer() {
  let currentQuestion = questions[questionsIndex++];

  // let title = document.createElement("h2");
  // title.textContent = questions[questionsIndex].title;
  // questionDiv.appendChild(title);

  // let btnOne = document.createElement("button");
  // btnOne.textContent = questions[questionsIndex].choices[0];
  // questionDiv.appendChild(btnOne);

  // let btnTwo = document.createElement("button");
  // btnTwo.textContent = questions[questionsIndex].choices[1];

  // questionDiv.appendChild(btnTwo);

  // let btnThree = document.createElement("button");
  // btnThree.textContent = questions[questionsIndex].choices[2];

  // questionDiv.appendChild(btnThree);

  // let btnFour = document.createElement("button");
  // btnFour.textContent = questions[questionsIndex].choices[3];

  // questionDiv.appendChild(btnFour);

  if (this.textContent === questions[questionsIndex].answer) {
    currentQuestion++;
  } else {
    alert("wrong!");
  }
}

// Function Calls

startQuizbtn.addEventListener("click", startQuiz);
questionDiv.addEventListener("click", selectAnswer);
