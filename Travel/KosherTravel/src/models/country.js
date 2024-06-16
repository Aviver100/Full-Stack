import mongoose, {Schema} from 'mongoose';
import HotelSchema from './hotel'
import RestaurantSchema from './restaurant'
import SynagogueSchema from './synagogue'
import ActivitySchema from './activity'

const CountrySchema = new Schema({
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

const Country = mongoose.model('Country', CountrySchema);
export default Country; // Ensure this line is present