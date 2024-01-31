import { status } from '../modules/TaskStatus';
import mongoose, { Schema, model } from 'mongoose';

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