const API_URL = 'http://localhost:8080';

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }

    validateAccessRole();
});

async function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (!email || !password) {
        displayErrorMessage('Please fill out all fields.');
        return;
    }

    try {
        const response = await fetch(`${API_URL}/users/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Login successful:', data);

            localStorage.setItem('role', data.role);
            localStorage.setItem('email',email);
            console.log(localStorage.getItem('email'));
            if (data.role === 'Admin') {
                window.location.href = 'admin.html';
            } else {
                window.location.href = 'user.html';
            }
        } else {
            const errorData = await response.json();
            displayErrorMessage(errorData.error || 'Invalid login credentials.');
        }
    } catch (error) {
        console.error('Login error:', error);
        displayErrorMessage('An error occurred while trying to log in. Please try again.');
    }
}

function handleLogout() {
    localStorage.clear();
    window.location.href = 'index.html';
}

function validateAccessRole() {
    const role = localStorage.getItem('role');

    if (window.location.pathname.includes('admin-dashboard.html') && role !== 'Admin') {
        alert('Access denied: Admins only.');
        window.location.href = 'index.html';
    } else if (window.location.pathname.includes('user-dashboard.html') && role !== 'User') {
        alert('Access denied: Users only.');
        window.location.href = 'index.html';
    }
}

function displayErrorMessage(message) {
    const errorElement = document.getElementById('error-message');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}
