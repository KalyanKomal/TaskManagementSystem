const API_URL = 'http://localhost:8080';


document.addEventListener('DOMContentLoaded', () => {
    const addUserBtn = document.getElementById('add-user-btn');
    if (addUserBtn) {
        addUserBtn.addEventListener('click', () => {
            window.location.href = 'admincreateuser.html';
        });
    }

    const createTaskBtn = document.getElementById('create-task-btn');
    if (createTaskBtn) {
        createTaskBtn.addEventListener('click', () => {
            window.location.href = 'admincreatetask.html';
        });
    }
    const getallTaskBtn = document.getElementById('get-task-btn');
    if (getallTaskBtn) {
        getallTaskBtn.addEventListener('click', () => {
            window.location.href = 'admingetalltask.html';
        });
    }
    const modifyTaskBtn = document.getElementById('modify-task-btn');
    if (modifyTaskBtn) {
        modifyTaskBtn.addEventListener('click', () => {
            window.location.href = 'adminmodifytask.html';
        });
    }

    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.clear();
            window.location.href = 'index.html';
        });
    }
    document.getElementById('delete-task-form').addEventListener('submit', async (event) => {
        event.preventDefault();

        const taskName = document.getElementById('deleteTaskName').value;

        try {
            const getTaskResponse = await fetch(`${API_URL}/tasks/gettaskbyname/${encodeURIComponent(taskName)}`, {
                method: 'GET',
            });

            if (getTaskResponse.ok) {
                const taskData = await getTaskResponse.json();
                const taskId = taskData.message; 
                const deleteTaskResponse = await fetch(`${API_URL}/tasks/deletetaskbyid/${taskId}`, {
                    method: 'DELETE',
                });

                if (deleteTaskResponse.ok) {
                    document.getElementById('delete-task-message').textContent = 'Task deleted successfully!';
                    document.getElementById('delete-task-message').classList.remove('text-danger');
                    document.getElementById('delete-task-message').classList.add('text-success');
                } else {
                    document.getElementById('delete-task-message').textContent = 'Failed to delete task!';
                    document.getElementById('delete-task-message').classList.remove('text-success');
                    document.getElementById('delete-task-message').classList.add('text-danger');
                }
            } else {
                const errorData = await getTaskResponse.json();
                document.getElementById('delete-task-message').textContent = errorData.error || 'Task not found!';
                document.getElementById('delete-task-message').classList.remove('text-success');
                document.getElementById('delete-task-message').classList.add('text-danger');
            }
        } catch (error) {
            console.error('Error:', error);
            document.getElementById('delete-task-message').textContent = 'An error occurred!';
            document.getElementById('delete-task-message').classList.remove('text-success');
            document.getElementById('delete-task-message').classList.add('text-danger');
        }
    });
    document.getElementById('delete-user-form').addEventListener('submit', async (event) => {
        event.preventDefault();

        const useremail = document.getElementById('deleteUserName').value;

        try {
            const getUserResponse = await fetch(`${API_URL}/users/getuserbyemail/${useremail}`, {
                method: 'GET',
            });

            if (getUserResponse.ok) {
                const UserData = await getUserResponse.json();
                const UserId = UserData.message;

                const deleteUserResponse = await fetch(`${API_URL}/users/deleteuserbyid/${UserId}`, {
                    method: 'DELETE',
                });

                if (deleteUserResponse.ok) {
                    document.getElementById('delete-user-message').textContent = 'User deleted successfully!';
                    document.getElementById('delete-user-message').classList.remove('text-danger');
                    document.getElementById('delete-user-message').classList.add('text-success');
                } else {
                    document.getElementById('delete-user-message').textContent = 'Failed to delete user!';
                    document.getElementById('delete-user-message').classList.remove('text-success');
                    document.getElementById('delete-user-message').classList.add('text-danger');
                }
            } else {
                const errorData = await getUserResponse.json();
                document.getElementById('delete-user-message').textContent = errorData.error || 'User not found!';
                document.getElementById('delete-user-message').classList.remove('text-success');
                document.getElementById('delete-user-message').classList.add('text-danger');
            }
        } catch (error) {
            console.error('Error:', error);
            document.getElementById('delete-user-message').textContent = 'An error occurred!';
            document.getElementById('delete-user-message').classList.remove('text-success');
            document.getElementById('delete-user-message').classList.add('text-danger');
        }
    });
});
