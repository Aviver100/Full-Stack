import mongoose, { Schema } from 'mongoose';

const ActivitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    recommendedTime: {
        type: String, // E.g., "morning", "afternoon", "evening"
        required: true,
    }
});

const Activity = mongoose.model('Activity', ActivitySchema);
<<<<<<< HEAD:Travel/KosherTravel/backend/models/activity.js
export default ActivitySchema;
=======
export default Activity;
>>>>>>> 6ccff89e9cb63b4d581240c611c069822be175c5:Travel/KosherTravel/src/models/activity.js
