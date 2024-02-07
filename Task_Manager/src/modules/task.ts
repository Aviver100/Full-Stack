import mongoose, { Schema, model } from 'mongoose';


export enum status {
    ToDo = "To Do",
    Done = "Done"
}

// interface Itask extends Document {
//     title: string;
//     description: string
// }

export interface task {
    id: string,
    title: string,
    description: string,
    status: status
}

const TaskSchema = new Schema({
    // id:{
    //     type: String,
    //     require: true
    // },
    title: {
        type: String,
        require: true,
        minLength: 5
    },
    description: {
        type: String,
        require: true,
        minLength: 5
    },
    // status:{
    //     type: String,
    //     enum: [status.ToDo, status.Done],
    //     default: status.ToDo
    // },
})

export const TaskModel = mongoose.model("task", TaskSchema);