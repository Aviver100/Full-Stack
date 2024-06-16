import Hotel from '../models/hotel.js'; // Adjust path and file extension as necessary

// Create a new hotel
export const createHotel = async (req, res) => {
    try {
        const { name, address, rating } = req.body;
        const hotel = new Hotel({ name, address, rating });
        await hotel.save();
        res.status(201).json(hotel);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all hotels
export const getHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single hotel by ID
export const getHotelById = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        if (!hotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }
        res.status(200).json(hotel);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a hotel by ID
export const updateHotel = async (req, res) => {
    try {
        const { name, address, rating } = req.body;
        const hotel = await Hotel.findById(req.params.id);
        if (!hotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }
        if (name) hotel.name = name;
        if (address) hotel.address = address;
        if (rating) hotel.rating = rating;
        await hotel.save();
        res.status(200).json(hotel);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a hotel by ID
export const deleteHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findByIdAndDelete(req.params.id);
        if (!hotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }
        res.status(200).json({ message: 'Hotel deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
