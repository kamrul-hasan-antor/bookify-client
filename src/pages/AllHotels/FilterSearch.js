import React, { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";

const facilities = [
  "Garden",

  "Sofa Bed",

  "Smoke detector",

  "Lockers",

  "In-room Accessibility",

  "ID Required",

  "Elevator",

  "Currency Exchange",

  "Coffee/Tea in Lobby",

  "Air Conditioning",

  "Accessible Bathroom",

  "Disability Friendly",

  "Towel",

  "Couple Friendly",

  "No Alcohol",

  "Late Check-Out",

  "Early Check-Out",

  "Early Check-In",

  "City Center",

  "Restaurant",
];

const accommodationType = ["Hotel", "Appartment", "Resort"];

const FilterSearch = ({
  showFilter,
  setShowFilter,
  handleFilterByFacility,
  setSearchText,
  handleFilterByACcType,
}) => {
  const [showAll, setShowAll] = useState(false);

  const handleClick = () => {
    setShowAll(!showAll);
  };

  return (
    <div
      className={`lg:w-1/4 p-3.5 bg-white h-max rounded border lg:block absolute lg:static w-full duration-100 ease-in top-20  ${
        !showFilter ? "-left-[200%] " : " left-0  "
      } `}
    >
      <div className="flex items-center justify-between border-b pb-3">
        <h4 className="text-xl font-semibold">Filters</h4>
        <div className="flex items-center">
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
        <div className="mt-2">
          <input
            className="outline-none rounded-sm border border-[#1c3c6b] p-1.5 pl-2.5 placeholder:text-sm w-full"
            type="text"
            placeholder="Property Name"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>

      {/* Accommodation Type */}
      <div className="py-3.5 border-b">
        <h4 className="font-semibold text-sm">Accommodation Type</h4>
        <div className="flex flex-col mt-1.5">
          {accommodationType.map((aco, i) => (
            <label key={i} className="flex items-center mb-1">
              <input
                type="checkbox"
                name="accommodationType"
                onChange={(e) => handleFilterByACcType(e.target.value)}
                value={aco.toLowerCase()}
              />
              <span className="checkbox-label pl-2">{aco}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Facilities */}
      <div className="py-3.5 pb-0">
        <h4 className="font-semibold text-sm">Facilities</h4>
        <div
          className={`flex flex-col mt-1 ${
            showAll ? "h-full" : "h-40 overflow-y-hidden"
          } `}
        >
          {facilities.map((facility, i) => {
            return (
              <label className="flex items-center mt-1" key={i}>
                <input
                  type="checkbox"
                  name={facility}
                  value={facility}
                  onChange={() => handleFilterByFacility(facility)}
                />
                <span className="checkbox-label pl-2">{facility}</span>
              </label>
            );
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
