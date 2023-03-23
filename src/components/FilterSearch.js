import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineRight } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";

const facilities = [
  "Breakfast",
  "Restaurant",
  "Wi-Fi",
  "24-hour Security",
  "Parking Area",
  "Swimming Pool",
  "Room Service",
  "Laundry Facilities",
  "Airport Shuttle",
  "Fitness Centre",
  "Air Conditioning",
  "Balcony",
  "Couple Friendly",
  "Kid Friendly",
  "Indoor Games",
];
const FilterSearch = ({ showFilter, setShowFilter }) => {
  const [showAll, setShowAll] = useState(false);
  const [displayCount, setDisplayCount] = useState(5);

  const handleClick = () => {
    setShowAll(!showAll);
    setDisplayCount(showAll ? 5 : facilities.length);
  };
  return (
    <div
      className={`lg:w-1/4 p-3.5 bg-white h-max rounded border lg:block absolute lg:static w-full ${
        !showFilter ? "-top-[120%]" : "top-20"
      } `}
    >
      <div className="flex items-center justify-between border-b pb-3">
        <h4 className="text-xl font-semibold">Filters</h4>
        <div className="flex items-center">
          <button className="font-semibold text-sm mr-2 lg:mr-0">Reset</button>
          <button
            onClick={() => setShowFilter(false)}
            className="font-semibold text-sm lg:hidden"
          >
            <RxCrossCircled size={20} />
          </button>
        </div>
      </div>

      {/* Property Name */}
      <div className="py-3.5 border-b">
        <h4 className="font-semibold text-sm">Property Name</h4>
        <div className="mt-2 flex h-max">
          <input
            className="outline-none rounded-tl-md rounded-bl-md border border-[#1c3c6b]  w-4/5 p-1.5 pl-2.5 placeholder:text-sm"
            type="text"
            placeholder="Property Name"
          />
          <button className="border border-[#1c3c6b] flex-grow border-l-0 w-1/5 flex justify-center items-center hover:bg-[#1c3c6b] hover:text-white font-semibold rounded-tr-md rounded-br-md">
            <FiSearch size={18} />
          </button>
        </div>
      </div>

      {/* Price Range */}
      <div className="py-3.5 border-b">
        <h4 className="font-semibold text-sm">Price Range</h4>
        <div className="mt-2 flex h-max">
          <input
            className="outline-none rounded-tl-md rounded-bl-md border border-[#1c3c6b]  w-4/5 p-1.5 pl-2.5 placeholder:text-sm"
            type="text"
            placeholder="Maximum"
          />
          <button className="border border-[#1c3c6b] flex-grow border-l-0 w-1/5 flex justify-center items-center hover:bg-[#1c3c6b] hover:text-white font-semibold rounded-tr-md rounded-br-md">
            <AiOutlineRight size={16} />
          </button>
        </div>
      </div>

      {/* User Rating */}
      <div className="py-3.5 border-b">
        <h4 className="font-semibold text-sm">User Rating</h4>
        <div className="flex flex-col mt-1.5">
          <label className="flex items-center">
            <input type="checkbox" name="quality" value="1" />
            <span className="checkbox-label pl-2"> 1 Worst</span>
          </label>
          <label className="flex items-center mt-1">
            <input type="checkbox" name="quality" value="2" />
            <span className="checkbox-label pl-2"> 2 Poor</span>
          </label>
          <label className="flex items-center mt-1">
            <input type="checkbox" name="quality" value="3" />
            <span className="checkbox-label pl-2"> 3 Okay</span>
          </label>
          <label className="flex items-center mt-1">
            <input type="checkbox" name="quality" value="4" />
            <span className="checkbox-label pl-2"> 4 Good</span>
          </label>
          <label className="flex items-center mt-1">
            <input type="checkbox" name="quality" value="5" />
            <span className="checkbox-label pl-2"> 5 Excellent</span>
          </label>
        </div>
      </div>

      {/* Accommodation Type */}
      <div className="py-3.5 border-b">
        <h4 className="font-semibold text-sm">Accommodation Type</h4>
        <div className="flex flex-col mt-1.5">
          <label className="flex items-center">
            <input type="checkbox" name="accommodationType" value="Hotel" />
            <span className="checkbox-label pl-2">Hotel</span>
          </label>
          <label className="flex items-center mt-1">
            <input type="checkbox" name="accommodationType" value="Resort" />
            <span className="checkbox-label pl-2">Resort</span>
          </label>
          <label className="flex items-center mt-1">
            <input type="checkbox" name="accommodationType" value="5" />
            <span className="checkbox-label pl-2">Apartment</span>
          </label>
        </div>
      </div>

      {/* Facilities */}
      <div className="py-3.5 pb-0">
        <h4 className="font-semibold text-sm">Facilities</h4>
        <div className="flex flex-col mt-1.5">
          {facilities.slice(0, displayCount).map((facility, i) => {
            if (i < displayCount) {
              return (
                <label className="flex items-center mt-1" key={i}>
                  <input type="checkbox" name={facility} value={facility} />
                  <span className="checkbox-label pl-2">{facility}</span>
                </label>
              );
            }
            return null;
          })}
        </div>
        <div className="text-right">
          <button className="text-sm font-semibold" onClick={handleClick}>
            {showAll ? "Less" : "More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSearch;
