import express, { json } from "express";
import { task, status, TaskModel } from "../src/modules/task";
import { Tasks } from "../src/controllers";
let data: any;


export async function handleGetAllTasks() {
    try {
        const response = await fetch("/api/tasks")
        data = await response.json();
        renderTasks();
    } catch (error) {
        console.log(error);
    }
}

handleGetAllTasks();

export async function handleAddTask(event: SubmitEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const newTask = new TaskModel(formData); 
    try {
        const response = await fetch('/api/tasks/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify(Object.fromEntries(newTask)),
            body: JSON.stringify(newTask.toObject()),
        });
        (event.target as HTMLFormElement).reset();
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


function renderTasks() {
    let tableData = "";
    data.map((values: task) => {
        let editDelete =
            `<button class="edit" onclick="editTask(event)">Edit</button>
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
        </tr>`
    });
    let table = document.querySelector('.table_body') as HTMLTableElement;
    table.innerHTML = tableData;
}


function editTask(event: MouseEvent) {
    const current_tr = (event.currentTarget as HTMLButtonElement)?.parentElement?.parentElement! as HTMLTableRowElement;
    console.log(current_tr);

    current_tr.onclick = () => {
        const table = document.querySelector("table") as HTMLTableElement;
        if (table) {
            for (let i = 1; i < table.rows.length; i++) {
                (table.rows[i] as HTMLTableRowElement).cells[2].style.backgroundColor = "white";
                (table.rows[i] as HTMLTableRowElement).cells[2].children[0].setAttribute("disabled", "true");
            }
            current_tr.cells[2].children[0].removeAttribute("disabled");
        }
    }
}

export async function updateTask(event: MouseEvent, status: status, id: string) {
    // const current_tr = event.currentTarget.parentElement.parentElement;
    const current_tr = (event.currentTarget as HTMLButtonElement)?.parentElement?.parentElement! as HTMLTableRowElement;
    let currentTask: string;

    current_tr.onclick = () => {
        const table = document.querySelector("table") as HTMLTableElement;
        if (table) {
            const selectElement = current_tr.cells[2].children[0] as HTMLInputElement;
            status = selectElement.value as status;
            currentTask = (current_tr.cells[0]).innerText;
        }
    }
    const response = await fetch("/api/tasks")
    data = await response.json();
    data.map((task: task) => {
        if (task.title === currentTask) {
            id = task.id;
            console.log(id);
        }
    })
    try {
        const body = { status, id }
        const response = await fetch(`/api/tasks/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        handleGetAllTasks();
        if (!response.ok) {
            throw new Error('Server error')
        }
        const result = await response.json();
    }
    catch (error: any) {
        console.error('Error:', error.message)
    }
}