import React, { useEffect, useState } from 'react'
import styles from './FlightList.module.scss'
import FlightCard from './FlightCard/FlightCard';
import FlightLandIcon from '@mui/icons-material/FlightLand';


interface flightProps {
  // מספר סידורי בטבלה
  "_id": number,
  // 2 אותיות קוד ראשונות לחברה
  "CHOPER": string,
  // המספר + האותיות = הקוד טיסה
  "CHFLTN": string,
  // שם החברה באנגלית
  "CHOPERD": string,
  // שעת נחיתה מתוכננת
  "CHSTOL": string,
  // שעת נחיתה בפועל
  "CHPTOL": string,
  // בידוק
  "CHAORD": string,
  // שם קוד לשדה המוצא
  "CHLOC1": string,
  // שם מלא לשדה המוצא באנגלית
  "CHLOC1D": string,
  // שם מלא לשדה המוצא בעברית
  "CHLOC1TH": string,
  "CHLOC1T": string,
  "CHLOC1CH": string,
  // שם מדינת המוצא באנגלית
  "CHLOCCT": string,
  // טרמינל
  "CHTERM": number,
  // דלפק
  "CHCINT": string,
  // איזור צ'ק אין
  "CHCKZN": string,
  // LANDED
  "CHRMINE": string,
  // נחתה
  "CHRMINH": string
}


function FlightList() {
  const [list, setList] = useState<flightProps[]>([]);
  const [filteredlist, setFilteredList] = useState<flightProps[]>([]);
  const [hideColumns, setHideColumns] = useState(false)
  const [search, setSearch] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const searchFlight = Object.keys(list).filter((flightText) =>
    flightText.toLowerCase().includes(search))

  // const data = {
  //   nodes: list.filter((item) => item.CHLOCCT.includes(search))
  // }

  useEffect(() => {
    document.title = 'Flights Board';
    const getData = async () => {
      const response = await fetch('https://data.gov.il/api/3/action/datastore_search?resource_id=e83f763b-b7d7-479e-b172-ae981ddc6de5&limit=1000')
      const data = await response.json();
      setList(data.result.records);
      setFilteredList(data.result.records);
    }
    getData();
  }, [])
  function findArrivals() {
    const currentTime = new Date().getTime();
    const newDate = currentTime - (60 * 60 * 1000);
    const arrivalsList =
      list.filter(flight =>
        flight.CHCKZN === null &&
        (
          (flight.CHPTOL && new Date(flight.CHPTOL).getTime() >= newDate) ||
          (flight.CHSTOL && new Date(flight.CHSTOL).getTime() >= newDate)
        )
      ).sort((a, b) => new Date(a.CHSTOL).getTime() - new Date(b.CHSTOL).getTime());
    setFilteredList(arrivalsList);
    setHideColumns(true)

    const departuresButton = document.getElementById('findDepartures') as HTMLButtonElement;
    departuresButton.style.backgroundColor = '#D3D3D3'

    const arrivalsButton = document.getElementById('findArrivals') as HTMLButtonElement;
    arrivalsButton.style.backgroundColor = 'red'
  }


  function findDepartures() {
    const currentTime = new Date().getTime();
    const newDate = currentTime - (60 * 60 * 1000);
    const arrivalsList =
      list.filter(flight =>
        flight.CHCKZN !== null &&
        (
          (flight.CHPTOL && new Date(flight.CHPTOL).getTime() >= newDate) ||
          (flight.CHSTOL && new Date(flight.CHSTOL).getTime() >= newDate)
        )
      ).sort((a, b) => new Date(a.CHSTOL).getTime() - new Date(b.CHSTOL).getTime());
    setFilteredList(arrivalsList);
    setHideColumns(false);
    const departuresButton = document.getElementById('findDepartures') as HTMLButtonElement;
    departuresButton.style.backgroundColor = 'red'

    const arrivalsButton = document.getElementById('findArrivals') as HTMLButtonElement;
    arrivalsButton.style.backgroundColor = '#D3D3D3'

  }

  const formatTime = (dateTimeString: string) => {
    const date = new Date(dateTimeString);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }
  function checkStatus() {

    const tdStatus = document.getElementsByClassName('status') as HTMLCollectionOf<HTMLTableCellElement>;
    for (let i = 0; i < tdStatus.length; i++) {
      let value = tdStatus[i].innerText;
      if (value === 'בזמן' || 'נחתה') {
        tdStatus[i].style.backgroundColor = 'green';
      }
      if (value === 'עיכוב') {
        tdStatus[i].style.backgroundColor = 'yellow';
      }
      if (value === 'לא סופי') {
        tdStatus[i].style.backgroundColor = 'orange';
      }
      if (value === 'מבוטלת') {
        tdStatus[i].style.backgroundColor = 'red';
      }
      if (value === 'סופי') {
        tdStatus[i].style.backgroundColor = '#ACE1AF';
      }
    }
  }

  useEffect(() => {
    checkStatus();
  }, [filteredlist]);

  useEffect(() => {
    findArrivals();
  }, [])

  return (
    <div className={styles.mainDiv}>
      <div className={styles.filter}>
        <button id='findDepartures' onClick={findDepartures}>המראות
        <img src="https://www.svgrepo.com/show/31354/departure.svg" alt="" />
        </button>
        <button id='findArrivals' onClick={findArrivals}>נחיתות
        <img src="https://cdn-icons-png.freepik.com/512/192/192150.png" alt="" />
        </button><br />
        
        <input id='search' onChange={handleSearch} type="text" placeholder='הזן טקסט לחיפוש' />
      </div>
      <table id='mainTable'>
        <thead>
          <tr>
            <th>חברת תעופה</th>
            <th>מספר טיסה</th>
            <th>מוצא</th>
            <th>טרמינל</th>
            <th>מתוכננת</th>
            <th>עדכנית</th>
            <th>בידוק</th>
            {!hideColumns && <th>איזור צ'ק אין</th>}
            {!hideColumns && <th>דלפק</th>}
            <th>סטטוס</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredlist.map((flight) => (
              <tr key={flight._id}>
                <td >{flight.CHOPERD}</td>
                <td>{flight.CHOPER}{flight.CHFLTN}</td>
                <td >{flight.CHLOC1TH}</td>
                <td >{flight.CHTERM}</td>
                <td >{formatTime(flight.CHSTOL)}</td>
                <td >{formatTime(flight.CHPTOL)}</td>
                <td >{flight.CHAORD}</td>
                {!hideColumns && <td>{flight.CHCKZN}</td>}
                {!hideColumns && <td>{flight.CHCINT}</td>}
                <td className='status'>{flight.CHRMINH}</td>
              </tr>
            ))}
        </tbody>

      </table>
    </div>
  )
}

export default FlightList