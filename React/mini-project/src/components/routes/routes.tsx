import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from '../mainPage/mainPage'
import BreedPage from "../breedPage/breedPage";
import Chat from "../chat/chat";

function Routes() {
    const router = createBrowserRouter([{
        path: "/",
        element: <MainPage />
    },
    {
        path: "/breed/:breedParam",
        element: <BreedPage breed={""} />
    },
    {
        path: "/chat",
        element: <Chat />
    }
    ])
    return (
        <RouterProvider router={router} />
    )
}

export default Routes