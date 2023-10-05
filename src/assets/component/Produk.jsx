import { useState } from "react";
import { Link } from "react-router-dom";
import TableBarang from "./table_barang"
import TableGudang from "./table_gudang";

export default function Produk() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [table, setTable] = useState("barang");

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    
    return(
        <>
            <div className="mb-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-medium">Produk</h1>
                    <div className="relative">
                        <button className="p-2 px-4 gap-2 bg-sky-500 hover:bg-sky-600 text-white rounded flex items-center font-medium" onClick={toggleDropdown}>
                            <span>Action</span>
                            <span>    
                                <svg class="w-3 h-3 text-white mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
                                    <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"/>
                                </svg>
                            </span>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute mt-1 w-56 right-0 bg-white rounded-md border border-gray-300">
                                <ul>
                                    <Link to="/tambahbarang" className="flex item-center hover:bg-gray-100 transition duration-300 ease-in-out p-2 px-3">
                                        <span>Tambah Barang</span>
                                    </Link>
                                    <Link to="/tambahgudang" className="flex item-center hover:bg-gray-100 transition duration-300 ease-in-out p-2 px-3">
                                        <span>Tambah Gudang</span>
                                    </Link>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <div className="my-4">
                    <ul className="flex gap-2">
                        <li>
                            <button className="py-3" type="button" onClick={(e) => setTable("barang")}>
                                <span>Barang</span>
                            </button>
                        </li>
                        <li>
                            <button className="py-3" type="button" onClick={(e) => setTable("gudang")}>
                                <span>Gudang</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <div className="border border-green-600 rounded">
                    <div className="bg-green-100 p-2 border-b rounded-t">
                        <h1 className="font-bold">Stock Available</h1>
                    </div>
                    <div className="p-2">
                        <p className="text-sm">Total Produk</p>
                        <h3 className="font-bold text-lg">1</h3>
                    </div>
                </div>
                <div className="border border-yellow-500 rounded">
                    <div className="bg-yellow-100 p-2 border-b rounded-t">
                        <h1 className="font-bold">Stock Available</h1>
                    </div>
                    <div className="p-2">
                        <p className="text-sm">Total Produk</p>
                        <h3 className="font-bold text-lg">1</h3>
                    </div>
                </div>
                <div className="border border-red-600 rounded">
                    <div className="bg-red-100 p-2 border-b rounded-t">
                        <h1 className="font-bold">Stock Available</h1>
                    </div>
                    <div className="p-2">
                        <p className="text-sm">Total Produk</p>
                        <h3 className="font-bold text-lg">1</h3>
                    </div>
                </div>
                <div className="border border-purple-600 rounded">
                    <div className="bg-purple-100 p-2 border-b rounded-t">
                        <h1 className="font-bold">Stock Available</h1>
                    </div>
                    <div className="p-2">
                        <p className="text-sm">Total Produk</p>
                        <h3 className="font-bold text-lg">1</h3>
                    </div>
                </div>
            </div>
            {
                table == "barang" ?
                (<TableBarang/>)
                :
                (<TableGudang/>)
            }
        </>
    )
}