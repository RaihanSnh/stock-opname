import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Sidebar from "../component/Sidebar"
import Navbar from "../component/Navbar"
import LaporanMasuk from "../component/LaporanMasuk"
import LaporanKeluar from "../component/LaporanKeluar"
import Product from "../component/Product"

function Layout() {
    return (
        <Router>
            <body className="flex w-screen h-screen">
                    <Sidebar/>
                    <div className="w-full">
                        <Navbar />
                        <div className="p-4">
                            <Routes>
                                <Route path="/" element={<Product />}/>
                                <Route path="/laporanmasuk" element={<LaporanMasuk />}/>
                                <Route path="/laporankeluar" element={<LaporanKeluar />}/>
                            </Routes>
                        </div>
                    </div>
            </body>
        </Router>
    );
}

export default Layout