import mongoose from 'mongoose';

const destinationSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    restaurants: [{ name: String }],
    synagogues: [{ name: String }]
});

const Destination = mongoose.model('Destination', destinationSchema);

export default Destination;
