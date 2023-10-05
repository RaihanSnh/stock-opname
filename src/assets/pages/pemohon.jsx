export default function Pemohon() {
    return(
        <Router>
            <div className="h-screen w-screen flex flex-col overflow-y-auto bg-gray-100 scrollbar select-none">
                <Sidebar/>
                <Navbar />
                <div className="p-4 max-h-screen">
                    <div className="bg-white rounded-xl shadow-md ml-20 py-6 px-6 max-h-full flex flex-col">
                        <Routes>
                            {/* <Route path="/" element={<Login/>}/> */}
                            <Route path="/" element={<Product />}/>
                            <Route path="/laporanmasuk" element={<LaporanMasuk />}/>
                            <Route path="/laporankeluar" element={<LaporanKeluar />}/>
                            <Route path="/tambahbarang" element={<TambahBarang />}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    )
}