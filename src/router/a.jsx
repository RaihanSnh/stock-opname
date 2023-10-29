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
import TableBarang from "../views/pages/admin/table_barang";
import TableGudang from "../views/pages/admin/table_gudang";
import WarehouseCreate from "../views/pages/admin/WarehouseCreat";
import WarehouseEdit from "../views/pages/admin/WarehouseEdit";
import TimeOut from "../views/error/Timeout";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";

export default function Router({ role }) {
    const { auth } = useContext(AuthContext);
    const [dataLoaded, setDataLoaded] = useState(false);
    // const [timeOut, setTimeOut] = useState(false);
    // const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setDataLoaded(true);
        }, 1000);
    }, []);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setTimeOut(true);
    //     }, 5000);
    // }, []);

    return (
        <>
            {!dataLoaded ? (
                <LoadingComponent />
            ) : (
                <Routes>
                    {!auth && <Route path="/" element={<Login/>} />}
                    {auth && dataLoaded && role === "admin" && (
                        <>
                            <Route path="/dashboard" element={<Admin />}>
                                <Route path="admin" element={<Produk />}>
                                    <Route path="barang" element={<TableBarang/>}/>
                                    <Route path="gudang" element={<TableGudang/>}/>
                                </Route>
                                <Route path='admin/tambahbarang' element={<TambahBarang />} />
                                <Route path='admin/tambahgudang' element={<WarehouseCreate />} />
                                <Route path='admin/gudang/edit/:id' element={<WarehouseEdit />} />
                                <Route path='user/:role' element={<User />} />
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
                        </>
                    )}
                    {auth && dataLoaded && role === "staff" && (
                        <Route path="/dashboard" element={<Staff />}>
                            <Route index element={<Produk />} />
                            <Route path="staff" element={<Produk />} />
                        </Route>
                    )}
                    {auth && dataLoaded && role === "requester" && (
                        <Route path="/dashboard" element={<Requester />}>
                            <Route path="requester" element={<Request />} />
                        </Route>
                    )}
                    {/* {timeOut && (
                        <Route path="*" element={<TimeOut />} />
                    )} */}
                    {dataLoaded && (
                        <Route path="*" element={<NotFound />} />
                    )}
                </Routes>
            )};
        </>
    );
}