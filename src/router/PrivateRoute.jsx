/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Loading from "../Components/Loader/Loading";



const PrivateRoutes = ({ children }) => {


    // loading 
    const [loading, setLoading] = useState(true);

    // Authuser from local storage 
    const [authUser, setAuthUser] = useState(null);


    useEffect(() => {
        // Simulate a network request with a 2 second delay
        setTimeout(() => {


            const getAuthUser = localStorage.getItem('AuthUser')
            const AuthUser = JSON.parse(getAuthUser)

            setLoading(false);
            setAuthUser(AuthUser);


        }, 2000); // 2 seconds delay
    }, []);


    // if loading 
    if (loading) {
        return <Loading />
    }


    // if auth user found choildren will return 
    if (authUser?.email) {
        return children
    }

    // authuser not found 
    return <Navigate to={`/logIn`} replace={true} />

};

export default PrivateRoutes;