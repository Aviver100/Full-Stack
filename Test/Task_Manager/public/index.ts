import { GetTasks, Tasks } from '../src/controllers/index'
import { task } from '../src/modules/task'
// import { task } from '../src/modules/task';

async function loadIntoTable(url:string, table:HTMLElement) {
    fetch("/api/tasks").then
}

let TasksArray = JSON.stringify(Tasks);
console.log(TasksArray);
console.log("123456"); 

loadIntoTable("/api/tasks", document.querySelector("MyTable")!)