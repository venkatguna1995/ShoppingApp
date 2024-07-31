import React from "react";
import "./Admin.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Addproduct from "../../Components/Addproduct/Addproduct";
import Listproduct from "../../Components/Listproduct/Listproduct";

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar/>
      <Routes>
        <Route path="/addproduct" element={<Addproduct/>}></Route>
        <Route path="/listproduct" element={<Listproduct/>}></Route>
      </Routes>
    </div>
  );
};

export default Admin;
