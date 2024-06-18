import React, { useState } from 'react';
<<<<<<<< HEAD:Travel/KosherTravel/src/Admin/DestinationForm/DestinationForm.jsx
import  createDestination  from '../../../controllers/DestinationController';
========
import { createCountry } from '../../../controllers/countryController';
>>>>>>>> 6ccff89e9cb63b4d581240c611c069822be175c5:Travel/KosherTravel/src/Admin/DestinationForm/CountryForm.jsx

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
