// backend/models/Item.js
import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now }
});

const Item = mongoose.model('Item', ItemSchema);
export default Item;
