import Destination from '../backend/models/destination.js';

// export default async function creatDestination(req, res) {
//     let newDestinationData = req.body;
//     try {
//         const newDestination = new Destination(newDestinationData);
//         await newDestination.save();
//         res.send({ destination: newDestination });
//     } catch (error) {
//         console.log('Error:', error.message);
//         res.status(500).send({ error: error.message });
//     }
// }

export const createDestination = async (data) => {
    const response = await fetch('/api/destinations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Failed to create destination');
    }

    return await response.json();
};
