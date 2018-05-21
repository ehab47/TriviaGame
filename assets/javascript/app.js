

function startGame() {
    setTimeout(endGame, 1000 * 3)
    console.log('game started')
}

function endGame() {
   alert('game ended')
}

$('#start').click(startGame)
	// $('#start')
    /*
    	Press start button then:
        	1. Countdown of timer starts from 1 minute (60 seconds)
            	a. Will use settimer function
            2. Load the questions and answers
            	a. Use jquery to load in the questions and answers
        Play the game until timer runs out:
        	a. User will select answers to questions
            b. keep track of correct answers <-- only at the very end
        Determine if win or lose:
        	Check which answers are correct
            Check which questions are unanswered
        	Show the user win or lose message with how many answers correct
        
    */
