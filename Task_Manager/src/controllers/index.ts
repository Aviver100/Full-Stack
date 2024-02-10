import express, { } from 'express';
import { TaskModel } from '../modules/task';
import { task } from '../modules/task';
import { v4 as uuidv4 } from 'uuid';
import { status } from '../modules/task'

export let Tasks: task[] = [];

export async function creatTask(req: express.Request, res: express.Response) {
    let newTaskData: task = req.body;
    newTaskData.status = status.ToDo;
    newTaskData.id = uuidv4();
    try {
        const newTask = new TaskModel(newTaskData);
        await newTask.save();
        res.send({ task: newTask });
    } catch (error: any) {
        console.error('Error:', error.message);
    } Tasks.push(newTaskData)
}


export async function updateTask(req: express.Request, res: express.Response) {
    let taskId = req.params.id;
    // const updatedTask = await TaskModel.findByIdAndUpdate(taskId, { status }, { new: true });
    // if (updatedTask) {
    //     console.log('yessss');
    // } else {
    //     console.log('nooooooooo');
    // }
    let foundTask = Tasks.find(task => task.id === taskId);
    if (!foundTask) {
        res.status(404).send('Task not found');
    } else {
        foundTask.status = req.body.status;

        res.send(foundTask);
    }
    let TaskToUpdate = TaskModel.findByIdAndUpdate(foundTask?.id)


    // try {
    //     const newTask = new TaskModel(foundTask);
    //     await newTask.save();
    //     res.send({ task: newTask });
    // } catch (error:any) {
    //     console.error('Error:', error.message);
    // } 



}

export function getTasks(req: express.Request, res: express.Response) {
    if (!Tasks || Tasks.length === 0) {
        res.status(404).send({ message: 'Tasks not found' });
    } else {
        res.send(Tasks);
    }
}
export function getTask(req: express.Request, res: express.Response) {
    let TaskToGet = req.params.id;
    let foundTask = Tasks.find(task => task.id === TaskToGet);
    if (!foundTask) {
        res.status(404).send('Task not found');
    } else {
        res.send(foundTask);
    }
}

export function deleteTask(req: express.Request, res: express.Response) {
    let TaskToDelete = req.params.id;
    let foundTask = Tasks.findIndex(task => task.id === TaskToDelete);
    if (!foundTask) {
        res.status(404).send('Task not found');
    } else {
        Tasks.splice(foundTask, 1);
        res.send(foundTask);
    }
}