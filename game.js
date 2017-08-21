

var correctAnswer= 0;
var wrongAnswer= 0;

$('#true1, #false1').one("click", function () {
   if (this.id == 'true1') {
      wrongAnswer++;
      console.log(wrongAnswer);
   }
   else if (this.id == 'false1') {
      correctAnswer++;
      console.log(correctAnswer);
   }
});
$('#true2, #false2').one("click", function () {
   if (this.id == 'true2') {
      correctAnswer++;
      console.log(correctAnswer);
   }
   else if (this.id == 'false2') {
      wrongAnswer++;
      console.log(wrongAnswer);
   }
});
$('#true3, #false3').one("click", function () {
   if (this.id == 'true3') {
      correctAnswer++;
      console.log(correctAnswer);
   }
   else if (this.id == 'false3') {
      wrongAnswer++;
      console.log(wrongAnswer);
   }
});
$('#true4, #false4').one("click", function () {
   if (this.id == 'true4') {
      correctAnswer++;
      console.log(correctAnswer);
   }
   else if (this.id == 'false4') {
      wrongAnswer++;
      console.log(wrongAnswer);
   }
});


function endGame(){
	alert("Correct answers: " + correctAnswer);
	alert("Wrong answers: " + wrongAnswer);
};

setTimeout(timer, 5000);

var count=30;
var counter=setInterval(timer, 1000);

function timer(){
  count=count-1;
  if (count === 0){
     clearInterval(counter);
     alert("Time's up!");
     endGame();
	return;
  }

  $("#timer").html("<h2>Time Remaining: " + count + "</h2>");
}

function playAgain(){
	correctAnswer= 0;
	wrongAnswer= 0;
	count= 30;
	counter=setInterval(timer, 1000);
	timer();
};
$("#playAgainBtn").on("click", playAgain);



