$("document").ready(function(){

	"use strict";

	var colorOrder = [],
		inputOrder = [],
		roundNumber = -1,
		inputSequence = 0,
		index = 0;

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// Clears the inputOrder, colorOrder, and roundNumber that way the game can have a full refresh before it runs
	// and then runs the round function to start the game at the beginning
	//////////////////////////////////////////////////////////////////////
	$(".start").click(function(){
		colorOrder = [];
		inputOrder = [];
		roundNumber = -1;
		$(".roundNumber").html(1);
		$(".start").html("");
		round();
	});

	////////////////////////////////////////////////////////////////////////////////////////////////////////
	// Runs the next round by adding on a new color to colorOrder, adds a round to the counter, and runs the
	// increment command in order to display each color in order of its index in the array
	//////////////////////////////////////////////////////////////////////////////////////
	function round(){
		randomNumGen();
		addRound();
		increment();
	}

	////////////////////////////////////////////////////////////////////////////////////////////////////
	// Generate a random number between 1 and 4 then adds it onto the colorOrder array when the function
	// is called
	////////////
	function randomNumGen(){
		var randomNumber = (Math.floor(Math.random() * 4) + 1).toString();
		colorOrder.push(randomNumber);
	}

	////////////////////////////////////////////////////////////////////////////////////////////////////
	// Add 1 to the round counter and sets the index for the increment function back to zero in order to
	// display the colors in the colorOrder array from the start
	////////////////////////////////////////////////////////////
	function addRound(){
		roundNumber++;
		index = 0;
		$(".roundNumber").html(roundNumber + 1);
	}

	///////////////////////////////////////////////////////////////////////
	// Calls the checkColor function for each index in the colorOrder array
	///////////////////////////////////////////////////////////////////////
	function increment(){
		setTimeout(function(){
			if (index < colorOrder.length){
				checkColor(colorOrder[index]);

			}
		}, 800);
	}

	///////////////////////////////////////////////////////////////////////
	// Checks which color is at the specified index in the colorOrder array
	///////////////////////////////////////////////////////////////////////
	function checkColor(color){

		if (color == 1) {
			redFlash();
		} else if (color == 2) {
			yellowFlash();
		} else if (color == 3) {
			blueFlash();
		} else if (color == 4) {
			greenFlash();
		}

		index++;
		increment();
	};

	///////////////////////////////////////////////////////////////////
	// Compares the length of inputOrder and colorOrder
	///////////////////////////////////////////////////////////////////
	function checkLength(){
		if (inputOrder.length == colorOrder.length){
			toString();
			checkOrder();
		} else {
			inputSequence++
		}
	}

	///////////////////////////////////////////////////////
	// Compares the order of both inputOrder and colorOrder
	///////////////////////////////////////////////////////
	function checkOrder(){
		if (colorOrder == inputOrder){
			toArray();

			inputSequence = 0;
			inputOrder = [];
			setTimeout(function(){
				round();	
			}, 500);

		} else {
			gameFail();
		}
		
	}

	//////////////////////////////////////////////////////////////////////////
	// Changes the colorOrder and inputOrder into strings that can be compared
	//////////////////////////////////////////////////////////////////////////
	function toString(){
		colorOrder = colorOrder.join();
		inputOrder = inputOrder.join();
	}

	/////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// Converts the string back into an array that can then be modified after each color is added to the sequence
	// This needs to be run after each individual round in order to add more items onto each array
	//////////////////////////////////////////////////////////////////////////////////////////////
	function toArray(){
		colorOrder = colorOrder.split(",");
		inputOrder = inputOrder.split(",");
	}

	/////////////////////////////////////////////////////////////////////////////
	// A fail function that runs when the inputOrder doesn't equal the colorOrder
	/////////////////////////////////////////////////////////////////////////////
	function gameFail(){
		$(".highScoreNumber").html(roundNumber + 1);
		roundNumber = -1;
		$(".roundNumber").html(roundNumber - roundNumber);

		colorOrder = [];
		inputOrder = [];

		////////////////////////////////////////////////////////////////////////////////////////
		// Flashes the color that was the incorrect input then flashes all the colors five times
		////////////////////////////////////////////////////////////////////////////////////////
		var i = 0, 
	    interval = setInterval(function(){
	        setTimeout(function(){
	        	flashAll();	
	        }, 200)

	        i++;
	        if(i >= 5) clearInterval(interval);
	    }, 250);

	    animateMiddle();

	    setTimeout(function(){
	    	$(".start").html("play");
	    }, 1750);
	}

	//////////////////////////////////////////////////
	// Animates the middle button with flashing colors
	//////////////////////////////////////////////////
	function animateMiddle(){
		$(".startButton").animate({
			backgroundColor: "#C16C64",
			borderColor: "#363638"
		}, 350).animate({
			backgroundColor: "#D8C970",
			borderColor: "#363638"
		}, 350).animate({
			backgroundColor: "#6884C1",
			borderColor: "#363638"
		}, 350).animate({
			backgroundColor: "#5F9E5B",
			borderColor: "#363638"
		}, 350).animate({
			backgroundColor: "#363638",
			borderTopColor: "#5F9E5B",
			borderBottomColor: "#C16C64",
			borderLeftColor: "#6884C1",
			borderRightColor: "#D8C970"
		}, 350);
	}

	/////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// All four of these buttons are for basic functionality of how each input as added onto the inputOrder array
	// The corresponding number to each button is appended onto the inputOrder array
	// 1 = Red, 2 = Yellow, 3 = Blue, 4 = Green
	///////////////////////////////////////////
	$(".redbox").click(function(){
		inputOrder.push("1");
		checkLength();

		redFlash();	
	});

	$(".yellowbox").click(function(){
		inputOrder.push("2");
		checkLength();

		yellowFlash();
	});

	$(".bluebox").click(function(){
		inputOrder.push("3");
		checkLength();

		blueFlash();
	});

	$(".greenbox").click(function(){
		inputOrder.push("4");
		checkLength();

		greenFlash();
	});

	///////////////////////////////////////////////////////////////////////////////////////////////////////////
	// When each button is clicked, the individual function is fired. For example, if the red button is clicked
	// the redFlash function will fire
	//////////////////////////////////
	function redFlash(){
		$(".redbox").css("background-color", "#A0291E");
						
		setTimeout(function(){
			$(".redbox").css("background-color", "#C16C64");
		}, 400);
	}

	function yellowFlash(){
		$(".yellowbox").css("background-color", "#D8BC1A");	
						
		setTimeout(function(){
			$(".yellowbox").css("background-color", "#D8C970");
		}, 400);
	}

	function blueFlash(){
		$(".bluebox").css("background-color", "#174DC1");	
						
		setTimeout(function(){
			$(".bluebox").css("background-color", "#6884C1");
		}, 400);
	}

	function greenFlash(){
		$(".greenbox").css("background-color", "#1C7715");	

		setTimeout(function(){
			$(".greenbox").css("background-color", "#5F9E5B");
		}, 400);
	}

	//////////////////////////////////
	// Flashes all the colors together
	//////////////////////////////////
	function flashAll(){
		redFlash();
		yellowFlash();
		blueFlash();
		greenFlash();
	}

});