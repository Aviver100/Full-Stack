import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Settings.scss'
import { confirmAlert } from 'react-confirm-alert';
// import AlertPopup from '../ConfirmAlert/ConfirmAlert';
import 'react-confirm-alert/src/react-confirm-alert.css';


function Settings() {
  const [firstName, setfirstName] = useState<string>("");
  const [lastName, setlastName] = useState<string>("");
  let navigate = useNavigate();

  function LeavingPage() {
    if (firstName?.trim() === "" && lastName?.trim() === "") {
      navigate('/');
    } else {
      confirmAlert({
        title: 'Leaving would result in data loss',
        message: 'Are you sure to do this?',
        buttons: [
          {
            label: 'I understand - continue navigating to home.',
            onClick: () => navigate('/')
          },
          {
            label: 'No, go back - stay on the settings page.',
            onClick: () => navigate('/settings')
          }
        ]
      });
    }
  }

  return (
    <>
      <div className='MainDiv'>
        <div className='MainDiv__Navigation'>
        <h3 >Settings</h3>
        {/* <Link className='Link' to="/" onClick={LeavingPage}>Home</Link><br /> */}
        <p className='Link' onClick={LeavingPage}>Home</p><br />
        </div>
        <form name='myForm'>
          <label>First Name:</label><br />
          <input type="text" value={firstName} onChange={e => setfirstName(e.target.value)} /><div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
          </div>
          <label>Last Name:</label><br />
          <input type="text" value={lastName} onChange={e => setlastName(e.target.value)} /><br />
          <input type='submit' value='Submit' />
        </form>
      </div>
    </>
  )
}

export default Settings