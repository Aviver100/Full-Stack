import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import FlightList from './components/FlightList.tsx'
import Test from './components/test/test.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <FlightList />
    {/* <Test /> */}
  </React.StrictMode>,
)
