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
var instructionText = document.createTextNode("Test your knowledge of the Predator species by answering as many questions as you can before time runs out.");
instructions.appendChild(instructionText);
var element = document.getElementById("Instructions-Text");
element.appendChild(instructions);
//THIS WORKS^^^

// Display start button
var startButton = document.createElement("button");
var startButtonText = document.createTextNode("START GAME");
startButton.appendChild(startButtonText);
var element = document.getElementById("Start-Button");
element.appendChild(startButton);
//THIS WORKS^^^
//Add a custom class to the button 
startButton.classList.add("alien-glow");
//THIS WORKS^^^


// Clicking the start button runs the game 
//Create a function for the

// Start the timer countdonwn for the question

// Show a question 

// Show the answer choices

// Allow the user to skip question

// If answer is skipped then add to Unanswered Questions

// Let the user choose 1 of 4 answer choices

// Click next to go to next question

// Store the selected answer/index value

// Show a new question




// Select div id's
const triviaConsole = document.getElementById("#game-console");
const submitButton = document.getElementById("#done");
const scoresContainer = document.getElementById("#scores");

startTriviaGame(); { 
    $("#start-button").addEventListener("click", runTriviaGame);
}

//write a function to start a new game
$("#start-button").on("click",function(){
    $("#game-console").show();
    // call start timer function
    });

// Create function to run the game
function runTriviaGame() {
    // create array of objects for questions with answer choices
const triviaQuestions = [ 
    {
        question: "What year was the movie 'Predator' released?",
        answers: ["1984", "1985", "1986", "1987"],
 // integer of the index value = corect answer
        correctAnswer: 3,
        },
       
 
];
    // ...store html output
    const output = [];
    // 
    triviaQuestions.forEach( (currentQuestion, questionNumber) => {
        const answers = [];
        for(letter in currentQuestion.answers) {
// ...add radio buttons
        answers.push(
            `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }
      // ...add question and answers to output 
      output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`);
        }
        );
        // ...combine output list into string 
        triviaConsole.innerHTML = output.join('');
    }
    // ...for each loop through questions 
    triviaQuestions.forEach( (currentQuestion, questionNumber) => {
    // ...code to run for questions
    // Store answer choices 
    const answers = [];
    // and for each available answer... 
    for(letter in currentQuestion.answers){ 
        // ...add an html radio button 
        answers.push(
            `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
            </label>`
            );
        }
        // add Q&A to output
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
            );
        });

function displayScores() {
    // gather answer container data
    const answerContainers = triviaConsole.querySelectorAll('.answers');
    // track player guess
    let numCorrect = 0;
    // For each question...
    triviaQuestions.forEach( (currentQuestion, questionNumber) => {
        // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = 'input[name=question'+questionNumber+']:checked';
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    // if answer is correct
    if(userAnswer===currentQuestion.correctAnswer){
        // add to number of correct answers
        numCorrect++;
          // show number of correct answers out of total
  resultsContainer.innerHTML = numCorrect + ' out of ' + triviaQuestions.length;
}


// Jquery toggle CSS display none and display block to hide and show content 

// END OF GAME --- CLICK DONE
$("#done").on("click", function(event) {
    event.preventDefault();
var q1answer = $('input[name=Q1A]:checked').val(); }
// stop timer function

// END OF GAME --- TIME UP 
// stop timer 
// show results 
)})}