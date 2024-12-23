TASK MANAGEMENT SYSTEM
A simple Task Management System where the frontend is built using HTML, CSS, and JavaScript, and the backend is built using Java Spring Boot. This system helps you create, view, update, and delete tasks easily.

SETUP:-

FRONTEND PART:-
https://github.com/KalyanKomal/TaskManagementSystemFrontend.git
Clone this repository.

BACKEND PART:-
https://github.com/KalyanKomal/BackendTaskManagement.git
Clone this repository.

FEATURES:-
1)Admin can create tasks,update tasks,delete user,create user.

2)Admin can view all the tasks.

3)User can view his assigned tasks.

4)User can update the tasks(status).

5)User can change password.

PROJECT FLOW:-

This is the login page.

![image](https://github.com/user-attachments/assets/1fa5df89-2d74-476e-a302-634ea3369c58)

Here it will check user email and password.If it's ok then it will if role is User or Admin.If admin it will redirect to admin dashboard.Or else it will go to user dashboard.

Here there is an other option if password not found then we have to go to signup option. 

The page is ![image](https://github.com/user-attachments/assets/72d6f961-3bd2-4aec-b2d3-c8fbc51c87d2).Here after it's done it will redirect to initial page.
Admin Page:-

This is the admin page.

![image](https://github.com/user-attachments/assets/c709dcd4-b458-48d0-8318-d483095c2d30)

Admin create tasks page:-

![image](https://github.com/user-attachments/assets/6869f270-3141-4052-8b7d-4e08fe7c2a54) 

Here after task gets successfully uploaded it will shwo an notification and triiger mail to the user which is selected in the dropdown shown.

This is the email triggered format.

![image](https://github.com/user-attachments/assets/8a6042e3-c109-4def-add1-c29832e410eb)

Admin get all tasks page:-

![image](https://github.com/user-attachments/assets/dcfc0694-01a7-49b6-9e91-52a86219e72e)

Admin update tasks page :-

![image](https://github.com/user-attachments/assets/32f6193d-3fee-4ccd-bdf5-66b01ec0d679).

Same as create page notifcation will also be triggered here.

Admin create user page:-

![image](https://github.com/user-attachments/assets/cb06db56-882b-48e4-987e-0f2839f535b6) 

Here admin can create users Here it will check if email already extits or not.

Admin can delete tasks ;-

![image](https://github.com/user-attachments/assets/e181c3bd-8b63-40d4-a20d-c1accdfea372) 

Here tasks will be deleted thorugh task names.This is success image.

![image](https://github.com/user-attachments/assets/146cc32f-9fa6-4c6c-bbc2-0a281c452165) 

This is the failure delete task image

Admin can delete users-

![image](https://github.com/user-attachments/assets/8f91d398-e479-49ba-8fc7-b3f103a6980e) 

Here users will be deleted thorugh task names.This is success image.

![image](https://github.com/user-attachments/assets/0597d497-41a1-4357-b0cc-b8011025758b) 

This is the failure deleter user image.

User dashboard:-

![image](https://github.com/user-attachments/assets/c40fbde3-6933-4dd7-a971-0a591c227dde)

User can view his tasks.The page is:-

![image](https://github.com/user-attachments/assets/0a48401e-81a3-44b6-8d77-098b3ebeba9b)

User can update tasks:-

![image](https://github.com/user-attachments/assets/333038ec-3af8-4712-a6eb-7331c89878f8)

Here user will get a dropdown of the tasks assigned to him then he will change the status and submit it.

![image](https://github.com/user-attachments/assets/7a8427b3-6c45-4f78-983c-1bdece3e292b)

Users can also update their password.The page image is:-

![image](https://github.com/user-attachments/assets/a2e51168-d3fa-49d2-975f-e8604b0652b3)


Database Images:-

![image](https://github.com/user-attachments/assets/41bf2464-e18d-4133-b868-d838c28ab63e)

1)Users

![image](https://github.com/user-attachments/assets/10a45a68-001b-4332-984f-8e9e08276aed)

2)Tasks:-

![image](https://github.com/user-attachments/assets/f309662d-f8e2-4563-8190-5c112ebf8d4a)

![image](https://github.com/user-attachments/assets/6b1e15ee-44c6-40c7-8f1d-fd0300d3e5f1)

3)Users -Tasks Relationship:-

![image](https://github.com/user-attachments/assets/b6771767-9c64-4162-b501-d83a2a7768c2)

![image](https://github.com/user-attachments/assets/fda7b5c4-b41d-4410-b1a9-e886d12050bf)

4)Notifcations table

![image](https://github.com/user-attachments/assets/9c70c218-583a-46f7-a644-e0537348624d)

Database credentials:-

spring.datasource.url=jdbc:mysql://localhost:3306/taskmanagement

spring.datasource.username=root

spring.datasource.password=Kalyankomal@2003

Here currently there is only one admin:-

Credentials:-kalyan.komal123@gmail.com

Password-2003

Take one user for example:-

Creddentials:-donesathvik@gmail.com

Password-eluru

Entities:-

1)Task:-
![image](https://github.com/user-attachments/assets/840084e4-fa97-4be6-ae99-91c53cde93db)

![image](https://github.com/user-attachments/assets/2b893b5d-c1b6-4db2-a9d5-52a88dd6214a)

2)Users:-

![image](https://github.com/user-attachments/assets/c945d1ba-4f27-4474-9298-69af531a1469)

![image](https://github.com/user-attachments/assets/8d758a4b-e935-4a20-88ff-8e58f63905d6)

![image](https://github.com/user-attachments/assets/58de1c92-eaf1-4d4a-82a7-9c1ccfdc433d)

3)Notifcations:-

![image](https://github.com/user-attachments/assets/51a38c98-5de9-4c45-87a6-ebba2daf23d9)

DTO's:-

1)Admincreateuserdto:-

![image](https://github.com/user-attachments/assets/01e222ca-364b-4658-addc-f3b91f6c4904)

2)Adminupdatedto

![image](https://github.com/user-attachments/assets/6d32ddcf-fc4c-4a40-8e72-36057e322fb0)

3)EmailSendingDto:-

![image](https://github.com/user-attachments/assets/a766b218-b0f7-4d13-857d-9b8567867f75)

![image](https://github.com/user-attachments/assets/647253d6-8698-4fce-bb9f-060bf18c46e3)

![image](https://github.com/user-attachments/assets/f2d53b9e-6510-4f91-98ae-b8f63ed06e4d)

4)loginDto:-

![image](https://github.com/user-attachments/assets/8cf9bded-1cf4-48cb-b02d-90631ce17f7b)

![image](https://github.com/user-attachments/assets/f8a86e55-30c9-4524-a79c-8b1335b8710a)

5)Signupdto:-

![image](https://github.com/user-attachments/assets/d35e266d-308f-440a-9e6c-b9ca7b3636f3)

6)TaskDisplayDto:-

![image](https://github.com/user-attachments/assets/9e594ea2-4776-4c9a-ad76-40e300808275)

7)TaskUpdateDto:-

private String id;

private String title;

private String status;

private String createdBy;

private Timestamp dueDate;

8)Taskupdatedto:-

private String id;

private String status;

9)updateroleDto:-

 private String userid;
 
 private String role;

10)UpdatetaskDto:-

private String taskid;

private String userid;

11)UserDisplayDto:-

private String id;

private String role;

private List<String> asignedtasksids;

12)UserDropdownDto:-

private String id;

private String username;

private String email;

13)UserDto:-

private String id;

private String username;

private String password;

private String role;

private String email;

14)UserupdateDto:-

  private String email;
  
  private String oldpassword;
  
  private String newpassword;

Endpoints:-
1)/users/getallusers----Get all users

2)/users/getusersdropdown--Called when admin create tasks

3)/users/createuser-- Called when admin creates user

4)/users/getuserbyid/{id}---Get user with their id. We will get id dynamically depending on user

5)/users/getuserbyemail/{email}--Get user with their email.We will get emil with respect to the user

6)/users/deleteuserbyid/{id}----Delete user with their id.

7)/users/updatebyuser--User change their password

8)/users/login--Gets called while login

9)/users/signup--Gets called while signup

10)/users/emailsending--Gets called when notifications need to be send

11)/tasks/getalltasks---Get all tasks

12)tasks/createtask---Creates task

13)/tasks/gettaskbyname/{taskname}----Get task with their name.We will get the taskname dynamically.

14)/tasks/gettaskbyid/{id}---Get task with their id.We will get the id dynamically.

15)/tasks/updatetaskbyuser----Gets called when user change the status of task.





































