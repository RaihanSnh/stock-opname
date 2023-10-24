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

function PrivateRoute({ role, children, ...rest }) {
  const { auth } = useContext(AuthContext);
  const [userRole, setUserRole] = useState("");

  useEffect(function () {
    axios
      .get("http://127.0.0.1:8000/api/auth/user", {
        headers: {
          Authorization: `Bearer ${new Cookies().get("Authorization")}`,
        },
      })
      .then((response) => {
        setUserRole(response.data.user.role);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const isAuthorized = role.includes(userRole);

  return (
    <Route
      {...rest}
      render={() => {
        if (auth && isAuthorized) {
          return children;
        }
        else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
}

export default function Router() {
  const { auth } = useContext(AuthContext);
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  useEffect(function () {
    axios
      .get("http://127.0.0.1:8000/api/auth/user", {
        headers: {
          Authorization: `Bearer ${new Cookies().get("Authorization")}`,
        },
      })
      .then((response) => {
        setRole(response.data.user.role);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Routes>
      <Route path="/">
        {!auth ? (
          <Login />
        ) : (
          <Redirect
            to={
              role === "admin"
                ? "/dashboard"
                : role === "staff"
                ? "/dashboard/staff"
                : "/dashboard/requester"
            }
          />
        )}
      </Route>
      <PrivateRoute exact path="/dashboard" role={["admin"]} element={<Admin />}>
        <Route index element={<Produk />} />
        <Route path="admin" element={<Produk />} />
        <Route path="tambahbarang" element={<TambahBarang />} />
        <Route path="user" element={<User />} />
        <Route path="user/create" element={<UserCreate />} />
        <Route path="kategori" element={<Kategori />} />
        <Route path="kategori/create" element={<CreateKategori />} />
        <Route path="unit" element={<Unit />} />
        <Route path="unit/create" element={<UnitCreate />} />
        <Route path="laporanmasuk" element={<LaporanMasuk />} />
        <Route path="laporankeluar" element={<LaporanKeluar />} />
        <Route path="request" element={<ListRequest />} />
      </PrivateRoute>
      <PrivateRoute exact path="/dashboard/staff" role={["staff"]} element={<Staff />}>
      </PrivateRoute>
      <PrivateRoute exact path="/dashboard/requester" role={["requester"]} element={<Requester />}>
        <Route index element={<Request />} />
        <Route path="/form" element={<Request />} />
      </PrivateRoute>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}