import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import PrivateRoutes from "./PrivateRoute";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoutes> <Home/> </PrivateRoutes>  ,
    },
    {
        path: '/logIn',
        element: <Login/>
    }
]);