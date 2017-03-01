var score = 0;
var state;
var questions = 10;
var borderstates = [];
var bstatesindex = 0; 
var bstates = "";
var bstatesarr;
var statestring = ""
function getBorderStates()
{
    var answer = document.getElementById("user_input").value.trim();
    var index = borderstates.indexOf(answer);
    if(index != -1)
    {
     borderstates.splice(index, 1);
     score = score + 100;
     document.getElementById("help").innerHTML = "Correct!";
     document.getElementById("user_input").value = "";
     bstatesarr = bstates.split(" ");
     for(var i = 0; i < bstatesarr.length; i++)
     { 
         statestring = "[" + answer + "]";
         bstatesarr[bstatesindex] = statestring;
     }
     bstates = bstatesarr.join(" ");
     bstatesindex++;
     document.getElementById("states").innerHTML = bstates;
     if(borderstates.length === 0)
     {
         nextQuestion();
         bstatesindex = 0;
     }
	} 
	else 
	{
	    document.getElementById("help").innerHTML = "Wrong!";
     score = score -100;
    }
    document.getElementById("score").innerHTML = "Score: " + score;
    
}
function getRandomState()
{
	state = Object.keys(states.usa)[parseInt(Math.random() * 50)]
	document.getElementById("state").innerHTML = "Which states border " + state + "?";
	borderstates =  states.usa[state];
	bstates = "";
	for(var i = 0; i < borderstates.length; i++)
	{
	    bstates +="[?] "
	}
	document.getElementById("states").innerHTML = bstates;
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
document.getElementById("score").innerHTML = "Score: " + score;
document.getElementById("help").innerHTML = "";
}
function nextQuestion()
{
getRandomState();
document.getElementById("user_input").value = "";
questions--; 
if(questions !==0)
document.getElementById("questions").innerHTML = questions + " Questions Left";
else
{
document.getElementById("questions").innerHTML = "Game is finished. Click 'New Game' to Start Another Game. ";
document.getElementById("state").innerHTML = "";
document.getElementById("newgame").disabled = false;
document.getElementById("submit").disabled = true;
document.getElementById("next").disabled = true;
questions = 10;
score = 0;
document.getElementById("states").innerHTML = "";
document.getElementById("help").innerHTML = "Enter the abbreviation of the state one at a time. Type 'None' if the state has no borders. Good Luck!";
}
}