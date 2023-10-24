import { Link } from "react-router-dom"

export default function ListRequest() {
    const table = [
    ]
    return(     
        <>
            <div className="mt-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-medium">Daftar Permohonan</h1>
                    <div className="flex gap-2 items-center">
                        <label for="table-search" className="sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="text" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 outline-none" placeholder="Search for items"/>
                        </div>
                    </div>
                </div>
            </div>  
            <div className="w-full mt-4 overflow-auto scrollbar-gray">
                <div className="grid grid-cols-6 p-2 text-xs font-bold text-gray-900 bg-gray-100 rounded mb-1 sticky top-0">
                    <span>No</span>
                    <span>Kode User</span>
                    <span>Kode Barang</span>
                    <span>Jumlah</span>
                    <span>Alasan</span>
                    <span>Aksi</span>
                </div>
                {table.map((row) => (
                    <div key={row.no} className="grid grid-cols-6 p-2 text-xs font-medium text-gray-900 mb-1">
                        {Object.keys(row).map((key) => (
                            <span key={key}>{row[key]}</span>
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}