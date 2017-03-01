// Initialize the JS file
$(document).ready(function(){

//  Set our timer counter to 20.
var countdownTimer = 100;
//  Variable that will hold our interval ID when we execute the "run" function
var intervalId;
var numberCorrect =0;

var content = { questions: {one:['Who shot John F. Kennedy?'],
							two:['What is 2+2'],
							},
				possibleAnswers: { one:['<input type ="radio" name="answers" value="Rafael Cruz" id="1a">Rafael Cruz', '<input type ="radio"  name="answers" value="The CIA" id ="1b">The CIA', 
										'<input type ="radio" name="answers" value="Lee Harvey Oswald" id ="1c">Lee Harvey Oswald', '<input type ="radio" name="answers" value="Jack Ruby" id ="1d">Jack Ruby'],
						   		   two:['<input type ="radio" value="1" id="2a">1','<input type ="radio" value="1" id="2b">2',
						   		   		'<input type ="radio" value="3" id="2c">3','<input type ="radio" value="4" id="2d">4'],
								} ,
				correctAnswers: {one:'1c',
								 two: '2d',
								},
				playerAnswers: {one:'',
							   two:'',
							  },
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
								      }
								    },

    					stopTimer:function stop() {
								      //  Clears our intervalId
								      //  We just pass the name of the interval
								      //  to the clearInterval function.
								      clearInterval(intervalId);
								    },
						// checkAnswer:function capture() {
						// 		     var playerAnswer = 

						// 		    },
						};
    //  Execute the run function.
    $('#startQuiz').on('click', function () {
    	triviaStatus.startTimer();
    	$(this).hide();
    	$('#question').html(content.questions.one);
    	//$('#answers').html('<form onSubmit="triviaStatus.captureForm()">' + content.possibleAnswers.one + '<input type="submit" value="Submit">' + '</form>');
    	$('#answers').html('<form id=answerOptions>' + content.possibleAnswers.one + '</form');
	});
	$(document).on('change', 'input[type=radio][name=answers]', function(){

			if ('input[type="radio"][name=answers]:checked') {
				content.playerAnswers.one = $('input[type=radio][name=answers]:checked').attr('id');
				if( content.playerAnswers.one == content.correctAnswers.one) {
					console.log('you are correct');
					numberCorrect++
				}
				else {
					console.log('you are wrong')
				}

			console.log($('input[type=radio][name=answers]:checked'));
		}
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