import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import { fetchDataService } from "../../../utils/fetchData";
import { getUrl } from "../../../utils/config";

export default function TableGudang() {
    const [dataWarehouse, setDataWarehouse] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState("");
    let num = 1;

    useEffect(() => {
        const warehouse = new fetchDataService(getUrl('/api/admin/warehouse'));
        warehouse.fetchData()
        .then(response => {
            setDataWarehouse(response.data);
            setIsLoading(false);
        })
        .catch(error => {
            console.error(error);
        });
    }, [])

    return (
        <>
            <div className="mt-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-medium">Gudang</h1>
                    <div>
                        <label for="table-search" className="sr-only">Search</label>
                        <div className="relative mt-1">
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
                        <div className="space-y-2 animate-pulse">
                            <div className="flex bg-gray-200 p-3.5 rounded"></div>
                            <div className="flex bg-gray-200 p-3.5 rounded"></div>
                            <div className="flex bg-gray-200 p-3.5 rounded"></div>
                            <div className="flex bg-gray-200 p-3.5 rounded"></div>
                            <div className="flex bg-gray-200 p-3.5 rounded"></div>
                            <div className="flex bg-gray-200 p-3.5 rounded"></div>
                        </div>
                    </>
                ) : (
                    dataWarehouse.filter((row) => {
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