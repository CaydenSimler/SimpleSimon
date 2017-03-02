"use strict";

var colorOrder = [],
	inputOrder = [],
	roundNumber,
	randomNumber;


function randomNumGen(){
	randomNumber = (Math.floor(Math.random() * 4) + 1).toString();
	
	colorOrder.push(randomNumber);
	console.log(colorOrder);
	
	if (randomNumber == 1) {
		$(".redbox").css("background-color", "#A0291E");	
		
		setTimeout(function(){
			$(".redbox").css("background-color", "#C16C64");
		}, 500);	
	} else if (randomNumber == 2) {
		$(".yellowbox").css("background-color", "#D8BC1A");	
		
		setTimeout(function(){
			$(".yellowbox").css("background-color", "#D8C970");
		}, 500);
	} else if (randomNumber == 3) {
		$(".bluebox").css("background-color", "#174DC1");	
		
		setTimeout(function(){
			$(".bluebox").css("background-color", "#6884C1");
		}, 500);	
	} else {
		$(".greenbox").css("background-color", "#1C7715");	

		setTimeout(function(){
			$(".greenbox").css("background-color", "#5F9E5B");
		}, 500);
	}
}

function convertString(){
	colorOrder = colorOrder.split(",");
	inputOrder = inputOrder.split(",");

	console.log(colorOrder);
	console.log(inputOrder);
}

function runRound(){
	randomNumGen()

	colorOrder = colorOrder.join();
	inputOrder = inputOrder.join()
	console.log(colorOrder);
	console.log(inputOrder);

	if (inputOrder == colorOrder) {
		console.log("success");
	} else {
		console.log("fail");
	}

	convertString();
}

$(".title").click(function(){
	runRound()
})

// After each round:
// 	colorOrder has to be split into a string
// 	convert colorOrder into a string that can be compared using .join()
// 	colorOrder and inputOrder have to be compared as strings because they don't evaluate to true as an array

// 	after they are compared and evaluate to true, colorOrder has to be converted back into an array using .split(",") 
// 	that way more values can be added onto the array


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
