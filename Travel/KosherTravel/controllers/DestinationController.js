import destination from '../backend/models/destination.js';

export default async function creatDestination(req, res) {
    let newDestinationData = req.body;
    try {
        const newDestination = new destination(newDestinationData);
        await newDestination.save();
        res.send({ destination: newDestination });
    } catch (error) {
        console.log('Error:', error.message);
        res.status(500).send({ error: error.message });
    }
}