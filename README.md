

# Endpoints
This project has 7 endpoints:

# Endpoints

This project has 7 endpoints:

*   **Add a new task** `GET /tasks/add?taskId=<id>&text=<text>&priority=<priority>`
    *   Adds a new task with a specified task ID, text, and priority.

*   **Retrieve all tasks** `GET /tasks`
    *   Retrieves a list of all tasks stored in the system.

*   **Retrieve tasks sorted by priority (ascending)** `GET /tasks/sort-by-priority`
    *   Retrieves all tasks sorted by their priority in ascending order.

*   **Edit a task's priority** `GET /tasks/edit-priority?taskId=<id>&priority=<priority>`
    *   Allows you to update the priority of a specific task by task ID.

*   **Edit a task's text** `GET /tasks/edit-text?taskId=<id>&text=<text>`
    *   Allows you to update the text/description of a specific task by task ID.

*   **Delete a task** `GET /tasks/delete?taskId=<id>`
    *   Deletes a task based on the provided task ID.

*   **Filter tasks by priority** `GET /tasks/filter-by-priority?priority=<priority>`
    *   Retrieves tasks that match a specified priority.

# Setup Instructions

## Prerequisites

*   Node.js installed
*   Any other dependencies or tools (e.g., database, environment configurations)





