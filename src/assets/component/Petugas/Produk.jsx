import { useState } from "react";
import { Link } from "react-router-dom";
import TableBarang from "./table_barang"
import TableGudang from "./table_gudang";

export default function Produk() {
<<<<<<< HEAD:src/assets/component/Petugas/Produk.jsx
    const [table, setTable] = useState("barang");
=======
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [table, setTable] = useState('barang');
>>>>>>> 1df52c3240d1d06a702edbdf5660117ba263e781:src/assets/component/Produk.jsx

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
                            <span>Aksi</span>
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
                    <ul className="flex gap-4">
                        <li>
<<<<<<< HEAD:src/assets/component/Petugas/Produk.jsx
                            <button className={`${table === 'barang' ? 'border-b-2 border-b-sky-600 text-sky-600' : 'text-gray-500 hover:border-b-2 hover:border-b-gray-400'} py-3`} type="button" onClick={(e) => setTable("barang")}>
=======
                            <button className={`py-3 ${table === 'barang' ? 'border-b-[2px] border-b-sky-500' : ''}`} type="button" onClick={(e) => setTable('barang')}>
>>>>>>> 1df52c3240d1d06a702edbdf5660117ba263e781:src/assets/component/Produk.jsx
                                <span>Barang</span>
                            </button>
                        </li>
                        <li>
<<<<<<< HEAD:src/assets/component/Petugas/Produk.jsx
                            <button className={`${table === 'gudang' ? 'border-b-2 border-b-sky-600 text-sky-600' : 'text-gray-500 hover:border-b-2 hover:border-b-gray-400'} py-3`} type="button" onClick={(e) => setTable("gudang")}>
=======
                            <button className={`py-3 ${table === 'gudang' ? 'border-b-[2px] border-b-sky-500' : ''}`} type="button" onClick={(e) => setTable('gudang')}>
>>>>>>> 1df52c3240d1d06a702edbdf5660117ba263e781:src/assets/component/Produk.jsx
                                <span>Gudang</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <div className="border border-green-600 rounded">
                    <div className="bg-green-100 p-2 border-b rounded-t">
                        <h1 className="font-bold">Stok Tersedia</h1>
                    </div>
                    <div className="p-2">
                        <p className="text-sm">Total Produk</p>
                        <h3 className="font-bold text-lg">1</h3>
                    </div>
                </div>
                <div className="border border-yellow-500 rounded">
                    <div className="bg-yellow-100 p-2 border-b rounded-t">
                        <h1 className="font-bold">Stok Hampir Habis</h1>
                    </div>
                    <div className="p-2">
                        <p className="text-sm">Total Produk</p>
                        <h3 className="font-bold text-lg">1</h3>
                    </div>
                </div>
                <div className="border border-red-600 rounded">
                    <div className="bg-red-100 p-2 border-b rounded-t">
                        <h1 className="font-bold">Stok Habis</h1>
                    </div>
                    <div className="p-2">
                        <p className="text-sm">Total Produk</p>
                        <h3 className="font-bold text-lg">1</h3>
                    </div>
                </div>
                <div className="border border-purple-600 rounded">
                    <div className="bg-purple-100 p-2 border-b rounded-t">
                        <h1 className="font-bold">Gudang</h1>
                    </div>
                    <div className="p-2">
                        <p className="text-sm">Total Gudang</p>
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