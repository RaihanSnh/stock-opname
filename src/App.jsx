import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import axios from "axios";
import Cookies from "universal-cookie";

export const AuthContext = React.createContext();

export default function App() {
    const [auth, setAuth] = useState(null);
    const [userData, setUserData] = useState(null);
    const [role, setRole] = useState('');
    const [loading, setLoading] = useState(true);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        setLoading(true);
        const token = new Cookies().get("Authorization");
    
        axios.get("http://127.0.0.1:8000/api/auth/getuser", {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(response => {
            setUserData(response.data.user);
            setRole(response.data.user.role);
            setAuth(true);
            setDataLoaded(true)
            console.log(auth);
        }).catch(error => {
            console.error(error);
            setDataLoaded(true);
            setAuth(false)
        }).finally(() => {
            setLoading(false);
        });
    }, [auth, role]);

    return (
        <AuthContext.Provider value={{ auth, setAuth, userData }}>
            <BrowserRouter>
                <Router 
                    role={role}
                    loading={loading}
                    dataLoaded={dataLoaded}
                />
            </BrowserRouter>
        </AuthContext.Provider>
    );
}