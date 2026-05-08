// Modern Number Guessing Game

document.addEventListener("DOMContentLoaded", () => {
    // Back Button Functionality
    const backButton = document.getElementById("backButton");

    if (backButton) {
        backButton.addEventListener("click", () => {
            window.history.back();
        });
    }

    startGame();
});

/**
 * Prompt user for a valid guess
 */
function getGuess() {
    const input = prompt("🎯 Guess the secret number (1-20):");

    if (input === null) {
        return null;
    }

    const guess = Number(input);

    if (isNaN(guess) || guess < 1 || guess > 20) {
        alert("⚠️ Please enter a valid number between 1 and 20.");
        return getGuess();
    }

    return guess;
}

/**
 * Main game logic
 */
function startGame() {
    const secret = Math.floor(Math.random() * 20) + 1;
    let attempts = 0;
    let guess = getGuess();

    while (guess !== null && guess !== secret) {
        attempts++;

        if (guess < secret) {
            alert("📉 Too low! Try again.");
        } else {
            alert("📈 Too high! Try again.");
        }

        guess = getGuess();
    }

    if (guess === null) {
        alert("👋 Game cancelled. See you next time!");
        return;
    }

    attempts++;

    alert(
        `🎉 Congratulations! You guessed the secret number ${secret} in ${attempts} attempt${attempts > 1 ? "s" : ""}.`
    );
}