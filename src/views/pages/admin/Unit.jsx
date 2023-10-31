import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom"

export default function Unit() {
    const [dataUnit, setDataUnit] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState("");
    let num = 1;

    const fetchData = async () => {
        await axios.get('http://127.0.0.1:8000/api/admin/unit', {}).then(response => {
            setDataUnit(response.data)
            setIsLoading(false);
        }).catch(error => {
            console.error(error);
        });
    };

    useEffect(() => {
        fetchData();
    })

    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-medium">Unit</h1>
            </div>
            <div className="mt-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-medium">Unit</h1>
                    <div className="flex gap-2 items-center">
                        <Link to="create" className="bg-sky-500 flex items-center p-1.5 px-3 rounded-md">
                            <span className="text-white font-medium">Create</span>
                        </Link>
                        <label for="table-search" className="sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input
                                type="text"
                                className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 outline-none"
                                placeholder="Search for items"
                                onChange={(event) => setSearch(event.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mt-4 overflow-auto scrollbar-gray">
                <div
                    className="grid grid-cols-2 p-2 text-xs font-bold text-gray-900 bg-gray-100 rounded mb-1 sticky top-0">
                    <span>No</span>
                    <span>Nama</span>
                </div>
                {isLoading ? (
                    <>
                        <div className="grid grid-cols-2 p-2 text-xs font-medium text-gray-900 mb-1 animate-pulse">
                            <div className="bg-gray-400 h-4 w-10"></div>
                            <div className="bg-gray-400 h-4 w-40"></div>
                        </div>
                        <div className="grid grid-cols-2 p-2 text-xs font-medium text-gray-900 mb-1 animate-pulse">
                            <div className="bg-gray-400 h-4 w-10"></div>
                            <div className="bg-gray-400 h-4 w-40"></div>
                        </div>
                        <div className="grid grid-cols-2 p-2 text-xs font-medium text-gray-900 mb-1 animate-pulse">
                            <div className="bg-gray-400 h-4 w-10"></div>
                            <div className="bg-gray-400 h-4 w-40"></div>
                        </div>
                        <div className="grid grid-cols-2 p-2 text-xs font-medium text-gray-900 mb-1 animate-pulse">
                            <div className="bg-gray-400 h-4 w-10"></div>
                            <div className="bg-gray-400 h-4 w-40"></div>
                        </div>
                        <div className="grid grid-cols-2 p-2 text-xs font-medium text-gray-900 mb-1 animate-pulse">
                            <div className="bg-gray-400 h-4 w-10"></div>
                            <div className="bg-gray-400 h-4 w-40"></div>
                        </div>
                        <div className="grid grid-cols-2 p-2 text-xs font-medium text-gray-900 mb-1 animate-pulse">
                            <div className="bg-gray-400 h-4 w-10"></div>
                            <div className="bg-gray-400 h-4 w-40"></div>
                        </div>
                        <div className="grid grid-cols-2 p-2 text-xs font-medium text-gray-900 mb-1 animate-pulse">
                            <div className="bg-gray-400 h-4 w-10"></div>
                            <div className="bg-gray-400 h-4 w-40"></div>
                        </div>
                        <div className="grid grid-cols-2 p-2 text-xs font-medium text-gray-900 mb-1 animate-pulse">
                            <div className="bg-gray-400 h-4 w-10"></div>
                            <div className="bg-gray-400 h-4 w-40"></div>
                        </div>
                        <div className="grid grid-cols-2 p-2 text-xs font-medium text-gray-900 mb-1 animate-pulse">
                            <div className="bg-gray-400 h-4 w-10"></div>
                            <div className="bg-gray-400 h-4 w-40"></div>
                        </div>
                        <div className="grid grid-cols-2 p-2 text-xs font-medium text-gray-900 mb-1 animate-pulse">
                            <div className="bg-gray-400 h-4 w-10"></div>
                            <div className="bg-gray-400 h-4 w-40"></div>
                        </div>
                        <div className="grid grid-cols-2 p-2 text-xs font-medium text-gray-900 mb-1 animate-pulse">
                            <div className="bg-gray-400 h-4 w-10"></div>
                            <div className="bg-gray-400 h-4 w-40"></div>
                        </div>
                        <div className="grid grid-cols-2 p-2 text-xs font-medium text-gray-900 mb-1 animate-pulse">
                            <div className="bg-gray-400 h-4 w-10"></div>
                            <div className="bg-gray-400 h-4 w-40"></div>
                        </div>
                        <div className="grid grid-cols-2 p-2 text-xs font-medium text-gray-900 mb-1 animate-pulse">
                            <div className="bg-gray-400 h-4 w-10"></div>
                            <div className="bg-gray-400 h-4 w-40"></div>
                        </div>
                        <div className="grid grid-cols-2 p-2 text-xs font-medium text-gray-900 mb-1 animate-pulse">
                            <div className="bg-gray-400 h-4 w-10"></div>
                            <div className="bg-gray-400 h-4 w-40"></div>
                        </div>
                        <div className="grid grid-cols-2 p-2 text-xs font-medium text-gray-900 mb-1 animate-pulse">
                            <div className="bg-gray-400 h-4 w-10"></div>
                            <div className="bg-gray-400 h-4 w-40"></div>
                        </div>
                        <div className="grid grid-cols-2 p-2 text-xs font-medium text-gray-900 mb-1 animate-pulse">
                            <div className="bg-gray-400 h-4 w-10"></div>
                            <div className="bg-gray-400 h-4 w-40"></div>
                        </div>
                        <div className="grid grid-cols-2 p-2 text-xs font-medium text-gray-900 mb-1 animate-pulse">
                            <div className="bg-gray-400 h-4 w-10"></div>
                            <div className="bg-gray-400 h-4 w-40"></div>
                        </div>
                        <div className="grid grid-cols-2 p-2 text-xs font-medium text-gray-900 mb-1 animate-pulse">
                            <div className="bg-gray-400 h-4 w-10"></div>
                            <div className="bg-gray-400 h-4 w-40"></div>
                        </div>
                        <div className="grid grid-cols-2 p-2 text-xs font-medium text-gray-900 mb-1 animate-pulse">
                            <div className="bg-gray-400 h-4 w-10"></div>
                            <div className="bg-gray-400 h-4 w-40"></div>
                        </div>
                    </>
                ) : (
                    dataUnit.filter((row) => {
                        if (search === "") {
                            return row
                        } else if (row.name.toLowerCase().includes(search.toLowerCase())) {
                            return row
                        }
                    }).map((row) => (
                        <div key={row.id} className="grid grid-cols-2 p-2 text-xs font-medium text-gray-900 mb-1">
                            <span>{num++}</span>
                            <Link to={`edit/${row.id}`}>
                                <span>{row.name}</span>
                            </Link>
                        </div>
                    ))
                )}
            </div>
        </>
    )
}
