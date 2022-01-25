// global variables go here
var timer = document.getElementById("timer")
var startPage = document.getElementById("welcome")
var startButton = document.getElementById("beginButton")
var questionsPage = document.getElementById("questions")
var questionHolder = document.getElementById("placeQuestionHere")
var answerChoices = document.getElementById("answerButtons")
var endPage = document.getElementById("highScore")
var score = document.getElementById("finalScore")
var initials = document.getElementById("studentInitials")
var submitButton = document.getElementById("submit")

var timerTime = 60;
var timerDisplay;
var activeQuestion = 0;

//how are we creating the questions for the quiz?
var questionArr = [
    {
        title: "1+1",
        choices: ['2', '3', '1','4'],
        answer: "2"
    }
]

//functions go here

function start(){

    //hide the welcome div and remove the hide class off the questions div
    startPage.setAttribute("class", "hide")
    questionsPage.removeAttribute("class")

    //start timer
    timerDisplay = setInterval(function(){
        timerTime--;
        timer.textContent = timerTime
    }, 1000)

    timer.textContent = timerTime
    //show the question and choices
    showQuestion()
}


function showQuestion(){
    var currentQuestion = questionArr[activeQuestion];

    //needs to display the question
    questionHolder.textContent = currentQuestion.title;

    //needs to display the answers
    answerChoices.textContent = currentQuestion.choices;

}


//eventlisteners go here
startButton.addEventListener('click', start)