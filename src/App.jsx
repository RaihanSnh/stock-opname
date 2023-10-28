import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import axios from "axios";
import Cookies from "universal-cookie";

export const AuthContext = React.createContext();

export default function App() {
    const [auth, setAuth] = useState(null);
    const [role, setRole] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const token = new Cookies().get("Authorization");
        axios.get("http://127.0.0.1:8000/api/auth/getuser", {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(response => {
            setAuth(true);
            setRole(response.data.user.role);
            console.log(auth);
            console.log(response.data.user.role);
        }).catch(error => {
            console.error(error);
        }).finally(() => {
            setLoading(false);
        });
    }, [auth, role]);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            <BrowserRouter>
                <Router 
                role={role}
                loading={loading}
                />
            </BrowserRouter>
        </AuthContext.Provider>
    );
}