import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Sidebar from "../component/Sidebar"
import Navbar from "../component/Navbar"
import LaporanMasuk from "../component/LaporanMasuk"
import LaporanKeluar from "../component/LaporanKeluar"
import Product from "../component/Product"
import TambahBarang from "../component/Produk_baru"


function Layout() {
    return (
        <Router>
            <div className="h-screen w-screen flex overflow-y-auto bg-gray-100 scrollbar">
                <Sidebar/>
                <div className="w-full flex flex-col">
                    <Navbar />
                    <div className="p-4">
                        <div className="bg-white flex flex-col rounded-xl shadow-md ml-20 mt-16 py-6 px-6 max-full">
                            <Routes>
                                <Route path="/" element={<Product />}/>
                                <Route path="/laporanmasuk" element={<LaporanMasuk />}/>
                                <Route path="/laporankeluar" element={<LaporanKeluar />}/>
                                <Route path="/tambahbarang" element={<TambahBarang />}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default Layout