import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";

export const AuthContext = React.createContext();

export default function App() {
    const [auth, setAuth] = useState(null);

    useEffect(function() {
        const storedAuth = localStorage.getItem('auth');
        if (storedAuth) {
            setAuth(JSON.parse(storedAuth));
        }
    }, [setAuth]);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            <BrowserRouter basename="/">
                <Router />
            </BrowserRouter>
        </AuthContext.Provider>
    );
}