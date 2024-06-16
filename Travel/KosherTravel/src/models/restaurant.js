import mongoose, {Schema} from 'mongoose';

const RestaurantSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    cuisine: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    openingHours: {
        type: String,
        required: true,
    }
});

// module.exports = mongoose.model('Restaurant', RestaurantSchema);
export default RestaurantSchema;