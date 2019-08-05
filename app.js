/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Set global variables
var score, roundScore, activePlayer, gamePlaying;
init();

//Add a click action to the "Roll dice" button

var lastDice;
document.querySelector(".btn-roll").addEventListener("click", function (){
	if (gamePlaying) {
		//Assign a random number to dice
		var dice1 = Math.floor(Math.random() * 6) + 1;
		var dice2 = Math.floor(Math.random() * 6) + 1;
		//Display the result
		document.querySelector("#dice-1").style.display = "block";
		document.querySelector("#dice-2").style.display = "block";
		document.querySelector("#dice-1").src = "dice-" + dice1 +  ".png";
		document.querySelector("#dice-2").src = "dice-" + dice2 +  ".png";
		if (dice1 !== 1 && dice2 !== 1) {
			roundScore += dice1 + dice2;
			document.getElementById("current-" + activePlayer).textContent = roundScore;
			document.getElementById("current-" + activePlayer).textContent = roundScore;
		} else {
			nextPlayer();
		}

		/*
		//check if the last dice value and the current is 6; remove the score and move to next player if it is.
		if (dice === 6 &&  lastDice === 6) {
			score[activePlayer] = 0;
			document.querySelector("#current-" + activePlayer).textContent = "0";
			nextPlayer();
		} else if (dice !== 1 ){//add scoree
				roundScore += dice;
				document.querySelector("#current-" + activePlayer).textContent = roundScore;
			} else {
				nextPlayer();
			}
			lastDice = dice;
		*/
		}


});

document.querySelector(".btn-hold").addEventListener("click", function () {
	//Add current score to global score
	if (gamePlaying) {
		score[activePlayer] += roundScore;
		// Update the UI

		document.querySelector("#score-" + activePlayer).textContent = score[activePlayer];

		var input = document.querySelector(".final-score").value;
		var winningScore;
		//Undefined, 0, null, or "" coerced to false
		//Anything else is coerced to true

		if (input) {
			winningScore = input;
		} else {
			winningScore = 100;
		}

		//Check if player one the game
		if (score[activePlayer] >= winningScore){
			document.querySelector("#name-" + activePlayer).textContent = "Winner!";
			document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
			document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
			document.querySelector("#dice-1").style.display = "none";
			document.querySelector("#dice-2").style.display = "none";
			gamePlaying = false;

		} else {
			nextPlayer();//if not, change the player
		}

}
} );

function nextPlayer() {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;//terinary operator

	roundScore = 0;

	document.getElementById("current-0").textContent = "0";
	document.getElementById("current-1").textContent = "0";
	document.querySelector(".player-0-panel").classList.toggle("active");
	document.querySelector(".player-1-panel").classList.toggle("active");

	document.querySelector("#dice-1").style.display = "none";
	document.querySelector("#dice-2").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init); //Callback function, the function calls another function, so brackets not required for init

function init() {
	score = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;
	//Change the score to zero in the beginning and hide the dice
	document.getElementById("score-0").textContent = "0";
	document.getElementById("score-1").textContent = "0";
	document.getElementById("current-0").textContent = "0";
	document.getElementById("current-1").textContent = "0";
	document.querySelector("#dice-1").style.display = "none";
	document.querySelector("#dice-2").style.display = "none";
	document.querySelector("#name-0").textContent = "Player 1";
	document.querySelector("#name-1").textContent = "Player 2";
	document.querySelector(".player-0-panel").classList.remove("winner");
	document.querySelector(".player-1-panel").classList.remove("winner");
	document.querySelector(".player-0-panel").classList.remove("active");
	document.querySelector(".player-1-panel").classList.remove("active");
	document.querySelector(".player-0-panel").classList.add("active");

}