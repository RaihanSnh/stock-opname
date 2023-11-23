import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUrl } from "../../../utils/config";
import { fetchDataService } from "../../../utils/fetchData";
import Form from "./Form";
import { AuthContext } from "../../../App";

export default function Request() { 
    const [dataItem, setDataItem] = useState([]);
    const [dataCategory, setDataCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const { userData } = useContext(AuthContext);

    const showForm = () => {
        setIsFormVisible(true);
    };

    const hideForm = () => {
        setIsFormVisible(false);
    };

    useEffect(() => {
        const userWarehouseId = userData.warehouse_id;
        const item = new fetchDataService(getUrl(`/api/requester/item/${userWarehouseId}`));
        const category = new fetchDataService(getUrl(`/api/admin/category`));
        Promise.all([item.fetchData(), category.fetchData()]
        ).then(response => {
            const [item, category] = response;
            setDataItem(item.data);
            setDataCategory(category.data);
            console.log(response)
        })
        .catch(error => {
            console.error(error);
        });
    }, [isLoading, userData]);

    useEffect(() => {
        const savedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
        setSelectedItems(savedItems);
    }, []);
    
    const handleClick = (id) => {
        const updatedItems = [...selectedItems, id];
        setSelectedItems(updatedItems);
        localStorage.setItem('selectedItems', JSON.stringify(updatedItems));
    };
    
    const handleCancel = (id) => {
        const updatedItems = selectedItems.filter(item => item !== id);
        setSelectedItems(updatedItems);
        localStorage.setItem('selectedItems', JSON.stringify(updatedItems));
    };

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
            <div className="gap-2 flex">
                {dataCategory.map((row, index) => (
                    <button key={index} className="p-2 border rounded-md h-10">
                        {row.name}
                    </button>
                ))}
            </div>
            <div className="h-full overflow-y-auto scrollbar-gray pb-8">
                <div className="grid grid-cols-6 gap-4">
                    {dataItem.filter((row) => {
                        if (search === "") {
                            return row
                        } else if (row.name.toLowerCase().includes(search.toLowerCase())) {
                            return row
                        }
                    }).map((row) => (
                        <>
                            {row.total == 0 ?     
                                    <div className="grid text-xs font-medium text-gray-900 cursor-not-allowed">
                                        <div key={row.id} className="max-w-sm rounded-lg overflow-hidden border">
                                            <img className="w-full h-48 object-cover rounded-t-lg p-4 filter grayscale opacity-75" src={row.image} alt="Foto tidak ada"/>
                                            <div className="p-2 flex flex-col border-t">
                                                <div className="font-bold text-lg mb-2">{row.items.name} {row.series}</div>
                                                <div className="text-sm mb-2 text-red-700">Barang habis</div>
                                                <button className="text-blue-600 text-left cursor-not-allowed text-xs" disabled>
                                                    Pilih Barang
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                            :
                                <div className="grid text-xs font-medium text-gray-900">
                                    <div key={row.id} className="max-w-sm rounded-lg overflow-hidden border">
                                        <img className="w-full h-48 object-fill rounded-t-lg p-4" src={row.image} alt="Foto tidak ada"/>
                                        <div className="p-2 flex border-t flex-col justify-center">
                                            <div className="font-bold text-lg mb-2">{row.items.name} {row.series}</div>
                                            <div className="text-xs mb-2">Barang tersedia {row.total}</div>
                                            <div className="text-xs mb-2">Barang tersedia {row.warehouse.name}</div>
                                            {selectedItems.includes(row.id) ? (
                                            <Link className="text-blue-600" onClick={() => handleCancel(row.id)}>
                                                Batalkan
                                            </Link>
                                            ) : (
                                            <Link className="text-blue-600" onClick={() => handleClick(row.id)}>
                                                Pilih Barang
                                            </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            }
                        </>
                    ))}
                </div>
            </div>
            {selectedItems.length > 0 && (
                <div className="w-full">
                    <button onClick={showForm} className="bg-green-500 p-2 w-4/12 rounded text-center absolute bottom-0 left-0 right-0 mx-auto m-5 text-white font-medium">
                        Cart {selectedItems.length}
                    </button>
                </div>
            )}
            {isFormVisible && <Form setIsLoading={setIsLoading} cancelSelected={handleCancel} onClose={hideForm} />}
        </>
    )
}