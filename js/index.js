//CLASES
class Bombo {

  constructor() {
    for (var a = [], i = 0; i < 90; ++i) a[i] = i;
    a[0] = 90;

    function shuffle(array) {
      var tmp, current, top = array.length;
      if (top) while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
      return array;
    }

    this.box = shuffle(a);
  }

  ballOut() {
    return this.box.pop();
  }

}
var bombo;
var ballOutBtn = document.getElementById("ball-out");
var currentBallScreen = document.getElementById("current-ball");
var doneBallsP = document.getElementById("done-balls");

document.addEventListener("DOMContentLoaded", function (event) {
  bombo = new Bombo;
});

ballOutBtn.addEventListener("click", function () {
  var currentBall = bombo.ballOut();
  if (currentBall !== undefined) {
    currentBallScreen.textContent = currentBall;
    doneBallsP.textContent += " " + currentBall;
  } else {
    currentBallScreen.textContent = "FIN";
  }

});


