export default function Form({ onClose, items }) {

    const redirectBack = () => {
        onClose();
    };



    return(
        <div className="p-5 fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 -top-5">
            <div className="max-w-[700px] bg-white rounded-xl shadow-md ml-20 py-6 px-6 flex flex-col scrollbar-gray space-y-2">
                <h1 className="font-medium text-xl">Form Permohonan</h1>
                <ul className="w-full space-x-2 flex overflow-x-auto scrollbar-gray pb-1">
                    <li>
                        <div className="w-80 border rounded p-2 border-gray-300 space-y-2">
                            <img className="w-full h-44 object-contain" src={items.image} alt="" />
                            <span className="font-medium">{items.code} {items.items.name}</span>
                        </div>
                    </li>
                </ul>
                <div className="space-x-2 flex justify-end">
                    <button onClick={redirectBack} type="button" className="p-2 px-5 border-2 rounded-md font-medium hover:bg-gray-100 transition duration-300 ease-in-out">Batal</button>
                </div>
            </div>
        </div>
    )
}