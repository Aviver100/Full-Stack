import mongoose from "mongoose";

const MemberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    // address: {
    //     type: String,
    //     required: false,
    //     unique: true
    // },
    admin:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admins'
    }
    
});

const MemberModel = mongoose.model("Members", MemberSchema);
export default MemberModel;