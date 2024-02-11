import express, { response } from 'express';
import { TaskModel } from '../modules/task';
import { task } from '../modules/task';
import { status } from '../modules/task'
import mongoose from 'mongoose';

export let Tasks: task[] = [];

export async function creatTask(req: express.Request, res: express.Response) {
    let newTaskData: task = req.body;
    newTaskData.status = status.ToDo;
    try { 
        const newTask = new TaskModel(newTaskData);
        await newTask.save();
        res.send({ task: newTask });
    } catch (error: any) {
        console.error('Error:', error.message);
    }
    // Tasks.push(newTaskData) 
}

export async function updateTask(req: express.Request, res: express.Response) {
    const {id} = req.body;

    const taskTitle = req.params.title; 
    const taskStatus = req.body.status;
    console.log(id);
    try {
        const updateTask = await TaskModel.findByIdAndUpdate(
            '65c8c6f8b4e6302b74ba9fb6',
            { status: status.Done },
            { new: true }
        );

        if (!updateTask) {
            console.log('not good');
            console.log(updateTask);
        } else {
            console.log('good');
        }
        res.json(updateTask);
    } catch (error: any) {
        console.error('Error:', error.message);
    }

    // const taskList = await TaskModel.find();
    // const foundTask = taskList.find(task => task.title === taskTitle);
    // // const foundTask = await TaskModel.findById(taskId);
    // console.log('this is the task:', foundTask);
    // console.log('All tasks:', taskList);

    // if (!foundTask) {
    //     return res.status(404).send('Task not found');
    // } else {
    //     foundTask.status = req.body.status;
    //     res.send(foundTask);
    // }
    // const newStatus: status = req.body.status;
}

export async function getTasks(req: express.Request, res: express.Response) {
    try {
        const taskList = await TaskModel.find();
        if (!taskList || taskList.length === 0) {
            res.status(404).send({ message: 'Tasks not found' });
        } else {
            res.send(taskList);
        }
    } catch (error: any) {
        console.error('Error', error.message);
        res.status(500).send('Internal Server Error');
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