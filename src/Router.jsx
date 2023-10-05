import { createBrowserRouter } from "react-router-dom"
import Login from "./assets/pages/auth/Login"
import Produk from "./assets/component/Petugas/Produk"
import LaporanMasuk from "./assets/component/Petugas/LaporanMasuk"
import LaporanKeluar from "./assets/component/Petugas/LaporanKeluar"
import Admin from "./assets/pages/Admin"
import Pemohon from "./assets/pages/pemohon"
import Petugas from "./assets/pages/Petugas"
import Request from "./assets/component/Pemohon/Request"


const router = createBrowserRouter([
    {
        element: <Admin/>,
        children: [
            {
                path: '/dashboard/admin',
                element: <Produk/>,
            },
            {
                path: '/laporanmasuk',
                element: <LaporanMasuk/>,
            },
            {
                path: '/laporankeluar',
                element: <LaporanKeluar/>,
            },
        ]
    },
    {
        element: <Petugas/>,
        children: [
            {
                path: '/dashboard/petugas',
                element: <Produk/>,
            },
        ]
    },
    {
        element: <Pemohon/>,
        children: [
            {
                path: '/dashboard/pemohon',
                element: <Request/>,
            },
        ]
    },
    {
        path: '/',
        element: <Login/>,
    }
])

export default router