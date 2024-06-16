// backend/routes/items.js
import express from 'express';
import Item from '../models/Item.js';

const router = express.Router();

router.post('/sell', (req, res) => {
  const newItem = new Item(req.body);
  newItem.save().then(item => res.json(item)).catch(err => res.status(400).json(err));
});

router.get('/', (req, res) => {
  Item.find().then(items => res.json(items)).catch(err => res.status(400).json(err));
});

router.get('/:id', (req, res) => {
  Item.findById(req.params.id).then(item => res.json(item)).catch(err => res.status(400).json(err));
});

export default router;
