import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiHotelLine } from "react-icons/ri";
import { RiMapPinAddLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { MdDomainAdd } from "react-icons/md";
import { BsHouseAdd } from "react-icons/bs";
const Sidebar = () => {
  const [show, setShow] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const location = useLocation();
  const handleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  const isActive = (path) => {
    return currentPath === path;
  };

  return (
    <div className="w-full">
      <Link
        to="/admin/dashboard"
        className={`${
          isActive("/admin/dashboard") ? "bg-gray-100" : ""
        }  flex items-center p-3  w-full hover:bg-gray-100`}
      >
        <RxDashboard size={20} />
        <p className="pl-2 font-semibold">Dashboard</p>
      </Link>

      <Link
        onClick={handleShow}
        className="flex items-center justify-between p-3 cursor-pointer w-full hover:bg-gray-100"
      >
        <div className="flex items-center relative">
          <RiHotelLine size={20} />
          <p className="pl-2 font-semibold">Hotels</p>
        </div>
        {!show ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </Link>

      <div className={`${!show ? "hidden" : "static"} duration-1000 ease-in `}>
        <Link
          to="/admin/addHotels"
          className={`${
            isActive("/admin/addHotels") ? "bg-gray-100" : ""
          }  flex items-center p-3  w-full pl-10 hover:bg-gray-100`}
        >
          <RiMapPinAddLine size={20} />
          <p className="pl-2 font-semibold">Add Hotels</p>
        </Link>
        <Link
          to="/admin/addedHotels"
          className={`${
            isActive("/admin/addedHotels") ? "bg-gray-100" : ""
          }  flex items-center p-3  w-full pl-10 hover:bg-gray-100`}
        >
          <MdDomainAdd size={20} />
          <p className="pl-2 font-semibold">All Hotels</p>
        </Link>
        <Link
          to="/admin/addRoom"
          className={`${
            isActive("/admin/addRoom") ? "bg-gray-100" : ""
          }  flex items-center p-3  w-full pl-10 hover:bg-gray-100`}
        >
          <BsHouseAdd size={20} />
          <p className="pl-2 font-semibold">Add Rooms</p>
        </Link>
      </div>

      <Link to="/admin/allUsers" className="flex items-center p-3  w-full">
        <AiOutlineUser size={20} />
        <p className="pl-2 font-semibold">All Users</p>
      </Link>
    </div>
  );
};

export default Sidebar;
