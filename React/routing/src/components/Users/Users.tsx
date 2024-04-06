import React from 'react'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import UserPage from '../UserPage/UserPage'

function navbar() {

    const router = createBrowserRouter([{
        path: "/user/:id",
        element: <UserPage/>
    }])
    
  return (
    <>
    <Link to="/user/1"> Uesr 1</Link>
    <Link to="/user/2"> Uesr 2</Link>
    <Link to="/user/3"> Uesr 3</Link>
    <Link to="/user/4"> Uesr 4</Link>
    <Link to="/user/5"> Uesr 5</Link>

    <RouterProvider router={router}/>
    </>
  )
}

export default navbar