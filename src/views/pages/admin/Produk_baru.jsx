import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

export default function TambahBarang() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [series, setSeries] = useState('');
    const [total, setTotal] = useState('');
    const [detailItem, setDetailItem] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleDescription = (e) => {
        setDescription(e.target.value);
    };
    const handleSeries = (e) => {
        setSeries(e.target.value);
    };
    const handleTotal = (e) => {
        setTotal(e.target.value);
    };
    const handleDetailItem = (e) => {
        setDetailItem(e.target.value);
    };

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        await axios.post('http://127.0.0.1:8000/api/admin/item', { 
            name
        }).then(response => {
            console.log(response);
            setMessage(response.data.message);
            navigate(-1)
        }).catch(error => {
            console.error(error);
        });
    }

    return(
        <>
            <div className="pb-4 mb-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-medium">Buat Produk</h1>
                    <Link to="/" className="p-2 px-4 gap-2 bg-sky-500 text-white rounded flex items-center font-medium hover:bg-sky-600 transition duration-300 ease-in-out">
                        <svg className="w-3.5 h-3.5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                        </svg>
                        <span>Kembali</span>
                    </Link>
                </div>
            </div>
            <div className="">
                <h1 className="text-lg font-medium">Info Produk</h1>
                <form action="" className="mt-6 space-y-4">
                    <div className="flex space-x-4">
                        <div className="space-y-4 flex-1 flex-col">
                            <div className="group flex items-center">
                                <label htmlFor="kode" className="w-64">Kode</label>
                                <input type="text" className="w-full border rounded p-2 border-gray-300 outline-none cursor-not-allowed" readOnly disabled/>
                            </div>
                            <div className="group flex items-center">
                                <label htmlFor="kode" className="w-64">Nama Produk</label>
                                <input type="text" className="w-full border rounded p-2 border-gray-300 outline-none"/>
                            </div>
                            <div className="group flex items-center">
                                <label htmlFor="kode" className="w-64">Deskripsi</label>
                                <textarea name="text" className="w-full h-32 border rounded p-2 border-gray-300 outline-none"></textarea>
                            </div>
                            <div className="group flex items-center">
                                <label htmlFor="kode" className="w-64">Unit Produk</label>
                                <select className="w-full border rounded p-2 border-gray-300 outline-none">
                                    <option value="option1">Option 1</option>
                                </select>
                            </div>
                            <div className="group flex items-center">
                                <label htmlFor="kode" className="w-64">Kategori</label>
                                <select className="w-full border rounded p-2 border-gray-300 outline-none">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                        </div>
                        <div className="h-full">
                            <div className="flex items-center justify-center w-full h-full">
                                <label for="dropzone-file" className="w-72 flex flex-col items-center justify-center border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-6 h-6 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Pilih Gambar</span></p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Format file jpg atau png</p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" />
                                </label>
                            </div> 
                        </div>
                    </div>
                        <button type="submit" className="w-full p-2 px-5 bg-sky-500 rounded-md text-white font-medium hover:bg-sky-600 transition duration-300 ease-in-out">Simpan</button>
                </form>
            </div>
        </>
    )
}