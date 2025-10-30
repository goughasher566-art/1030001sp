document.getElementById('customForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    // Collect form data
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Simple validation
    if (!name || !email || !message) {
        document.getElementById('errorMessage').removeAttribute('hidden');
        document.getElementById('successMessage').setAttribute('hidden', 'hidden');
        return;
    }

    // Validate email format
    if (!validateEmail(email)) {
        document.getElementById('errorMessage').textContent = "Invalid email format!";
        document.getElementById('errorMessage').removeAttribute('hidden');
        return;
    }

    // Simulate form submission (you could replace this part with an actual submission if a backend is available)
    setTimeout(function() {
        document.getElementById('successMessage').removeAttribute('hidden');
        document.getElementById('errorMessage').setAttribute('hidden', 'hidden');
        document.getElementById('customForm').reset(); // Reset form after successful submission
    }, 1000); // Simulating delay
});

// Function to validate email format
function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}