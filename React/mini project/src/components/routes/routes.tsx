import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from '../mainPage/mainPage'
import BreedPage from "../breedPage/breedPage";

function Routes() {
    const router = createBrowserRouter([{
        path: "/",
        element: <MainPage />
    },
    {
        path: "/breed/:breedParam",
        element: <BreedPage breed={""} />
    }
    ])
    return (
        <RouterProvider router={router} />
    )
}

export default Routes