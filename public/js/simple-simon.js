"use strict";

var colorOrder = [],
	inputOrder = [],
	roundNumber = -1,
	index = 0;

// Generate a random number between 1 and 4 then adds it onto the colorOrder array
function randomNumGen(){
	var randomNumber = (Math.floor(Math.random() * 4) + 1).toString();
	colorOrder.push(randomNumber);
	console.log(colorOrder);
}

// Add 1 to the round counter
function addRound(){
	roundNumber++;
	index = 0;
	$(".roundNumber").html(roundNumber + 1);
}



// Calls the checkColor function for each index in the colorOrder array
function increment(){
	setTimeout(function(){
		if (index < colorOrder.length) {
			checkColor(colorOrder[index]);

		}
	}, 800);
}

// Checks which color is at the specified index in the colorOrder array
function checkColor(color){

		if (color == 1) {
			$(".redbox").css("background-color", "#A0291E");	
					
			setTimeout(function(){
				$(".redbox").css("background-color", "#C16C64");
			}, 400);	
		} else if (color == 2) {
			$(".yellowbox").css("background-color", "#D8BC1A");	
					
			setTimeout(function(){
				$(".yellowbox").css("background-color", "#D8C970");
			}, 400);
		} else if (color == 3) {
			$(".bluebox").css("background-color", "#174DC1");	
					
			setTimeout(function(){
				$(".bluebox").css("background-color", "#6884C1");
			}, 400);	
		} else if (color == 4) {
			$(".greenbox").css("background-color", "#1C7715");	

			setTimeout(function(){
				$(".greenbox").css("background-color", "#5F9E5B");
			}, 400);
		}

		index++;

		increment();
};

// Starts the game
function runGame(){
	randomNumGen();
	addRound();
	increment();

}

// Changes the colorOrder and inputOrder into strings that can be compared
function toString(){
	colorOrder = colorOrder.join();
	inputOrder = inputOrder.join();
}

// Converts the string back into an array that can then be modified after each color is added to the sequence
// This needs to be run after each individual round in order to add more items onto each array
function convertString(){
	colorOrder = colorOrder.split(",");
	inputOrder = inputOrder.split(",");
}

// Clears the inputOrder, colorOrder, and roundNumber that way the game can have a full refresh before it runs
$(".startButton").click(function(){
	$(".highScoreNumber").html(roundNumber + 1);
	roundNumber = -1;
	$(".roundNumber").html(roundNumber - roundNumber);
	colorOrder = [];
	inputOrder = [];

	// Fires the function to start the game at the first round
	runGame();
})

$(".title").click(function(){
	runGame();
});

// All four of these buttons are for basic functionality of how each input as added onto the inputOrder array
// The corresponding number to each button is appended onto the inputOrder array
// 1 = Red, 2 = Yellow, etc...
// The default color changes to a darker shade to indicate that the button has been pushed
// After half a second, the button changes back to the lighter shade

$(".redbox").click(function(){

	inputOrder.push("1");
	console.log(inputOrder);

	$(".redbox").css("background-color", "#A0291E");	
		
	setTimeout(function(){
		$(".redbox").css("background-color", "#C16C64");
	}, 500);	
});

$(".yellowbox").click(function(){

	inputOrder.push("2");
	console.log(inputOrder);

	$(".yellowbox").css("background-color", "#D8BC1A");	
		
	setTimeout(function(){
		$(".yellowbox").css("background-color", "#D8C970");
	}, 500);
});

$(".bluebox").click(function(){

	inputOrder.push("3");
	console.log(inputOrder);

	$(".bluebox").css("background-color", "#174DC1");	
		
	setTimeout(function(){
		$(".bluebox").css("background-color", "#6884C1");
	}, 500);
});

$(".greenbox").click(function(){

	inputOrder.push("4");
	console.log(inputOrder);

	$(".greenbox").css("background-color", "#1C7715");	

	setTimeout(function(){
		$(".greenbox").css("background-color", "#5F9E5B");
	}, 500);

});
