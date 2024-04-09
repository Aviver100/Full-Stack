import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import UserPage from '../UserPage/UserPage'
import UsersNavBar from '../UsersNavBar/UsersNavBar'

// function UserRouter() {

const router = createBrowserRouter([{
  path: "/",
  element:
    <>
      <UsersNavBar />
      <Outlet />
    </>,
  children: [
    {
      path: "/user/:id",
      element: <UserPage />,
    },
    {
      path: "/",
      element: <p>Hello, Please select User</p>
    }
  ]
}
])

// return (
//   <RouterProvider router={router} />
// )
// }

export default router