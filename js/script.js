//JS file for HTML
//MADE BY : GUSTAV I.

//function calculateSum()
function calculateSum() {
    const input = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');

    // Reset result div
    resultDiv.innerHTML = '';

    // Validate input
    const number = parseInt(input, 10);
    if (isNaN(number) || number <= 0 || input.includes('.')) {
        resultDiv.innerHTML = '<span class="error">Please enter a valid number bigger than 0 (no decimals).</span>';
        return;
    }

    // Calculate the sum
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum += i;
    }

    // Display the result
    resultDiv.innerHTML = `The sum of numbers from 0 to ${number} is: ${sum}`;
}
