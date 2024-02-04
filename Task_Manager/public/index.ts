import express, { json } from "express";
import { task } from "../src/modules/task";
let data: any;

// window.addEventListener('DOMContentLoaded', async () => {
//     {
//         try {
//             const response = await fetch("/api/tasks")
//             data = await response.json();
//             console.log(data);
//         } catch (error) {
//             console.log(error);

//         }
//     }
// })
export async function handleGetAllTasks(event) {
    try {
        const response = await fetch("/api/tasks")
        data = await response.json();
        console.log(data);
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
        if (!response.ok) {
            throw new Error('Server error')
        }
        const result = await response.json();
    }
    catch (error: any) {
        console.error('Error:', error.message)
    }
    renderTasks();
}


export async function renderTasks() {

    let tableData = "";
    data.map((values: task) => {
        let status = values.status === 0 ? "To Do" : "Done";
        tableData +=
            `<tr>
        <td>${values.title}</td>
        <td>${values.description}</td>
        <td>${status}</td>
        </tr>`
    });
    let table = document.querySelector('.table_body') as HTMLTableElement;
    table.innerHTML = tableData;
 }

