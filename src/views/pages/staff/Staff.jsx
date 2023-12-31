import { Outlet } from "react-router-dom"
import Sidebar from "../../../component/Sidebar";
import Navbar from "../../../component/Navbar";

export default function Staff() {
    return (
        <div className="h-screen flex flex-col overflow-y-auto bg-gray-100 scrollbar select-none">
            <Sidebar/>
            <Navbar />
            <div className="p-4 max-h-[calc(100vh-64px)]">
                <div className="bg-white rounded-xl shadow-md ml-20 py-6 px-6 max-h-full flex flex-col">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}