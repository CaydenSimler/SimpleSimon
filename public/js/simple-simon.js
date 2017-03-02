"use strict";

var colorOrder = [],
	inputOrder = [],
	roundNumber = [],
	randomNumber = [];


function randomNumGen(){
	randomNumber = Math.floor(Math.random() * 4) + 1;
	
	colorOrder.push(randomNumber);
	console.log(colorOrder);
}

for (var i = 0; i <=5; i++) {
	randomNumGen();
}

$(".greenbox").click(function(){
	$(".greenbox").css("background-color", "#1C7715");	

	setTimeout(function(){
		$(".greenbox").css("background-color", "#5F9E5B");
	}, 500);
});

$(".redbox").click(function(){
	$(".redbox").css("background-color", "#A0291E");	
	
	setTimeout(function(){
		$(".redbox").css("background-color", "#C16C64");
	}, 500);
});

$(".yellowbox").click(function(){
	$(".yellowbox").css("background-color", "#D8BC1A");	
	
	setTimeout(function(){
		$(".yellowbox").css("background-color", "#D8C970");
	}, 500);
});

$(".bluebox").click(function(){
	$(".bluebox").css("background-color", "#174DC1");	
	
	setTimeout(function(){
		$(".bluebox").css("background-color", "#6884C1");
	}, 500);
});
