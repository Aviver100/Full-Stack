import mongoose, {Schema} from 'mongoose';
import HotelSchema from './hotel.js'
import RestaurantSchema from './restaurant.js'
import SynagogueSchema from './synagogue.js'
import ActivitySchema from './activity.js'

const DestinationSchema = new mongoose.Schema({
    name: {type: String, required: true},
    hotels: [HotelSchema],
    restaurants: [RestaurantSchema],
    synagogues: [SynagogueSchema],
    activities: [ActivitySchema]
});

const destination = mongoose.model('Destination', DestinationSchema);
export default destination;
