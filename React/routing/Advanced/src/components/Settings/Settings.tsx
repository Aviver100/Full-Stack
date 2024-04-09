import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import './Settings.scss'


function Settings() {
  const [firstName, setfirstName] = useState<string>("");
  const [lastName, setlastName] = useState<string>("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('hello');
    
    if (firstName?.trim() === "" && lastName?.trim() === "") {
      // <Navigate to="/" />      
      // Navigate('/');
      {alert("the form is empty")}
    }
  }
  
  return (
    <>
      <div className='MainDiv'>
        <div>Settings</div>
        <Link to="/">Home</Link><br />

        <form name='myForm' onSubmit={handleSubmit}>
          <label>First Name:</label>
          <input type="text" value={firstName} onChange={e => setfirstName(e.target.value)} /><br />
          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={e => setlastName(e.target.value)} /><br />
          <input type='submit' value='Submit' />
        </form>
        {/* <p>{FirstName}</p> */}
        {/* <p>{lastName}</p> */}
      </div>
    </>
  )
}

export default Settings