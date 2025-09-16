// Sign up form validation
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('signup-name').value;
            const email = document.getElementById('signup-email').value;
            const college = document.getElementById('signup-college').value;
            const branch = document.getElementById('signup-branch').value;
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('signup-confirm').value;
            const terms = document.getElementById('terms').checked;
            
            // Validation flags
            let isValid = true;
            let errorMessage = '';
            
            // Validate name
            if (!name) {
                isValid = false;
                errorMessage = 'Please enter your full name';
            }
            // Validate email
            else if (!email) {
                isValid = false;
                errorMessage = 'Please enter your email address';
            }
            // Validate college
            else if (!college) {
                isValid = false;
                errorMessage = 'Please enter your college name';
            }
            // Validate branch
            else if (!branch) {
                isValid = false;
                errorMessage = 'Please select your field of study';
            }
            // Validate password
            else if (!password) {
                isValid = false;
                errorMessage = 'Please create a password';
            }
            else if (password.length < 8) {
                isValid = false;
                errorMessage = 'Password must be at least 8 characters';
            }
            // Validate confirm password
            else if (password !== confirmPassword) {
                isValid = false;
                errorMessage = 'Passwords do not match';
            }
            // Validate terms
            else if (!terms) {
                isValid = false;
                errorMessage = 'Please agree to the Terms & Conditions';
            }
            
            if (isValid) {
                // Simulate sign up process
                alert('Account created successfully! Redirecting to login...');
                // Redirect to login page after successful signup
                window.location.href = 'login.html';
            } else {
                alert(errorMessage);
            }
        });
    }
    
    // Password strength indicator (optional enhancement)
    const passwordInput = document.getElementById('signup-password');
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            const password = this.value;
            const strengthIndicator = document.getElementById('password-strength') || createStrengthIndicator();
            
            let strength = 0;
            let message = '';
            
            if (password.length >= 8) strength++;
            if (password.match(/[a-z]+/)) strength++;
            if (password.match(/[A-Z]+/)) strength++;
            if (password.match(/[0-9]+/)) strength++;
            if (password.match(/[!@#$%^&*(),.?":{}|<>]+/)) strength++;
            
            switch(strength) {
                case 0:
                case 1:
                    message = 'Weak';
                    strengthIndicator.style.color = '#e74c3c';
                    break;
                case 2:
                case 3:
                    message = 'Medium';
                    strengthIndicator.style.color = '#f39c12';
                    break;
                case 4:
                case 5:
                    message = 'Strong';
                    strengthIndicator.style.color = '#2ecc71';
                    break;
            }
            
            strengthIndicator.textContent = `Password strength: ${message}`;
        });
        
        function createStrengthIndicator() {
            const indicator = document.createElement('small');
            indicator.id = 'password-strength';
            indicator.className = 'form-text';
            passwordInput.parentNode.appendChild(indicator);
            return indicator;
        }
    }
});