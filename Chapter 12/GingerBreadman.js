// Modern Gingerbread Runner Game

class GingerbreadRunner {
    constructor() {
        this.runner = document.getElementById("GingerBreadman");
        this.stopButton = document.getElementById("stopButton");
        this.backButton = document.getElementById("backButton");

        this.speed = 250;
        this.position = 0;
        this.animation = null;
        this.finishLine = 260;

        this.initialize();
    }

    initialize() {
        this.runner.addEventListener("click", () => this.speedUp());
        this.stopButton.addEventListener("click", () => this.stop());

        // Back Button Functionality
        if (this.backButton) {
            this.backButton.addEventListener("click", () => {
                window.history.back();
            });
        }
    }

    speedUp() {
        this.speed = Math.max(20, this.speed - 20);
        console.log(`Current Speed: ${this.speed}ms`);
        this.restartAnimation();
    }

    restartAnimation() {
        clearInterval(this.animation);
        this.animation = setInterval(() => this.move(), this.speed);
    }

    move() {
        this.position += 5;
        this.runner.style.left = `${this.position}px`;

        if (this.position >= this.finishLine) {
            this.finishRace();
        }
    }

    finishRace() {
        clearInterval(this.animation);
        this.runner.classList.add("winner");

        setTimeout(() => {
            alert("🏆 Gingerbread Man Wins!");
        }, 100);
    }

    stop() {
        clearInterval(this.animation);
        console.log("Race paused.");
    }

    reset() {
        clearInterval(this.animation);
        this.position = 0;
        this.speed = 250;
        this.runner.style.left = "0px";
        this.runner.classList.remove("winner");
    }
}

// Initialize Game
document.addEventListener("DOMContentLoaded", () => {
    new GingerbreadRunner();
});