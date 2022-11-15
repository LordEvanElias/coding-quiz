// Global Variables
let saveScore = document.querySelector("#saveInitials");
let startQuizbtn = document.querySelector("#startQuiz");
let questionDiv = document.querySelector("#questions");
let timerDiv = document.querySelector("#timer");
let showScores = document.querySelector("#showScores");
let questions = [
  {
    title: "What is the B in BUNSO?",
    choices: ["Boolean", "Undefined", "Number", "String"],
    answer: "Boolean",
  },
  {
    title: "Who lives in a pineapple under the sea?",
    choices: ["Patrick", "Sandy", "Squidward", "Spongebob SquarePants"],
    // Fixed: the answer had a different spelling than the choice
    answer: "Spongebob SquarePants",
  },

  {
    title: "Where would you look if I told you to find me a Beozar?",
    choices: ["In a pumpkin patch", "In the stomach of a goat", "London", "Walmart"],
    answer: "In the stomach of a goat",
  },

  {
    title: "What do you type in JavaScript to indentify an ID in the HTML file?",
    choices: ["$", ".", "#", ":)"],
    answer: "#",
  },
];
let scores = JSON.parse(localStorage.getItem("scores")) || [];

let button1;
let button2;
let button3;
let button4;

let questionsIndex = 0;
let time = 60;
let timer = 0;
let score = 0;
// Functions

function startQuiz() {
  // Start Timer
  timer = setInterval(function () {
    time--;
    timerDiv.innerHTML = time;
  }, 1000);

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

  button1.addEventListener("click", selectAnswer, clearPrevious);
  button2.addEventListener("click", selectAnswer, clearPrevious);
  button3.addEventListener("click", selectAnswer, clearPrevious);
  button4.addEventListener("click", selectAnswer, clearPrevious);
}

function clearPrevious() {
  // Clears previous question on answer.
}

function selectAnswer() {
  // compare user choice to correct answer
  if (this.textContent === questions[questionsIndex].answer) {
    // if correct, increase index by one
    questionsIndex++;
    // call function to generate next question
    if (questionsIndex > questions.length - 1) {
      alert("Game Over!");
      score = time;
      clearInterval(timer);
      // Ask user for initials and save their score.
    } else {
      generateNextQuestion();
    }
  } else {
    // Create an h2 that says correct or incorrect instead of an alert
    alert("Wrong!");
  }
}

function generateNextQuestion() {
  // Note: this variable is introduced but never used. This variable would be helpful if you end up using a loop to generate question/answers.

  // Need something that clears previous question and replaces it with the next one.

  let currentQuestion = questions[questionsIndex];

  let title = document.createElement("h2");
  title.textContent = questions[questionsIndex].title;
  questionDiv.appendChild(title);

  let btnFive = document.createElement("button");
  btnFive.textContent = questions[questionsIndex].choices[0];
  questionDiv.appendChild(btnFive);

  let btnSix = document.createElement("button");
  btnSix.textContent = questions[questionsIndex].choices[1];

  questionDiv.appendChild(btnSix);

  let btnSeven = document.createElement("button");
  btnSeven.textContent = questions[questionsIndex].choices[2];

  questionDiv.appendChild(btnSeven);

  let btnEight = document.createElement("button");
  btnEight.textContent = questions[questionsIndex].choices[3];

  questionDiv.appendChild(btnEight);

  // You do not need to add a class to the created element and then add an event listener to the class
  // You can add the event listener directly to the original variable you assigned the created element
  btnFive.addEventListener("click", selectAnswer);
  btnSix.addEventListener("click", selectAnswer);
  btnSeven.addEventListener("click", selectAnswer);
  btnEight.addEventListener("click", selectAnswer);
}

function enterScore() {
  let initials = document.querySelector("#initials").value;
  let userScore = {
    initials: initials,
    score: score,
  };

  scores.push(userScore);
  localStorage.setItem("scores", JSON.stringify(scores));
}

function displayScores(event) {
  event.preventDefault();
  scores.forEach((scr) => {
    showScores.innerHTML += `${scr.initials}: ${scr.score} <br>`;
  });
}
// Event Listener

startQuizbtn.addEventListener("click", startQuiz);
saveScore.addEventListener("click", enterScore);
viewScores.addEventListener("click", displayScores);