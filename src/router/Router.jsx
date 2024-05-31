import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../pages/Home/Home";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/> ,
    },
    {
        path: '/logIn',
        element: <p>Log In</p>
    }
]);