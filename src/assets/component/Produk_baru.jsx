import { Link } from "react-router-dom"

function TambahBarang() {
    return(
        <>
            <div className="pb-4 mb-4 border-b-2">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-medium">Buat Produk</h1>
                    <Link to="/" className="p-2 px-4 gap-2 bg-sky-500 text-white rounded flex items-center font-medium">
                        <svg class="w-3.5 h-3.5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                        </svg>
                        <span>Kembali</span>
                    </Link>
                </div>
            </div>
            <div className="">
                <h1 className="text-lg font-medium">Info Produk</h1>
                <form action="" className="mt-6">
                    <div className="space-y-4">
                        <div className="group flex items-center">
                            <label htmlFor="kode" className="w-64">Kode</label>
                            <input type="text" className="w-full border rounded p-2 border-gray-300 outline-none cursor-not-allowed" readOnly disabled/>
                        </div>
                        <div className="group flex items-center">
                            <label htmlFor="kode" className="w-64">Nama Produk</label>
                            <input type="text" className="w-full border rounded p-2 border-gray-300 outline-none"/>
                        </div>
                        <div className="group flex items-center">
                            <label htmlFor="kode" className="w-64">Unit Produk</label>
                            <select class="w-full border rounded p-2 border-gray-300 outline-none">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                        <div className="group flex items-center">
                            <label htmlFor="kode" className="w-64">Kategori</label>
                            <select class="w-full border rounded p-2 border-gray-300 outline-none">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default TambahBarang