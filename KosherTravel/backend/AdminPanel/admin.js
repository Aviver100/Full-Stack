import express from 'express';
import Destination from '../models/Destination.js';
import upload from '../middleware/upload.js';

const router = express.Router();

// Add a new destination
router.post('/api/admin/destination', upload.single('image'), async (req, res) => {
    const { name, description, restaurants, synagogues } = req.body;
    const image = req.file ? req.file.filename : '';

    try {
        const destination = new Destination({
            name,
            description,
            image,
            restaurants: JSON.parse(restaurants),
            synagogues: JSON.parse(synagogues)
        });
        await destination.save();
        res.status(201).json(destination);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a destination
router.put('/destination/:id', upload.single('image'), async (req, res) => {
    const { name, description, restaurants, synagogues } = req.body;
    const image = req.file ? req.file.filename : '';

    try {
        const destination = await Destination.findById(req.params.id);
        if (!destination) {
            return res.status(404).json({ message: 'Destination not found' });
        }

        destination.name = name;
        destination.description = description;
        if (image) destination.image = image;
        destination.restaurants = JSON.parse(restaurants);
        destination.synagogues = JSON.parse(synagogues);

        await destination.save();
        res.json(destination);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a destination
router.delete('/destination/:id', async (req, res) => {
    try {
        const destination = await Destination.findById(req.params.id);
        if (!destination) {
            return res.status(404).json({ message: 'Destination not found' });
        }

        await destination.remove();
        res.json({ message: 'Destination deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
