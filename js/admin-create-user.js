const API_URL = 'http://localhost:8080';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('create-user-form');
    const message = document.getElementById('message');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const role = document.getElementById('role').value;

        message.textContent = '';

        if (!username || !email || !role) {
            message.textContent = 'All fields are required!';
            message.classList.add('text-danger');
            return;
        }

        try {
            const response = await fetch(`${API_URL}/users/createuser`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, role })
            });

            if (response.ok) {
                const result = await response.json();
                message.textContent = `User ${result.username} created successfully!`;
                message.classList.remove('text-danger');
                message.classList.add('text-success');

                form.reset();
            } else {
                const error = await response.json();
                message.textContent = `Error: ${error.message}`;
                message.classList.add('text-danger');
                message.classList.remove('text-success');  
                      }
        } catch (err) {
            console.error('Error creating user:', err);
            message.textContent = 'An error occurred. Please try again.';
            message.classList.add('text-danger');
            message.classList.remove('text-success');
            form.reset();
        }
    });
});
