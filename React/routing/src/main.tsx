import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import NavBar from './components/NavBar/NavBar'
import Users from './components/Users/Users'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Users/>
    </BrowserRouter>
  </React.StrictMode>,
)
