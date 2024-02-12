let data;
async function handleGetAllTasks() {
    try {
        const response = await fetch("/api/tasks");
        data = await response.json();
        renderTasks();
    }
    catch (error) {
        console.log(error);
    }
}
console.log('hello');
handleGetAllTasks();
async function handleAddTask(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    // const newTask = new task(formData);
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
        const result = await response.json();
    }
    catch (error) {
        console.error('Error:', error.message);
    }
}
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
        <button class="delete" onclick="deleteTask()">Delete</button>`;
            tableData +=
                `<tr data-id=${task._id}>  
                
        <td contenteditable="false" >${task.title}</td>
        <td contenteditable="false" >${task.description}</td>
        <td>
        <select name="status" id="status" disabled>
        <option disabled selected value>${task.status}</option>
        <option value="To Do">To Do</option>
        <option value="Done">Done</option>
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
function editTask(event) {
    const current_tr = event.currentTarget?.parentElement?.parentElement;
    // current_tr.onclick = () => {
    const table = document.querySelector("table");
    if (table) {
        for (let i = 1; i < table.rows.length; i++) {
            table.rows[i].cells[2].style.backgroundColor = "white";
            table.rows[i].cells[2].children[0].setAttribute("disabled", "true");
        }
        current_tr.cells[2].children[0].removeAttribute("disabled");
    }
    // }
}
async function updateTask(event) {
    // const current_tr = event.currentTarget.parentElement.parentElement;
    const current_tr = event.currentTarget?.parentElement?.parentElement;
    const id = current_tr.getAttribute('data-id');
    const status = current_tr.querySelector('#status').value;
    let currentTask;
    /** update logic start */
    try {
        await fetch('/api/tasks/' + id, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status }),
        });
    }
    catch (error) {
        console.error(error);
    }
    /** update logic end */
    try {
        const response = await fetch("/api/tasks");
        const data = await response.json();
        const task = data.find((task) => { task.title === currentTask; });
        if (task) {
            const taskId = task._id;
            console.log(taskId);
        }
        const body = { status, id: task };
        // const response = await fetch(`/api/tasks/${id}`, {
        //     method: 'PATCH',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(body),
        // });
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
