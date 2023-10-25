import { Link, useNavigate } from "react-router-dom"
import {ProfileIcon, NotifIcon} from "../assets/images/icon/icon"
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../App";
import Cookies from "universal-cookie";

export default function Navbar() {
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);

    const handleLogout = async () => {
        setAuth(null);

        await axios.post('http://127.0.0.1:8000/api/auth/logout', {}, {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${new Cookies().get('Authorization')}`
            }
        })
        .then ((response) => {
            console.log(response);
            localStorage.removeItem('auth');
            navigate('/')
        });
    }
    return(   
        <nav className="w-full bg-white shadow-md sticky top-0 z-10">
            <div className="p-3 border-b h-16">
                <div className="p-2 flex justify-end items-center">
                    <div className="flex items-center gap-4">
                        <Link to="request">
                            <div>
                                <NotifIcon/>
                            </div>
                        </Link>
                        <Link>
                            <div>
                                <ProfileIcon/>
                            </div>
                        </Link>
                        <form onSubmit={handleLogout}>
                            <input type="submit" value='Logout'/>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    )
}