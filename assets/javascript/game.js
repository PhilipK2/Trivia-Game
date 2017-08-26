

var correctAnswer= 0;
var wrongAnswer= 0;

//THIS .ONE FUNCTION MAKES THE RESET BUTTON BASICALLY WORTHLESS SINCE YOU CANNOT SELECT THE SAME BUTTON TWICE.

$('#true1, #false1').on("click", function () {
   if (this.id == 'true1') {
      wrongAnswer++;
      $('#true1, #false1').prop("disabled",true);
      //console.log(wrongAnswer);
   }
   else if (this.id == 'false1') {
      correctAnswer++;
      $('#true1, #false1').prop("disabled",true);
      //console.log(correctAnswer);
   }
});
$('#true2, #false2').on("click", function () {
   if (this.id == 'true2') {
      correctAnswer++;
      $('#true2, #false2').prop("disabled",true);
      //console.log(correctAnswer);
   }
   else if (this.id == 'false2') {
      wrongAnswer++;
      $('#true2, #false2').prop("disabled",true);
      //console.log(wrongAnswer);
   }
});
$('#true3, #false3').on("click", function () {
   if (this.id == 'true3') {
      correctAnswer++;
      $('#true3, #false3').prop("disabled",true);
      //console.log(correctAnswer);
   }
   else if (this.id == 'false3') {
      wrongAnswer++;
      $('#true3, #false3').prop("disabled",true);
      //console.log(wrongAnswer);
   }
});
$('#true4, #false4').on("click", function () {
   if (this.id == 'true4') {
      correctAnswer++;
      $('#true4, #false4').prop("disabled",true);
      //console.log(correctAnswer);
   }
   else if (this.id == 'false4') {
      wrongAnswer++;
      $('#true4, #false4').prop("disabled",true);
      //console.log(wrongAnswer);
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
  $('#true1, #false1, #true2, #false2, #true3, #false3, #true4, #false4').prop("disabled",false);
};
$("#playAgainBtn").on("click", playAgain);
