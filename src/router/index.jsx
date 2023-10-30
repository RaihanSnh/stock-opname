import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import NotFound from "../views/error/Notfound";
import { LoadingComponent } from "../component/Loading";

//auth
import Login from "../views/auth/Login";

// Admin
import Admin from "../views/pages/admin/Admin";
import Produk from "../views/pages/admin/Produk";
import ItemCreate from "../views/pages/admin/ItemCreate";
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
import UserEdit from "../views/pages/admin/UserEdit";

export default function Router({ role, dataLoaded }) {
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();

    if(!auth) {
        navigate('/');
    }

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
                                <Route path='admin/tambahbarang' element={<ItemCreate />} />
                                <Route path='admin/tambahgudang' element={<WarehouseCreate />} />
                                <Route path='admin/gudang/edit/:id' element={<WarehouseEdit />} />
                                <Route path='user/:role' element={<User />} />
                                <Route path='user/create' element={<UserCreate />} />
                                <Route path='user/:role/edit/:id' element={<UserEdit />} />
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
                    {auth && dataLoaded && role === "warehouse_staff" && (
                        <Route path="/dashboard" element={<Staff />}>
                            <Route path="staff" element={<Produk />}>
                                <Route path="barang" element={<TableBarang/>}/>
                                <Route path="gudang" element={<TableGudang/>}/>
                            </Route>
                        </Route>
                    )}
                    {auth && dataLoaded && role === "requester" && (
                        <Route path="/dashboard" element={<Requester />}>
                            <Route path="requester" element={<Request />} />
                        </Route>
                    )}
                    {auth && dataLoaded && (
                        <Route path="*" element={<NotFound />} />
                    )}
                </Routes>
            )}
        </>
    );
}