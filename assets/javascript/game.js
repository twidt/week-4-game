// step one going to set my variables
var Wins= 0;
var Losses= 0;
var addition=0;
var total= Math.floor((Math.random() * 100) + 19);

// step two set my crystal gem variables

var amethyst = Math.floor((Math.random() * 12) + 1);
var pearl = Math.floor((Math.random() * 12) + 1);
var peridot = Math.floor((Math.random() * 12) + 1);
var rosequartz = Math.floor((Math.random() * 12) + 1);

// step 3 wins/losses pill buttons updates

var updateAddition = function () {
 		$('.addition').empty();
 		$('.addition').append(addition);

 		$('#Wins').empty();
 		$('#Wins').append(Wins);

 		$('#Losses').empty();
 		$('#Losses').append(Losses);
}

// step 4 the game

var game = function (){
 		if (addition == total) {
 			Wins = Wins + 1;
 			alert("You win!");
 			restart();
 		} else if (addition > total) {
 			Losses = Losses + 1;
 			alert("You lost");
 			restart();
 		} else {
 			updateAddition();
 		}
 	}

 	$('.total').append(total);
 	$('.addition').append(addition);

 	$( document ).ready(function() {
 		$('#amethyst').click(function(){
 			addition = addition + amethyst;
 			game();
 		})

 		$('#pearl').click(function(){
 			addition = addition + pearl;
 			game();
 		})

 		$('#peridot').click(function(){
 			addition = addition + peridot;
 			game();
 		})

 		$('#rosequartz').click(function(){
 			addition = addition + rosequartz;
 			game();
 		})


 // play game again
 var restart = function (){
 			addition = 0;
 			total = Math.floor((Math.random() * 100) + 19);

 			$('.total').empty();
 			$('.total').append(total);

 			var amethyst = Math.floor((Math.random() * 12) + 1);
 			var pearl = Math.floor((Math.random() * 12) + 1);
 			var peridot = Math.floor((Math.random() * 12) + 1);
 			var rosequartz = Math.floor((Math.random() * 12) + 1);
 			updateAddition();
 		}	

});

 	// so I broke this down in steps mainly because I can't figure out why 
 	// this doesn't work. Mood: aggravated
 	// I give up ":D"