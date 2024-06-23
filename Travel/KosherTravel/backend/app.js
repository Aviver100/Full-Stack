import express from 'express';
import mongoose from 'mongoose';
import {createDestination, getDestination,getDestinationById}  from './controllers/DestinationController.js';
import createRestaurant from './controllers/ResturantController.js';
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors());




mongoose.connect('mongodb://localhost:27017/KosherTravel', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Connection error', error);
});

//Destination
app.post('/addDestination', createDestination);
app.get('/destinations', getDestination);
app.get('/destinations/:id', getDestinationById);

//Resturant
app.post('/addRestaurant', createRestaurant);


const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


// app.get('/countries', getCountries);
// app.get('/countries/:id', getCountry);
// app.put('/countries/:id', updateCountry);
// app.delete('/countries/:id', deleteCountry);

// app.post('/activities', createActivity);
// app.get('/activities', getActivities);
// app.get('/activities/:id', getActivity);
// app.put('/activities/:id', updateActivity);
// app.delete('/activities/:id', deleteActivity);

// app.post('/synagogues', createSynagogue);
// app.get('/synagogues', getSynagogues);
// app.get('/synagogues/:id', getSynagogue);
// app.put('/synagogues/:id', updateSynagogue);
// app.delete('/synagogues/:id', deleteSynagogue);

// app.post('/restaurants', createRestaurant);
// app.get('/restaurants', getRestaurants);
// app.get('/restaurants/:id', getRestaurant);
// app.put('/restaurants/:id', updateRestaurant);
// app.delete('/restaurants/:id', deleteRestaurant);