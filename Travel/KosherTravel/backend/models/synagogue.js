import mongoose, { Schema } from 'mongoose';

const SynagogueSchema = new mongoose.Schema({
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
<<<<<<< HEAD:Travel/KosherTravel/backend/models/synagogue.js
export default SynagogueSchema;
=======
export default Synagogue;
>>>>>>> 6ccff89e9cb63b4d581240c611c069822be175c5:Travel/KosherTravel/src/models/synagogue.js
