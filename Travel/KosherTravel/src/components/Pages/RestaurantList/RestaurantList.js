import React, { useEffect, useState } from 'react';
import { getRestaurants } from '../services/api';

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const restaurants = await getRestaurants();
                setRestaurants(restaurants);
            } catch (error) {
                console.error('Error fetching restaurants', error);
            }
        };

        fetchRestaurants();
    }, []);

    return (
        <div>
            <h1>Restaurants</h1>
            <ul>
                {restaurants.map(restaurant => (
                    <li key={restaurant._id}>{restaurant.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantList;
