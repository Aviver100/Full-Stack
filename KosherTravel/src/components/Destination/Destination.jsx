import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Destination = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(`/api/destinations/${id}`)
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    if (!data) return <div>Loading...</div>;

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <h2>Kosher Restaurants</h2>
            <ul>
                {data.restaurants.map((restaurant, index) => (
                    <li key={index}>{restaurant.name}</li>
                ))}
            </ul>
            <h2>Synagogues</h2>
            <ul>
                {data.synagogues.map((synagogue, index) => (
                    <li key={index}>{synagogue.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Destination;
