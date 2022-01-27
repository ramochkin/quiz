var scoreBoard = document.getElementById("#scoreBoard")

//Pull data out of local storage
var scores = JSON.parse(window.localStorage.getItem("highscores"))
console.log(scores);

//var scores is the data. create a function to sort the data based on index, 
// inject it into it's own line in the organised list defines as scoreBoard.

var activeScore = 0

for (let index = 0; index < scores.length; index++) {
    var score = scores[activeScore];
    activeScore++;
    addElement(score);
    //console.log(score)
}

function addElement() {
    var newLi = document.createElement("li");
    var newLiContent = document.createTextNode(score)
    newLi.appendChild(newLiContent);

    var currentOl = document.scoreBoard;
    document.body.insertBefore(newLi, currentOl)

}

addElement();