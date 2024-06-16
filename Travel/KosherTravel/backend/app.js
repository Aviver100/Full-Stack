import express from 'express';
import mongoose from 'mongoose';
import {
    createActivity, getActivities, getActivity, updateActivity, deleteActivity
} from '../src/controllers/activityController.js';
import {
    createSynagogue, getSynagogues, getSynagogue, updateSynagogue, deleteSynagogue
} from '../src/controllers/synagogueController.js';
import {
    createRestaurant, getRestaurants, getRestaurant, updateRestaurant, deleteRestaurant
} from '../src/controllers/restaurantController.js';
import {
    createCountry, getCountries, getCountry, updateCountry, deleteCountry
} from '../src/controllers/countryController.js';

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/KosherTravel', { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/activities', createActivity);
app.get('/activities', getActivities);
app.get('/activities/:id', getActivity);
app.put('/activities/:id', updateActivity);
app.delete('/activities/:id', deleteActivity);

app.post('/synagogues', createSynagogue);
app.get('/synagogues', getSynagogues);
app.get('/synagogues/:id', getSynagogue);
app.put('/synagogues/:id', updateSynagogue);
app.delete('/synagogues/:id', deleteSynagogue);

app.post('/restaurants', createRestaurant);
app.get('/restaurants', getRestaurants);
app.get('/restaurants/:id', getRestaurant);
app.put('/restaurants/:id', updateRestaurant);
app.delete('/restaurants/:id', deleteRestaurant);

app.post('/countries', createCountry);
app.get('/countries', getCountries);
app.get('/countries/:id', getCountry);
app.put('/countries/:id', updateCountry);
app.delete('/countries/:id', deleteCountry);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
