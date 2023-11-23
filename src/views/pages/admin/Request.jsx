import { Link } from "react-router-dom"
import { fetchDataService } from "../../../utils/fetchData";
import { getUrl } from "../../../utils/config";
import { useEffect, useState } from "react";
import axios from "axios";
import DetailItems from "./DetailItem";

export default function ListRequest() {
    const [dataRequest, setDataRequest] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentRequest, setCurrentRequest] = useState(null);
    const [update, setUpdate] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const hideModal = () => {
        setIsModalVisible(false);
    };

    const fetchData = () => {
        const request = new fetchDataService(getUrl('/api/admin/request'));
        request.fetchData()
        .then(response => {
            setDataRequest(response.data);
            setIsLoading(false);
            console.log(response.data)
        })
        .catch(error => {
            console.error(error);
        })
    }
    
    useEffect(() => {
        fetchData();
    }, [update])

    const handleStatusChange = async (status, requestId) => {
        await axios.post(`http://127.0.0.1:8000/api/admin/request/action/${requestId}`, {
            status
        })
        .then(response => {
            console.log("success");
        })
        .catch(error => {
            console.error(error);
        }).finally(() => {
            hideModal()
            setUpdate(!update);
        })
    };
    
    return(     
        <>
            <div className="mt-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-medium">Daftar Permohonan</h1>
                </div>
            </div>  
            <div className="w-full mt-4 overflow-auto scrollbar-gray">
                {isLoading ? (
                    <>
                        <div className="space-y-2 animate-pulse">
                            <div className="flex bg-gray-100 p-16 rounded"/>
                            <div className="flex bg-gray-100 p-16 rounded"/>
                            <div className="flex bg-gray-100 p-16 rounded"/>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col gap-2">
                        {
                            dataRequest.filter(request => request.status == 'pending').map((row, index) => (
                                <>
                                    <div class="p-4 border border-gray-300 rounded-lg bg-gray-50" key={row.id}>
                                        <div class="flex items-center">
                                            <h3 class="text-lg font-medium text-gray-800">
                                                <span>{row.form.items.name} {row.form.items.series}</span>
                                            </h3>
                                        </div>
                                        <div class="mt-2 mb-4 text-sm text-gray-800">
                                            <span>{row.form.reason}</span>
                                            <span>{row.status}</span>
                                        </div>
                                        <div class="flex gap-2">
                                            <button class="text-white bg-blue-500 hover:bg-blue-400 font-medium rounded-lg text-xs p-2 px-4 text-center inline-flex items-center" type="button" onClick={() => {showModal(); setCurrentRequest(row)}}>
                                                Detail Permohonan
                                            </button>
                                            <button class="text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white font-medium rounded-lg text-xs p-2 px-4 text-center inline-flex items-center" type="button" onClick={() => handleStatusChange('rejected', row.id)}>
                                                Tolak
                                            </button>
                                        </div>
                                    </div>
                                    {isModalVisible && <DetailItems onClose={hideModal} dataRequest={[currentRequest]} handleStatusChange={handleStatusChange}/>}
                                </>
                            ))
                        }
                    </div>
                )}
            </div>
        </>
    )
}