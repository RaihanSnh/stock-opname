import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <aside className="w-64 h-full bg-blue-500">
            <div className="p-2 border-b h-20">
                <div className="py-4 px-3">
                    <Link to="/" className="md:py-2 text-white text-lg font-semibold sm:text-2xl">
                        <b>STOCK</b> Opname
                    </Link>
                </div>
            </div>
            <ul className="font-medium p-3 space-y-2">
                <li>
                    <Link to="/" className="flex item-center text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out p-2">
                        <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                        </svg>
                        <span className="ml-3">Produk</span>
                    </Link>
                </li>
                <li>
                    <button className="w-full flex item-center text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out p-2" onClick={toggleDropdown}>
                        <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none" viewBox="0 0 18 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 2h4a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4m6 0v3H6V2m6 0a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M5 5h8m-5 5h5m-8 0h.01M5 14h.01M8 14h5"/>
                        </svg>
                        <span className="ml-3">Laporan</span>
                    </button>
                    {isDropdownOpen && (
                        <ul className="ml-4 mt-2 space-y-2">
                            <li>
                                <Link to="/laporanmasuk" className="flex item-center text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out p-2">
                                    <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none" viewBox="0 0 18 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 2h4a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4m6 0v3H6V2m6 0a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M5 5h8m-5 5h5m-8 0h.01M5 14h.01M8 14h5"/>
                                    </svg>
                                    <span className="ml-3">Laporan Masuk</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/laporankeluar" className="flex item-center text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out p-2">
                                    <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none" viewBox="0 0 18 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 2h4a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4m6 0v3H6V2m6 0a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M5 5h8m-5 5h5m-8 0h.01M5 14h.01M8 14h5"/>
                                    </svg>
                                    <span className="ml-3">Laporan Keluar</span>
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;