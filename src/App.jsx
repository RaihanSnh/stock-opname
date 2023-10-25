import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import axios from "axios";
import Cookies from "universal-cookie";

export const AuthContext = React.createContext();

export default function App() {
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = new Cookies().get("Authorization");
                const response = await axios.get("http://127.0.0.1:8000/api/auth/getuser", {
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setAuth(response.data.user);
                console.log(auth);
                console.log(response.data.user.role)
            } catch (error) {
                console.error(error);
            }
        };
        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            <BrowserRouter>
                <Router role={auth?.role}/>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}