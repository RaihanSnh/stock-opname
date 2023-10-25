import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NotFound from "../views/error/Notfound";
import { LoadingComponent } from "../component/Loading";

//auth
import Login from "../views/auth/Login";

// Admin
import Admin from "../views/pages/admin/Admin";
import Produk from "../views/pages/admin/Produk";
import TambahBarang from "../views/pages/admin/ProductCreate";
import User from "../views/pages/admin/User";
import Unit from "../views/pages/admin/Unit";
import Kategori from "../views/pages/admin/Kategori";
import LaporanMasuk from "../views/pages/admin/LaporanMasuk";
import LaporanKeluar from "../views/pages/admin/LaporanKeluar";
import CreateKategori from "../views/pages/admin/KategoriCreate";
import UserCreate from "../views/pages/admin/UserCreate";
import UnitCreate from "../views/pages/admin/UnitCreate";
import ListRequest from "../views/pages/admin/Request";
import KategoriEdit from "../views/pages/admin/KategoriEdit";
import UnitEdit from "../views/pages/admin/UnitEdit";

//Staff
import Staff from "../views/pages/staff/Staff";

//Requester
import Requester from "../views/pages/requester/Requester";
import Request from "../views/pages/requester/Request";

import { AuthContext } from "../App";

export default function Router({ role }) {
    const { auth } = useContext(AuthContext);
    const [dataLoaded, setDataLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
          setDataLoaded(true);
        }, 2000);
    }, []);

    return (
        <>
            {!dataLoaded ? (
                <LoadingComponent />
            ) : (
                <Routes>
                    {!auth && <Route path="/" element={<Login/>} />}
                    {auth && dataLoaded && role === "admin" && (
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
                    {auth && dataLoaded && role === "staff" && (
                        <Route path="/dashboard" element={<Staff />}>
                            <Route index element={<Produk />} />
                            <Route path="staff" element={<Produk />} />
                        </Route>
                    )}
                    {auth && dataLoaded && role === "requester" && (
                        <Route path="/dashboard" element={<Requester />}>
                            <Route index element={<Requester />} />
                            <Route path="requester" element={<Requester />} />
                            <Route path='request' element={<Request />} />
                        </Route>
                    )}
                    {dataLoaded && (
                        <Route path="*" element={<NotFound />} />
                    )}
                </Routes>
            )};
        </>
    );
}