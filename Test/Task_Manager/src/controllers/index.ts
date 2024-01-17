import express from 'express';
import { task } from '../modules/task';
import { v4 as uuidv4 } from 'uuid';
import { status } from '../modules/TaskStatus'

export let Tasks: task[] = [];

export function creatTask(req: express.Request, res: express.Response) {
    let newTask: task = req.body;
    newTask.status = status.ToDo;
    // if(req.body.status === status.ToDo){
    //     newTask.status = status.ToDo
    // }else if(req.body.status === status.Done){
    //     newTask.status = status.Done
    // }
    newTask.id = uuidv4();
    Tasks.push(newTask)
    res.send({Tasks});
    res.send({Tasks}); 
}

export function UpdateTask(req: express.Request, res: express.Response) {
    let TaskToUpdate = req.params.id;
    let foundTask = Tasks.find(task => task.id === TaskToUpdate);
    if (!foundTask) {
        res.status(404).send('Task not found');
    } else if (req.body.title) {
        foundTask.title = req.body.title;
        foundTask.description = req.body.description;
        foundTask.status = req.body.status;
        res.send(foundTask);
    }
}

export function GetTasks(req: express.Request, res: express.Response) {
    if (!Tasks || Tasks.length === 0) {
        res.status(404).send('Task not found');
    } else {
        res.send(Tasks);
    }
}
export function GetTask(req: express.Request, res: express.Response) {
    let TaskToGet = req.params.id;
    let foundTask = Tasks.find(task => task.id === TaskToGet);
    if (!foundTask) {
        res.status(404).send('Task not found');
    } else {
        res.send(foundTask);
    }
}

export function DeleteTask(req: express.Request, res: express.Response) {
    let TaskToDelete = req.params.id;
    let foundTask = Tasks.findIndex(task => task.id === TaskToDelete);
    if (!foundTask) {
        res.status(404).send('Task not found');
    } else {
        Tasks.splice(foundTask, 1);
        res.send(foundTask);
    }
}