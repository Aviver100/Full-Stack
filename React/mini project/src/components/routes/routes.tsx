import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DogCard from '../dogCard/dogCard'

function Routes() {
    const router = createBrowserRouter([{
        path: "/",
        element: <DogCard />
    },
    {
        path: "/heydog",
        element: <p>Hey dog</p>
    }
    ])
    return (
        <RouterProvider router={router} />
    )
}

export default Routes