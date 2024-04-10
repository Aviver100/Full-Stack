import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Settings.scss'


function Settings() {
  const [firstName, setfirstName] = useState<string>("");
  const [lastName, setlastName] = useState<string>("");
  let navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (firstName?.trim() === "" && lastName?.trim() === "") {
      navigate('/');
    }
  }

  return (
    <>
      <div className='MainDiv'>
        <h3>Settings</h3>
        <Link to="/">Home</Link><br />
        <form name='myForm' onSubmit={handleSubmit}>
          <label>First Name:</label>
          <input type="text" value={firstName} onChange={e => setfirstName(e.target.value)} /><br />
          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={e => setlastName(e.target.value)} /><br />
          <input type='submit' value='Submit' />
        </form>
      </div>
    </>
  )
}

export default Settings