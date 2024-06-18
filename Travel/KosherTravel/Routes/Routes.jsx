import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
<<<<<<< HEAD:Travel/KosherTravel/Routes/Routes.jsx
import DestinationList from '../src/Pages/DestinationList/DestinationList'
import Times from '../src/Pages/Times/Times'
import Home from '../src/Pages/HomePage/HomePage'
import DestinationForm from '../src/Admin/DestinationForm/DestinationForm'
=======
import CountryList from '../Pages/CountryList/CountryList'
import CountryForm from '../Pages/CountryForm/CountryForm'
import Times from '../Pages/Times/Times'
import Home from '../Pages/HomePage/HomePage'

>>>>>>> 6ccff89e9cb63b4d581240c611c069822be175c5:Travel/KosherTravel/src/components/Routes/Routes.jsx

function Routes() {
    const router = createBrowserRouter([{
        path: "/Destinations",
        element: <DestinationList />
    },
    {
        path: "/Times",
        element: <Times/>
    },
    {
        path: "/",
        element: <Home/>
    },
    {
<<<<<<< HEAD:Travel/KosherTravel/Routes/Routes.jsx
        path: "/AddDestination",
        element: <DestinationForm/>
=======
        path: "/addCountry",
        element: <CountryForm/>
>>>>>>> 6ccff89e9cb63b4d581240c611c069822be175c5:Travel/KosherTravel/src/components/Routes/Routes.jsx
    }
    ])
    return (
        <RouterProvider router={router}/>
    )
}


export default Routes