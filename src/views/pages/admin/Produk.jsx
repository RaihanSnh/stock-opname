import { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { fetchDataService } from "../../../utils/fetchData";
import { getUrl } from "../../../utils/config";
import logo from "../../../assets/images/logo.svg"

export default function Produk() {
    const [dataItem, setDataItem] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [active, setActive] = useState(null);
    const [data, setData] = useState([]);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClick = (value) => {
        setActive(value);
        localStorage.setItem('activeLink', value);
    };

    useEffect(() => {
        const storedActiveLink = localStorage.getItem('activeLink');
        if (storedActiveLink) {
            setActive(storedActiveLink);
        }
    }, []);

    useEffect(() => {
        const warehouse = new fetchDataService(getUrl('/api/admin/warehouse'));
        warehouse.fetchData()
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }, [])

    useEffect(() => {
        const item = new fetchDataService(getUrl('/api/admin/item'));
        item.fetchData()
        .then(response => {
            setDataItem(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }, [])

    const countStockStatus = (itemTotal) => {
        let JumlahHabis = 0;
        let JumlahHampirHabis = 0;
        let JumlahTersedia = 0;
    
        itemTotal.forEach(item => {
            if (item.total <= 10 && item.total > 1) {
                JumlahHampirHabis++;
            } else if (item.total == 0) {
                JumlahHabis++;
            } else {
                JumlahTersedia++;
            }
        });
    
        return { habis: JumlahHabis, HampirHabis: JumlahHampirHabis, tersedia: JumlahTersedia };
    };

    const stockStatus = countStockStatus(dataItem);

    return(
        <>
            <div className="mb-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-medium">Produk</h1>
                    <div className="relative">
                        <button className="p-2 px-4 gap-2 bg-sky-500 hover:bg-sky-600 text-white rounded flex items-center font-medium" onClick={toggleDropdown}>
                            <span>Aksi</span>
                            <span>    
                                <svg className="w-3 h-3 text-white mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
                                    <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"/>
                                </svg>
                            </span>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute mt-1 w-56 right-0 bg-white rounded-md border border-gray-300">
                                <ul>
                                    <Link to="tambahbarang" className="flex item-center hover:bg-gray-100 transition duration-300 ease-in-out p-2 px-3">
                                        <span>Tambah Barang</span>
                                    </Link>
                                    <Link to="tambahgudang" className="flex item-center hover:bg-gray-100 transition duration-300 ease-in-out p-2 px-3">
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
                            <NavLink to='barang' className={`${active === 'barang' ? 'border-b-2 border-b-sky-600 text-sky-600' : 'text-gray-500'} py-3`} type="button" onClick={() => handleClick('barang')}>
                                <span>Barang</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='gudang' className={`${active === 'gudang' ? 'border-b-2 border-b-sky-600 text-sky-600' : 'text-gray-500'} py-3`} type="button" onClick={() => handleClick('gudang')}>
                                <span>Gudang</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <div className="border border-green-600 rounded">
                    <div className="bg-green-100 p-2 border-b rounded-t">
                        <h1 className="font-bold">Stock Tersedia</h1>
                    </div>
                    <div className="p-2">
                        <p className="text-sm">Total Produk</p>
                        <h3 className="font-bold text-lg">{stockStatus.tersedia}</h3>
                    </div>
                </div>
                <div className="border border-yellow-500 rounded">
                    <div className="bg-yellow-100 p-2 border-b rounded-t">
                        <h1 className="font-bold">Stock Hampir Habis</h1>
                    </div>
                    <div className="p-2">
                        <p className="text-sm">Total Produk</p>
                        <h3 className="font-bold text-lg">{stockStatus.HampirHabis}</h3>
                    </div>
                </div>
                <div className="border border-red-600 rounded">
                    <div className="bg-red-100 p-2 border-b rounded-t">
                        <h1 className="font-bold">Stock Habis</h1>
                    </div>
                    <div className="p-2">
                        <p className="text-sm">Total Produk</p>
                        <h3 className="font-bold text-lg">{stockStatus.habis}</h3>
                    </div>
                </div>
                <div className="border border-purple-600 rounded">
                    <div className="bg-purple-100 p-2 border-b rounded-t">
                        <h1 className="font-bold">Gudang</h1>
                    </div>
                    <div className="p-2">
                        <p className="text-sm">Total Gudang</p>
                        <h3 className="font-bold text-lg">{data.length}</h3>
                    </div>
                </div>
            </div>
            {<Outlet/>}
        </>
    )
}