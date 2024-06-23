import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import axios from 'axios';
import { baseURL } from '../../../Routes/router';
import Styles from './DestinationList.module.css'

const DestinationList = () => {
    const [destinationsList, setDestinationsList] = useState([]);

    async function fetchDestinations() {
        try {
            const response = await axios.get(`${baseURL}/destinations`);
            setDestinationsList(response.data);
        } catch (error) {
            console.error('Error fetchin destinations', error);
        }
    }

    useEffect(() => {
        fetchDestinations();
    }, [])
    return (
        <>
            <NavBar />
            <div>
                <h1>Destination</h1>
                <div className={Styles.mainDestBoxes}>
                    {destinationsList.map(dest => (
                        <div className={Styles.destBox} key={dest._id}>
                            <h5>
                                {dest.name}
                            </h5>
                        </div>
                    ))}
                </div>
            </div>
            <div></div>
        </>
    );
};

export default DestinationList;
