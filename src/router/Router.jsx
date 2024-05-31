import {
    createBrowserRouter
} from "react-router-dom";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
    {
        path: '/logIn',
        element: <p>Log In</p>
    }
]);