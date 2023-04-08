import React, { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCrossCircled } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [changeBg, setChangeBg] = useState(false);
  const { logOut, user } = useContext(AuthContext);
  const location = useLocation().pathname;

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setChangeBg(true);
    } else {
      setChangeBg(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const handleSignOut = () => {
    logOut().then(() => {
      console.log("signed out");
    });
  };

  return (
    <div
      className={`fixed w-screen z-50 ${
        changeBg || location !== "/" ? "bg-white shadow-md" : ""
      } 
      } `}
    >
      <div className="relative flex justify-between items-center md:h-[80px] h-[70px] w-11/12 mx-auto lg:w- max-w-screen-2xl">
        <div className="w-1/12 lg:w-0">
          {open ? (
            <GiHamburgerMenu
              onClick={() => setOpen(!open)}
              className="block lg:hidden text-3xl text-[#1c3c6b] ml-3"
            />
          ) : (
            <GiHamburgerMenu
              onClick={() => setOpen(!open)}
              className="block lg:hidden text-3xl text-[#1c3c6b] ml-3"
            />
          )}
        </div>
        <div className="flex lg:flex-row flex-col lg:justify-between  md:items-center text-center lg:text-start  w-full">
          <div className="md:static">
            <Link className="text-3xl uppercase font-bold" to="/">
              Bookify
            </Link>
          </div>
          <div>
            <ul
              className={`hidden lg:flex justify-end items-center md:static w-full pb-5 pt-2 md:py-0 `}
            >
              <li className="md:px-3 font-semibold nav_list py-1 md:py-0 ">
                <Link className="" to="/">
                  Home
                </Link>
              </li>
              {user?.email === "kamrulhasan.antor95@gmail.com" ? (
                <li className="md:px-3 font-semibold nav_list py-1 md:py-0">
                  <Link to="/admin/allBookings">Admin</Link>
                </li>
              ) : (
                ""
              )}
              {user?.email &&
              user?.email !== "kamrulhasan.antor95@gmail.com" ? (
                <li className="md:px-3 font-semibold nav_list py-1 md:py-0">
                  <Link to="/myBookings">My Bookings</Link>
                </li>
              ) : (
                ""
              )}
              {user?.email ? (
                <li
                  onClick={handleSignOut}
                  className="md:px-3 font-semibold nav_list py-1 md:py-0"
                >
                  <Link to="/">Sign out</Link>
                </li>
              ) : (
                ""
              )}

              {user?.email ? (
                ""
              ) : (
                <>
                  <li className="md:px-3 font-semibold nav_list py-1 md:py-0">
                    <Link to="/login">Login</Link>
                  </li>
                  <li className="md:pl-3 font-semibold nav_list py-1 md:py-0">
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* nav items for mobile and tablet devices. */}
      <div
        className={`lg:hidden h-screen absolute z-30  ${
          open ? "left-0" : "-left-full"
        } static w-1/2 top-0 bg-white duration-500 ease-in lg:transition-none shadow-[15px_0px_25px_0px_#00000024]`}
      >
        <div className="flex justify-end p-4">
          {open ? (
            <RxCrossCircled
              onClick={() => setOpen(!open)}
              className="block lg:hidden text-3xl text-[#1c3c6b]"
            />
          ) : (
            <RxCrossCircled
              onClick={() => setOpen(!open)}
              className="block lg:hidden text-3xl text-[#1c3c6b]"
            />
          )}
        </div>

        <ul className="px-6">
          <li className="py-3">
            <Link to="/">Home</Link>
          </li>
          {user?.email === "kamrulhasan.antor95@gmail.com" ? (
            <li className="py-3">
              <Link to="/admin/allBookings">Admin</Link>
            </li>
          ) : (
            <li className="py-3">
              <Link to="/myBookings">My Bookings</Link>
            </li>
          )}
          {user?.email ? (
            <li onClick={handleSignOut} className="py-3">
              <Link to="/">Sign out</Link>
            </li>
          ) : (
            ""
          )}

          {user?.email ? (
            ""
          ) : (
            <>
              <li className="py-3">
                <Link to="/login">Login</Link>
              </li>
              <li className="py-3">
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
