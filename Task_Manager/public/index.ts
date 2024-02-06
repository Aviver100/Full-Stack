import express, { json } from "express";
import { task } from "../src/modules/task";
import { Tasks } from "../src/controllers";
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
        let editDelete = `<button class="edit" onclick="editTask()">Edit</button> <button onclick="deleteTask()">Delete</button>`;
        tableData +=
            `<tr>
        <td contenteditable="false" >${values.title}</td>
        <td contenteditable="false" >${values.description}</td>
        <td contenteditable="false" >${status}</td>
        <td>${editDelete}</td>
        </tr>`
    });
    let table = document.querySelector('.table_body') as HTMLTableElement;
    table.innerHTML = tableData;
}

export async function editTask() {
    const editBtn = document.querySelector(".edit") as HTMLButtonElement;
    if(editBtn.innerHTML == "Edit"){
        editBtn.innerHTML = "Save";
    }else{
        editBtn.innerHTML = "Edit"
    }
    const table = document.querySelector("table") as HTMLTableElement;
    if(table){
        for(let i= 0; i < table.rows.length; i++){
            table.rows[i].onclick = () =>{
                console.log(i);
                table.rows[i].cells[0].contentEditable = "true";
                table.rows[i].cells[0].style.backgroundColor = "blue";
                // table.rows[i].cells[0].contentEditable = "true";
                // table.rows[i].cells[0].contentEditable = "true";
            }
        }
        // table.addEventListener('click', (event:MouseEvent)=>{
        //     if((event.target as HTMLElement).classList.contains('edit')){
        //         const tableRow:HTMLTableRowElement | null = (event.target as HTMLElement).closest('tr');
        //         if(tableRow){
        //             tableRow.cells[0].contentEditable = "true"
        //             tableRow.cells[1].contentEditable = "true"
        //             tableRow.cells[0].style.backgroundColor = "#59B4C3"
        //             tableRow.cells[1].style.backgroundColor = "#59B4C3"
        //             console.log(tableRow);
        //         }
        //     }
        // })
    }
}
