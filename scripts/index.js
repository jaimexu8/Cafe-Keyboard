const typingText = document.querySelector(".typing-text p"),
inputField = document.querySelector(".wrapper .input-field"),
tryAgainButton = document.querySelector(".content button");

document.addEventListener("DOMContentLoaded", () => {
    function loadParagraph() {
        typingText.innerHTML =
        "The future is completely open, and we are writing it moment to moment."
    }
    function initType() { }
    function resetGame() { }

    async function updateQuote() {
        // Fetch a random quote from the Quotable API
        const response = await fetch("http://api.quotable.io/random");
        const data = await response.json();
        if (response.ok) {
            updateQuote.textContent = data.content;
        } else {
            updateQuote.textContent = "An error occurred";
            console.log(data);
        }
    }

    loadParagraph();
    inputField.addEventListener("input", initType);
    tryAgainButton.addEventListener("click", resetGame);
});