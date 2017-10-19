/*Elements Needed:
    1. "Start" Button, 
    2. Timer, 
    3. Questions, 
    4. "Submitt" Button,

 On click start game:
  1. start timer
  2. launch questions
  3. document.getElementByClassName("container").style.visibility = "visible";

Questions
 If user guess = to answer
 mark true
 add one point.
*/
$( document ).ready(function() {
    console.log( "ready!" );
});

// START BUTTON TO ACCESS QUIZ
//*******************************************************
$("#startButton").click(function(){
    $("#container").show();
});


// VARIABLES
//*******************************************************
var qOne = document.quiz.qOne.value;
var qTwo = document.quiz.qTwo.value;
var qThree = document.quiz.qThree.value;
var qFour = document.quiz.qFour.value;
var qFive = document.quiz.qFive.value;
var correct = 0;
var wrong = 0;
var unanswered = 0;


//SUBMIT BUTTON TO END QUIZ AND REVEAL CORRECT ANSWERS
//*******************************************************


if (qOne == "rightAnswer"){
	correct++;
}

if (qTwo == "rightAnswer"){
	correct++;
}

if (qThree == "rightAnswer"){
	right++;
}

if (qFour == "rightAnswer"){
	right++;
}

if (qFive == "rightAnswer"){
	right++;
}


	document.getElementById("resultC"),innerHTML = "Correct Answers: " + correct;
	document.getElementById("resultI"),innerHTML = "Wrong Answers: " + wrong;
	document.getElementById("resultU"),innerHTML = "Unanswered: " + unanswered;



	