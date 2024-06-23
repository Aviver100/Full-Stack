import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar';
import styles from './DestinationForm.module.css';
import { baseURL } from '../../../Routes/router';

// import destination from '../../../backend/models/destination';


const DestinationForm = ({ onCountryCreated }) => {
  const [name, setName] = useState('');
  const [resturant, setResturant] = useState();
  const [list, setList] = useState([]);
  const [destinationDetails, setDetinationDetails] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseURL}/addDestination`, { name, resturant });
      if (typeof onCountryCreated === 'function') {
        onCountryCreated(response.data);
      }
      setName('');
      setResturant('');
      console.log('Destination created:', response.data);
    } catch (error) {
      console.error('Error creating Destination', error);
    }
    fetchDestinations();
  };

  async function fetchDestinations() {
    try {
      const response = await axios.get(`${baseURL}/destinations`);
      setList(response.data);
    } catch (error) {
      console.error('Error fetchin destinations', error);
    }
  }

  async function fetchDestinationById(id) {
    try {
      const response = await axios.get(`${baseURL}/destinations/${id}`);
      setDetinationDetails(response.data);
    } catch (error) {
      console.error('Error fetchin destinations', error);
    }
  }

  useEffect(() => {
    fetchDestinations();
  }, [])

  const handleSelectChange = (e) => {
    const selectedId = e.target.value;
    fetchDestinationById(selectedId);
  }


  return (
    <>
      <NavBar />
      <div className={styles.formDiv}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="שם היעד"
            required
          />
          {/* <input
            type="text"
            value={resturant}
            onChange={(e) => setResturant(e.target.value)}
            placeholder="שם המסעדה"
          /> */}
          <button type="submit">הוסף יעד</button>
        </form>
        {/* <select onChange={handleSelectChange}>
          {list.map((item) => (<option key={item._id}>{item.name}</option>))}
        </select> */}
      </div>
      {destinationDetails && (
        <div>
          <h2>{destinationDetails.name}</h2>
          <h3>Resturants</h3>
          <ul>
            {destinationDetails.resturants?.map((rest) => (
              <li key={rest._id}>{rest.name}</li>
            ))}
          </ul>
        </div>

      )

      }
      <table>
        <tbody>
          {list.map((item) =>
          (<tr key={item._id}>
            <td>{item.name}</td>
          </tr>))}
        </tbody>
      </table>

    </>
  );
};

export default DestinationForm;