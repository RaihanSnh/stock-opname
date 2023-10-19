import React, { useEffect, useState } from "react"
import Router from "./router/index"
import { BrowserRouter } from "react-router-dom"

export const AuthContext = React.createContext();

export default function App() {
    const [auth, setAuth] = useState(null);

    useEffect(function() {
        console.log(auth);
        const storedAuth = localStorage.getItem('auth');
        if (storedAuth) {
            setAuth(JSON.parse(storedAuth));
        }
    }, []);
    return(
        <AuthContext.Provider value={{ auth, setAuth }}>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}