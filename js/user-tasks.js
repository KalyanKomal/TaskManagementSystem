const apiUrl = 'http://localhost:8080'; 

document.getElementById('back-btn').addEventListener('click', () => {
    window.location.href = 'user.html'; 
});

fetchUserAndTasks();

async function fetchUserAndTasks() {
    try {
        
        const email = localStorage.getItem('email'); 
        if (!email) {
            displayErrorMessage('User email not found. Please log in again.');
            return;
        }

        const userResponse = await fetch(`${apiUrl}/users/getuserbyemail/${email}`);
        if (!userResponse.ok) {
            throw new Error('Failed to fetch user ID');
        }

        const userData = await userResponse.json();
        console.log(userData);
        const userId = userData.message; 

        fetchTasks(userId);
    } catch (error) {
        console.error('Error fetching user ID:', error);
        displayErrorMessage('Error fetching user information. Please try again later.');
    }
}

async function fetchTasks(userId) {
    try {
        const response = await fetch(`${apiUrl}/tasks/getalltaskbyuserid/${userId}`);
        const tasks = await response.json();
console.log(userId);
        const taskListContainer = document.getElementById('task-list');
        taskListContainer.innerHTML = '';

        if (tasks.length === 0) {
            taskListContainer.innerHTML = `<p class="text-muted">No tasks available.</p>`;
            return;
        }

        tasks.forEach(task => {
            const taskItem = document.createElement('div');
            taskItem.className = 'list-group-item';

            taskItem.innerHTML = `
                <div>
                    <h5>${task.title}</h5>
                    <p>Status: <strong>${task.status}</strong></p>
                    <p>Due Date: ${new Date(task.dueDate).toLocaleDateString()}</p>
                </div>
            `;
            taskListContainer.appendChild(taskItem);
        });
    } catch (error) {
        console.error('Error fetching tasks:', error);
        const taskListContainer = document.getElementById('task-list');
        taskListContainer.innerHTML = `<p class="text-danger">Error fetching tasks. Please try again later.</p>`;
    }
}
function displayErrorMessage(message) {
    const taskListContainer = document.getElementById('task-list');
    taskListContainer.innerHTML = `<p class="text-danger">${message}</p>`;
}
