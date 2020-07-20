var score = 0;
var header = document.querySelector(".header");
var content = document.querySelector(".content");
var highScores = document.querySelector(".high-scores")
var buttons = document.querySelector(".buttons");
var timer = document.querySelector(".timer");
var timerInterval;
var correctSound = document.querySelector(".correct");
var incorrectSound = document.querySelector(".incorrect");
var questionNumber = 1
var timeLeft = 180;
var ans1;
var ans2;
var ans3;
var ans4;

//Setup the quiz layout to hide the high score entry and display options to start the quiz or display the locally stored high scores
function startQuiz() {
   highScores.style.visibility = "hidden";

   ans1 = document.createElement("button");
   ans1.innerHTML = "Start";
   buttons.appendChild(ans1);
   ans1.addEventListener("click", function() {
      validate();
   });

   ans2 = document.createElement("button");
   ans2.innerHTML = "High Scores";
   buttons.appendChild(ans2);
   ans2.addEventListener("click", function() {
      displayScores();
   });
}
startQuiz();

//Start the countdown timer
function countdown() {
   timerInterval = setInterval(function() {
   timeLeft --;
   timer.textContent = "Time left: " + timeLeft;
      if (timeLeft <= 0) {
         clearInterval (timerInterval);
         timeLeft = 0;
         timer.textContent = "Time left: 0"
         finishQuiz();
      }
   }, 1000);
}

//Calculate final score
function calcScore() {
   score += timeLeft;
}

//Proceed to the next question after displaying "correct" or "incorrect" with 1 second added for display time
function validate() {
   if(questionNumber === 1) {
      questionOne();
   };
   if(questionNumber === 2) {
      content.setAttribute("style", "color: black");
      timeLeft ++;
      questionTwo();
   };
   if(questionNumber === 3) {
      content.setAttribute("style", "color: black");
      timeLeft ++;
      questionTen();
   };
   if(questionNumber === 4) {
      content.setAttribute("style", "color: black");
      timeLeft ++;
      finishQuiz();
   };

};

//Correct answer
function correct() {
   correctSound.play();
   content.setAttribute("style", "color: green");
   content.textContent = "Correct!";
   questionNumber ++;
   setTimeout(validate, 1000);
 
}

//Incorrect answer with 15 second penalty
function incorrect() {
   incorrectSound.play();
   content.setAttribute("style", "color: red");
   content.textContent = "Incorrect!"
   timeLeft -=15;
   questionNumber ++;
   setTimeout(validate, 1000);
}

//Question 1
function questionOne() {
   ans1.remove();
   ans2.remove();
   countdown();
   header.textContent = "Question 1:"
   content.textContent = "How Many Shoes?";
        
   ans1 = document.createElement("button");
   ans1.innerHTML = "42";
   buttons.appendChild(ans1);
   ans1.addEventListener("click", function () {
      incorrect();
   });

    ans2 = document.createElement("button");
    ans2.innerHTML = "Kenan & Kel";
    buttons.appendChild(ans2);
    ans2.addEventListener("click", function () {
      incorrect();
   });

   ans3 = document.createElement("BUTTON");
   ans3.innerHTML = "Number";
   buttons.appendChild(ans3);
   ans3.addEventListener("click", function () {
      incorrect();
   });

   ans4 = document.createElement("BUTTON");
   ans4.innerHTML = "Meatloaf";
   buttons.appendChild(ans4);
   ans4.addEventListener("click", function () {
      correct();
   });
}

//Question 2 
function questionTwo() {
   ans1.remove();
   ans2.remove();
   ans3.remove();
   ans4.remove();
   header.textContent = "Question 2:"
   content.textContent = "Using ___ statement is how you test for a specific condition.";
       
   ans1 = document.createElement("button");
   ans1.innerHTML = "For";
   buttons.appendChild(ans1);
   ans1.addEventListener("click", function () {
      incorrect();
   });
 
   ans2 = document.createElement("button");
   ans2.innerHTML = "If";
   buttons.appendChild(ans2);
   ans2.addEventListener("click", function () {
      correct();
   });

   ans3 = document.createElement("button");
   ans3.innerHTML = "Select";
   buttons.appendChild(ans3);
   ans3.addEventListener("click", function () {
      incorrect();
   });

   ans4 = document.createElement("button");
   ans4.innerHTML = "Switch";
   buttons.appendChild(ans4);
   ans4.addEventListener("click", function () {
      incorrect();
   });
}

//Question 3
function questionThree() {
   ans1.remove();
   ans2.remove();
   ans3.remove();
   ans4.remove();
   header.textContent = "Question 3:"
   content.textContent = "Question 3";
       
   ans1 = document.createElement("button");
   ans1.innerHTML = "wrong";
   buttons.appendChild(ans1);
   ans1.addEventListener("click", function () {
      incorrect();
   });
 
   ans2 = document.createElement("button");
   ans2.innerHTML = "If";
   buttons.appendChild(ans2);
   ans2.addEventListener("click", function () {
      correct();
   });

   ans3 = document.createElement("button");
   ans3.innerHTML = "Select";
   buttons.appendChild(ans3);
   ans3.addEventListener("click", function () {
      incorrect();
   });

   ans4 = document.createElement("button");
   ans4.innerHTML = "Switch";
   buttons.appendChild(ans4);
   ans4.addEventListener("click", function () {
      incorrect();
   });
}

//Question 10
function questionTen() {
   ans1.remove();
   ans2.remove();
   ans3.remove();
   ans4.remove();
   header.textContent = "Question 10:"
   content.textContent = "Question 10";
       
   ans1 = document.createElement("button");
   ans1.innerHTML = "wrong";
   buttons.appendChild(ans1);
   ans1.addEventListener("click", function () {
      incorrect();
   });
 
   ans2 = document.createElement("button");
   ans2.innerHTML = "wrong";
   buttons.appendChild(ans2);
   ans2.addEventListener("click", function () {
      incorrect(); 
   });

   ans3 = document.createElement("button");
   ans3.innerHTML = "correct";
   buttons.appendChild(ans3);
   ans3.addEventListener("click", function () {
      correct();
   });

   ans4 = document.createElement("button");
   ans4.innerHTML = "wrong";
   buttons.appendChild(ans4);
   ans4.addEventListener("click", function () {
      incorrect();
   });
}

//When the quiz is finished
function finishQuiz() {
   calcScore();
   timeLeft = 0; 
   ans1.remove();
   ans2.remove();
   ans3.remove()
   ans4.remove();
   header.textContent = "The END!"
   highScores.style.visibility = "visible";
   content.textContent = "That's it! Your score is: " + score + ". Please enter your initials below:"
    
   ans1 = document.createElement("button");
   ans1.innerHTML = "Submit";
   buttons.appendChild(ans1);
   ans1.addEventListener("click", function () {
      localStorage.setItem("user", highScores.value);
      localStorage.setItem("score", score);
      displayScores();
   });
}

//Display the high schore records with options to try again or clear the scores
function displayScores() {
   clearInterval (timerInterval);
   ans1.remove();
   ans2.remove();
   highScores.style.visibility = "hidden";
   header.textContent = "High Score"
    
   content.textContent = localStorage.getItem("user") + ": " + localStorage.getItem("score");
    
   ans1 = document.createElement("button");
   ans1.innerHTML = "Try Again";
   buttons.appendChild(ans1);
   ans1.addEventListener("click", function () {
      location.reload();
   });

   ans2 = document.createElement("button");
   ans2.innerHTML = "Clear";
   buttons.appendChild(ans2);
   ans2.addEventListener("click", function () {
      localStorage.clear();
      content.textContent = "";
   });
}