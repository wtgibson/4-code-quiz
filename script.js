// Set all pointers & variables to be used in functions

var timeElement = document.querySelector("#time");
var questionElement = document.querySelector("#question");
var answersElement = document.querySelector("#answers");
var answer0Element = document.querySelector("#answer0");
var answer1Element = document.querySelector("#answer1");
var answer2Element = document.querySelector("#answer2");
var answer3Element = document.querySelector("#answer3");
var startElement = document.querySelector("#start");
var resultElement = document.querySelector("#result");
var leaderboardLinkElement = document.querySelector("#leaderboard-link");

var quizQuestions = [
    {question: "What country is Land Rover's parent company based?",
     answer: ["U.S.", "China", "U.K.", "India"],
     correct: "India",
    },
    {question: "What year was the Corvette first introduced?",
     answer: ["1953", "1943", "1973", "1963"],
     correct: "1953",
    },
    {question: "What was the first car to be mass produced?",
     answer: ["Model A", "Packard", "Model T", "Dureya Motor Wagon"],
     correct: "Model T",
    },
    {question: "What was the first car ever to be launched into space?",
     answer: ["Porsche 911", "Tesla Roadster", "Mini Cooper", "Ford Mustang"],
     correct: "Tesla Roadster",
    },
    {question: "What What animal is on the Lamborghini logo?",
     answer: ["Horse", "Lion", "Bull", "Bird"],
     correct: "Bull",
    },
];

var index = 0
var secondsLeft = 100

function setTime() {
    console.log("setTime function")
    var timeInterval = setInterval(function() {
        secondsLeft--;
        timeElement.textContent = secondLeft + " seconds left!";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Times Up!")
        }
    }, 1000);
};

startElement.addEventListener("click", function (event) {
    event.preventDefault();
    startElement.style.visibility = 'hidden';
    questionElement.style.visibility = 'visible';
    setTime();
    quiz(event)
    endQuiz();

});

answersElement.addEventListener("click", function (event) {
    event.preventDefault();
    resultElement.style.visibility = 'visible';
    leaderboardLinkElement.style.visibility = 'hidden';
});

function quiz () {
    console.log("Quiz Q&A # " + i)
    questionElement.textContent = quizQuestions[i].question;
    answer0Element.textContent = quizQuestions[i].answer[0];
    answer1Element.textContent = quizQuestions[i].answer[1];
    answer2Element.textContent = quizQuestions[i].answer[2];
    answer3Element.textContent = quizQuestions[i].answer[3];
};
