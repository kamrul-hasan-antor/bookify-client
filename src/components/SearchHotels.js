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
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(
    new Date(Date.now() + 86400000)
  );

  const [searchObject, setSearchObject] = useState({
    district: "Cox's Bazar",
    guestNumber: "1",
    hotelCheckInDate: checkInDate.toISOString().split("T")[0],
    hotelCheckOutDate: checkOutDate.toISOString().split("T")[0],
  });

  const navigate = useNavigate("");
  const loaction = useLocation();

  function handleCheckInDateChange(event) {
    const selectedDate = new Date(event.target.value);
    setCheckInDate(selectedDate);
    setCheckOutDate(new Date(selectedDate.getTime() + 86400000));
    setSearchObject({
      ...searchObject,
      hotelCheckInDate: selectedDate.toISOString().split("T")[0],
      hotelCheckOutDate: new Date(selectedDate.getTime() + 86400000)
        .toISOString()
        .split("T")[0],
    });
  }

  function handleCheckOutDateChange(event) {
    const selectedDate = new Date(event.target.value);
    if (selectedDate.getTime() >= checkInDate.getTime()) {
      setCheckOutDate(selectedDate);
      setSearchObject({
        ...searchObject,
        hotelCheckOutDate: selectedDate.toISOString().split("T")[0],
      });
    }
  }

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

  const dateObject = new Date(searchObject.hotelCheckInDate);
  dateObject.setDate(dateObject.getDate() + 1);
  const minCheckOut = dateObject.toISOString().split("T")[0];

  return (
    <div
      className={`bg-white ${
        loaction?.pathname === "/" ? "w-11/12 md:w-5/6" : "w-full"
      }  max-w-screen-2xl p-3 border border-slate-300 rounded`}
    >
      <div className={` ${loaction?.pathname === "/" ? "" : "hidden"} `}>
        <h3 className="text-lg md:text-xl lg:text-2xl my-1 text-center mb-6">
          Find your perfect place to stay at lowest prices.
        </h3>
      </div>
      {/* Search fields */}
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-2 w-full py-2">
        {/* Distric name */}
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
            value={searchObject?.district}
            onChange={(e) =>
              setSearchObject({ ...searchObject, district: e.target.value })
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
            value={
              searchObject.hotelCheckInDate
                ? searchObject.hotelCheckInDate
                : checkInDate.toISOString().split("T")[0]
            }
            onChange={handleCheckInDateChange}
            min={new Date().toISOString().split("T")[0]}
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
            value={
              searchObject.hotelCheckOutDate
                ? searchObject.hotelCheckOutDate
                : checkOutDate.toISOString().split("T")[0]
            }
            onChange={handleCheckOutDateChange}
            min={
              searchObject.hotelCheckInDate
                ? minCheckOut
                : checkInDate.toISOString().split("T")[0]
            }
            className="bg-gray-50 border border-gray-300 rounded-lg block p-2.5 w-full px-1"
          />
        </div>

        <div className="flex items-end md:col-span-2 lg:col-span-1 mt-3 lg:mt-0 lg:mb-1">
          <button
            onClick={handleSearch}
            className="bg-[#1c3c6b] text-white py-3 rounded font-semibold w-full"
          >
            {loaction?.pathname === "/" ? "Search" : "Modify Search"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchHotels;
