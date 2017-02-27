// Initialize the JS file
$(document).ready(function(){

//  Set our timer counter to 20.
var countdownTimer = 20;
//  Variable that will hold our interval ID when we execute the "run" function
var intervalId;

var triviaStatus = {startTimer:function run() {
      								intervalId = setInterval(this.decreaseTimer, 1000);
    								},


    					decreaseTimer:function decrement() {
								      //  Decrease number by one.
								      countdownTimer--;
								      //  Show the number in the #show-number tag.
								      $("#timer").html("<h2>" + countdownTimer + "</h2>");
								      //  Once number hits zero...
								      if (countdownTimer === 0) {
								        //  ...run the stop function.
								        stop();
								        //  Alert the user that time is up.
								        alert("Time Up!");
								      }
								    },

    					stopTimer:function stop() {
								      //  Clears our intervalId
								      //  We just pass the name of the interval
								      //  to the clearInterval function.
								      clearInterval(intervalId);
								    },
						};
    //  Execute the run function.
    triviaStatus.startTimer();












// End Doucment Ready Funtion
});