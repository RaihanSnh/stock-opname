import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { fetchDataService } from "../../../utils/fetchData";
import { getUrl } from "../../../utils/config";
import DatalistInput from "react-datalist-input";
import { AuthContext } from "../../../App";

export default function ItemCreate() {
    const [setCode] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [series, setSeries] = useState('');
    const [total, setTotal] = useState('');
    const [image, setImage] = useState('');
    const [vendor, setVendor] = useState('');
    const [category, setCategory] = useState('');
    const [unit, setUnit] = useState('');
    const [warehouse, setWarehouse] = useState('');
    const [items, setItems] = useState([]);
    const [dataWarehouse, setDataWarehouse] = useState([]);
    const [dataUnit, setDataUnit] = useState([]);
    const [dataCategory, setDataCategory] = useState([]);

    const [no, setNo] = useState(() => {
        const storedNoItem = localStorage.getItem('storedNoItemItem');
        return storedNoItem ? parseInt(storedNoItem, 10) : 1;
    });

    useEffect(() => {
        const warehouse = new fetchDataService(getUrl(`/api/admin/warehouse`));
        const unit = new fetchDataService(getUrl(`/api/admin/unit`));
        const category = new fetchDataService(getUrl(`/api/admin/category`));
        const items = new fetchDataService(getUrl(`/api/admin/items`));
        Promise.all([warehouse.fetchData(), unit.fetchData(), category.fetchData(), items.fetchData()])
        .then(response => {
            const [warehouse, unit, category, items] = response;
            setDataWarehouse(warehouse.data);
            setDataUnit(unit.data);
            setDataCategory(category.data);
            setItems(items.data);
            console.log(items.data)
        })
        .catch(error => {
            console.error(error);
        });
    }, [])

    const data = items.map(item => ({ id: item.name, value: item.name }));

    function generateCode(no) {
        const paddedNo = String(no).padStart(3, '0');
        return `${unit}-${category}-${warehouse}-${paddedNo}`;
    }

    const code = generateCode(no);
    
    const handleCode = (e) => {
        setCode(e.target.value);
    };
    const handleName = (e) => {
        setName(e.target.value);
        setIsOpen(false);
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
    const handleImage = (e) => {
        setImage(e.target.files[0]);
    };
    const handleVendor = (e) => {
        setVendor(e.target.value);
    };
    const handleCategory = (e) => {
        setCategory(e.target.value);
    };
    const handleUnit = (e) => {
        setUnit(e.target.value);
    };
    const handleWarehouse = (e) => {
        setWarehouse(e.target.value);
    };

    const handleSelect = (item) => {
        console.log(item.value);
        setName(item.value);
    };

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const code = generateCode(no).replace(/-/g, '');
      
        const formData = new FormData();
        formData.append('code', code);
        formData.append('name', name);
        formData.append('description', description);
        formData.append('series', series);
        formData.append('total', total);
        formData.append('category_id', category);
        formData.append('unit_id', unit);
        formData.append('warehouse_id', warehouse);
        formData.append('image', image);
        formData.append('vendor', vendor);

        await axios.post('http://127.0.0.1:8000/api/admin/item', formData, { 
            headers: {
                'Content-Type': 'multipart/form-data',
        },
        }).then(response => {
            setNo(no + 1);
            console.log(response)
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
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="flex space-x-4">
                        <div className="space-y-4 flex-1 flex-col">
                            <div className="flex group">
                                <label htmlFor="kode" className="w-64">Kode</label>
                                <input 
                                    type="text" 
                                    className="w-full border rounded p-2 border-gray-300 outline-none cursor-not-allowed"
                                    value={code} 
                                    onChange={handleCode} 
                                    readOnly/>
                            </div>
                            <div className="flex w-full space-x-4">
                                <div className="w-full space-y-2">
                                    <div className="group space-y-2">
                                        <DatalistInput
                                            label="Nama Produk"
                                            onChange={handleName}
                                            value={name}
                                            onSelect={handleSelect}
                                            items={data}
                                        />
                                    </div>
                                    <div className="group space-y-2">
                                        <label htmlFor="kode" className="w-64">Deskripsi</label>
                                        <input 
                                            type="text"
                                            className="w-full border rounded p-2 border-gray-300 outline-none"
                                            onChange={handleDescription}
                                            value={description} 
                                        />
                                    </div>
                                    <div className="group space-y-2">
                                        <label htmlFor="kode" className="w-64">Series</label>
                                        <input 
                                            type="text" 
                                            className="w-full border rounded p-2 border-gray-300 outline-none"
                                            onChange={handleSeries}
                                            value={series}
                                        />
                                    </div>
                                    <div className="group space-y-2">
                                        <label htmlFor="kode" className="w-64">Vendor</label>
                                        <input 
                                            type="text" 
                                            className="w-full border rounded p-2 border-gray-300 outline-none"
                                            onChange={handleVendor}
                                            value={vendor}
                                        />
                                    </div>
                                </div>
                                <div className="w-full space-y-2">
                                    <div className="group space-y-2">
                                            <label htmlFor="kode" className="w-64">Total</label>
                                            <input 
                                                type="number" 
                                                className="w-full border rounded p-2 border-gray-300 outline-none"
                                                onChange={handleTotal}
                                                value={total}
                                            />
                                    </div>
                                    <div className="group space-y-2">
                                        <label htmlFor="kode" className="w-64">Unit Produk</label>
                                        <select 
                                            className="w-full border rounded p-2 border-gray-300 outline-none"
                                            onChange={handleUnit}
                                            value={unit}
                                        >
                                            {dataUnit.map(unit => (
                                                <>
                                                    <option key={unit.id} value={unit.id} selected>
                                                        {unit.name}
                                                    </option>
                                                </>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="group space-y-2">
                                        <label htmlFor="kode" className="w-64">Kategori</label>
                                        <select 
                                            className="w-full border rounded p-2 border-gray-300 outline-none"
                                            onChange={handleCategory}
                                            value={category}
                                        >
                                            {dataCategory.map(category => (
                                                <>
                                                    <option key={category.id} value={category.id}>
                                                        {category.name}
                                                    </option>
                                                </>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="group space-y-2">
                                        <label htmlFor="kode" className="w-64">Warehouse</label>
                                        <select 
                                            className="w-full border rounded p-2 border-gray-300 outline-none"
                                            onChange={handleWarehouse}
                                            value={warehouse}
                                        >
                                            {dataWarehouse.map(warehouse => (
                                                <>
                                                    <option key={warehouse.id} value={warehouse.id}>
                                                        {warehouse.name}
                                                    </option>
                                                </>
                                            ))}
                                        </select>
                                    </div>
                                </div>
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
                                    <input 
                                        id="dropzone-file" 
                                        type="file" 
                                        className="hidden"
                                        onChange={handleImage}/>
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