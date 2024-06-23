import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar';
import { baseURL } from '../../../Routes/router';
// const baseURL = 'http://localhost:4000';

const RestaurantForm = ({ onRestaurantCreated }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [openingHours, setOpeningHours] = useState('');
    const [description, setDescription] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [destinationList, setDestinationList] = useState([]);
    const [selectedDestinationId, setSelectedDestinationId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newRestaurant = {
                name,
                address,
                description,
                imgUrl,
                openingHours,
                destinationId: selectedDestinationId
            };
    
            console.log('Sending data to server:', newRestaurant); // Log data being sent
            const response = await axios.post(`${baseURL}/addRestaurant`, newRestaurant); // Send newRestaurant directly
            if (typeof onRestaurantCreated === 'function') {
                onRestaurantCreated(response.data);
                console.log(response.data); // Log response data
            }
    
            // Reset form fields
            setName('');
            setAddress('');
            setDescription('');
            setImgUrl('');
            setOpeningHours('');
        } catch (error) {
            console.error('Error creating restaurant:', error);
        }
    };
    
    async function fetchDestinations() {
        try {
            const response = await axios.get(`${baseURL}/destinations`);
            setDestinationList(response.data);
        } catch (error) {
            console.error('Error fetching destinations', error);
        }
    }

    useEffect(() => {
        fetchDestinations();
        // console.log(selectedDestinationId);
    }, []);
    
    const handleSelectChange = (e) => {
        setSelectedDestinationId(e.target.value);
    };

    return (
        <>
            <NavBar />
            <form onSubmit={handleSubmit}>
                <select onChange={handleSelectChange} value={selectedDestinationId} required>
                    <option value="">Select Destination</option>
                    {destinationList.map((item) => (
                        <option key={item._id} value={item._id}>
                            {item.name}
                        </option>
                    ))}
                </select>
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
                />
                <input
                    type="text"
                    value={openingHours}
                    onChange={(e) => setOpeningHours(e.target.value)}
                    placeholder="Opening Hours"
                />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    required
                />
                <input
                    type="text"
                    value={imgUrl}
                    onChange={(e) => setImgUrl(e.target.value)}
                    placeholder="Image URL"
                />
                <button type="submit">Add Restaurant</button>
            </form>
        </>
    );
};

export default RestaurantForm;
