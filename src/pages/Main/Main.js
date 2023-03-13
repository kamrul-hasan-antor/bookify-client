import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footers from "../../components/Footers";

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
