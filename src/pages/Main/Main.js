import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar";
import Footers from "../../shared/Footers";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footers />
    </>
  );
};

export default Main;
