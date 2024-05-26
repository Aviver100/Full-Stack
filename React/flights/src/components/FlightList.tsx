import React, { useEffect, useState } from 'react'
import styles from './FlightList.module.scss'


interface filghtProps {
  // מספר סידורי בטבלה
  "_id": number,
  // 2 אותיות קוד ראשונות לחברה
  "CHOPER": string,
  // המספר + האותיות = הקוד טיסה
  "CHFLTN": number,
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
  const [list, setList] = useState<filghtProps[]>([]);
  const [departures, setDepartures] = useState<filghtProps[]>([]);
  const [arrivals, setArrivals] = useState<filghtProps[]>([]);


  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://data.gov.il/api/3/action/datastore_search?resource_id=e83f763b-b7d7-479e-b172-ae981ddc6de5&limit=50')
      const data = await response.json();
      setList(data.result.records);
    }
    getData();
  }, [])

  async function selectList() {
    const findArrivals =
      list.filter(flight => flight.CHCKZN === null)
    if (findArrivals) {
      setArrivals(findArrivals);
    } else {
      setDepartures(findArrivals);
    }
  }

  const formatTime = (dateTimeString: string) => {
    const date = new Date(dateTimeString);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }
  // { console.log(list) }

  return (

    <div className={styles.mainDiv}>
      <div className={styles.filter}>
        <button onClick={selectList}>Departures</button>
        <button onClick={selectList}>Arrivals</button>
      </div>
      <table>
        <thead>
          <tr>
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
            list.map((flight) => (
              <tr key={flight._id}>
                <td>{flight.CHOPER}{flight.CHFLTN}</td>
                <td >{flight.CHLOC1TH}</td>
                <td >{flight.CHTERM}</td>
                <td >{formatTime(flight.CHSTOL)}</td>
                <td >{formatTime(flight.CHPTOL)}</td>
                <td >{flight.CHAORD}</td>
                <td >{flight.CHCKZN}</td>
                <td >{flight.CHCINT}</td>
                <td >{flight.CHRMINH}</td>
              </tr>
            ))}
        </tbody>

      </table>
    </div>
  )
}

export default FlightList