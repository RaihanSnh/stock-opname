import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Request from "../component/Pemohon/Request";

export default function Pemohon() {
    return (
        <div className="h-screen w-screen flex flex-col overflow-y-auto bg-gray-100 scrollbar select-none">
            <Navbar />
            <div className="p-4 max-h-screen">
                <div className="bg-white rounded-xl shadow-md py-6 px-6 max-h-full flex flex-col">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}