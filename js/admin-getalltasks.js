const API_URL = 'http://localhost:8080';
document.addEventListener('DOMContentLoaded', () => {
    fetchAllTasks();

    const refreshButton = document.getElementById('refresh-task-list');
    if (refreshButton) {
        refreshButton.addEventListener('click', fetchAllTasks);
    }
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
   
});
function handleLogout() {
    localStorage.clear();
    window.location.href = 'index.html';
}

async function fetchAllTasks() {
    try {
        const response = await fetch(`${API_URL}/tasks/getalltasks`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            const tasks = await response.json();
            populateTaskList(tasks);
        } else {
            const errorData = await response.json();
            console.error('Failed to fetch tasks:', errorData.message || 'FAILED');
        }
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
}

function populateTaskList(tasks) {
    const taskListElement = document.getElementById('task-list');
    taskListElement.innerHTML = '';

    if (tasks && tasks.length > 0) {
        tasks.forEach(task => {
            const taskRow = `
                <tr>
                    <td>${task.id}</td>
                    <td>${task.title}</td>
                    <td>${task.status}</td>
                    <td>${task.assignedTo.join(', ')}</td>
                    <td>${task.createdBy}</td>
                    <td>${new Date(task.dueDate).toLocaleString()}</td>
                </tr>
            `;
            taskListElement.innerHTML += taskRow;
        });
    } else {
        taskListElement.innerHTML = '<tr><td colspan="6">No tasks found</td></tr>';
    }
}
