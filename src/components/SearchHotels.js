import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const destination = [
  "Cox's Bazar",
  "Saint Martin",
  "Dhaka",
  "Rajshahi",
  "Khulna",
  "Sylhet",
  "Mymensingh",
];

const SearchHotels = () => {
  const [searchObject, setSearchObject] = useState({
    location: "",
    guestNumber: "1",
    checkIn: "",
    checkOut: "",
  });
  const [checkInMinDate, setCheckInMinDate] = useState("");
  const [checkOutMinDate, setCheckOutMinDate] = useState("");

  const navigate = useNavigate("");
  const loaction = useLocation();
  useEffect(() => {
    const date = new Date();
    const today = date.toISOString().split("T")[0];
    date.setDate(date.getDate() + 1);
    const tomorrow = date.toISOString().split("T")[0];

    setCheckInMinDate(today);
    setCheckOutMinDate(tomorrow);
  }, []);

  useEffect(() => {
    const storedSearchObject = sessionStorage.getItem("searchObject");
    const parsedSearchObject = JSON.parse(storedSearchObject);
    if (parsedSearchObject) {
      setSearchObject(parsedSearchObject);
    }
  }, []);

  const handleSearch = () => {
    sessionStorage.setItem("searchObject", JSON.stringify(searchObject));
    navigate("/hotels");
  };

  return (
    <div
      className={`bg-white ${
        loaction.pathname === "/" ? "w-11/12 md:w-5/6" : "w-full"
      }  max-w-screen-2xl p-3 border border-slate-300 rounded`}
    >
      <div className={` ${loaction.pathname === "/" ? "" : "hidden"} `}>
        <h3 className="text-lg md:text-xl lg:text-2xl my-1 text-center mb-6">
          Find your perfect place to stay at lowest prices.
        </h3>
      </div>
      {/* Search fields */}
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-2 w-full py-2">
        <div className="w-full">
          <label
            htmlFor="destination"
            className="block mb-2 font-medium dark:text-white pl-0.5  uppercase"
          >
            Select Destination
          </label>
          <select
            id="destination"
            name="district"
            value={searchObject.location}
            onChange={(e) =>
              setSearchObject({ ...searchObject, location: e.target.value })
            }
            className="bg-gray-50 border border-gray-300 rounded-lg block p-3 w-full px-1"
          >
            {destination.map((d, i) => (
              <option key={i} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        {/* Number of gurest */}
        <div className="w-full">
          <label
            htmlFor="guest"
            className="block mb-2 font-medium dark:text-white pl-0.5  uppercase"
          >
            Guests
          </label>
          <select
            id="guest"
            name="guest"
            value={searchObject.guestNumber}
            onChange={(e) =>
              setSearchObject({ ...searchObject, guestNumber: e.target.value })
            }
            className="bg-gray-50 border border-gray-300 rounded-lg block p-3 w-full px-1"
          >
            <option value="1">1 Person</option>
            <option value="2">2 Person</option>
            <option value="3">3 Person</option>
          </select>
        </div>

        {/* check In */}
        <div className="w-full">
          <label
            htmlFor="checkIn"
            className="block mb-2 font-medium dark:text-white pl-0.5 uppercase"
          >
            Check In
          </label>
          <input
            type="date"
            name="checkIn"
            min={checkInMinDate}
            value={searchObject.checkIn}
            onChange={(e) =>
              setSearchObject({ ...searchObject, checkIn: e.target.value })
            }
            className="bg-gray-50 border border-gray-300 rounded-lg block p-2.5 w-full px-1"
          />
        </div>

        {/* check out */}
        <div className="w-full">
          <label
            htmlFor="checkOut"
            className="block mb-2 font-medium dark:text-white pl-0.5  uppercase"
          >
            Check Out
          </label>
          <input
            type="date"
            name="checkOut"
            min={checkOutMinDate}
            value={searchObject.checkOut}
            onChange={(e) =>
              setSearchObject({ ...searchObject, checkOut: e.target.value })
            }
            className="bg-gray-50 border border-gray-300 rounded-lg block p-2.5 w-full px-1"
          />
        </div>

        <div className="flex items-end md:col-span-2 lg:col-span-1 mt-3 lg:mt-0 lg:mb-1">
          <button
            onClick={handleSearch}
            className="bg-[#1c3c6b] text-white py-3 rounded font-semibold w-full"
          >
            {loaction.pathname === "/" ? "Search" : "Modify Search"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchHotels;
