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
    hotels: {
        type: [HotelSchema]
    },
    Restaurants:{
        type:[RestaurantSchema]
    },
    Synagogue:{
        type:[SynagogueSchema]
    },
    Activity:{
        type:[ActivitySchema]
    }
});

const destination = mongoose.model('Destination', DestinationSchema);
export default destination;
