import React, { useState } from 'react';
import { createRestaurant } from '../services/api';

const RestaurantForm = ({ onRestaurantCreated }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [rating, setRating] = useState('');
    const [openingHours, setOpeningHours] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newRestaurant = await createRestaurant({ name, address, cuisine, rating, openingHours });
            onRestaurantCreated(newRestaurant);
            setName('');
            setAddress('');
            setCuisine('');
            setRating('');
            setOpeningHours('');
        } catch (error) {
            console.error('Error creating restaurant', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Restaurant Name"
                required
            />
            <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
                required
            />
            <input
                type="text"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                placeholder="Cuisine"
                required
            />
            <input
                type="number"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                placeholder="Rating"
                required
                min="1"
                max="5"
            />
            <input
                type="text"
                value={openingHours}
                onChange={(e) => setOpeningHours(e.target.value)}
                placeholder="Opening Hours"
                required
            />
            <button type="submit">Add Restaurant</button>
        </form>
    );
};

export default RestaurantForm;
