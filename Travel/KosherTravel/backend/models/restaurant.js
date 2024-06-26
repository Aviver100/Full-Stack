import mongoose, {
    Schema
} from 'mongoose';

const RestaurantSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    openingHours: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    }
});

// module.exports = mongoose.model('Restaurant', RestaurantSchema);
export default RestaurantSchema;