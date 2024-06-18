import React, { useState } from 'react';
import  createDestination  from '../../../controllers/DestinationController';

const DestinationForm = ({ onCountryCreated }) => {
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newDestinations = await createDestination({ name });
            onCountryCreated(newDestinations);
            setName('');
        } catch (error) {
            console.error('Error creating Destination', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Destination Name"
                required
            />
            <button type="submit">Add Country</button>
        </form>
    );
};

export default DestinationForm;
