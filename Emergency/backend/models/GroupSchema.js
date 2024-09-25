import mongoose from "mongoose";
import MemberModel from "./MemberSchema";

const GroupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mebers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
    }],
    createdBy:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
});

const GroupModel = mongoose.model("Group", GroupSchema);
export default GroupModel;