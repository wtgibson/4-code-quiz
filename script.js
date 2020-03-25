// Set all pointers & variables to be used in functions

var timeElement = document.querySelector("#time");
var questionElement = document.querySelector("#question");
var answerChoice = document.querySelector(".answer-choice");
var answersElement = document.querySelector("#answers");
var answer0Element = document.querySelector("#answer0");
var answer1Element = document.querySelector("#answer1");
var answer2Element = document.querySelector("#answer2");
var answer3Element = document.querySelector("#answer3");
var startElement = document.querySelector("#start");
var resultElement = document.querySelector("#result");

var leaderboardLinkElement = document.querySelector("#leaderboard-link");
var highScore;
var quizScore;

var quizQuestions = [
  {
    question: "What country is Land Rover's parent company based?",
    answer: ["U.S.", "China", "U.K.", "India"],
    correct: "India",
  },
  {
    question: "What year was the Corvette first introduced?",
    answer: ["1953", "1943", "1973", "1963"],
    correct: "1953",
  },
  {
    question: "What was the first car to be mass produced?",
    answer: ["Model A", "Packard", "Model T", "Dureya Motor Wagon"],
    correct: "Model T",
  },
  {
    question: "What was the first car ever to be launched into space?",
    answer: ["Porsche 911", "Tesla Roadster", "Mini Cooper", "Ford Mustang"],
    correct: "Tesla Roadster",
  },
  {
    question: "What What animal is on the Lamborghini logo?",
    answer: ["Horse", "Lion", "Bull", "Bird"],
    correct: "Bull",
  }
];

var i = 0;
var timeInterval;
var secondsLeft = 50;

function setTime() {
  console.log("setTime function");
  timeInterval = setInterval(function() {
    secondsLeft--;
    timeElement.textContent = "Time: " + secondsLeft + " seconds left!";

    if (secondsLeft <= 0) {
      clearInterval(timeInterval);
      alert("Times Up!");
      endQuiz()
    }
  }, 1000);
};

function endQuiz() {
  questionElement.textContent = "-";
  answer0Element.textContent = "a";
  answer1Element.textContent = "b";
  answer2Element.textContent = "c";
  answer3Element.textContent = "d";

//   startElement.style.visibility = "hidden";
  startElement.textContent = "Restart Quiz";
//   resultElement.style.visibility = "hidden";
  i = 0;
  secondsLeft = 50;
};

function quiz() {
  console.log("Quiz Q&A # " + i);
  questionElement.textContent = quizQuestions[i].question;
  answer0Element.textContent = quizQuestions[i].answer[0];
  answer1Element.textContent = quizQuestions[i].answer[1];
  answer2Element.textContent = quizQuestions[i].answer[2];
  answer3Element.textContent = quizQuestions[i].answer[3];
};

startElement.addEventListener("click", function(event) {
  event.preventDefault();
//   startElement.style.visibility = "visible";
  startElement.textContent = "-";
  setTime();
  quiz(event);
});

// answerChoice.forEach(function (button) {
    answersElement.addEventListener("click", function(event) {
        console.log("answer chosen");
        var element = event.target;
        if (element.textContent !== quizQuestions[i].correct) {
            console.log("Wrong Answer")
            resultElement.textContent = "Incorrect!";
            resultElement.style.color = "red";
        } else {
            console.log("Right Answer")
            resultElement.textContent = "Correct!";
            resultElement.style.color = "green";
        }
        if (i < quizQuestions.length - 1) {
        i++;
        quiz();
        } else {
        clearInterval(timeInterval)    
        endQuiz();
        }
    });
// });
