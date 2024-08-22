let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10)
};

const compareGuesses = (humanGuess, compGuess, target) => {
 const humanDifference = Math.abs(target - humanGuess);
 const compDifference = Math.abs(target - compGuess);

 if (humanDifference <= compDifference) {
    return true;
 } else {
    return false;
 }
};

const updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore + 1;
    }
};

const advanceRound = () => {
    currentRoundNumber += 1;
}