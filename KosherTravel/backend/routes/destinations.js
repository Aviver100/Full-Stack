import express from 'express';
import Destination from '../models/Destination.js';

const router = express.Router();

router.get('/:id', async (req, res) => {
    try {
        const destination = await Destination.findById(req.params.id);
        res.json(destination);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
