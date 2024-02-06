import express, { json } from "express";
import { task, status } from "../src/modules/task";
import { Tasks } from "../src/controllers";
let data: any;

let editBtn = document.querySelector(".edit") as HTMLButtonElement;
let updateBtn = document.querySelector(".update") as HTMLButtonElement;
// let deleteBtn = document.querySelector(".delete") as HTMLButtonElement;

export async function handleGetAllTasks(event) {
    try {
        const response = await fetch("/api/tasks")
        data = await response.json();
        renderTasks();
    } catch (error) {
        console.log(error);
    }
}

export async function handleAddTask(event: SubmitEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    try {
        const response = await fetch('/api/tasks/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.fromEntries(formData)),
        });
        renderTasks();
        if (!response.ok) {
            throw new Error('Server error')
        }
        const result = await response.json();
    }
    catch (error: any) {
        console.error('Error:', error.message)
    }
}


// let status = values.status === ToDo ? "To Do" : "Done";
export async function renderTasks() {
    let tableData = "";
    data.map((values: task) => {
        let editDelete =
            // <button class="update" onclick="updateTask()" style="display: none;">Update</button>
            `<button class="edit" onclick="editTask()">Edit</button>
        <button class="update" onclick="updateTask()">Update</button>
        <button class="delete" onclick="deleteTask()">Delete</button>`;
        tableData +=
            `<tr>
        <td contenteditable="false" >${values.title}</td>
        <td contenteditable="false" >${values.description}</td>
        <td>
        <select name="status" id="status" disabled>
        <option value="${values.status}">To Do</option>
        <option value="Done">Done</option></td>
        <td>${editDelete}</td>
        </tr>`
        // <td contenteditable="false" >${status}</td>
    });
    let table = document.querySelector('.table_body') as HTMLTableElement;
    table.innerHTML = tableData;
}

export async function editTask() {
    const tr_current = event.currentTarget.parentElement.parentElement;
    tr_current.onclick = () => {
        const table = document.querySelector("table") as HTMLTableElement;
        if (table) {
            for (let i = 1; i < table.rows.length; i++) {
                table.rows[i].cells[0].contentEditable = "false";
                table.rows[i].cells[1].contentEditable = "false";
                table.rows[i].cells[2].children[0].setAttribute("disabled", "true");
                table.rows[i].cells[3].children[0].setAttribute("disabled", "true");
                table.rows[i].cells[3].children[1].setAttribute("disabled", "true");
                table.rows[i].cells[3].children[2].setAttribute("disabled", "true");
                table.rows[i].cells[0].style.backgroundColor = "white";
                table.rows[i].cells[1].style.backgroundColor = "white";
                table.rows[i].cells[2].style.backgroundColor = "white";
            }
        }
        tr_current.cells[0].contentEditable = "true";
        tr_current.cells[1].contentEditable = "true";
        tr_current.cells[2].children[0].removeAttribute("disabled");
        tr_current.cells[2].children[0].removeAttribute("disabled");
        tr_current.cells[3].children[0].removeAttribute("disabled");
        tr_current.cells[3].children[1].removeAttribute("disabled");
        tr_current.cells[3].children[2].removeAttribute("disabled");
        tr_current.cells[0].style.backgroundColor = "#A9A9A9";
        tr_current.cells[1].style.backgroundColor = "#A9A9A9";
        tr_current.cells[2].style.backgroundColor = "#A9A9A9";
        
    }
}

export async function updateTask() {
    const tr_current = event.currentTarget.parentElement.parentElement;
    tr_current.onclick = () => {
        const table = document.querySelector("table") as HTMLTableElement;
        tr_current.cells[0].contentEditable = "true";
        tr_current.cells[1].contentEditable = "true";
        tr_current.cells[2].children[0].removeAttribute("disabled");
        tr_current.cells[2].children[0].removeAttribute("disabled");
        tr_current.cells[3].children[0].removeAttribute("disabled");
        tr_current.cells[3].children[1].removeAttribute("disabled");
        tr_current.cells[3].children[2].removeAttribute("disabled");
        tr_current.cells[0].style.backgroundColor = "white";
        tr_current.cells[1].style.backgroundColor = "white";
        tr_current.cells[2].style.backgroundColor = "white";
    }
}