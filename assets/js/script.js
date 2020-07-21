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
      questionThree();
   };
   if(questionNumber === 4) {
      content.setAttribute("style", "color: black");
      timeLeft ++;
      questionFour();
   };
   if(questionNumber === 5) {
      content.setAttribute("style", "color: black");
      questionFive();
   };
   if(questionNumber === 6) {
      content.setAttribute("style", "color: black");
      questionSix();
   };
   if(questionNumber === 7) {
      content.setAttribute("style", "color: black");
      questionSeven();
   };
   if(questionNumber === 8) {
      content.setAttribute("style", "color: black");
      questionEight();
   };   
   if(questionNumber === 9) {
      content.setAttribute("style", "color: black");
      questionNine();
   };
   if(questionNumber === 10) {
      content.setAttribute("style", "color: black");
      questionTen();
   };
   if(questionNumber === 11) {
      content.setAttribute("style", "color: black");
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
   ans3.innerHTML = "Vanilla";
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
   content.textContent = "When referring to the DOM what does the 'D' stand for?";
       
   ans1 = document.createElement("button");
   ans1.innerHTML = "delicious";
   buttons.appendChild(ans1);
   ans1.addEventListener("click", function () {
      incorrect();
   });
 
   ans2 = document.createElement("button");
   ans2.innerHTML = "document";
   buttons.appendChild(ans2);
   ans2.addEventListener("click", function () {
      correct();
   });

   ans3 = document.createElement("button");
   ans3.innerHTML = "daddy";
   buttons.appendChild(ans3);
   ans3.addEventListener("click", function () {
      incorrect();
   });

   ans4 = document.createElement("button");
   ans4.innerHTML = "digital";
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
   content.textContent = "The three basic building block languages of the World Wide Web are: HTML, CSS, and ______?";
       
   ans1 = document.createElement("button");
   ans1.innerHTML = "Javascript";
   buttons.appendChild(ans1);
   ans1.addEventListener("click", function () {
      correct();
   });
 
   ans2 = document.createElement("button");
   ans2.innerHTML = "Node";
   buttons.appendChild(ans2);
   ans2.addEventListener("click", function () {
      incorrect();
   });

   ans3 = document.createElement("button");
   ans3.innerHTML = "Server";
   buttons.appendChild(ans3);
   ans3.addEventListener("click", function () {
      incorrect();
   });

   ans4 = document.createElement("button");
   ans4.innerHTML = "AJAX";
   buttons.appendChild(ans4);
   ans4.addEventListener("click", function () {
      incorrect();
   });
}

// Question 4
function questionFour() {
   ans1.remove();
   ans2.remove();
   ans3.remove();
   ans4.remove();
   header.textContent = "Question 4:"
   content.textContent = "In Javascript an array is classified as _______.";
       
   ans1 = document.createElement("button");
   ans1.innerHTML = "a number";
   buttons.appendChild(ans1);
   ans1.addEventListener("click", function () {
      incorrect();
   });
 
   ans2 = document.createElement("button");
   ans2.innerHTML = "an object";
   buttons.appendChild(ans2);
   ans2.addEventListener("click", function () {
      correct();
   });

   ans3 = document.createElement("button");
   ans3.innerHTML = "a boolean";
   buttons.appendChild(ans3);
   ans3.addEventListener("click", function () {
      incorrect();
   });

   ans4 = document.createElement("button");
   ans4.innerHTML = "a string";
   buttons.appendChild(ans4);
   ans4.addEventListener("click", function () {
      incorrect();
   });
}

// Question 5
function questionFive() {
   ans1.remove();
   ans2.remove();
   ans3.remove();
   ans4.remove();
   header.textContent = "Question 5:"
   content.textContent = "Which operator is used to concatenate multiple strings?";
       
   ans1 = document.createElement("button");
   ans1.innerHTML = "*";
   buttons.appendChild(ans1);
   ans1.addEventListener("click", function () {
      incorrect();
   });
 
   ans2 = document.createElement("button");
   ans2.innerHTML = "-";
   buttons.appendChild(ans2);
   ans2.addEventListener("click", function () {
      incorrect();
   });

   ans3 = document.createElement("button");
   ans3.innerHTML = "+";
   buttons.appendChild(ans3);
   ans3.addEventListener("click", function () {
      correct();
   });

   ans4 = document.createElement("button");
   ans4.innerHTML = "/";
   buttons.appendChild(ans4);
   ans4.addEventListener("click", function () {
      incorrect();
   });
}

// Question 6
function questionSix() {
   ans1.remove();
   ans2.remove();
   ans3.remove();
   ans4.remove();
   header.textContent = "Question 6:"
   content.textContent = "If/Else and Switch are types of _______ statements.";
       
   ans1 = document.createElement("button");
   ans1.innerHTML = "ternary";
   buttons.appendChild(ans1);
   ans1.addEventListener("click", function () {
      incorrect();
   });
 
   ans2 = document.createElement("button");
   ans2.innerHTML = "conditional";
   buttons.appendChild(ans2);
   ans2.addEventListener("click", function () {
      correct();
   });

   ans3 = document.createElement("button");
   ans3.innerHTML = "value";
   buttons.appendChild(ans3);
   ans3.addEventListener("click", function () {
      incorrect();
   });

   ans4 = document.createElement("button");
   ans4.innerHTML = "loop";
   buttons.appendChild(ans4);
   ans4.addEventListener("click", function () {
      incorrect();
   });
}

// Question 7
function questionSeven() {
   ans1.remove();
   ans2.remove();
   ans3.remove();
   ans4.remove();
   header.textContent = "Question 7:"
   content.textContent = "Which of the following is NOT a current or former mosaic web browswer?";
       
   ans1 = document.createElement("button");
   ans1.innerHTML = "Netscape";
   buttons.appendChild(ans1);
   ans1.addEventListener("click", function () {
      incorrect();
   });
 
   ans2 = document.createElement("button");
   ans2.innerHTML = "Chrome";
   buttons.appendChild(ans2);
   ans2.addEventListener("click", function () {
      incorrect();
   });

   ans3 = document.createElement("button");
   ans3.innerHTML = "Safari";
   buttons.appendChild(ans3);
   ans3.addEventListener("click", function () {
      incorrect();
   });

   ans4 = document.createElement("button");
   ans4.innerHTML = "Monster";
   buttons.appendChild(ans4);
   ans4.addEventListener("click", function () {
      correct();
   });
}

// Question 8
function questionEight() {
   ans1.remove();
   ans2.remove();
   ans3.remove();
   ans4.remove();
   header.textContent = "Question 8:"
   content.textContent = "Local and session storage make use of the ______ object.";
       
   ans1 = document.createElement("button");
   ans1.innerHTML = "domain";
   buttons.appendChild(ans1);
   ans1.addEventListener("click", function () {
      incorrect();
   });
 
   ans2 = document.createElement("button");
   ans2.innerHTML = "window";
   buttons.appendChild(ans2);
   ans2.addEventListener("click", function () {
      correct();
   });

   ans3 = document.createElement("button");
   ans3.innerHTML = "browser";
   buttons.appendChild(ans3);
   ans3.addEventListener("click", function () {
      incorrect();
   });

   ans4 = document.createElement("button");
   ans4.innerHTML = "mozilla";
   buttons.appendChild(ans4);
   ans4.addEventListener("click", function () {
      incorrect();
   });
}

// Question 9
function questionNine() {
   ans1.remove();
   ans2.remove();
   ans3.remove();
   ans4.remove();
   header.textContent = "Question 9:"
   content.textContent = "The Nintendo Entertainment System was released in the US in 1985; in which Japanese city is the Nintendo home office located?";
       
   ans1 = document.createElement("button");
   ans1.innerHTML = "Tokyo";
   buttons.appendChild(ans1);
   ans1.addEventListener("click", function () {
      incorrect();
   });
 
   ans2 = document.createElement("button");
   ans2.innerHTML = "Okinawa";
   buttons.appendChild(ans2);
   ans2.addEventListener("click", function () {
      incorrect();
   });

   ans3 = document.createElement("button");
   ans3.innerHTML = "Kyoto";
   buttons.appendChild(ans3);
   ans3.addEventListener("click", function () {
      correct();
   });

   ans4 = document.createElement("button");
   ans4.innerHTML = "Hanafuda";
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
   content.textContent = "Objects can have both properties and _____.";
       
   ans1 = document.createElement("button");
   ans1.innerHTML = "materials";
   buttons.appendChild(ans1);
   ans1.addEventListener("click", function () {
      incorrect();
   });
 
   ans2 = document.createElement("button");
   ans2.innerHTML = "marmalades";
   buttons.appendChild(ans2);
   ans2.addEventListener("click", function () {
      incorrect(); 
   });

   ans3 = document.createElement("button");
   ans3.innerHTML = "methods";
   buttons.appendChild(ans3);
   ans3.addEventListener("click", function () {
      correct();
   });

   ans4 = document.createElement("button");
   ans4.innerHTML = "mothers";
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

//Display the high score records with options to try again or clear the scores
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