import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
// import {getCountries} from '../../../backend/controllers/countryController';
const DestinationList = () => {
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
        <>
            <NavBar />
            <div>
                <h1>Destination</h1>
                <ul>
                    {countries.map(country => (
                        <li key={country._id}>{country.name}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default DestinationList;
