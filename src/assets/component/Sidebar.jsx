import React, { useState } from "react";

function Sidebar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="flex h-screen bg-gray-50">
            <aside className="w-64 bg-blue-500">
                <div className="px-3 h-full">
                    <nav className="h-full py-4">
                        <ul className="font-medium flex flex-col justify-between h-full">
                            <div>
                                <li className="py-2 pb-4">
                                    <a href="#" className="text-white text-2xl font-semibold px-2">
                                        <b>STOCK</b> Opname
                                    </a>
                                </li>
                                <div className="space-y-2">
                                    <li>
                                        <a href="#" className="flex item-center text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out p-2">
                                            <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                                            </svg>
                                            <span className="ml-3">Produk</span>
                                        </a>
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
                                                    <a href="#" className="flex item-center text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out p-2">
                                                        <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none" viewBox="0 0 18 20">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 2h4a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4m6 0v3H6V2m6 0a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M5 5h8m-5 5h5m-8 0h.01M5 14h.01M8 14h5"/>
                                                        </svg>
                                                        <span className="ml-3">Laporan Masuk</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="flex item-center text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out p-2">
                                                        <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none" viewBox="0 0 18 20">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 2h4a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4m6 0v3H6V2m6 0a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M5 5h8m-5 5h5m-8 0h.01M5 14h.01M8 14h5"/>
                                                        </svg>
                                                        <span className="ml-3">Laporan Keluar</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                </div>
                            </div>
                            <li className="mt-auto">
                                <a href="#" className="flex item-center text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out p-2">
                                    <svg class="w-5 h-5 mt-1 text-gray-800 dark:text-white rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 15">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 7.5h11m0 0L8 3.786M12 7.5l-4 3.714M12 1h3c.53 0 1.04.196 1.414.544.375.348.586.82.586 1.313v9.286c0 .492-.21.965-.586 1.313A2.081 2.081 0 0 1 15 14h-3"/>
                                    </svg>
                                    <span className="ml-3">Logout</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </div>
    );
}

export default Sidebar;