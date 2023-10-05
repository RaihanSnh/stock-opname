export default function Request() {
    return(
        <>
            <form action="#" method="POST">
                <div class="relative mt-1 w-full">
                    <input type="text" class="w-full block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none" placeholder="Search for items"/>
                    <button type="submit" class="cursor-pointer bg-transparent border-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </button>
                </div>
            </form>
            <div className="overflow-x-auto">
                {/* Kategori                 */}
            </div>
            <div class="grid grid-cols-6 gap-4 mt-4">
                <div class="max-w-sm rounded-lg overflow-hidden border">
                    <img class="w-full bg-black h-52 object-cover" src=""/>
                    <div class="p-2 flex items-center border-t">
                        <div class="font-bold text-xl mb-2">Barang</div>
                    </div>
                </div>
                <div class="max-w-sm rounded-lg overflow-hidden border">
                    <img class="w-full bg-black h-52 object-cover" src="="/>
                    <div class="p-2 flex items-center border-t">
                        <div class="font-bold text-xl mb-2">Barang</div>
                    </div>
                </div>
                <div class="max-w-sm rounded-lg overflow-hidden border">
                    <img class="w-full bg-black h-52 object-cover" src=""/>
                    <div class="p-2 flex items-center border-t">
                        <div class="font-bold text-xl mb-2">Barang</div>
                    </div>
                </div>
                <div class="max-w-sm rounded-lg overflow-hidden border">
                    <img class="w-full bg-black h-52 object-cover" src=""/>
                    <div class="p-2 flex items-center border-t">
                        <div class="font-bold text-xl mb-2">Barang</div>
                    </div>
                </div>
                <div class="max-w-sm rounded-lg overflow-hidden border">
                    <img class="w-full bg-black h-52 object-cover" src=""/>
                    <div class="p-2 flex items-center border-t">
                        <div class="font-bold text-xl mb-2">Barang</div>
                    </div>
                </div>
                <div class="max-w-sm rounded-lg overflow-hidden border">
                    <img class="w-full bg-black h-52 object-cover" src=""/>
                    <div class="p-2 flex items-center border-t">
                        <div class="font-bold text-xl mb-2">Barang</div>
                    </div>
                </div>
            </div>
        </>
    )
}