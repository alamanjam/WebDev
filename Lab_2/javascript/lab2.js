var score = 0;
var state;
var questions = 10;
function getBorderStates()
{
    var borderstates =  states.usa[state];
    var answer = document.getElementById("user_input").value.split(", ");
    if(borderstates.sort().compare(answer.sort()))
    {
     score = score + 100;
     nextQuestion();
     document.getElementById("user_input").value = "";
	} 
	else 
	{
     score = score -100;
    }
    document.getElementById("score").innerHTML = "Score: " + score;
    
}
Array.prototype.compare = function(testArr) {
    if (this.length != testArr.length) return false;
    for (var i = 0; i < testArr.length; i++) {
        if (this[i].compare) { //To test values in nested arrays
            if (!this[i].compare(testArr[i])) return false;
        }
        else if (this[i] !== testArr[i]) return false;
    }
    return true;
}
function getRandomState()
{
	state = Object.keys(states.usa)[parseInt(Math.random() * 50)]
	document.getElementById("state").innerHTML = "Which states border " + state + "?";
	for(var i = 0; i < states.usa[state].length; i++)
	{
		var container = document.getElementById("bstates");
		container.innerHTML += '<div class="states"></div>';
	}
}
function getScore()
{
	return score;
}
function playNewGame()
{
getRandomState();
document.getElementById("newgame").disabled = true;
document.getElementById("submit").disabled = false;
document.getElementById("next").disabled = false ;
document.getElementById("questions").innerHTML = questions + " Questions Left";
}
function nextQuestion()
{
getRandomState();
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