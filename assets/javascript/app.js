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
$('#nextQuestion').hide();

var content = { questions:['Who shot John F. Kennedy?', 'What is 2+2']
							,
				possibleAnswers: [['<ul><li><input type ="radio" name="answers" value="Rafael Cruz" id="1a"> Rafael Cruz</li>', '<li><input type ="radio"  name="answers" value="The CIA" id ="1b"> The CIA</li>', 
										'<li><input type ="radio" name="answers" value="Lee Harvey Oswald" id ="1c"> Lee Harvey Oswald</li>', '<li><input type ="radio" name="answers" value="Jack Ruby" id ="1d"> Jack Ruby</li></ul>'],
						   		 ['<input type ="radio" value="1" id="2a">1','<input type ="radio" value="1" id="2b">2',
						   		   		'<input type ="radio" value="3" id="2c">3','<input type ="radio" value="4" id="2d">4'],
								],
				correctAnswers: ['1c','2d'
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
				questionIndex++
				answerIndex++
			if ('input[type="radio"][name=answers]:checked')  {
				content.playerAnswers.one = $('input[type=radio][name=answers]:checked').attr('id');
				if( content.playerAnswers.one == content.correctAnswers[correctIndex]) {
					console.log('you are correct');
					triviaStatus.stopTimer();
					triviaStatus.resetTimer();
					numberCorrect++
					$('#nextQuestion').show();
				}
				else {
					console.log('you are wrong')
					triviaStatus.stopTimer();
					triviaStatus.resetTimer();
					clearInterval(intervalId);
					$('#nextQuestion').show();

				}
		};

	
	});


	$('#nextQuestion').on('click', function (){
		console.log("Next Question Function to Run");
		$('#nextQuestion').hide();
		
		triviaStatus.startTimer();
		$('#question').html(content.questions[questionIndex] + "<br><br>");
		$('#answers').html('<form id=answerOptions>' + content.possibleAnswers[answerIndex].join('<br><br>') + '</form');


	});
    	//if ('input[type="radio"]:checked') {}
    	
    // 	$('input[type=radio][name=answers]').change(function() {
  		// 	console.log("I was pressed");
  		// 	//alert($('input[name="answers"]:checked').val());
  		// });

  //   		var playerAnswer = $('input[name="answers"]:checked', '#answerOptions').val();
  //   		if(playerAnswer = content.playerAnswers.one ) {
		// 	alert("Correct Answer");	
		// }
		
		// else {
		// 	alert("Wrong Answer");
		// }
    	

    
		


    












// End Doucment Ready Function
});