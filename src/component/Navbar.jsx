import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../App";
import { fetchDataService } from "../utils/fetchData";
import { getUrl } from "../utils/config";

export default function Navbar() {
    const navigate = useNavigate();
    const { setAuth, userData } = useContext(AuthContext);
    const [dataRequest, setDataRequest] = useState([]);


    const handleLogout = async () => {
        setAuth(null);

        await axios.post('http://127.0.0.1:8000/api/auth/logout', {}, {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${new Cookies().get('Authorization')}`
            }
        })
        .then ((response) => {
            new Cookies().remove('Authorization');
            localStorage.removeItem('activeLink');
            localStorage.removeItem('selectedItems');
            navigate('/')
        });
    }

    useEffect(() => {
        const request = new fetchDataService(getUrl('/api/admin/request'));
        request.fetchData()
        .then(response => {
            setDataRequest(response.data);
        })
        .catch(error => {
            console.error(error);
        })
    },[])


    return(   
        <nav className="w-full bg-white shadow-md sticky top-0 z-10">
            <div className="flex justify-end items-center h-16  px-5">
                <div className="flex items-center gap-4">
                    <button type="button" className="relative inline-flex items-center text-sm font-medium text-center text-white" 
                        onClick={() => navigate('request')}>
                            <svg className="w-7 h-7 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 21">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C15 15.4 15 16 14.462 16H1.538C1 16 1 15.4 1 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 8 3.464ZM4.54 16a3.48 3.48 0 0 0 6.92 0H4.54Z"/>
                            </svg>
                            {userData.role === 'admin' && (
                                <>
                                    <span className="sr-only">Notifications</span>
                                    {dataRequest.some(request => request.status === 'pending') && (
                                        <div className="absolute inline-flex items-center justify-center w-6 h-5 text-xs text-white bg-red-500 border-2 border-white rounded-full end-2 top-2">
                                            {dataRequest.filter(request => request.status === 'pending').length}
                                        </div>
                                    )}
                                </>
                            )}
                    </button>
                    {userData.image !== 'default.jpg' && (
                        <img src={userData.image} alt="" className="rounded-full w-8" />
                    )}
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </nav>
    )
}