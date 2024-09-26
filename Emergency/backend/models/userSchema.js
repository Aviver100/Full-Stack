import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    // phone: {
    //     type: Number,
    //     // required: true,
    //     unique: true
    // },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'member'],
        default: 'member',
    },
    managedGroups: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'
    }],
    memberGroups: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;