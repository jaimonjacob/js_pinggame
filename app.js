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

document.querySelector(".btn-roll").addEventListener("click", function (){
	if (gamePlaying) {
		//Assign a random number to dice
		var dice = Math.floor(Math.random() * 6) + 1;
		//Display the result
		var diceDOM = document.querySelector(".dice");//assigning the selection to a variable to remove duplications of code
		diceDOM.style.display = "block"; //display dice
		diceDOM.src = "dice-" + dice +  ".png"; //display the correct png file with the dice

		//Add the round score if dice is not 1 and update UI

		if (dice !== 1 ){
			//add scoree
			roundScore += dice;
			document.querySelector("#current-" + activePlayer).textContent = roundScore;
		} else {

			nextPlayer();

		}
		}

});

document.querySelector(".btn-hold").addEventListener("click", function () {
	//Add current score to global score
	if (gamePlaying) {
		score[activePlayer] += roundScore;
		// Update the UI

		document.querySelector("#score-" + activePlayer).textContent = score[activePlayer];


		//Check if player one the game

		if (score[activePlayer] >= 20){
			document.querySelector("#name-" + activePlayer).textContent = "Winner!";
			document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
			document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
			document.querySelector(".dice").style.display = "none";
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

	document.querySelector(".dice").style.display = "none";
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
	document.querySelector(".dice").style.display = "none";
	document.querySelector("#name-0").textContent = "Player 1";
	document.querySelector("#name-1").textContent = "Player 2";
	document.querySelector(".player-0-panel").classList.remove("winner");
	document.querySelector(".player-1-panel").classList.remove("winner");
	document.querySelector(".player-0-panel").classList.remove("active");
	document.querySelector(".player-1-panel").classList.remove("active");
	document.querySelector(".player-0-panel").classList.add("active");

}