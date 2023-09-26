import { Link } from "react-router-dom"

function LaporanKeluar() {
    return(
        <>
            <div className="pb-4 mb-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-medium">Laporan Keluar</h1>
                    <Link to="/" className="p-2 px-4 gap-1 bg-sky-500 text-white rounded flex items-center font-medium hover:bg-sky-600 transition duration-300 ease-in-out">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 18a.969.969 0 0 0 .933 1h12.134A.97.97 0 0 0 15 18M1 7V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2v5M6 1v4a1 1 0 0 1-1 1H1m0 9v-5h1.5a1.5 1.5 0 1 1 0 3H1m12 2v-5h2m-2 3h2m-8-3v5h1.375A1.626 1.626 0 0 0 10 13.375v-1.75A1.626 1.626 0 0 0 8.375 10H7Z"/>
                        </svg>    
                        <span>Ekspor</span>
                    </Link>
                </div>
            </div>
            <div className="mt-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-medium">Barang</h1>
                    <div>
                        <label for="table-search" class="sr-only">Search</label>
                        <div class="relative mt-1">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="text" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 outline-none" placeholder="Search for items"/>
                        </div>
                    </div>
                </div>
            </div>  
            <div className="flex flex-col w-full mt-4 max-h-96 overflow-auto scrollbar-gray">
                <div className="grid grid-cols-6 p-2 text-xs font-bold text-gray-900 bg-gray-100 rounded mb-1 sticky top-0">
                    <span>No</span>
                    <span>Kode</span>
                    <span>Barang</span>
                    <span>Jumlah</span>
                    <span>Seri</span>
                    <span>Tanggal</span>
                </div>
                <div className="">
                    <div className="grid grid-cols-6 p-2 text-xs font-medium text-gray-900 border-gray-200">
                        <span>1</span>
                        <span className="text-blue-700">ABC-123</span>
                        <span>Mouse</span>
                        <span>10 pcs</span>
                        <span>Logitech</span>
                        <span>20-09-2023</span>
                    </div>
                    <div className="grid grid-cols-6 p-2 text-xs font-medium text-gray-900 border-gray-200">
                        <span>1</span>
                        <span className="text-blue-700">ABC-123</span>
                        <span>Mouse</span>
                        <span>10 pcs</span>
                        <span>Logitech</span>
                        <span>20-09-2023</span>
                    </div><div className="grid grid-cols-6 p-2 text-xs font-medium text-gray-900 border-gray-200">
                        <span>1</span>
                        <span className="text-blue-700">ABC-123</span>
                        <span>Mouse</span>
                        <span>10 pcs</span>
                        <span>Logitech</span>
                        <span>20-09-2023</span>
                    </div><div className="grid grid-cols-6 p-2 text-xs font-medium text-gray-900 border-gray-200">
                        <span>1</span>
                        <span className="text-blue-700">ABC-123</span>
                        <span>Mouse</span>
                        <span>10 pcs</span>
                        <span>Logitech</span>
                        <span>20-09-2023</span>
                    </div><div className="grid grid-cols-6 p-2 text-xs font-medium text-gray-900 border-gray-200">
                        <span>1</span>
                        <span className="text-blue-700">ABC-123</span>
                        <span>Mouse</span>
                        <span>10 pcs</span>
                        <span>Logitech</span>
                        <span>20-09-2023</span>
                    </div><div className="grid grid-cols-6 p-2 text-xs font-medium text-gray-900 border-gray-200">
                        <span>1</span>
                        <span className="text-blue-700">ABC-123</span>
                        <span>Mouse</span>
                        <span>10 pcs</span>
                        <span>Logitech</span>
                        <span>20-09-2023</span>
                    </div><div className="grid grid-cols-6 p-2 text-xs font-medium text-gray-900 border-gray-200">
                        <span>1</span>
                        <span className="text-blue-700">ABC-123</span>
                        <span>Mouse</span>
                        <span>10 pcs</span>
                        <span>Logitech</span>
                        <span>20-09-2023</span>
                    </div><div className="grid grid-cols-6 p-2 text-xs font-medium text-gray-900 border-gray-200">
                        <span>1</span>
                        <span className="text-blue-700">ABC-123</span>
                        <span>Mouse</span>
                        <span>10 pcs</span>
                        <span>Logitech</span>
                        <span>20-09-2023</span>
                    </div><div className="grid grid-cols-6 p-2 text-xs font-medium text-gray-900 border-gray-200">
                        <span>1</span>
                        <span className="text-blue-700">ABC-123</span>
                        <span>Mouse</span>
                        <span>10 pcs</span>
                        <span>Logitech</span>
                        <span>20-09-2023</span>
                    </div><div className="grid grid-cols-6 p-2 text-xs font-medium text-gray-900 border-gray-200">
                        <span>1</span>
                        <span className="text-blue-700">ABC-123</span>
                        <span>Mouse</span>
                        <span>10 pcs</span>
                        <span>Logitech</span>
                        <span>20-09-2023</span>
                    </div><div className="grid grid-cols-6 p-2 text-xs font-medium text-gray-900 border-gray-200">
                        <span>1</span>
                        <span className="text-blue-700">ABC-123</span>
                        <span>Mouse</span>
                        <span>10 pcs</span>
                        <span>Logitech</span>
                        <span>20-09-2023</span>
                    </div><div className="grid grid-cols-6 p-2 text-xs font-medium text-gray-900 border-gray-200">
                        <span>1</span>
                        <span className="text-blue-700">ABC-123</span>
                        <span>Mouse</span>
                        <span>10 pcs</span>
                        <span>Logitech</span>
                        <span>20-09-2023</span>
                    </div><div className="grid grid-cols-6 p-2 text-xs font-medium text-gray-900 border-gray-200">
                        <span>1</span>
                        <span className="text-blue-700">ABC-123</span>
                        <span>Mouse</span>
                        <span>10 pcs</span>
                        <span>Logitech</span>
                        <span>20-09-2023</span>
                    </div><div className="grid grid-cols-6 p-2 text-xs font-medium text-gray-900 border-gray-200">
                        <span>1</span>
                        <span className="text-blue-700">ABC-123</span>
                        <span>Mouse</span>
                        <span>10 pcs</span>
                        <span>Logitech</span>
                        <span>20-09-2023</span>
                    </div><div className="grid grid-cols-6 p-2 text-xs font-medium text-gray-900 border-gray-200">
                        <span>1</span>
                        <span className="text-blue-700">ABC-123</span>
                        <span>Mouse</span>
                        <span>10 pcs</span>
                        <span>Logitech</span>
                        <span>20-09-2023</span>
                    </div><div className="grid grid-cols-6 p-2 text-xs font-medium text-gray-900 border-gray-200">
                        <span>1</span>
                        <span className="text-blue-700">ABC-123</span>
                        <span>Mouse</span>
                        <span>10 pcs</span>
                        <span>Logitech</span>
                        <span>20-09-2023</span>
                    </div><div className="grid grid-cols-6 p-2 text-xs font-medium text-gray-900 border-gray-200">
                        <span>1</span>
                        <span className="text-blue-700">ABC-123</span>
                        <span>Mouse</span>
                        <span>10 pcs</span>
                        <span>Logitech</span>
                        <span>20-09-2023</span>
                    </div><div className="grid grid-cols-6 p-2 text-xs font-medium text-gray-900 border-gray-200">
                        <span>1</span>
                        <span className="text-blue-700">ABC-123</span>
                        <span>Mouse</span>
                        <span>10 pcs</span>
                        <span>Logitech</span>
                        <span>20-09-2023</span>
                    </div><div className="grid grid-cols-6 p-2 text-xs font-medium text-gray-900 border-gray-200">
                        <span>1</span>
                        <span className="text-blue-700">ABC-123</span>
                        <span>Mouse</span>
                        <span>10 pcs</span>
                        <span>Logitech</span>
                        <span>20-09-2023</span>
                    </div><div className="grid grid-cols-6 p-2 text-xs font-medium text-gray-900 border-gray-200">
                        <span>1</span>
                        <span className="text-blue-700">ABC-123</span>
                        <span>Mouse</span>
                        <span>10 pcs</span>
                        <span>Logitech</span>
                        <span>20-09-2023</span>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default LaporanKeluar