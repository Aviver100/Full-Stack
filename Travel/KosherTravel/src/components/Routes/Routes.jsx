import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CountryList from '../Pages/CountryList/CountryList'
import CountryForm from '../Pages/CountryForm/CountryForm'
import Times from '../Pages/Times/Times'
import Home from '../Pages/HomePage/HomePage'


function Routes() {
    const router = createBrowserRouter([{
        path: "/Destinations",
        element: <CountryList />
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
        path: "/addCountry",
        element: <CountryForm/>
    }
    ])
    return (
        <RouterProvider router={router}/>
    )
}


export default Routes