import { fetchDataService } from "../../../utils/fetchData";
import { getUrl } from "../../../utils/config";
import { useEffect, useState } from "react";

export default function Order() {
    const [dataRequest, setDataRequest] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filterStatus, setFilterStatus] = useState(['accepted', 'rejected']);
    const [activeButton, setActiveButton] = useState('Riwayat');

    useEffect(() => {
        const request = new fetchDataService(getUrl('/api/admin/request'));
        request.fetchData()
        .then(response => {
            setDataRequest(response.data);
            setIsLoading(false);
            console.log(response)
        })
        .catch(error => {
            console.error(error);
        });
    }, [])
    
    const handleButtonClick = (buttonName, status) => {
        setActiveButton(buttonName);
        setFilterStatus(status);
    }

    return(     
        <>
            <div className="mt-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-medium">Daftar Permohonan</h1>
                    <div className="flex gap-4">
                        <button 
                            style={{ borderBottom: activeButton === 'Riwayat' ? '2px solid black' : 'none' }}
                            onClick={() => handleButtonClick('Riwayat', ['accepted', 'rejected'])}
                        >
                            Riwayat
                        </button>
                        <button 
                            style={{ borderBottom: activeButton === 'Dalam Proses' ? '2px solid black' : 'none' }}
                            onClick={() => handleButtonClick('Dalam Proses', ['pending'])}
                        >
                            Dalam Proses
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full mt-4 overflow-auto scrollbar-gray">
                {isLoading ? (
                    <>
                        <div className="space-y-2 animate-pulse">
                            <div className="py-20 flex bg-gray-200 p-3.5 rounded"/>
                            <div className="py-20 flex bg-gray-200 p-3.5 rounded"/>
                            <div className="py-20 flex bg-gray-200 p-3.5 rounded"/>
                            <div className="py-20 flex bg-gray-200 p-3.5 rounded"/>
                            <div className="py-20 flex bg-gray-200 p-3.5 rounded"/>
                            <div className="py-20 flex bg-gray-200 p-3.5 rounded"/>
                            <div className="py-20 flex bg-gray-200 p-3.5 rounded"/>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col gap-2">
                        {
                            dataRequest.filter(row => filterStatus.includes(row.status)).map((row) => (
                                <div class="p-4 border border-gray-300 rounded-lg bg-gray-50"key={row.id}>
                                    <div class="flex items-center">
                                        <h3 class="text-lg font-medium text-gray-800 flex space-x-2">
                                            <span>{row.form.items.name} {row.form.items.series}</span>
                                            {row.status == 'accepted' ? 
                                                <div>
                                                    <span className="bg-green-100 text-green-800 text-xs font-medium p-1 px-2 rounded-full">Permohonan Diterima</span>
                                                </div>
                                            : row.status == 'rejected' ?
                                                <div>
                                                    <span className="bg-red-100 text-red-800 text-xs font-medium p-1 px-2 rounded-full">Permohonan Ditolak</span>
                                                </div>
                                            : null
                                            }
                                        </h3>
                                    </div>
                                    <div class="mt-2 mb-4 text-sm text-gray-800">
                                        <span>{row.form.reason}</span>
                                    </div>
                                    <div class="flex">
                                        <button type="button" class="text-white bg-blue-500 hover:bg-blue-400 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center">
                                            Detail Permohonan
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )}
            </div>
        </>
    )
}