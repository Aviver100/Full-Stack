import express from 'express';
import mongoose from 'mongoose';
import  creatDestination  from '../controllers/DestinationController.js';

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/KosherTravel', { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/addDestination', creatDestination);
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


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
