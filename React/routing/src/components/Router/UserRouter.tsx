import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import UserPage from '../UserPage/UserPage'

function UserRouter() {

    const router = createBrowserRouter([{
        path: "/user/:id",
        element: <UserPage/>
    }])

  return (
        <RouterProvider router={router}/>
  )
}

export default UserRouter