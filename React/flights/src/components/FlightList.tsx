import React, { useEffect, useState } from 'react'

interface filghtProps{
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
  useEffect(() => {
    fetch('https://data.gov.il/api/3/action/datastore_search?resource_id=e83f763b-b7d7-479e-b172-ae981ddc6de5&limit=5')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setList(data);
      })
  })
  return (
    <>
      <div>GetList</div>
      {list.map((flight) => (
        <p key={flight._id}>{flight.CHOPER}</p>
      ))}
    </>
  )
}

export default FlightList