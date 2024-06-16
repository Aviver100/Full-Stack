import mongoose, { Schema } from 'mongoose';

const SynagogueSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    rabbi: {
        type: String,
        required: true,
    },
    services: {
        type: [String], // List of services provided
        required: true,
    }
});

const Synagogue = mongoose.model('Synagogue', SynagogueSchema);
export default Synagogue;