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

// Click handler for Start button
$("#Start-Button").on("click", function() {
    $("#Start-Button").hide();
    $("#Instructions-Text").hide(); 
  });

// Questions, answers, and correct answer
(function() {
    var questions = [{
      question: "1. What year was the movie 'Predator' released?",
      choices: ["1984", "1985", "1986", "1987"],
      correctAnswer: 1
    }, {
      question: "2. In the first Predator movie, which one-liner does Arnold Schwarzenegger say after impaling an enemy against a wooden post with his machete?",
      choices: ["Stay put", "Stick around", "Snap into a slim jim", "Stick to it"],
      correctAnswer: 4
    }, {
      question: "3. Which martial-arts expert was originally cast to play the Predator?",
      choices: ["Jackie Chan", "Jean-Claude Van Damme ", "Wesley Snipes", "Steven Seagal"],
      correctAnswer: 1
    }, {
      question: "4. What animal did Mac kill with his knife?",
      choices: ["Scorpion", "Wild Boar", "A Scorpion and Wild Boar", "Monkey"],
      correctAnswer: 1
    }, {
      question: "5. What ingredients were used to make the predator's blood?",
      choices: ["Glow sticks and KY Jelly", "Mountain Dew and rubber cement", "Melted crayons", "Food dye and Vasoline"],
      correctAnswer: 0
    }
];

// TIMER
//  Counter = 10.
var timer = 10;
var intervalId;
//  When the start button gets clicked, execute the run function.
$("#resume").on("click", run);

//  When thw next button is clicked run stop function
$("#next").on("click", stop);

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}
function decrement() {
  timer--;
  //  Show the timer number .
  $("#question-timer").html("<h2>" + timer + "</h2>");

  if (timer === 0) {
    stop();

    //  Alert the user that time is up.
    alert("The correct answer was " + correctAnswer);
  }
  console.log(timer);
}


//  The stop function
function stop() {
  clearInterval(intervalId);
}

//  Execute the run function.
run();

//END TIMER
    //Tracks question number
    var questionCounter = 0; 
    //Array of user guesses
    var selections = []; 
    //Quiz div object
    var quiz = $('#quiz'); 
    
    // Display initial question    
    // Click handler for the 'next' button
    $('#next').on('click', function (e) {
      e.preventDefault();
      choose();
      
      // If timer runs out stop counter.
      /// ...then display coorect answer selection, progress is stopped
      if (isNaN(selections[questionCounter])) {
        alert('Please make a selection!');
      } else {
        questionCounter++;
        displayNext();
      }
    });
    
    // Click handler for the 'Start Over' button
    $('#start').on('click', function (e) {
      e.preventDefault();
      
      if(quiz.is(':animated')) {
        return false;
      }
      questionCounter = 0;
      selections = [];
      displayNext();
      $('#start').hide();
    });    
    
    // Creates and returns the div that contains the questions and 
    // the answer selections
    function createQuestionElement(index) {
      var qElement = $('<div>', {
        id: 'question'
      });
      
      var header = $('<h2>Question ' + (index + 1) + ':</h2>');
      qElement.append(header);
      
      var question = $('<p>').append(questions[index].question);
      qElement.append(question);
      
      var radioButtons = createRadios(index);
      qElement.append(radioButtons);
      
      return qElement;
    }
    
    // List of answer choice radios
    function createRadios(index) {
      var radioList = $('<ul>');
      var item;
      var input = '';
      for (var i = 0; i < questions[index].choices.length; i++) {
        item = $('<li>');
        input = '<input type="radio" name="answer" value=' + i + ' />';
        input += questions[index].choices[i];
        item.append(input);
        radioList.append(item);
      }
      return radioList;
    }
    
    // Reads the user selection and pushes the value to an array
    function choose() {
      selections[questionCounter] = +$('input[name="answer"]:checked').val();
    }
    
    // Display next requested element
    function displayNext() {
      quiz.fadeOut(function() {
        $('#question').remove();
        
        if(questionCounter < questions.length){
          var nextQuestion = createQuestionElement(questionCounter);
          quiz.append(nextQuestion).fadeIn();
          if (!(isNaN(selections[questionCounter]))) {
            $('input[value='+selections[questionCounter]+']').prop('checked', true);
          }
          
          // Controls display of 'prev' button         
        }else {
          var scoreElem = displayScore();
          quiz.append(scoreElem).fadeIn();
          $('#next').hide();
          $('#start').show();
        }
      });
    }
    
    // Calculate score and returns a paragraph element to be displayed
    function displayScore() {
      var score = $('<p>',{id: 'question'});
      
      var numCorrect = 0;
      for (var i = 0; i < selections.length; i++) {
        if (selections[i] === questions[i].correctAnswer) {
          numCorrect++;
        }
      }
      
      score.append('You got ' + numCorrect + ' of ' +
                   questions.length + ' correct');
      return score;
    }
  })();