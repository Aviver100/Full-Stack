import mongoose from 'mongoose';

const HotelSchema = new mongoose.Schema({
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

const Hotel = mongoose.model('Hotel', HotelSchema);
export default HotelSchema;
// export default mongoose.model('Hotel', HotelSchema);
