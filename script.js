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
        choices: ['2', '3', '1', '4'],
        answer: "2"
    },
    {
        title: "1+2",
        choices: ['2', '3', '1', '4'],
        answer: "3"
    },
    {
        title: "2+1",
        choices: ['2', '3', '1', '4'],
        answer: "3"
    },
    {
        title: "2+2",
        choices: ['2', '3', '1', '4'],
        answer: "4"
    }
]

//functions go here

function start() {

    //hide the welcome div and remove the hide class off the questions div
    startPage.setAttribute("class", "hide")
    questionsPage.removeAttribute("class")

    //start timer
    timerDisplay = setInterval(function () {
        timerTime--;
        timer.textContent = timerTime

        if (timerTime <= 0){
            gameOver();
        }

    }, 1000)

    timer.textContent = timerTime
    //show the question and choices
    showQuestion()
}


function showQuestion() {
    var currentQuestion = questionArr[activeQuestion];

    //needs to display the question
    questionHolder.textContent = currentQuestion.title;

    //needs to display the answers
    //choices are in an array. We need to create a button for each choice in the array
    
    //need to clear answerbuttons container before the loop is ran
    answerChoices.innerHTML = '';

    currentQuestion.choices.forEach(function (choice) {

        var optionsBtn = document.createElement('button');
        optionsBtn.textContent = choice;
        optionsBtn.setAttribute('value', choice)

        optionsBtn.onclick = checkAnswer;

        answerChoices.append(optionsBtn)

    })



}

function checkAnswer() {
    console.log(this.value)

    //if the answer is wrong deduct 10 from the time. 
    if (this.value !== questionArr[activeQuestion].answer) {
        timerTime -= 10;
        timer.textContent = timerTime;

        if (timerTime < 0) {
            timerTime = 0;
        }
    }
    //we increase the question index by 1
    activeQuestion++;
    //if there are more questions in the array ask the next question. else end the game

    if (activeQuestion === questionArr.length){
        //call function that ends game
        gameOver()
    }else{
        showQuestion();
    }
}

function gameOver(){
    questionsPage.setAttribute("class", "hide")
    endPage.removeAttribute("class")

    clearInterval(timerDisplay)
    score.textContent=timerTime;
}

function saveHighScore(){
    var fLInitials = initials.value;

    var highscores = JSON.parse(localStorage.getItem('highscores')) || [];

    var dataSet = {
        initials: fLInitials,
        score: timerTime,
    };

    highscores.push(dataSet)

    localStorage.setItem('highscores', JSON.stringify(highscores))
    console.log(highscores)
}


//eventlisteners go here
startButton.addEventListener('click', start)
submitButton.addEventListener('click', saveHighScore)

// JSON.parse(localStorage.highscores) ||