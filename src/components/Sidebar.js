import React from "react";
import { Link } from "react-router-dom";
import { RiHotelLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
const Sidebar = () => {
  return (
    <div className="w-full">
      <ul className="p-3">
        <li className="p-3 flex items-center ">
          <RiHotelLine size={20} />
          <Link to="/admin/addHotels" className="px-2 font-semibold">
            Add Hotels
          </Link>
        </li>
        <li className="p-3 flex items-center ">
          <AiOutlineUser size={20} />
          <Link to="/admin/allUsers" className="px-2 font-semibold">
            All Users
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
