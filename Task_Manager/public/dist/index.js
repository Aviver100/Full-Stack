// add new task
async function handleAddTask(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
        const response = await fetch('/api/tasks/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: formData.get('title'), description: formData.get('description') })
        });
        renderTasks();
        if (!response.ok) {
            throw new Error('Server error');
        }
    }
    catch (error) {
        console.error('Error:', error.message);
    }
    const myForm = document.querySelector("#myForm");
    myForm.reset();
}
// render the tasks and refresh the table
async function renderTasks() {
    try {
        const response = await fetch('/api/tasks');
        if (!response.ok) {
            throw new Error('Database error');
        }
        const tasksList = await response.json();
        let tableData = "";
        tasksList.map((task) => {
            let editDelete = `<button class="edit" onclick="editTask(event)">Edit</button>
        <button class="update" onclick="updateTask(event)">Update</button>
        <button class="delete" onclick="deleteTask(event)">Delete</button>`;
            tableData +=
                `<tr data-id=${task._id}>  
        <td contenteditable="false" id="title">${task.title}</td>
        <td contenteditable="false" id="description">${task.description}</td>
        <td>
        <select name="status" id="status" disabled>
        
        <option value="To Do" ${task.status === 'To Do' ? 'selected' : ' '}>To Do</option>
        <option value="Done" ${task.status === 'Done' ? 'selected' : ' '}>Done</option>
        </select>
        <td>${editDelete}</td>
        </tr>`;
        });
        let table = document.querySelector('.table_body');
        table.innerHTML = tableData;
    }
    catch (error) {
        console.error('Error:', error.message);
    }
}
// edit task status
function editTask(event) {
    const current_tr = event.currentTarget?.parentElement?.parentElement;
    const table = document.querySelector("table");
    if (table) {
        for (let i = 1; i < table.rows.length; i++) {
            table.rows[i].cells[2].style.backgroundColor = "white";
            table.rows[i].cells[2].children[0].setAttribute("disabled", "true");
        }
        current_tr.cells[0].setAttribute("contenteditable", "true");
        current_tr.cells[1].setAttribute("contenteditable", "true");
        current_tr.cells[2].children[0].removeAttribute("disabled");
    }
}
// update task status after edit
async function updateTask(event) {
    const current_tr = event.currentTarget?.parentElement?.parentElement;
    const id = current_tr.getAttribute('data-id');
    const title = current_tr.querySelector('#title').innerText;
    const description = current_tr.querySelector('#description').innerText;
    const status = current_tr.querySelector('#status').value;
    console.log({ id, title, description, status });
    try {
        await fetch('/api/tasks/' + id, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description, status }),
        });
    }
    catch (error) {
        console.error(error);
    }
    renderTasks();
}
async function deleteTask(event) {
    const current_tr = event.currentTarget?.parentElement?.parentElement;
    const id = current_tr.getAttribute('data-id');
    try {
        await fetch('/api/tasks/' + id, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
        });
    }
    catch (error) {
        console.error(error);
    }
    renderTasks();
}
renderTasks();
