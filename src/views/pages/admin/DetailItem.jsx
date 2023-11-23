export default function DetailItems({onClose, dataRequest, handleStatusChange}) {
    const redirectBack = () => {
        onClose();
    };

    return (
        <div className="p-5 fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="max-w-[720px] bg-white rounded-xl shadow-md ml-20 py-6 px-6 flex flex-col scrollbar-gray space-y-4">
                <h1 className="font-medium text-xl">Detail Item</h1>
                {dataRequest.map((row, index) => (
                    <>
                        <div className="space-y-2" key={index}>
                            <div class="h-64 border border-gray-300 rounded-lg bg-gray-50 flex gap-4 items-center px-4">
                                <img src={row.form.items.image} className="h-full w-52 object-contain border-r py-4 pr-4" alt="Gambar tidak ada" />
                                <div className="h-full w-full flex flex-col justify-between py-4">
                                    <div className="flex flex-col space-y-1">
                                        <span className="text-xs">Code : {row.form.items.code}</span>
                                        <span class="text-lg font-bold text-gray-800">
                                            {row.form.items.name} {row.form.items.series}
                                        </span>
                                        <span class="text-sm text-gray-800 overflow-y-auto scrollbar-gray">
                                            {row.form.reason}
                                        </span>
                                    </div>
                                    <span class="text-xs text-gray-800 flex items-center">
                                        Total : {row.form.total}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 justify-end">
                            <button onClick={redirectBack} type="button" className="border-2 box-border rounded-md font-medium text-xs p-2 px-4 hover:bg-gray-100">Batal</button>
                            <button class="text-white bg-blue-500 font-medium rounded-lg text-xs p-2 px-4 items-center hover:bg-blue-400" type="button" onClick={() => handleStatusChange('accepted', row.id)}>
                                Terima
                            </button>
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}