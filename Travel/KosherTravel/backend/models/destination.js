<<<<<<< HEAD:Travel/KosherTravel/backend/models/destination.js
import mongoose, {Schema} from 'mongoose';
import HotelSchema from './hotel.js'
import RestaurantSchema from './restaurant.js'
import SynagogueSchema from './synagogue.js'
import ActivitySchema from './activity.js'
=======
import mongoose, { Schema } from 'mongoose';
>>>>>>> 6ccff89e9cb63b4d581240c611c069822be175c5:Travel/KosherTravel/src/models/country.js

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

<<<<<<< HEAD:Travel/KosherTravel/backend/models/destination.js
const destination = mongoose.model('Destination', DestinationSchema);
export default destination;
=======
const Country = mongoose.model('Country', CountrySchema);
export default Country;
>>>>>>> 6ccff89e9cb63b4d581240c611c069822be175c5:Travel/KosherTravel/src/models/country.js
