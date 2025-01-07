const express = require('express');
const { resolve } = require('path');

let cors = require('cors');
const app = express();
const port = 3010;

app.use(cors());
let tasks = [
  { taskId: 1, text: 'Fix bug #101', priority: 2 },
  { taskId: 2, text: 'Implement feature #202', priority: 1 },
  { taskId: 3, text: 'Write documentation', priority: 3 },
];

function addTask(taskId, text, priority) {
  tasks.push({ taskId: taskId, text: text, priority: priority });
}

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

//Add a Task to the Task List
app.get('/tasks/add', (req, res) => {
  console.log('Add Task');
  let taskId = parseFloat(req.query.taskId);
  let text = req.query.text;
  let priority = parseFloat(req.query.priority);
  addTask(taskId, text, priority);
  res.json({ tasks });
});

//Endpoint 2. Read All Tasks in the Task List
app.get('/tasks', (req, res) => {
  res.json({ tasks });
});

function sortByPriority(task1, task2) {
  return task1.priority - task2.priority;
}

//Endpoint 3. Sort Tasks by Priority
app.get('/tasks/sort-by-priority', (req, res) => {
  let tasksCopy = tasks.slice();
  let results = tasksCopy.sort(sortByPriority);
  res.json({ results });
});

function editByPriority(ele, taskId, priority) {
  if (ele.taskId === taskId) return (ele.priority = priority);
}

//Endpoint 4 . Edit By Priority
app.get('/tasks/edit-priority', (req, res) => {
  let taskId = parseFloat(req.query.taskId);
  let priority = parseFloat(req.query.priority);
  let results = tasks.find((ele) => editByPriority(ele, taskId, priority));
  console.log('Results after editing' + results);
  res.json({ tasks });
});

//Endpoint 5. Edit/Update Task Text
function editByText(ele, taskId, text) {
  if (ele.taskId === taskId) return (ele.text = text);
}

//Endpoint 4 . Edit By Priority
app.get('/tasks/edit-text', (req, res) => {
  let taskId = parseFloat(req.query.taskId);
  let text = req.query.text;
  let results = tasks.find((ele) => editByText(ele, taskId, text));
  console.log('Results after editing ' + results);
  res.json({ tasks });
});

//Endpoint 6. Delete a Task from the Task List
app.get('/tasks/delete', (req, res) => {
  let taskId = parseFloat(req.query.taskId);
  let results = tasks.filter((ele) => ele.taskId != taskId);
  res.json({ results });
});

//Endpoint 7
app.get('/tasks/filter-by-priority', (req, res) => {
  let priority = parseFloat(req.query.priority);
  let results = tasks.filter((ele) => ele.priority === priority);
  res.json({ tasks: results });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
