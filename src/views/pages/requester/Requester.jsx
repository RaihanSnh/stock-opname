import { Outlet } from "react-router-dom";
import Navbar from "../../../component/Navbar";

export default function Requester() {
    return (
        <div className="h-screen flex flex-col overflow-y-auto bg-gray-100 scrollbar select-none">
            <Navbar />
            <div className="p-4 max-h-[calc(100vh-64px)] h-screen">
                <div className="bg-white rounded-xl shadow-md py-6 px-6 h-full flex flex-col relative space-y-3">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}