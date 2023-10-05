import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Sidebar from "../component/Sidebar"
import Navbar from "../component/Navbar"
import LaporanMasuk from "../component/LaporanMasuk"
import LaporanKeluar from "../component/LaporanKeluar"
import Product from "../component/Produk"
import TambahBarang from "../component/Produk_baru"
import Login from "./auth/Login"


export default function Layout() {
    return (
        <Router>
                <div className="h-screen w-screen flex flex-col overflow-y-auto bg-gray-100 scrollbar select-none">
                    <Sidebar/>
                    <Navbar />
                    <div className="p-4 max-h-screen">
                        <div className="bg-white rounded-xl shadow-md ml-20 py-6 px-6 max-h-full flex flex-col">
                            <Routes>
                                <Route path="/" element={<Product />}/>
                                <Route path="/laporanmasuk" element={<LaporanMasuk />}/>
                                <Route path="/laporankeluar" element={<LaporanKeluar />}/>
                                <Route path="/tambahbarang" element={<TambahBarang />}/>
                            </Routes>
                        </div>
                    </div>
                </div>
        </Router>
    );
}