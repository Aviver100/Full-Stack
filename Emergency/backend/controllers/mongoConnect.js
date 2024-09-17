import mongoose from 'mongoose';

async function connectToMongo() {
    mongoose.connect('mongodb://localhost:27017/', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log('MongoDB connected'))
        .catch((error) => console.error('Connection error', error));
}

export default connectToMongo;