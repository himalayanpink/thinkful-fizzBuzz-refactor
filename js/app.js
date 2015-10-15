$(document).ready(function() {

console.log("hello")

var eventHandler = function() {
			var output;
			var newOutputLine;
			// var userInputNumber = document.forms.userInput.userNumber.value;
			var userInputNumber = $("#userNumber").val();

				if (userInputNumber.length == 0)	{
					output = "need a number!";
				}

				else if (userInputNumber % 3 == 0 && userInputNumber % 5 == 0) {
					output = "fizzbuzz";
				}

				else if (userInputNumber % 1 != 0) {
					output = "invalid number";
				}

				else if (userInputNumber % 3 == 0)	{
					output = "fizz";
				}

				else if (userInputNumber % 5 == 0)	{
					output = "buzz";
				}

				else { 
					output = userInputNumber;
				}

			newOutputLine = $("<li>" + output + "</li>");

			console.log("User Input")
			console.log(userInputNumber)			

			$("ol")
				.prepend(newOutputLine);

			$("#userNumber").val('');
};


	$("#number-input-box")
		.on("click", "button", eventHandler)
		.on("keypress", "input", function(e) {
			
			if (e.which == 13) {
				eventHandler();
				return false;				
			}
		})
	;


});


