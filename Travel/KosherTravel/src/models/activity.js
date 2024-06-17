import mongoose, { Schema } from 'mongoose';

const ActivitySchema = new Schema({
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
export default Activity;
