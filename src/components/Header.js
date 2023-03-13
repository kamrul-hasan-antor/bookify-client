import React from "react";
import SearchHotels from "./SearchHotels";

const Header = () => {
  return (
    <div className="header py-20 lg:py-0 h-max lg:h-screen flex justify-center items-center">
      <SearchHotels />
    </div>
  );
};

export default Header;
