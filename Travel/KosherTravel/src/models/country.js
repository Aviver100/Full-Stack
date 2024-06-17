import mongoose, { Schema } from 'mongoose';

const CountrySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    hotels: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel'
    }],
    restaurants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'
    }],
    synagogues: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Synagogue'
    }],
    activities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Activity'
    }]
});

const Country = mongoose.model('Country', CountrySchema);
export default Country;