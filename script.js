document.addEventListener('DOMContentLoaded', () => {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    const guessBtn = document.getElementById('guessBtn');
    const resetBtn = document.getElementById('resetBtn');
    const message = document.getElementById('message');
    const userGuess = document.getElementById('userGuess');

    const handleGuess = () => {
        const guess = parseInt(userGuess.value);

        if (isNaN(guess) || guess < 1 || guess > 100) {
            message.textContent = 'Please enter a valid number between 1 and 100!';
            message.style.color = 'red';
        } else if (guess < randomNumber) {
            message.textContent = 'Too low, try again!';
            message.style.color = '#00bfff';
        } else if (guess > randomNumber) {
            message.textContent = 'Too high, try again!';
            message.style.color = '#00bfff';
        } else {
            message.textContent = 'Congratulations, you guessed the right number!';
            message.style.color = '#00ff99';
            guessBtn.disabled = true;
            resetBtn.style.display = 'block';
        }
    };

    const changeButtonColor = () => {
        guessBtn.style.backgroundColor = '#00ff99';
        setTimeout(() => {
            guessBtn.style.backgroundColor = '#00bfff';
        }, 500);
    };

    guessBtn.addEventListener('click', handleGuess);

    userGuess.addEventListener("keypress", (e) => {
        if (e.key === 'Enter') {
            handleGuess();
            changeButtonColor();
        }
    });

    resetBtn.addEventListener('click', () => {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        userGuess.value = '';
        message.textContent = '';
        guessBtn.disabled = false;
        guessBtn.style.backgroundColor = '#00ff99';
        resetBtn.style.display = 'none';
    });
});