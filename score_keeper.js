var playerOne = document.querySelector("#player1");
var playerTwo = document.querySelector("#player2");
var reset = document.querySelector("#reset");
var score1 = document.querySelector("#score1");
var score2 = document.querySelector("#score2");
var highestScore = document.querySelector("#highest_Score");
var maxScore = document.querySelector("#max_Score");
var highest = 5;
var first_score = 0;
var second_score = 0;
var game_over = false;
 

 function updateGame(xscore, scorex)	{
 	if(!game_over)	{
		xscore++;
	
	if (xscore === highest)	{
			scorex.classList.add("winner");
			game_over = true;
		}
		scorex.textContent = xscore;
		
	}
 }

playerOne.addEventListener("click", function()	{
	if(!game_over)	{
		first_score++;
	
	if (first_score === highest)	{
			score1.classList.add("winner");
			game_over = true;
		}
		score1.textContent = first_score;
		
	}

});

playerTwo.addEventListener("click", function()	{
	if(!game_over)	{
		second_score++;
	
	if (second_score === highest)	{
		score2.classList.add("winner");
		game_over = true;
	}
	score2.textContent = second_score;
}
	
});

reset.addEventListener("click",function()	{
	resetGame();
});

highestScore.addEventListener("change", function()	{
	resetGame();
});

function resetGame()	{
	first_score = 0;
	second_score = 0;
	score1.textContent = 0;
	score2.textContent = 0;
	score1.classList.remove("winner");
	score2.classList.remove("winner");
	maxScore.textContent = highestScore.value;
	highest = Number(highestScore.value);
	game_over = false;
}