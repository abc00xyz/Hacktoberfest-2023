// Function to redirect to the homepage after a delay
function redirectToHomepage() {
    setTimeout(function() {
        window.location.href = 'homepage.html'; // Replace 'homepage.html' with your actual homepage URL
    }, 5000); // Adjust the delay time (in milliseconds) as needed, e.g., 5000 milliseconds (5 seconds)
}

// Call the function when the document is ready
document.addEventListener('DOMContentLoaded', function() {
    redirectToHomepage();
});
