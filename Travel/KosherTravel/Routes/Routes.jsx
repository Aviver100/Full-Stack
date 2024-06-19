import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import DestinationList from '../src/Pages/DestinationList/DestinationList'
import Times from '../src/Pages/Times/Times'
import Home from '../src/Pages/HomePage/HomePage'
import DestinationForm from '../src/Admin/DestinationForm/DestinationForm'

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
        path: "/AddDestination",
        element: <DestinationForm/>
    }
    ])
    return (
        <RouterProvider router={router}/>
    )
}


export default Routes