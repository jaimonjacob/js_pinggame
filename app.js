/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//Steph 1 : Create fundamental game variables, generate random number, manipulate DOM, read from dom, change CSS styles

var score, globalScore, activePlayer, dice;
score = [0.0];
globalScore = 0;
activePlayer = 0;
dice =  Math.floor(Math.random() * 6) + 1;

//document.querySelector("#current-0").innerHTML = "<em>" + dice + "</em>"//change HTML content of the selected ID 
document.querySelector("#current-" + activePlayer).textContent = dice; //change the text content of the selected ID "current score"//Setting
var x = document.querySelector("#score-" + activePlayer).textContent;//Getting
document.querySelector(".dice").style.display = "none";//change the css style of the selected class "dice"

/*Step 2 - Set up an event handler, learn about callback and anonmmous funcitons, learn another way to select elements by ID, and change the image in an img -element*/

