import React, { useState } from 'react';
import { createCountry } from '../services/api';

const CountryForm = ({ onCountryCreated }) => {
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newCountry = await createCountry({ name });
            onCountryCreated(newCountry);
            setName('');
        } catch (error) {
            console.error('Error creating country', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Country Name"
                required
            />
            <button type="submit">Add Country</button>
        </form>
    );
};

export default CountryForm;
