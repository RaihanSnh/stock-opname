import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AuthContext } from "../App";
import axios from "axios";
import Login from "../views/auth/Login";
import Admin from "../views/pages/admin/Admin";
import Produk from "../views/pages/admin/Produk";
import TambahBarang from "../views/pages/admin/Produk_baru";
import User from "../views/pages/admin/User";
import Unit from "../views/pages/admin/Unit";
import Kategori from "../views/pages/admin/Kategori";
import LaporanMasuk from "../views/pages/admin/LaporanMasuk";
import LaporanKeluar from "../views/pages/admin/LaporanKeluar";
import CreateKategori from "../views/pages/admin/KategoriCreate";
import UserCreate from "../views/pages/admin/UserCreate";
import UnitCreate from "../views/pages/admin/UnitCreate";
import ListRequest from "../views/pages/admin/Request";
import Staff from "../views/pages/staff/Staff";
import Requester from "../views/pages/requester/Requester";
import Request from "../views/pages/requester/Request";
import NotFound from "../views/error/Notfound";
import Cookies from "universal-cookie";
import { LoadingComponent } from "../component/Loading";
import KategoriEdit from "../views/pages/admin/KategoriEdit";
import UnitEdit from "../views/pages/admin/UnitEdit";

export default function Router() {
    const { auth, setAuth } = useContext(AuthContext);
    const [role, setRole] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [dataLoaded, setDataLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(function() {
        setIsLoading(true);
        axios.get('http://127.0.0.1:8000/api/auth/getuser', {
            headers: {
                Authorization: `Bearer ${new Cookies().get('Authorization')}`
            }
        }).then(response => {
            setRole(response.data.user.role);
            console.log(role)
            setDataLoaded(true);
        }).catch(error => {
            console.error(error);
            setDataLoaded(true);
        }).finally(() => {
            setIsLoading(false);
        });
    }, [role]);

    return (
        <>
            {isLoading ? (
                <LoadingComponent />
            ) : (
                <Routes>
                    {dataLoaded && !auth ? (
                        <Route path="/" element={<Login />} />
                    ) : null}
                    {dataLoaded && auth && role === 'admin' && (
                        <Route path="/dashboard" element={<Admin />}>
                            <Route index element={<Produk />} />
                            <Route path='admin' element={<Produk />} />
                            <Route path='tambahbarang' element={<TambahBarang />} />
                            <Route path='user' element={<User />} />
                            <Route path='user/create' element={<UserCreate />} />
                            <Route path='kategori' element={<Kategori />} />
                            <Route path='kategori/create' element={<CreateKategori />} />
                            <Route path='kategori/edit/:id' element={<KategoriEdit />} />
                            <Route path='unit' element={<Unit />} />
                            <Route path='unit/create' element={<UnitCreate />} />
                            <Route path='unit/edit/:id' element={<UnitEdit />} />
                            <Route path='laporanmasuk' element={<LaporanMasuk />} />
                            <Route path='laporankeluar' element={<LaporanKeluar />} />
                            <Route path='request' element={<ListRequest />} />
                        </Route>
                    )}
                    {dataLoaded && auth && role === 'staff' && (
                        <Route path="/dashboard" element={<Staff />}>
                            <Route index element={<Produk />} />
                        <Route path='staff' element={<Produk />} />
                    </Route>
                    )}
                    {dataLoaded && auth && role === 'requester' && (
                        <Route path="/dashboard" element={<Requester />}>
                            <Route index element={<Requester />} />
                        <Route path='staff' element={<Request />} />
                    </Route>
                    )}
                    {dataLoaded && auth && (
                        <Route path="*" element={<NotFound />} />
                    )}
                </Routes>
            )}
        </>
    );
}