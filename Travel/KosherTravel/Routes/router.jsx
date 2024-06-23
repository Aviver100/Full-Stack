import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import DestinationList from '../src/Pages/DestinationList/DestinationList'
import Times from '../src/Pages/Times/Times'
import Home from '../src/Pages/HomePage/HomePage'
import DestinationForm from '../src/Admin/DestinationForm/DestinationForm'
import ResturantForm from '../src/Admin/RestaurantForm/RestaurantForm'
import NavBar from '../src/components/NavBar/NavBar'

export const baseURL = 'http://localhost:4000';

function Routes() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <NavBar />},
            {
                path: "/Destinations", element: <DestinationList />
            },
            {
                path: "/Times", element: <Times />
            },
            {
                path: "/AddDestination", element: <DestinationForm />
            },
            {
                path: "/AddRestaurant", element: <ResturantForm />
            },
            // children: [
            //     {path: "/", element: <Home />},
            //     {path: "/Destinations", element: <DestinationList />},
            //     {path: "/Times", element: <Times />},
            //     {path: "/AddDestination", element: <DestinationForm />}
            // ]
        // }
    ]);
    return (
        <RouterProvider router={router} />
    )
}

export default Routes