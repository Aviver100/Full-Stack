import mongoose, { Schema, model } from 'mongoose';

export enum status{
    ToDo = "To Do",
    Done = "Done"
}

export interface task {
    id: string,
    title: string,
    description: string,
    status: status
}

const TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    // status{
        
    // }
})