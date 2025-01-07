Express Task Manager

This project demonstrates a simple Express server to manage tasks. It serves a single HTML page and provides RESTful endpoints for task management operations such as adding, editing, deleting, sorting, and filtering tasks.

Features

Task Management: Add, edit, delete tasks efficiently.

Sorting and Filtering: Sort tasks by priority or filter them based on specific criteria.

RESTful API: Interact with the application using well-defined RESTful endpoints.

Endpoints

Below are the endpoints provided by the server:

1. Add a Task to the Task List

URL: GET /tasks/add?taskId=2&text=Write%20Tests&priority=1

Description: Adds a new task to the task list with the given taskId, text, and priority.

2. Retrieve All Tasks

URL: GET /tasks

Description: Returns all tasks in the task list.

3. Sort Tasks by Priority

URL: GET /tasks/sort-by-priority

Description: Returns tasks sorted by their priority (ascending order).

4. Edit a Task's Priority

URL: GET /tasks/edit-priority?taskId=2&priority=3

Description: Updates the priority of the task identified by taskId.

5. Edit a Task's Text

URL: GET /tasks/edit-text?taskId=3&text=Updated%20Task%20Text

Description: Updates the description (text) of the task identified by taskId.

6. Delete a Task from the Task List

URL: GET /tasks/delete?taskId=1

Description: Deletes the task identified by taskId from the task list.

7. Filter Tasks by Priority

URL: GET /tasks/filter-by-priority?priority=1

Description: Returns tasks with the specified priority.

How to Run

Clone the repository.

git clone https://github.com/your-username/express-task-manager.git

Navigate to the project directory.

cd express-task-manager

Install dependencies.

npm install

Start the server.

npm start

Open your browser and access the application at http://localhost:3000.

Dependencies

Express: Backend framework for creating the server.

Node.js: JavaScript runtime.

Contribution

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss the changes.

License

This project is licensed under the MIT License.
