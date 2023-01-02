// First and second number of the multiplication
const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

// To target
const questionElement = document.getElementById("question");

// Collect the data from the input of the form
const inputElement = document.getElementById("input");
const formElement = document.getElementById("form");
const scoreElement = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if(!score) {
  score = 0;
}

// Update the score
scoreElement.innerText = `SCORE: ${score}`;

// To manipulate
questionElement.innerText = `What is ${num1} multiplied by ${num2}?`

const correctAnswer = num1 * num2;

// Collect the data from the input of the form
formElement.addEventListener("submit", () => {
  const userAnswer = +inputElement.value;
  if(userAnswer === correctAnswer) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

// Keep the score
function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
