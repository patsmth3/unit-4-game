    var crystalBlue = 0;
	var crystalRed = 0;
	var crystalPurple = 0;
	var crystalWhite = 0;
	var gamePoints = 0;
	var randomTargetNbr = 0;
	var gameOver = true;
	var nbrWins = 0 ;
	var nbrLosses = 0;
	

    // JavaScript function that wraps everything
    
	$(document).ready(function() {
	

		function resetGame(){
            
        //Use a combination of Math.floor, Math.random, and the modulus
		//function to end up with a random integer between 19 and 120:
		//randomTargetNbr =   (Math.floor(0.001 * 1000) % 102) + 19;
		//randomTargetNbr =   (Math.floor(0.713 * 1000) % 102) + 19;
        //randomTargetNbr =   (Math.floor(0.714 * 1000) % 102) + 19;
            
			randomTargetNbr =   (Math.floor(Math.random() * 1000) % 102) + 19;
			$("#randomNumber").text(String(randomTargetNbr));
	

        //Generate random integers between 1 and 12 for each of the crystals
            
			crystalBlue = (Math.floor(Math.random() * 1000) % 12) + 1;
			crystalRed = (Math.floor(Math.random() * 1000) % 12) + 1;
			crystalPurple = (Math.floor(Math.random() * 1000) % 12) + 1;
			crystalWhite = (Math.floor(Math.random() * 1000) % 12) + 1;
			
        //Reinitialize the single game values
            
			$("#crystalTotal").text(String(0));
			gamePoints = 0;
			gameOver = false;
		};
	

		//After each click on a crystal, check the score to see if a Win or Loss
        //has occured. If so, increment the appropriate counter and reset the game.
        
		function checkScore(){
			if (gamePoints > randomTargetNbr) {
				nbrLosses++;
				$("#gameCounters").html("<p>You lose!</p><p>Wins: " + nbrWins + "</p><p>Losses: " + nbrLosses + "<p>");
				gameOver = true;
				resetGame();
			} else if (gamePoints === randomTargetNbr){
				nbrWins++;
				$("#gameCounters").html("<p>You win!</p><p>Wins: " + nbrWins + "</p><p>Losses: " + nbrLosses + "<p>");
				gameOver = true;
				resetGame();
			};
		};
	

        //If the page has just been opened, initialize the game by calling resetGame();
        
		if (gameOver === true){
			resetGame();
		}
	

        //Blue Gem Button 
        
			$("#buttonBlue").click (function() {
			gamePoints = gamePoints + crystalBlue;
			$("#crystalTotal").text(String(gamePoints));
			checkScore();
            });
            
        //Red Gem Button
        
			$("#buttonRed").click (function() {
			gamePoints = gamePoints + crystalRed;
			$("#crystalTotal").text(String(gamePoints));
			checkScore();
            });
            
        //Purple Gem Button
        
			$("#buttonPurple").click (function() {
			gamePoints = gamePoints + crystalPurple;
			$("#crystalTotal").text(String(gamePoints));
			checkScore();
            });
            
        //White Gem Button
        
			$("#buttonWhite").click (function() {
			gamePoints = gamePoints + crystalWhite;
			$("#crystalTotal").text(String(gamePoints));
			checkScore();
			});
	});
