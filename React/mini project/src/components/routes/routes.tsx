import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from '../mainPage/mainPage'
import DogPage from "../dogPage/dogPage";

function Routes() {
    const router = createBrowserRouter([{
        path: "/",
        element: <MainPage />
    },
    {
        path: "/dogpage",
        element: <DogPage />
    }
    ])
    return (
        <RouterProvider router={router} />
    )
}

export default Routes