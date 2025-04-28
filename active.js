// Simple Quiz Function
function checkAnswer(isCorrect) {
    const result = document.getElementById('quiz-result');
    if (isCorrect) {
        result.textContent = "Correct! 🎯 Great job!";
        result.style.color = "#28a745"; // green
    } else {
        result.textContent = "Oops! ❌ Try again!";
        result.style.color = "#dc3545"; // red
    }
}
