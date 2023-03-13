import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCrossCircled } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [changeBg, setChangeBg] = useState(false);

  const location = useLocation().pathname;

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setChangeBg(true);
    } else {
      setChangeBg(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div
      className={`fixed w-screen z-50 ${
        changeBg || location !== "/" ? "bg-white shadow-md" : ""
      } 
      } `}
    >
      <div className="relative flex justify-between items-center px-2 lg:px-12 xl:px-20 md:h-[80px] h-[70px]">
        <div className="px-2">
          {open ? (
            <GiHamburgerMenu
              onClick={() => setOpen(!open)}
              className="block lg:hidden text-3xl text-[#1c3c6b]"
            />
          ) : (
            <GiHamburgerMenu
              onClick={() => setOpen(!open)}
              className="block lg:hidden text-3xl text-[#1c3c6b]"
            />
          )}
        </div>
        <div className="flex lg:flex-row flex-col lg:justify-between  md:items-center w-full text-center lg:text-start">
          <div className="md:static">
            <Link className="text-3xl uppercase font-bold" to="/">
              Bookify
            </Link>
          </div>
          <div>
            <ul
              className={`hidden lg:flex items-center md:static w-full px-2 pb-5 pt-2 md:py-0 `}
            >
              <li className="md:px-4 font-semibold nav_list py-1 md:py-0 ">
                <Link className="" to="/">
                  Home
                </Link>
              </li>
              <li className="md:px-4 font-semibold nav_list py-1 md:py-0">
                <Link to="/hotels">Hotels</Link>
              </li>
              <li className="md:px-4 font-semibold nav_list py-1 md:py-0">
                <a href="#services">Services</a>
              </li>
              <li className="md:px-4 font-semibold nav_list py-1 md:py-0">
                <a href="#contact">Contact</a>
              </li>
              <li className="md:px-4 font-semibold nav_list py-1 md:py-0"></li>
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
          <li className="py-3">
            <Link to="/hotels">Hotels</Link>
          </li>
          <li className="py-3">
            <a href="#services">Services</a>
          </li>
          <li className="py-3">
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
