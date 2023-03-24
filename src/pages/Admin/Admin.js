import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const Admin = () => {
  return (
    <div className="h-screen  lg:w-full pt-20 lg:pt-24 xl:w- max-w-screen-xl mx-auto ">
      <div className="flex">
        <div className="lg:w-1/6 relative bg-green-400">
          <Sidebar />
        </div>
        <div>{/* <Outlet /> */}</div>
      </div>
    </div>
  );
};

export default Admin;
