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
    password: {
        type: String,
        required: true
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "admin"
    },
    isAdmin: {
        Boolean,
        default: false
    },
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        default: null
    },
    subordinates: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    }
});

const UserModel = mongoose.model("users", UserSchema);
export default UserModel;