/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Loading from "../Components/Loader/Loading";



const PrivateRoutes = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        // Simulate a network request with a 2 second delay
        setTimeout(() => {
            const getAuthUser = localStorage.getItem('AuthUser')
            const AuthUser = JSON.parse(getAuthUser)
            // console.log(AuthUser);
            // console.log(getAuthUser);
            setLoading(false);
            setAuthUser(AuthUser);
        }, 2000); // 2 seconds delay
    }, []);



    if (loading) {
        return <Loading/>
    }
    if (authUser?.email) {
        return children
    }
    return <Navigate to={`/logIn`} replace={true} />
    // return children
};

export default PrivateRoutes;