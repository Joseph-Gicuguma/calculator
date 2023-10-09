let displayValue = '';

function appendToDisplay(value) {
    // Append the clicked value to the display
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    // Clear the display
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        // Use the JavaScript eval() function to evaluate the expression
        displayValue = eval(displayValue);

        // Display the result in the input field
        document.getElementById('display').value = displayValue;
    } catch (error) {
        // Handle errors (e.g., division by zero)
        displayValue = '';
        document.getElementById('display').value = 'Error';
    }
}
