import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom"
import logo from "../images/logo-main.svg"
import {Produk, Laporan} from "../images/icon/icon";

export default function Sidebar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    
    const navigation = [
        { icon:<Produk/>, name: 'Produk', href: '/dashboard/admin'},
        { 
            icon:<Laporan/>, 
            name: 'Laporan', 
            dropdownItems: [
                { icon:<Laporan/>, name: 'Laporan Masuk', href: '/laporanmasuk'},
                { icon:<Laporan/>, name: 'Laporan Keluar', href: '/laporankeluar'}
            ]
        }
    ]

    const [isOpen, setIsOpen] = useState(false);
    
    const toggleSidebar = () => {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    };

    const handleSidebarHover = () => {
        if (!isOpen) {
          setIsOpen(true);
        }
      };
    
      const handleSidebarLeave = () => {
        if (isOpen) {
          setIsOpen(false);
        }
      };

    return(
        <>
            <aside
                onMouseEnter={handleSidebarHover}
                onMouseLeave={handleSidebarLeave} 
                className={`${isOpen ? "w-64" : "w-20"} fixed h-screen z-50`}
            >
                <div className="h-full overflow-y-auto bg-sky-500 whitespace-nowrap transition-none duration-0">
                    <Link to="/dashboard/admin" className={`${isOpen ? "" : "justify-center"} text-white flex items-center border-b p-5 h-16 gap-1.5`}>
                        <button onClick={toggleSidebar}>
                            <img src={logo} alt="" className="w-7 h-7"/>
                        </button>
                        <span className={`${isOpen ? "inline" : "hidden"} text-xl font-bold text-logo`}>STOCK OPNAME</span>
                    </Link>
                    <ul className="space-y-2 font-medium px-3 py-4">
                        {navigation.map((item, index) => (
                            <li key={index}>
                               {item.dropdownItems ? (
                                    <div>
                                        <button className={`${isOpen ? "" : "justify-center"} w-full p-2 flex item-center text-white rounded hover:bg-sky-600 transition duration-300 ease-in-out gap-2`} onClick={toggleDropdown} disabled={!isOpen}>
                                            <span>
                                                {item.icon}
                                            </span>
                                            <span className={`${isOpen ? "" : "hidden"}`}>
                                                {item.name}
                                            </span>
                                        </button>
                                        {isDropdownOpen && (
                                            <ul className="ml-4 mt-2 space-y-2">
                                                {item.dropdownItems.map((dropdownItem, index) => (
                                                    <li key={index}>
                                                        <NavLink key={dropdownItem.name} to={dropdownItem.href} className={({ isActive }) => { 
                                                            return (
                                                                `w-full p-2 flex text-white rounded hover:bg-sky-600 transition duration-300 ease-in-out gap-2        
                                                                ${!isActive ? 'bg-sky-500' : 'bg-sky-600'}         
                                                                ${isOpen ? '' : 'hidden'}`     
                                                            ); 
                                                        }}>
                                                            <span>
                                                                {dropdownItem.icon}
                                                            </span>
                                                            <span>
                                                                {dropdownItem.name}
                                                            </span>
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                    ) : (
                                    <NavLink key={item.name} to={item.href} className={({ isActive }) => { 
                                        return (
                                            `w-full p-2 flex text-white rounded hover:bg-sky-600 transition duration-300 ease-in-out gap-2       
                                            ${!isActive ? 'bg-sky-500' : 'bg-sky-600'}         
                                            ${isOpen ? '' : 'justify-center'}`     
                                        ); 
                                    }}>
                                        <span>
                                            {item.icon}
                                        </span>
                                        <span className={`${isOpen ? "" : "hidden"}`}>
                                            {item.name}
                                        </span>
                                    </NavLink>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </>
    )
}