import { useContext, useEffect, useState } from "react";
import { getUrl } from "../../../utils/config";
import { fetchDataService } from "../../../utils/fetchData";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../App";

export default function Form({ setIsLoading, cancelSelected, onClose }) {
    const [selectedItems, setSelectedItems] = useState([]);
    const [items, setItems] = useState([]);
    const [itemId, setItemId] = useState([]);
    const [total, setTotal] = useState({});
    const [reason, setReason] = useState({});
    const navigate = useNavigate();
    const { userData } = useContext(AuthContext);

    const redirectBack = () => {
        onClose();
    };

    useEffect(() => {
        const savedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
        setSelectedItems(savedItems);
    }, []);

    const fetchSelectedItemData = async (id) => {
        const itemData = new fetchDataService(getUrl(`/api/admin/item/view/${id}`));
        try {
            const response = await itemData.fetchData();
            console.log(response)
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const fetchItems = async () => {
            const fetchedItems = [];
            const fetchedItemId = [];
            for (const id of selectedItems) {
                const item = await fetchSelectedItemData(id);
                fetchedItems.push(item);
                fetchedItemId.push(item.item.id);
            }
            setItems(fetchedItems);
            setItemId(fetchedItemId);
        };
        fetchItems();
    }, [selectedItems]);
    
    const handleTotal = (id, value) => {
        setTotal(prevTotals => ({ ...prevTotals, [id]: value }));
    };
    
    const handleReason = (id, value) => {
        setReason(prevReasons => ({ ...prevReasons, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = userData.id;
        setIsLoading(true);
        await axios.post(`http://127.0.0.1:8000/api/admin/form`, {
            total, 
            reason, 
            item_id : itemId,
            requester_id : userId
        })
        .then(response => {
            console.log(response.data);
            localStorage.setItem('selectedItems', JSON.stringify([]));
        })
        .catch(error => {
            console.error(error);
        })
        .finally(() => {
            redirectBack()
            itemId.map(item => cancelSelected(item))
            setIsLoading(false)
        });
    };

    const handleCancel = (id) => {
        cancelSelected(id)
        const updatedItems = selectedItems.filter(item => item !== id);
        setSelectedItems(updatedItems);
        localStorage.setItem('selectedItems', JSON.stringify(updatedItems));
        updatedItems.length == 0 && redirectBack()
    };

    return(
        <div className="p-5 fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 -top-5">
            <div className="max-w-[700px] bg-white rounded-xl shadow-md ml-20 py-6 px-6 flex flex-col scrollbar-gray space-y-2">
                <h1 className="font-medium text-xl">Form Permohonan</h1>
                <ul className="w-full space-x-2 flex overflow-x-auto scrollbar-gray pb-1">
                    {items.map((item) => (
                        <li key={item.item.id}>
                            <div className="w-80 border rounded p-2 border-gray-300 space-y-2">
                                <img className="w-full h-44 object-contain" src={item.item.image} alt="" />
                                <span className="font-medium">{item.item.code} {item.item.items.name}</span>
                                <input 
                                    className="w-full border rounded p-2 border-gray-300 outline-none"
                                    name="total"
                                    placeholder="Masukan Total"
                                    type="number"
                                    min="1"
                                    max={parseInt(item.item.total)}
                                    value={total[item.item.id] || ''}
                                    onChange={e => { 
                                        const totalInput = parseInt(e.target.value || 0)
                                        if(!isNaN(totalInput) && totalInput <= parseInt(item.item.total)) {
                                            handleTotal(item.item.id, e.target.value)
                                        }
                                     }}
                                    required
                                />
                                <textarea 
                                    className="w-full border rounded p-2 border-gray-300 outline-none h-32" 
                                    name="reasons" 
                                    placeholder="Masukan alasan"
                                    value={reason[item.item.id] || ''}
                                    onChange={e => handleReason(item.item.id, e.target.value)}
                                    required
                                />
                                <button type="button" onClick={() => handleCancel(item.item.id)} className="w-full p-2 px-5 bg-red-500 rounded-md text-white font-medium hover:bg-red-600 transition duration-300 ease-in-out">Cancel</button>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="space-x-2 flex justify-end">
                    <button onClick={redirectBack} type="button" className="p-2 px-5 border-2 rounded-md font-medium hover:bg-gray-100 transition duration-300 ease-in-out">Batal</button>
                    <button onClick={handleSubmit} type="button" className="p-2 px-5 bg-sky-500 rounded-md text-white font-medium hover:bg-sky-600 transition duration-300 ease-in-out">Simpan</button>
                </div>
            </div>
        </div>
    )
}