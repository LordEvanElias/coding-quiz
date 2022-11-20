// Global Variables
let saveScore = document.querySelector("#saveInitials");
let startQuizbtn = document.querySelector("#startQuiz");
let questionDiv = document.querySelector("#questions");
let timerDiv = document.querySelector("#timer");
let inputScores = document.querySelector("#scoreInput");
let resultDiv = document.querySelector("#results");

let questions = [
  {
    title: "What is the B in BUNSO?",
    choices: ["Boolean", "Undefined", "Number", "String"],
    answer: "Boolean",
  },
  {
    title: "How do you create a function in JavaScript?",
    choices: ["function = newFunction", "function:newFunction", "function.newFunction", "function newFunction()"],
    // Fixed: the answer had a different spelling than the choice
    answer: "function newFunction()",
  },

  {
    title: "Which is the correct way to write an IF statement in JS?",
    choices: ["if (i === 5){}", "if i=5 then", "if i === 5 then", "if i === 5 {}"],
    answer: "if (i === 5){}",
  },

  {
    title: "What is the propper way to comment in JS?",
    choices: ["//Look at me, I'm a comment!", "<--Look at me, I'm a comment!-->", "/*Look at me, I'm a comment!*/", "`Look at me, I'm a comment!`"],
    answer: "//Look at me, I'm a comment!",
  },

  {
    title: "What do you type in JavaScript to indentify an class in the HTML file?",
    choices: ["$", ".", "#", ":)"],
    answer: ".",
  },

  {
    title: "How does a FOR loop start?",
    choices: ["for (i = 0; i <= 6; i++)", "for i = 1-6", "for (i <=6; i++)", "for (i = 0; i<=6)"],
    answer: "for (i = 0; i <= 6; i++)",
  },

  {
    title: "How do you save data in local storage in JS?",
    choices: ["localStorage.saveItem(item)", "localStorage.setItem(`item`, item)", "localStorage.item", "localStorage.getItem(`item`, item)"],
    answer: "localStorage.setItem(`item`, item)",
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
  questionDiv.innerHTML = "";
  questionsIndex = 0;
  time = 60;
  timer = 0;
  score = 0;
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

  questionDiv.classList.add("questionBox");
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
      inputScores.style.display = "block";
      inputScores.style.color = "white";

      // Ask user for initials and save their score.
    } else {
      questionDiv.innerHTML = "";
      generateNextQuestion();
    }
  } else {
    //  Create an h3 that says correct or incorrect
    let result = document.createElement("h3");
    result.textContent = "Incorrect";
    questionDiv.appendChild(result);
  }
}

function generateNextQuestion() {
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

  // Makes highscores visible upon saving your name
  scores.push(userScore);
  localStorage.setItem("scores", JSON.stringify(scores));
  let scoreBoard = JSON.parse(localStorage.getItem("scores"));

  for (let i = 0; i < scoreBoard.length; i++) {
    let paragraph = document.createElement("p");
    paragraph.innerHTML = `${scoreBoard[i].score} ${scoreBoard[i].initials}`;
    showInitials.appendChild(paragraph);
  }
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
