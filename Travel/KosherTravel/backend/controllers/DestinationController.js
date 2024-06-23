import Destination from '../models/destination.js';

const createDestination = async (req, res) => {
    try {
        const newDestination = new Destination(req.body);
        const result = await newDestination.save();
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({
            error: 'An error occurred while saving the destination data'
        });
    }
};


async function getDestination(req,res){
    try {
        const destinations = await Destination.find();
        res.status(200).json(destinations);
    } catch (error) {
        res.status(200).json({ message: 'Error fetching destinations', error });
    }
}
async function getDestinationById(req,res){
    try {
        const destination = await Destination.findById(req.params.id).populate('hotels restaurants synagogues activities');
        res.status(200).json(destination);
    } catch (error) {
        res.status(200).json({ message: 'Error fetching destinations', error });
    }
}

export {createDestination, getDestination, getDestinationById};