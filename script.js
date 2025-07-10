var IntrovertScore = 0;
var ExtrovertScore = 0; 

var questionCount = 0;

var result = document.getElementById("result");
var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

q1a1.addEventListener("click", extrovert);
q1a2.addEventListener("click", introvert);

q2a1.addEventListener("click", introvert);
q2a2.addEventListener("click", extrovert);

q3a1.addEventListener("click", extrovert);
q3a2.addEventListener("click", introvert);

// add event listener to the restart button
restart.addEventListener("click", restartQuiz);

// define the functions

function extrovert() {
    ExtrovertScore += 1;
    questionCount += 1;

    console.log("questionCount = " + questionCount + " ExtrovertScore = " + ExtrovertScore);
    if (questionCount == 3) {
        console.log("The quiz is done!")
        updateResult();
    }
}

function introvert() {
    IntrovertScore += 1;
    questionCount += 1;

   console.log("questionCount = " + questionCount + " introvertScore = " + IntrovertScore);
    if (questionCount == 3) {
        console.log("The quiz is done!")
        updateResult();
    }
}

function updateResult() {
    if (IntrovertScore >= 2) {
        result.innerHTML = "You are an introvert!"
        console.log("You are an introvert!");
    } else if (ExtrovertScore >= 2) {
        result.innerHTML = "You are an extrovert!"
        console.log("You are an extrovert!");
    }
}

// Restart quiz
function restartQuiz() {
  result.innerHTML = "You are a...";
  questionCount = 0;
  IntrovertScore = 0;
  ExtrovertScore = 0;
  console.log("questionCount = " + questionCount + "\t" + "IntrovertScore = " + IntrovertScore + "\t" + "ExtrovertScore = " + ExtrovertScore);
}