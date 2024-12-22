const API_URL = 'http://localhost:8080';


document.addEventListener('DOMContentLoaded', () => {
    fetchUsers();
    document.getElementById('create-task-form').addEventListener('submit', createTask);
    const createdByInput = document.getElementById("createdBy");
    createdByInput.value=localStorage.getItem('email');
    console.log(localStorage.getItem('email'));
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }

});
function handleLogout() {
    localStorage.clear();
    window.location.href = 'index.html';
}

async function fetchUsers() {
    try {
       const response = await fetch(`${API_URL}/users/getusersdropdown`); 
        const users = await response.json();
console.log(users);
        const assignedToSelect = document.getElementById('assignedTo');
        users.forEach(user => {
            const input = document.createElement("input");
            input.type = "checkbox";
            input.id = user.id;
            input.value = user.username;
            input.dataset.email=user.email;
            input.className = "form-check-input";
    
            const label = document.createElement("label");
            label.htmlFor = user.id;
            label.className = "form-check-label";
            label.textContent = user.username;
    
            const finalcheckbox = document.createElement("div");
            finalcheckbox.className = "form-check";
    
            finalcheckbox.appendChild(input);
            finalcheckbox.appendChild(label);
            assignedToSelect.appendChild(finalcheckbox);
        });
           /* const option = document.createElement('option');
            option.value = user.id;  
            option.textContent = user.username; 
            assignedToSelect.appendChild(option);
        });*/

    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

async function createTask(event) {
    event.preventDefault();

    const taskData = {
        title: document.getElementById('title').value,
        status: document.getElementById('status').value,
        assignedTo: Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.id),
        createdBy: document.getElementById('createdBy').value,
        dueDate: document.getElementById('dueDate').value,
    };
   const assignedToemails=Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.dataset.email);
   console.log(assignedToemails);
    console.log(assignedTo);
    try {
        const response = await fetch(`${API_URL}/tasks/createtask`, { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(taskData),
        });

        const result = await response.json();
        document.getElementById('message').textContent = 'Task created successfully!';
    } catch (error) {
        console.error('Error creating task:', error);
        document.getElementById('message').textContent = 'Error creating task.';
    }

//Notifications

const notificationdata={
    useremail:localStorage.getItem('email'),
    title: document.getElementById('title').value,
    createdBy: document.getElementById('createdBy').value,
    dueDate:document.getElementById('dueDate').value,
    emailids:assignedToemails,
};
console.log(dueDate.value);
try {
    const response = await fetch(`${API_URL}/users/emailsending`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(notificationdata),
    });
    const result = await response.json();

    if (response.ok) {
        console.log('Email notification response:', result.message);
        alert('Notification sent successfully!');
    } else {
        console.error('Error response:', result.error);
        alert('Failed to send notification. Please try again.');
    }
} catch (error) {
    console.error('Error occurred while sending notification:', error);
    alert('An error occurred. Please check your network or try again.');
}
}

