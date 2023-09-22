import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Sidebar from "../component/Sidebar"
import Navbar from "../component/Navbar"
import LaporanMasuk from "../component/LaporanMasuk"
import LaporanKeluar from "../component/LaporanKeluar"
import Product from "../component/Product"
import Table_barang from "../component/table_barang";
import Table_gudang from "./../component/table_gudang";


function Layout() {
    return (
        <Router>
            <body className="flex w-screen h-screen bg-gray-100">
                <Sidebar/>
                <div className="w-full flex flex-col">
                    <Navbar />
                    <div className="h-full p-4">
                        <div className="h-full flex flex-col bg-white rounded-xl shadow-md">
                            <Routes>
                                <Route path="/" element={<Product />}/>
                                <Route path="/laporanmasuk" element={<LaporanMasuk />}/>
                                <Route path="/laporankeluar" element={<LaporanKeluar />}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </body>
        </Router>
    );
}

export default Layout