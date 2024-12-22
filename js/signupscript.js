const API_URL = 'http://localhost:8080';

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
});

async function handleSignup(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (!email || !password || !confirmPassword) {
        displayErrorMessage('Please fill out all fields.');
        return;
    }

    if (password !== confirmPassword) {
        displayErrorMessage('Passwords do not match.');
        return;
    }

    try {
        const response = await fetch(`${API_URL}/users/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Sign-up successful:', data);

            alert('Sign-up successful! Please log in.');
            window.location.href = 'index.html';
        } else {
            const errorData = await response.json();
            displayErrorMessage(errorData.error);
        }
    } catch (error) {
        console.error('Sign-up error:', error);
        displayErrorMessage('An error occurred while trying to sign up. Please try again.');
    }
}

function displayErrorMessage(message) {
    const errorElement = document.getElementById('error-message');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

