import { Outlet, createBrowserRouter } from 'react-router-dom'
// import UsersNavBar from '../UsersNavBar/UsersNavBar'
import FindCar from '../FindCar/FindCar'

const router = createBrowserRouter([{
    path: "/",
    element:
        <>
            {/* <UsersNavBar /> */}
            <Outlet />
        </>,
    children: [
        {
            path: "/car/:id",
            element: <FindCar />,
        },
        {
            path: "/",
            element: <p>Hello, Please select User</p>
        },
        {
            path: "*",
            element: <p>Page Not Found!</p>
        }
    ]
}
])
export default router