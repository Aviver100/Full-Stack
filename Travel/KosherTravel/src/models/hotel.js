import mongoose, {Schema} from 'mongoose';

const HotelSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    }
});

// module.exports = mongoose.model('Hotel', HotelSchema);
export default HotelSchema;
// export default mongoose.model('Hotel', HotelSchema);
