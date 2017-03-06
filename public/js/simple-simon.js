"use strict";

var colorOrder = [],
	inputOrder = [],
	roundNumber,
	randomNumber;


function randomNumGen(){
	randomNumber = (Math.floor(Math.random() * 4) + 1).toString();
	
	colorOrder.push(randomNumber);
	console.log(colorOrder);
}

// Converts the string back into an array that can then be modified after each color is added to the sequence
// This needs to be run after each individual round in order to add more items onto each array
function convertString(){
	colorOrder = colorOrder.split(",");
	inputOrder = inputOrder.split(",");

	console.log(colorOrder);
	console.log(inputOrder);
}


// colorOrder = colorOrder.join();
// inputOrder = inputOrder.join();



// Clears the inputOrder and colorOrder that way the game can have a full refresh before it runs
$(".startButton").click(function(){
	console.log("test start");
	colorOrder = [];
	inputOrder = [];
	console.log(colorOrder);
	console.log(inputOrder);
})


// All four of these buttons are for basic functionality of how the buttons work
// The corresponding number to each button is appended onto the inputOrder array
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
