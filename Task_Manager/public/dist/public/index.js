"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.handleAddTask = exports.handleGetAllTasks = void 0;
let data;
async function handleGetAllTasks() {
    debugger;
    try {
        const response = await fetch("/api/tasks");
        data = await response.json();
        renderTasks();
    }
    catch (error) {
        console.log(error);
    }
}
exports.handleGetAllTasks = handleGetAllTasks;
handleGetAllTasks();
async function handleAddTask(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
        const response = await fetch('/api/tasks/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.fromEntries(formData)),
        });
        renderTasks();
        if (!response.ok) {
            throw new Error('Server error');
        }
        const result = await response.json();
    }
    catch (error) {
        console.error('Error:', error.message);
    }
}
exports.handleAddTask = handleAddTask;
function renderTasks() {
    let tableData = "";
    data.map((values) => {
        let editDelete = `<button class="edit" onclick="editTask(event)">Edit</button>
        <button class="update" onclick="updateTask(event)">Update</button>
        <button class="delete" onclick="deleteTask()">Delete</button>`;
        tableData +=
            `<tr>
        <td contenteditable="false" >${values.title}</td>
        <td contenteditable="false" >${values.description}</td>
        <td>
        <select name="status" id="status" disabled>
        <option disabled selected value>${values.status}</option>
        <option value="To Do">To Do</option>
        <option value="Done">Done</option>
        <td>${editDelete}</td>
        </tr>`;
    });
    let table = document.querySelector('.table_body');
    table.innerHTML = tableData;
}
function editTask(event) {
    var _a, _b;
    const current_tr = (_b = (_a = event.currentTarget) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement;
    console.log(current_tr);
    current_tr.onclick = () => {
        const table = document.querySelector("table");
        if (table) {
            for (let i = 1; i < table.rows.length; i++) {
                table.rows[i].cells[2].style.backgroundColor = "white";
                table.rows[i].cells[2].children[0].setAttribute("disabled", "true");
            }
            current_tr.cells[2].children[0].removeAttribute("disabled");
        }
    };
}
async function updateTask(event, status, id) {
    var _a, _b;
    // const current_tr = event.currentTarget.parentElement.parentElement;
    const current_tr = (_b = (_a = event.currentTarget) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement;
    let currentTask;
    current_tr.onclick = () => {
        const table = document.querySelector("table");
        if (table) {
            const selectElement = current_tr.cells[2].children[0];
            status = selectElement.value;
            currentTask = (current_tr.cells[0]).innerText;
        }
    };
    const response = await fetch("/api/tasks");
    data = await response.json();
    data.map((task) => {
        if (task.title === currentTask) {
            id = task.id;
            console.log(id);
        }
    });
    try {
        const body = { status, id };
        const response = await fetch(`/api/tasks/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        handleGetAllTasks();
        if (!response.ok) {
            throw new Error('Server error');
        }
        const result = await response.json();
    }
    catch (error) {
        console.error('Error:', error.message);
    }
}
exports.updateTask = updateTask;
