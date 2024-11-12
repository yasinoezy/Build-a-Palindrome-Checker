// Function to check if the input is a palindrome
function checkPalindrome() {
    const textInput = document.getElementById("text-input").value;
    const resultElement = document.getElementById("result");

    // Check if the input is empty
    if (!textInput) {
        alert("Please input a value");
        return;
    }

    // Normalize the input by removing non-alphanumeric characters and converting to lowercase
    const normalizedInput = textInput
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '');

    // Check if the normalized input is equal to its reverse
    if (normalizedInput === normalizedInput.split('').reverse().join('')) {
        resultElement.textContent = `${textInput} is a palindrome`;
    } else {
        resultElement.textContent = `${textInput} is not a palindrome`;
    }
}

// Event listener for the button click
document.getElementById("check-btn").addEventListener("click", checkPalindrome);
