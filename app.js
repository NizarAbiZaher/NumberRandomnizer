// Create event listener for when the button is clicked
document.getElementById('button').addEventListener('click', function() {
    // Create a random number between 1 and 100
    const number = Math.floor(Math.random() * 100 + 1)
    // Log the number to the console
    console.log(number)
    // Display the number in the HTML
    document.getElementById('randomNumber').textContent = `Random Number: ${number}`;
})


