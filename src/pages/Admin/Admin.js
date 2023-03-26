import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { BsJustifyRight } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

const Admin = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="h-max w-full xl:px-4 2xl:px-0 pt-16 lg:pt-20 lg:w- max-w-screen-2xl mx-auto ">
      <div className="flex relative pt-2 lg:pt-1 border">
        <div
          className={`lg:w-1/6 top bg-white ${
            open ? "left-0" : "-left-full"
          } absolute lg:static h-full lg:h-auto lg:min-h-screen duration-500 ease-in w-1/2 lg:transition-none top-2 border-r`}
        >
          <Sidebar />
        </div>
        <div className="bg-white w-full min-h-screen  lg:w-5/6">
          <div className="flex justify-end p-2 lg:hidden ">
            <button onClick={handleOpen}>
              {open ? <RxCross1 size={26} /> : <BsJustifyRight size={28} />}
            </button>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
