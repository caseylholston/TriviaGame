// Initialize the JS file
$(document).ready(function(){

//  Set our timer counter to 20.
var countdownTimer = 20;
//  Variable that will hold our interval ID when we execute the "run" function
var intervalId;
var questionIndex =0;
var answerIndex =0;
var correctIndex =0;
var numberCorrect =0;
var playerAnswerIndex = 0;
$('#nextQuestion').hide();
$('#scoreKeeper').empty();
$('#correct').empty();
$('#wrong').empty();
//$('#scoreKeeper').html("You have answered " + numberCorrect + " questions correctly");

var content = { questions:['What NBA franchise has won the most titles?', 
						   'Who is the all-time leading NBA scorer?',
						   'Which NBA player has hit the most 3 pointers in one season?',
						   'Which NBA player has won the most MVP awards?',
						   'What is the signature move of James "The Beard" Harden?',
						   'Who is considered the best player in the history of the NBA?',
						   'Who composed the NBA finals theme "Roundball Rock"?',
						   'What is the nickname of the brawl that took place between Indiana Pacer players and Detroit Pistons Fans?',
						   'What was the name given to the Philadelphia 76ers team building philosophy that saw them lose 199 out of 246 games over three years?',
						   'Which NBA player scored 100 points in a game?'
							]
							,
				possibleAnswers: [['<input type ="radio" name="answers" value="Los Angeles Lakers" id="1a"> Los Angeles Lakers', '<input type ="radio"  name="answers" value="San Antonio Spurs" id ="1b"> San Antonio Spurs', 
								   '<input type ="radio" name="answers" value="Boston Celtics" id ="1c"> Boston Celtics', '<input type ="radio" name="answers" value="Chicago Bulls" id ="1d"> Chicago Bulls'],
						   		 ['<input type ="radio" name="answers" value="Kobe Bryant" id="2a"> Kobe Bryant','<input type ="radio" name="answers" value="Michael Jordan" id="2b"> Michael Jordan',
						   		  '<input type ="radio" name="answers" value="Larry Bird" id="2c"> Larry Bird','<input type ="radio" name="answers" value="Kareem Abdul-Jabbar" id="2d"> Kareem Abdul-Jabbar'],
								 ['<input type ="radio" name="answers" value="Kobe Bryant" id="3a"> Kobe Bryant','<input type ="radio" name="answers" value="Stephen Curry" id="3b"> Stephen Curry',
						   		  '<input type ="radio" name="answers" value="Larry Bird" id="3c"> Larry Bird','<input type ="radio" name="answers" value="Michael Jordan" id="3d"> Michael Jordan'],
						   		 ['<input type ="radio" name="answers" value="Kareem Abdul-Jabbar" id="4a"> Kareem Abdul-Jabbar','<input type ="radio" name="answers" value="Lebron James" id="4b"> Lebron James',
						   		  '<input type ="radio" name="answers" value="Michael Jordan id="4c"> Michael Jordan','<input type ="radio" name="answers" value="Magic Johnson" id="4d"> Magic Johnson'],
						   		 ['<input type ="radio" name="answers" value="The Killer Crossover" id="5a"> The Killer Crossover','<input type ="radio" name="answers" value="Eurostep" id="5b"> Eurostep',
						   		  '<input type ="radio" name="answers" value="THe Sky Hook" id="5c"> The Sky Hook','<input type ="radio" name="answers" value="The Dream Shake" id="5d"> The Dream Shake'],
						   		 ['<input type ="radio" name="answers" value="Kobe Bryant" id="6a"> Kobe Bryant','<input type ="radio" name="answers" value="Lebron James" id="6b"> Lebron James',
						   		  '<input type ="radio" name="answers" value="Michael Jordan" id="6c"> Michael Jordan','<input type ="radio" name="answers" value="Magic Johnson" id="6d"> Magic Johnson'],
						   		 ['<input type ="radio" name="answers" value="John Tesh" id="7a"> John Tesh','<input type ="radio" name="answers" value="Herbie Hancock" id="7b"> Herbie Hancock',
						   		  '<input type ="radio" name="answers" value="Quincy Jones" id="7c"> Quincy Jones','<input type ="radio" name="answers" value="Kelsey Grammer" id="7d"> Kelsey Grammer'],
						   		 ['<input type ="radio" name="answers" value="The Pacer Paranoia" id="8a"> The Pacer Paranoia','<input type ="radio" name="answers" value="The Detroit Stampede" id="8b"> The Detroit Stampede"',
						   		  '<input type ="radio" name="answers" value="Field of Screams" id="8c"> Field of Screams','<input type ="radio" name="answers" value="Malice at the Palace" id="8d"> Malice at the Palace'],
						   		 ['<input type ="radio" name="answers" value="Tanks for Losing" id="9a"> Tanks for Losing','<input type ="radio" name="answers" value="The Process" id="9b"> The Process',
						   		  '<input type ="radio" name="answers" value="You gotta lose to win" id="9c"> You gotta lose to win','<input type ="radio" name="answers" value="Lose Big to Win Big" id="9d"> Lose Big to Win Big'],
						   		 ['<input type ="radio" name="answers" value="Kobe Bryant" id="10a"> Kobe Bryant','<input type ="radio" name="answers" value="Michael Jordan" id="10b"> Michael Jordan',
						   		  '<input type ="radio" name="answers" value="Wilt Chamberlain" id="10c"> Wilt Chamberlain','<input type ="radio" name="answers" value="Kareem Abdul-Jabbar" id="10d"> Kareem Abdul-Jabbar']

								],
				correctAnswers: ['1c','2d','3b','4a','5b','6c','7a','8d','9b','10c'
								],
				playerAnswers: [],
				};

var triviaStatus = {startTimer:function run() {
      								intervalId = setInterval(this.decreaseTimer, 1000);
    								},


    					decreaseTimer:function decrement() {
								      //  Decrease number by one.
								      countdownTimer--;
								      //  Show the number in the #show-number tag.
								      $('#timer').html('<h2>' + countdownTimer + '</h2>');
								      //  Once number hits zero...
								      if (countdownTimer === 0 ) {
								        //  ...run the stop function.
								        triviaStatus.stopTimer();
								        //  Alert the user that time is up.
								        alert('Time Up!');
								        $('#nextQuestion').show();
								      }
								    },

    					stopTimer:function stop() {
								      //  Clears our intervalId
								      //  We just pass the name of the interval
								      //  to the clearInterval function.
								      clearInterval(intervalId);
								    },

						resetTimer:function reset() {
								      countdownTimer = 20;
								    },

						};
    //  Execute the run function.
    	$('#startQuiz').on('click', function () {
    	triviaStatus.startTimer();
    	$(this).hide();
    	$('#question').html(content.questions[questionIndex] + "<br><br>");
    	//$('#answers').html('<form onSubmit="triviaStatus.captureForm()">' + content.possibleAnswers.one + '<input type="submit" value="Submit">' + '</form>');
    	$('#answers').html('<form id=answerOptions>' + content.possibleAnswers[answerIndex].join('<br><br>') + '</form');
	});


	$(document).on('change', 'input[type=radio][name=answers]', function(){
				questionIndex++;
				answerIndex++;
			if ('input[type="radio"][name=answers]:checked')  {
				content.playerAnswers[playerAnswerIndex] = $('input[type=radio][name=answers]:checked').attr('id');
				if( content.playerAnswers[playerAnswerIndex] == content.correctAnswers[correctIndex]) {
					alert('You have chosen wisely');
					$('#correct').html('<img src="../TriviaGame/assets/images/yes.gif"/>');
					numberCorrect++;
					console.log("Number Correct" + numberCorrect)
					triviaStatus.stopTimer();
					triviaStatus.resetTimer();
					$('#nextQuestion').show();
					$('#scoreKeeper').html("You have answered " + numberCorrect + " questions correctly");
				}
				else {
					alert('You have chosen poorly -- The correct answer was' + content.correctAnswers[correctIndex] );
					$('#wrong').html('<img src="../TriviaGame/assets/images/kanyeno.gif"/>');
					triviaStatus.stopTimer();
					triviaStatus.resetTimer();
					clearInterval(intervalId);
					$('#nextQuestion').show();
					$('#scoreKeeper').html("You have answered " + numberCorrect + " questions correctly");
				}
		};

	
	});

		$('#nextQuestion').on('click', function (){
		console.log("Next Question Function to Run");
		console.log(answerIndex);
		playerAnswerIndex++;
		correctIndex++;
		$('#correct').empty();
		$('#wrong').empty();
		$('#nextQuestion').hide();
		triviaStatus.startTimer();
		$('#question').html(content.questions[questionIndex] + "<br><br>");
		$('#answers').html('<form id=answerOptions>' + content.possibleAnswers[answerIndex].join('<br><br>') + '</form');

	});



// End Doucment Ready Function
});