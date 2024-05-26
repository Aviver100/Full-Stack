import React from 'react'

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

function FlightCard(flight:filghtProps) {

  return (

    <div className={flightDiv}></div>
  )
}

export default FlightCard