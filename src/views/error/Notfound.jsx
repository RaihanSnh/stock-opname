import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    const redirectBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <h1>404 Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <button onClick={redirectBack}>back</button>
        </div>
    );
}