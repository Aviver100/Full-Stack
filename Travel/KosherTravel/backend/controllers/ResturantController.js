import Restaurant from '../models/restaurant.js';
import Destination from '../models/destination.js';

const createRestaurant = async (req, res) => {
    const {
        name,
        address,
        description,
        imgUrl,
        openingHours,
        destinationId
    } = req.body;

    try {
        console.log('Received data:', req.body);


        if (!destinationId) {
            console.error('Destination ID is required');
            return res.status(400).json({
                message: 'Destination ID is required'
            });
        }

        const newRestaurant = new Restaurant({
            name,
            address,
            description,
            imgUrl,
            openingHours
        });

        const savedRestaurant = await newRestaurant.save();

        const destination = await Destination.findById(destinationId);
        if (!destination) {
            console.error('Destination not found');
            return res.status(404).json({
                message: 'Destination not found'
            });
        }

        destination.restaurants.push(savedRestaurant);
        await destination.save();

        res.status(201).json(savedRestaurant);
    } catch (error) {
        console.error('Error creating restaurant:', error);
        res.status(500).json({
            message: 'Internal server error'
        });
    }
};

export default createRestaurant;
