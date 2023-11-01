import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../App";
import Cookies from "universal-cookie";

export default function Navbar() {
    const navigate = useNavigate();
    const { setAuth, userData } = useContext(AuthContext);

    const handleLogout = async () => {
        setAuth(null);

        await axios.post('http://127.0.0.1:8000/api/auth/logout', {}, {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${new Cookies().get('Authorization')}`
            }
        })
        .then ((response) => {
            new Cookies().remove('Authorization')
            localStorage.removeItem('auth');
            localStorage.removeItem('activeLink');
            console.log(response);
            navigate('/')
        });
    }
    return(   
        <nav className="w-full bg-white shadow-md sticky top-0 z-10">
            <div className="flex justify-end items-center h-16  px-5">
                <div className="flex items-center gap-4">
                    <img src={userData.image} alt="" className="rounded-full w-8" />
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </nav>
    )
}