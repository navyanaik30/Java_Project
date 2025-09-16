script.js


// Simple JavaScript for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Login form validation
    const loginForm = document.querySelector('.auth-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (email && password) {
                // Simulate login process
                alert('Login successful! Redirecting to dashboard...');
                window.location.href = 'index.html';
            } else {
                alert('Please fill in all fields');
            }
        });
    }
    
    // Add more interactive functionality as needed for other pages
});