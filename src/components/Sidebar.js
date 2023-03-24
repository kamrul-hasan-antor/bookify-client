import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col top-20 absolute lg:static bg-yellow-300">
      <div
        className={` h-screen z-30 bg-white duration-500 ease-in lg:transition-none 
        
        
        `}

        // ${
        //     open ? "left-0" : "-left-full"
        //   }
      >
        <div className="flex justify-end p-4">
          {/* {open ? (
            <RxCrossCircled
              onClick={() => setOpen(!open)}
              className="block lg:hidden text-3xl text-[#1c3c6b]"
            />
          ) : (
            <RxCrossCircled
              onClick={() => setOpen(!open)}
              className="block lg:hidden text-3xl text-[#1c3c6b]"
            />
          )} */}
        </div>

        <ul className="px-6">
          <li className="py-3">
            <Link to="/admin/addHotels">Add Hotels</Link>
          </li>
          <li className="py-3">
            <Link to="/admin/allUsers">All Users</Link>
          </li>
          <li className="py-3">
            <a href="#services">Services</a>
          </li>
          <li className="py-3">
            <Link to="/">Contact</Link>
          </li>
          {/* {user?.email ? (
            <li onClick={handleSignOut} className="py-3">
              <Link to="/">Sign out</Link>
            </li>
          ) : (
            ""
          )}
          {user?.email ? (
            <li className="py-3">
              <Link to="/">
                <img
                  src="https://avatars.githubusercontent.com/u/76778073?s=400&u=3fb2b92539caf07439b0f7dab5024b0db208256a&v=4"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
              </Link>
            </li>
          ) : (
            <>
              <li className="py-3">
                <Link to="/login">Login</Link>
              </li>
              <li className="py-3">
                <Link to="/register">Register</Link>
              </li>
            </>
          )} */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
