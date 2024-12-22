const apiUrl = 'http://localhost:8080';

document.addEventListener('DOMContentLoaded', () => {
    populateTaskDropdown();
    document.getElementById('update-task-form').addEventListener('submit', handleTaskUpdate);
});

async function populateTaskDropdown() {
    try {
        const email = localStorage.getItem('email');
        const userResponse = await fetch(`${apiUrl}/users/getuserbyemail/${email}`);
        const userData = await userResponse.json();
        const userId = userData.message;
        const response = await fetch(`${apiUrl}/tasks/getalltaskbyuserid/${userId}`);
        const tasks = await response.json();

        const taskSelect = document.getElementById('task-select');
        tasks.forEach(task => {
            const option = document.createElement('option');
            option.value = task.id;
            option.textContent = `${task.title} - ${task.status}`; 
            taskSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Error populating tasks:', error);
    }
}

async function handleTaskUpdate(event) {
    event.preventDefault();

    const taskId = document.getElementById('task-select').value;
    // console.log(document.getElementById('task-select'));
    const newStatus = document.getElementById('task-status').value;

    try {
        const response = await fetch(`${apiUrl}/tasks/updatetaskbyuser`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: taskId, status: newStatus }),
        });

        const messageElement = document.getElementById('update-task-message');
        if (response.ok) {
            messageElement.textContent = 'Task updated successfully!';
            messageElement.classList.remove('text-danger');
            messageElement.classList.add('text-success');
        } else {
            const errorData = await response.json();
            messageElement.textContent = errorData.error || 'Failed to update task!';
            messageElement.classList.remove('text-success');
            messageElement.classList.add('text-danger');
        }
    } catch (error) {
        console.error('Error updating task:', error);
        const messageElement = document.getElementById('update-task-message');
        messageElement.textContent = 'An error occurred while updating the task!';
        messageElement.classList.remove('text-success');
        messageElement.classList.add('text-danger');
    }
    }
    document.getElementById('back-btn').addEventListener('click', () => {
        window.location.href = 'user.html'; 
    });
