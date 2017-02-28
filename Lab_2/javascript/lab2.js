var score = 0;
var state;
var questions = 10;
var borderstates = [];
function getBorderStates()
{
    var answer = document.getElementById("user_input").value.trim();
    var snowshal = borderstates.indexOf(answer);
    if(snowshal != -1)
    {
     borderstates.splice(snowshal, 1);
     score = score + 100;
     document.getElementById("user_input").value = "";
     if(borderstates.length === 0)
     {
         nextQuestion();
     }
	} 
	else 
	{
     score = score -100;
    }
    document.getElementById("score").innerHTML = "Score: " + score;
    
}
function getRandomState()
{
	state = Object.keys(states.usa)[parseInt(Math.random() * 50)]
	document.getElementById("state").innerHTML = "Which states border " + state + "?";
	borderstates =  states.usa[state];
}
function getScore()
{
	return score;
}
function playNewGame()
{
getRandomState();
document.getElementById("user_input").value = "";
document.getElementById("newgame").disabled = true;
document.getElementById("submit").disabled = false;
document.getElementById("next").disabled = false ;
document.getElementById("questions").innerHTML = questions + " Questions Left";
}
function nextQuestion()
{
getRandomState();
document.getElementById("user_input").value = "";
questions--; 
if(questions != 0)
document.getElementById("questions").innerHTML = questions + " Questions Left";
else
{
document.getElementById("questions").innerHTML = "Game is finished. Click 'New Game' to Start Another Game. ";
document.getElementById("state").innerHTML = "";
document.getElementById("newgame").disabled = false;
document.getElementById("submit").disabled = true;
document.getElementById("next").disabled = true;
questions = 10;
}
}