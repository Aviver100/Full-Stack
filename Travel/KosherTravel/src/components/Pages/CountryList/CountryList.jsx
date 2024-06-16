import React, { useEffect, useState } from 'react';
import { getCountries } from '../../../controllers/countryController';
const CountryList = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const countries = await getCountries();
                setCountries(countries);
            } catch (error) {
                console.error('Error fetching countries', error);
            }
        };

        fetchCountries();
    }, []);

    return (
        <div>
            <h1>Countries</h1>
            <ul>
                {countries.map(country => (
                    <li key={country._id}>{country.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CountryList;
