import React, { useEffect, useState } from 'react'
import styles from './FlightList.module.scss'
// import scrapper from 'airline-logo-scapper';


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
  // const [departures, setDepartures] = useState<flightProps[]>([]);
  // const [arrivals, setArrivals] = useState<filghtProps[]>([]);


// const airline = 'jet/ airways';

// let getLogo = async (airline:string) => {
//     try{
//         let logo = await scrapper(airline);
//         console.log(`data uri => ${logo}`);
//     }
//     catch(error) {
//         console.log(error);
//     }
// }

// getLogo(airline);

  useEffect(() => {
    document.title = 'Flights Board';
    const getData = async () => {
      const response = await fetch('https://data.gov.il/api/3/action/datastore_search?resource_id=e83f763b-b7d7-479e-b172-ae981ddc6de5&limit=1500')
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
          // new Date(flight.CHPTOL).getTime() >= newDate)
        ).sort((a, b) => new Date(a.CHSTOL).getTime() - new Date(b.CHSTOL).getTime());
      setFilteredList(arrivalsList);
      checkStatus();
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
        // new Date(flight.CHPTOL).getTime() >= newDate)
      ).sort((a, b) => new Date(a.CHSTOL).getTime() - new Date(b.CHSTOL).getTime());
    setFilteredList(arrivalsList);
    checkStatus();
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
  checkStatus();
  // findDepartures();

  return (

    <div className={styles.mainDiv}>
      <div className={styles.filter}>
        <button onClick={findDepartures}>המראות</button>
        <button onClick={findArrivals}>נחיתות</button><br/>
        <input type="text" placeholder='הזן טקסט לחיפוש' />
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
            <th>איזור צ'ק אין</th>
            <th>דלפק</th>
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
                <td className='toHide'>{flight.CHCKZN}</td>
                <td className='toHide'>{flight.CHCINT}</td>
                <td className='status'>{flight.CHRMINH}</td>
              </tr>
            ))}
        </tbody>

      </table>
    </div>
  )
}

export default FlightList