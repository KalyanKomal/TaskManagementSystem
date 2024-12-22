const API_URL = 'http://localhost:8080';

document.getElementById('update-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const oldPassword = document.getElementById('oldpassword').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    const errorMessageElement = document.getElementById('error-message');

    errorMessageElement.textContent = '';

    if (newPassword !== confirmPassword) {
        errorMessageElement.textContent = 'New password and confirm password do not match.';
        return;
    }

    const email = localStorage.getItem('email');
    if (!email) {
        errorMessageElement.textContent = 'User email not found. Please log in again.';
        return;
    }

    const updateData = {
        email: email,
        oldpassword: oldPassword,
        newpassword: newPassword,
    };

    try {
        const response = await fetch(`${API_URL}/users/updatebyuser`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateData),
        });

        const result = await response.json();
console.log(result);
        if (response.ok) {
            alert('Password updated successfully.');
            window.location.href = 'user.html';
        } else {
            errorMessageElement.textContent = result.error || 'Failed to update password. Please try again.';
        }
    } catch (error) {
        console.error('Error updating password:', error);
        errorMessageElement.textContent = 'An error occurred. Please try again later.';
    }
});
