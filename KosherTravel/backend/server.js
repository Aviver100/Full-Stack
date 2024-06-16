import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import destinationRoutes from './routes/destinations.js';
import adminRoutes from './AdminPanel/admin.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Serve uploaded images

mongoose.connect('mongodb://localhost:27017/travel-blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/api/destinations', destinationRoutes);
app.use('/api/admin', adminRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
