import React, { useEffect, useState } from 'react'
import './FlightList.css'

interface filghtProps {
  "_id": number,
  "CHOPER": string,
  "CHFLTN": number,
  "CHOPERD": string,
  "CHSTOL": string,
  "CHPTOL": string,
  "CHAORD": string,
  "CHLOC1": string,
  "CHLOC1D": string,
  "CHLOC1TH": string,
  "CHLOC1T": string,
  "CHLOC1CH": string,
  "CHLOCCT": string,
  "CHTERM": number,
  "CHCINT": string,
  "CHCKZN": string,
  "CHRMINE": string,
  "CHRMINH": string
}


function FlightList() {
  const [list, setList] = useState<filghtProps[]>([]);
  // const [list, setList] = useState([]);


  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://data.gov.il/api/3/action/datastore_search?resource_id=e83f763b-b7d7-479e-b172-ae981ddc6de5&limit=15')
      const data = await response.json();
      setList(data.result.records);
    }
    getData();
  }, [])

  // useEffect(() => {
  //   fetch('https://data.gov.il/api/3/action/datastore_search?resource_id=e83f763b-b7d7-479e-b172-ae981ddc6de5&limit=25')
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setList(data);
  //     })
  // },[])
  return (
    <>
      {console.log(list)}

      <div>GetList</div>
      <>
        <div className="table">
          <table id="customers">
            <tr>
              <th>יעד</th>
              <th>חברה</th>
              <th>סטטוס</th>
            </tr>
            {list.map((flight) => (
              <tr key={flight._id}>
                <td>{flight.CHLOC1TH}</td>
                <td >{flight.CHOPERD}</td>
                <td >{flight.CHAORD}</td>
               {/* <td >{flight.CHCINT}</td>
                <td >{flight.CHCKZN}</td> 
                <td >{flight.CHFLTN}</td>
                <td >{flight.CHLOC1}</td>
                <td >{flight.CHLOC1CH}</td>
                <td >{flight.CHLOC1D}</td>
                <td >{flight.CHLOC1T}</td>
                <td >{flight.CHLOC1TH}</td>
                <td >{flight.CHLOCCT}</td>
                <td >{flight.CHOPER}</td> */}
              </tr>
            ))}
            {/* <tr>
                <td key={flight._id}>{flight.CHLOC1TH}</td>
                <td key={flight._id}>{flight.CHOPERD}</td>
                <td key={flight._id}>{flight.CHRMINH}</td>
              </tr> */}

          </table>
        </div>
      </>
    </>
  )
}

export default FlightList