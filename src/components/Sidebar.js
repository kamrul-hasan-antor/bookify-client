import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiHotelLine } from "react-icons/ri";
import { RiMapPinAddLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { MdDomainAdd } from "react-icons/md";
import { BsHouseAdd } from "react-icons/bs";
import { ImHome3 } from "react-icons/im";
import { AuthContext } from "../context/AuthProvider";
const Sidebar = () => {
  const [show, setShow] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  const { user } = useContext(AuthContext);
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
      {/* admin routes */}
      <div
        className={`${
          user?.email === "kamrulhasan.antor95@gmail.com" ? "block" : "hidden"
        }`}
      >
        <Link
          to="/admin/allBookings"
          className={`${
            isActive("/admin/allBookings") ? "bg-gray-100" : ""
          }  flex items-center p-3  w-full hover:bg-gray-100`}
        >
          <RxDashboard size={20} />
          <p className="pl-2 font-semibold">All Bookings</p>
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

        <div
          className={`${!show ? "hidden" : "static"} duration-1000 ease-in `}
        >
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
          <Link
            to="/admin/allRooms"
            className={`${
              isActive("/admin/allRooms") ? "bg-gray-100" : ""
            }  flex items-center p-3  w-full pl-10 hover:bg-gray-100`}
          >
            <ImHome3 className=" " size={20} />
            <p className="pl-2 font-semibold">All Rooms</p>
          </Link>
        </div>

        <Link to="/admin/allUsers" className="flex items-center p-3  w-full">
          <FaUsers size={20} />
          <p className="pl-2 font-semibold">All Users</p>
        </Link>
      </div>

      {/* user */}
      <div
        className={`${
          user?.email !== "kamrulhasan.antor95@gmail.com" ? "block" : "hidden"
        }`}
      >
        <Link
          to="/myBookings"
          className={`${
            isActive("/myBookings") ? "bg-gray-100" : ""
          }  flex items-center p-3  w-full hover:bg-gray-100`}
        >
          <RxDashboard size={20} />
          <p className="pl-2 font-semibold">My Bookings</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
