import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Routes from '../Routes/Routes'
// import Navbar from './components/NavBar/NavBar.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Navbar/> */}
    <Routes />
  </React.StrictMode>,
)