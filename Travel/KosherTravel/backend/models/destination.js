import mongoose, {Schema} from 'mongoose';
import HotelSchema from './hotel.js'
import RestaurantSchema from './restaurant.js'
import SynagogueSchema from './synagogue.js'
import ActivitySchema from './activity.js'

const DestinationSchema = new mongoose.Schema({
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

const Destination = mongoose.model('Destination', DestinationSchema);
export default Destination;
