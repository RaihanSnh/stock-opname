import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AuthContext } from "../App";
import axios from "axios";
import Login from "../views/auth/Login"
import Admin from "../views/pages/admin/Admin"
import Produk from "../views/pages/admin/Produk"
import TambahBarang from "../views/pages/admin/Produk_baru"
import User from "../views/pages/admin/User"
import Unit from "../views/pages/admin/Unit"
import Kategori from "../views/pages/admin/Kategori"
import LaporanMasuk from "../views/pages/admin/LaporanMasuk"
import LaporanKeluar from "../views/pages/admin/LaporanKeluar"
import CreateKategori from "../views/pages/admin/KategoriCreate";
import UserCreate from "../views/pages/admin/UserCreate";
import UnitCreate from "../views/pages/admin/UnitCreate";
import ListRequest from "../views/pages/admin/Request";
import Staff from "../views/pages/staff/Staff"
import Requester from "../views/pages/requester/Requester"
import Request from "../views/pages/requester/Request";

export default function Router() {
    const [users, setUser] = useState(null);
    const { auth, setAuth } = useContext(AuthContext);
    const navigate = useNavigate

    useEffect(function() {
        axios.get('http://127.0.0.1:8000/api/admin/')
        .then(function(response) {
            const user = response.data.data;
            setUser(user);
        });
    }, []);

    if (!auth) {
        navigate('/');
    } else {
        navigate(-1);
    }

    return (
        <Routes>
            {!auth ? (
                <>
                    <Route path="/" element={<Login />} />
                </> 
            ) : (
                <>
                    <Route path="/dashboard" element={<Admin />}>
                        <Route index element={<Produk />} />
                        <Route path='admin' element={<Produk />} />
                        <Route path='tambahbarang' element={<TambahBarang />} />
                        <Route path='user' element={<User />} />
                        <Route path='user/create' element={<UserCreate />} />
                        <Route path='kategori' element={<Kategori />} />
                        <Route path='kategori/create' element={<CreateKategori/>} />
                        <Route path='unit' element={<Unit />} />
                        <Route path='unit/create' element={<UnitCreate />} />
                        <Route path='laporanmasuk' element={<LaporanMasuk />} />
                        <Route path='laporankeluar' element={<LaporanKeluar />} />
                        <Route path='request' element={<ListRequest />} />
                    </Route>
                    <Route path="/dashboard/staff" element={<Staff />} />
                    <Route path="/dashboard/requester" element={<Requester />}>   
                        <Route index element={<Request />} />
                    </Route>
                </>
            )}
        </Routes>
    );
}