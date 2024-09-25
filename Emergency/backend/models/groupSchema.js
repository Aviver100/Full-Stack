import mongoose from "mongoose";
import UserModel from "./userSchema";

const groupSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }]
})

const GroupModel = mongoose.model("groups", groupSchema);
export default GroupModel;