var score = 0;
var state;
function getBorderStates()
{
    var borderstates =  states.usa[state];
    var answer = document.getElementById("user_input").value.split(", ");
    if(array1.sort().compare(array2.sort())) {
     doSomething();
} else {
    doAnotherThing();
    }
    
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
}
function getScore()
{
	return score;
}
getRandomState();