import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"

export default function KategoriEdit() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

        useEffect(() => {
            axios.get(`http://127.0.0.1:8000/api/admin/category/${id}`)
                .then(response => {
                    setName(response.data.category.name);
                    console.log(response);
                })
                .catch(error => {
                    console.error(error);
                });
        }, [id]);

        const handleName = (e) => {
            setName(e.target.value);
        };
    
        const handleSubmit = async (e) => {
            e.preventDefault();

            await axios.post(`http://127.0.0.1:8000/api/admin/category/update/${id}`, {
                name
            })
                .then(response => {
                    console.log(response);
                    navigate(-1);
                })
                .catch(error => {
                    console.error(error);
                    setMessage(error.response.data.message);
                });
        };

        const handleDelete = async () => {
                await axios.delete(`http://127.0.0.1:8000/api/admin/category/delete/${id}`)
                .then(response => {
                    console.log(response);
                    navigate(-1);
                })
                .catch(error => {
                    console.error(error);
                    setMessage(error.response.data.message);
                });
        };     

    return(
        <>
            <div className="pb-4 mb-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-medium">Edit Kategori</h1>
                    <Link to="/" className="p-2 px-4 gap-2 bg-sky-500 text-white rounded flex items-center font-medium hover:bg-sky-600 transition duration-300 ease-in-out">
                        <svg className="w-3.5 h-3.5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                        </svg>
                        <span>Kembali</span>
                    </Link>
                </div>
            </div>
            <div className="">
                <form className="mt-6 space-y-4">
                    <div className="flex space-x-4">
                        <div className="space-y-4 flex-1 flex-col">
                            <div className="group flex items-center">
                                <label htmlFor="kode" className="w-64">Nama Kategori</label>
                                <input 
                                    className="w-full border rounded p-2 border-gray-300 outline-none"
                                    type="text"
                                    id="name"
                                    name="name" 
                                    value={name}
                                    onChange={handleName} 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button type="button" onClick={handleSubmit} className="w-full p-2 px-5 bg-sky-500 rounded-md text-white font-medium hover:bg-sky-600 transition duration-300 ease-in-out">Simpan</button>
                        <button type="button" onClick={handleDelete} className="w-full p-2 px-5 bg-red-500 rounded-md text-white font-medium hover:bg-red-600 transition duration-300 ease-in-out">Delete</button>
                    </div>
                </form>
            </div>
        </>
    )
}