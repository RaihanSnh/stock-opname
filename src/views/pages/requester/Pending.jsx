import { useEffect, useState } from "react";
import { fetchDataService } from "../../../utils/fetchData";
import { getUrl } from "../../../utils/config";

export default function Pending() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState("");
    let num = 1;

    useEffect(() => {
        const request = new fetchDataService(getUrl('/api/admin/request'));
        request.fetchData()
        .then(response => {
            setData(response.data);
            console.log(response.data)
            setIsLoading(false);
        })
        .catch(error => {
            console.error(error);
        });
    }, [])

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
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-medium">Daftar Permohonan</h1>
            </div>
            <div className="w-full mt-4 overflow-auto scrollbar-gray">
                <div
                    className="grid grid-cols-5 p-2 text-xs font-bold text-gray-900 bg-gray-100 rounded mb-1 sticky top-0">
                    <span>No</span>
                    <span>Nama</span>
                    <span>Kode</span>
                    <span>Status</span>
                    <span>Tanggal</span>
                </div>
                {isLoading ? (
                    <>
                        <div className="space-y-2 animate-pulse">
                            <div className="flex bg-gray-200 p-3.5 rounded"/>
                            <div className="flex bg-gray-200 p-3.5 rounded"/>
                            <div className="flex bg-gray-200 p-3.5 rounded"/>
                            <div className="flex bg-gray-200 p-3.5 rounded"/>
                            <div className="flex bg-gray-200 p-3.5 rounded"/>
                            <div className="flex bg-gray-200 p-3.5 rounded"/>
                            <div className="flex bg-gray-200 p-3.5 rounded"/>
                        </div>
                    </>
                ) : (
                    data.filter((row) => {
                        if (search === "") {
                            return row
                        } else if (row.name.toLowerCase().includes(search.toLowerCase())) {
                            return row
                        }
                    }).map((row) => (
                        <div key={row.id} className="grid grid-cols-5 p-2 text-xs font-medium text-gray-900 mb-1">
                            <span>{num++}</span>
                            <span>{row.form.item_name}</span>
                            <span>{row.form.item_code}</span>
                            <span>{row.status}</span>
                            <span>{row.created_at}</span>
                        </div>
                    ))
                )}
            </div>
        </>
    )
}  