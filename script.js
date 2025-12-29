const questions = [
  {
    question: 'Which country is known as "the land of festivals"?',
    options: ["China", "Japan", "India", "Nepal"],
    answer: 2 // "India" -> index 2
  },
  {
    question: "When did India get independence?",
    options: ["1945", "1947", "1948", "1949"],
    answer: 1 // "1947" -> index 1
  },
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Tamil Nadu", "Maharashtra", "Kolkata"],
    answer: 0 // "Delhi" -> index 0
  }
];

let current = 0;
let score = 0;

// fill UI for current question
function loadQuestion() {
  const q = questions[current];
  document.getElementById("question").textContent = q.question;
  const btns = document.getElementsByClassName("option");
  for (let i = 0; i < btns.length; i++) {
    btns[i].textContent = q.options[i] || ""; // safe if fewer options
    btns[i].disabled = false;
    btns[i].style.background = ""; // reset color
  }
  // hide result if visible
  document.getElementById("result-box").classList.add("hide");
  document.getElementById("quiz-box").classList.remove("hide");
}

function selectOption(index) {
  const correct = questions[current].answer;
  const btns = document.getElementsByClassName("option");
  // prevent multiple clicks by disabling all
  for (let b of btns) b.disabled = true;

  if (index === correct) {
    score++;
    btns[index].style.background = "green";
  } else {
    btns[index].style.background = "red";
    btns[correct].style.background = "green";
  }
}

function nextQuestion() {
  current++;
  if (current >= questions.length) {
    document.getElementById("quiz-box").classList.add("hide");
    document.getElementById("result-box").classList.remove("hide");
    document.getElementById("score").textContent = `${score} / ${questions.length}`;
    return;
  }
  loadQuestion();
}

function restart() {
  current = 0;
  score = 0;
  loadQuestion();
}

// start
loadQuestion();
