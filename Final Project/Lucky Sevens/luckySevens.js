function clearErrors() {
	for (var loopCounter = 0; loopCounter < document.forms["preGame"].elements.length; loopCounter++) {
		if (document.forms["preGame"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
			document.forms["preGame"].elements[loopCounter].parentElement.className = "form-group";
		}
	}
}
function rollDice() {
		return (Math.floor(Math.random()*6)+1)+(Math.floor(Math.random()*6)+1);
}

function playGame() {
	clearErrors();
	var startingBet = document.forms["preGame"]["startingBet"].value;
	if (startingBet == "" || isNaN(startingBet) || startingBet < 0) {
		alert("Please input a positive number");
		document.forms["numberFun"]["startingBet"].parentElement.className = "form-group has-error";
		document.forms["numberFun"]["startingBet"].focus();
		return false;
	}
	var currentMoney = startingBet;
	var runningCount = 0;
	var maxMoney = startingBet;
	var highRoll = 0;
	while (currentMoney > 0) {
		var result = rollDice();
		if (result == 7) {
			currentMoney = currentMoney + 4;
		}
		else {
			currentMoney = currentMoney - 1;
		}
		runningCount++;
		if (maxMoney < currentMoney) {
			maxMoney = currentMoney;
			highRoll = runningCount;
		}
	}
		
	document.getElementById("postGame").style.display = "block";
	document.getElementById("playButton").innerText = "Play Again";
	document.getElementById("resultBet").innerText = "$" + startingBet;
	document.getElementById("resultBroke").innerHTML = runningCount;
	document.getElementById("resultWon").innerHTML = "$" + maxMoney;
	document.getElementById("resultRoll").innerHTML = highRoll;
	return false;
}