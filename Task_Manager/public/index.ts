import express, { json } from "express";
import { task } from "../src/modules/task";
let data: any;

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


export async function renderTasks() {
    let tableData = "";
    data.map((values: task) => {
        let status = values.status === 0 ? "To Do" : "Done";
        let editDelete = `<button onclick="editTask()">Edit</button> <button onclick="deleteTask()">Delete</button>`;
        tableData +=
            `<tr>
        <td>${values.title}</td>
        <td>${values.description}</td>
        <td>${status}</td>
        <td>${editDelete}</td>
        </tr>`
    });
    let table = document.querySelector('.table_body') as HTMLTableElement;
    table.innerHTML = tableData;
}

export async function editTask(td:HTMLElement){
    const table = document.querySelector("table_body") as HTMLTableElement;
    let selectedRow = td.parentElement?.parentElement;
    let titleElement = (document.querySelector("title") as unknown as HTMLInputElement)?.value;
    titleElement = selectedRow.cells[0].innerHTML
    
}

