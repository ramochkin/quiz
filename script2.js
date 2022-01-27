var scoreBoard = document.getElementById("#scoreBoard")

//Pull data out of local storage
var scores = JSON.parse(window.localStorage.getItem("highscores"))
scores = scores.sort(function(score1, score2){
    //console.log("One Score", score1);
    //console.log("Score Two ", score2);
    return score2.score - score1.score;
});
console.log(scores);
// console.log(scores[0]);

//var scores is the data. create a function to sort the data based on index, 
// inject it into it's own line in the organised list defines as scoreBoard.

var activeScore = 0

for (let index = 0; index < scores.length; index++) {
    var score = scores[activeScore];
    console.log(score)
    activeScore++;
    addElement(score);
    console.log(score.score)
}

function addElement(score) {
    var newLi = document.createElement("li");
    var newLiContent = document.createTextNode(score.initials + " " + score.score);
    newLi.appendChild(newLiContent);

    var currentOl = document.scoreBoard;
    document.body.insertBefore(newLi, currentOl)

}


