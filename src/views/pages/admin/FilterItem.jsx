import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDataService } from "../../../utils/fetchData";
import { getUrl } from "../../../utils/config";
import Form from "../admin/Form";

export default function FilterItem() {
    const { itemId } = useParams();
    const [dataItem, setDataItem] = useState([]);
    const [view, setView] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isFormVisible, setIsFormVisible] = useState(false);

    const showForm = () => {
        setIsFormVisible(true);
    };

    const hideForm = () => {
        setIsFormVisible(false);
    };

    useEffect(() => {
        const item = new fetchDataService(getUrl(`/api/admin/itemall`));
        item.fetchData()
        .then(response => {
            const filteredItem = response.data.filter(item => item.item_id == itemId);
            setDataItem(filteredItem);
            setIsLoading(false);
            console.log(response)
        })
        .catch(error => {
            console.error(error);
        });
    }, [])

    return(
        <>
            <div className="space-y-4">
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
                <div className="h-full overflow-y-auto scrollbar-gray pb-8">
                    <div className="grid grid-cols-4 gap-4">
                        {dataItem.map((row, i) => (
                            <>
                                <div className="grid text-xs font-medium text-gray-900">
                                    <div key={row.id} className="max-w-sm rounded-lg overflow-hidden border">
                                        <img className="w-full h-48 object-contain rounded-t-lg p-4" src={row.image} alt="Foto tidak ada"/>
                                        <div className="p-2 flex border-t flex-col justify-center space-y-1">
                                            <div className="font-bold text-lg flex justify-between items-center">
                                                {row.series} 
                                                {row.total <= 10 && row.total > 1 ? 
                                                    <div>
                                                        <span className="bg-blue-100 text-blue-800 text-xs font-medium p-1 px-2 rounded-full">Stock hampir habis</span>
                                                    </div>
                                                : row.total == 0 ? 
                                                    <div>
                                                        <span className="bg-red-100 text-red-800 text-xs font-medium p-1 rounded-full">Stock habis</span>
                                                    </div>
                                                : 
                                                    <div>
                                                        <span className="bg-green-100 text-green-800 text-xs font-medium p-1 rounded-full">Stock tersedia</span>
                                                    </div>
                                                }
                                            </div>
                                            <div className="text-xs">Barang tersedia {row.total}</div>
                                            <div>{row.warehouse.name}</div>
                                            <button className="text-blue-500 text-left" onClick={() => {
                                                showForm(row.id)
                                                setView(i)
                                            }}>Detail Barang</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
            {isFormVisible && 
                <Form setIsLoading={setIsLoading} onClose={hideForm} items={dataItem[view]}/>
            }
        </>
    )
}