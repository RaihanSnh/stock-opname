import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUrl } from "../../../utils/config";

export default function Request() {
    const [value, setValue] = useState(0);
    const [dataItem, setDataItem] = useState([]);
    const [dataCategory, setDataCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState("");

    const fetchDataItem = async () => {
        await axios.get(getUrl('/api/admin/item'), {}).then(response => {
            setDataItem(response.data)
            setIsLoading(false);
        }).catch(error => {
            console.error(error);
        });
    };
    
    const fetchDataCategory = async () => {
        await axios.get(getUrl('/api/admin/category'), {
        }).then(response => {
            setDataCategory(response.data)
            setIsLoading(false);
        }).catch(error => {
            console.error(error);
        });
    };

    useEffect(() => {
        fetchDataItem();
        fetchDataCategory();
    }, [])

    const decrementValue = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    };

    const incrementValue = () => {
        setValue(value + 1);
    };

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const items = [
        { img:"", title:"Logitech" }
    ]

    return(
        <>
            <form action="#" method="POST">
                <div className="relative w-full">
                    <input type="text" className="w-full block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none" placeholder="Search for items"/>
                    <button type="submit" className="cursor-pointer bg-transparent border-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </button>
                </div>
            </form>
            <div className="gap-2 flex">
                {dataCategory.map((row, index) => (
                    <button key={index} className="p-2 border rounded-md h-10">
                        {row.name}
                    </button>
                ))}
            </div>
            <div className="h-full overflow-y-auto scrollbar-gray pb-8">
                <div className="grid grid-cols-6 gap-4">
                    {dataItem.filter((row) => {
                        if (search === "") {
                            return row
                        } else if (row.name.toLowerCase().includes(search.toLowerCase())) {
                            return row
                        }
                    }).map((row) => (
                        <>
                            <div className="grid text-xs font-medium text-gray-900 mb-1">
                                <div key={row.id} className="max-w-sm rounded-lg overflow-hidden border">
                                    <img className="w-full h-48 object-cover rounded-t-lg p-4" src={row.image}/>
                                    <div className="p-2 flex border-t flex-col justify-center">
                                        <div className="font-bold text-xl mb-2">{row.name}</div>
                                        <Link className="text-blue-600" onClick={openModal}>Detail Barang</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="grid text-xs font-medium text-gray-900 mb-1">
                                <div key={row.id} className="max-w-sm rounded-lg overflow-hidden border">
                                    <img className="w-full h-48 object-cover rounded-t-lg p-4" src={row.image}/>
                                    <div className="p-2 flex border-t flex-col justify-center">
                                        <div className="font-bold text-xl mb-2">{row.name}</div>
                                        <Link className="text-blue-600" onClick={openModal}>Detail Barang</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="grid text-xs font-medium text-gray-900 mb-1">
                                <div key={row.id} className="max-w-sm rounded-lg overflow-hidden border">
                                    <img className="w-full h-48 object-cover rounded-t-lg p-4" src={row.image}/>
                                    <div className="p-2 flex border-t flex-col justify-center">
                                        <div className="font-bold text-xl mb-2">{row.name}</div>
                                        <Link className="text-blue-600" onClick={openModal}>Detail Barang</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="grid text-xs font-medium text-gray-900 mb-1">
                                <div key={row.id} className="max-w-sm rounded-lg overflow-hidden border">
                                    <img className="w-full h-48 object-cover rounded-t-lg p-4" src={row.image}/>
                                    <div className="p-2 flex border-t flex-col justify-center">
                                        <div className="font-bold text-xl mb-2">{row.name}</div>
                                        <Link className="text-blue-600" onClick={openModal}>Detail Barang</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="grid text-xs font-medium text-gray-900 mb-1">
                                <div key={row.id} className="max-w-sm rounded-lg overflow-hidden border">
                                    <img className="w-full h-48 object-cover rounded-t-lg p-4" src={row.image}/>
                                    <div className="p-2 flex border-t flex-col justify-center">
                                        <div className="font-bold text-xl mb-2">{row.name}</div>
                                        <Link className="text-blue-600" onClick={openModal}>Detail Barang</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="grid text-xs font-medium text-gray-900 mb-1">
                                <div key={row.id} className="max-w-sm rounded-lg overflow-hidden border">
                                    <img className="w-full h-48 object-cover rounded-t-lg p-4" src={row.image}/>
                                    <div className="p-2 flex border-t flex-col justify-center">
                                        <div className="font-bold text-xl mb-2">{row.name}</div>
                                        <Link className="text-blue-600" onClick={openModal}>Detail Barang</Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
            <div className="w-full">
                <div className="bg-green-500 p-2 w-4/12 rounded text-center absolute bottom-0 left-0 right-0 mx-auto m-5">
                    <span className="text-white font-medium">99 Items</span>
                </div>
            </div>
            {showModal && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-5" id="modal">
                    <div className="bg-white rounded-md shadow p-5 w-6/12">
                        <form className="flex gap-5" action="pemohon">
                            <img className="border rounded" src="data:image/jpeg;base64,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" alt="" />
                            <div className="flex flex-col justify-between w-full">
                                <div className="flex flex-col">
                                    <span className="text-xl font-medium">Keyboard</span>
                                    <span>Logitech</span>
                                    <div className="flex items-center mt-3 gap-2">
                                        <div className="">
                                            <button className="p-1 border border-r-0 rounded-l bg-gray-400 w-8 text-white" onClick={decrementValue}>-</button>
                                            <input className="border p-1 w-9" type="number" value={value} onChange={(e) => setValue(e.target.value)} />
                                            <button className="p-1 border border-l-0 rounded-r bg-gray-400 w-8 text-white" onClick={incrementValue}>+</button>
                                        </div>
                                        <span>Jumlah</span>
                                    </div>
                                </div>
                                <div className="w-full flex justify-end gap-2">
                                    <button type="submit" className="p-2 bg-red-500 rounded-md text-white font-medium hover:bg-red-600 transition duration-300 ease-in-out">Keluar</button>
                                    <button type="submit" className="p-2 bg-sky-500 rounded-md text-white font-medium hover:bg-sky-600 transition duration-300 ease-in-out">Pesan</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}