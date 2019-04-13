// *********** Psuedo **************

// Display Trivia Game Title 
var para = document.createElement("h1");
var heading = document.createTextNode("PREDATOR TRIVIA GAME");
para.appendChild(heading);
var element = document.getElementById("Game-Title");
element.appendChild(para);
//THIS WORKS^^^

// Display instructions
var instructions = document.createElement("h4");
var instructionText = document.createTextNode("Test your knowledge of the movie 'Predator' by answering trivia questions before time runs out.");
instructions.appendChild(instructionText);
var element = document.getElementById("Instructions-Text");
element.appendChild(instructions);
//THIS WORKS^^^

// Display start button with custom CSS class
var startButton = document.createElement("button");
var startButtonText = document.createTextNode("START GAME");
startButton.appendChild(startButtonText);
var element = document.getElementById("Start-Button");
element.appendChild(startButton);
//Add a class to button 
startButton.classList.add("alien-glow");
//THIS WORKS^^^

// GLOBAL VARIABLES
var correctAnswers = 0;
var WrongAnswers = 0;
var playerGuess = [];
var triviaQuestions = 0;
var triviaQuestions = [{
    question: "1. What year was the movie 'Predator' released?",
    answers: ["1984", "1985", "1986", "1987"],
    correctAnswer: 3
    },
    {
    question: "2. In the first Predator movie, which one-liner does Arnold Schwarzenegger say after impaling an enemy against a wooden post with his machete?",
    answers: ["Stay put", "Stick around", "Snap into a slim jim", "Stick to it"],
    correctAnswer: 1
    },
    {
    question: "3. Which martial-arts expert was originally cast to play the Predator?",
    answers: ["Jackie Chan", "Jean-Claude Van Damme ", "Wesley Snipes", "Steven Seagal"],
    correctAnswer: 1
    },
    {
    question: "4. What animal did Mac kill with his knife?",
    answers: ["Scorpion", "Wild Boar", "A Scorpion and Wild Boar", "Monkey"],
    correctAnswer: 1
    }, 
    {
    question: "5. What ingredients were used to make the predator's blood?",
    answers: ["Glow sticks and KY Jelly", "Mountain Dew and rubber cement", "Melted crayons", "Food dye and Vasoline"],
    correctAnswer: 0
    }
    ];

// The player clicks the start button to run the game and timer.
document.getElementById("Start-Button").addEventListener("click", startTheGame);

// Create event listener for Start Button and name its function

// The start button and instructions should be hidden

// Show only one question until the player answers it or their time runs out.
    

//start the timer countdonwn after the start button is clicked 
        ///...and when the player an answer is clicked.
        var countdown = 10;
      
        var timer = setInterval(function() {
          console.log(countdown);
          countdown--;
          if(countdown === 0) {
            stopInterval()
          }
        }, 1000);
        
        var stopInterval = function() {
          console.log("You're too slow!");
          clearInterval(timer);
        }
// Display timer
 ///...then start the timer

 // Display the first question
                            
// Show answer choices

// Only allow 1 answer to be selected 

// Notify the player if they got the answer right or wrong
    ///...and show a gif or image associated with it

// If the timer runs out the correct answer is displayed with an gif or image
    ///...then the time is reset
        ////...and the next question is dislayed

///...and +1 will be added to Unanswered Questions score 
// If answer is skipped +1 will be added to Unanswered Questions score 
// If answer is wrong +1 will be added to Unanswered Questions score 
// If the answer is correct +1 will be added to Correct Answers score

// Store the selected answer/index value

// Show a new question