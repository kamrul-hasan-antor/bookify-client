import React, { useEffect, useState } from "react";

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
  const [checkInMinDate, setCheckInMinDate] = useState("");
  const [checkOutMinDate, setCheckOutMinDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const today = date.toISOString().split("T")[0];
    date.setDate(date.getDate() + 1);
    const tomorrow = date.toISOString().split("T")[0];

    setCheckInMinDate(today);
    setCheckOutMinDate(tomorrow);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.guest.value);
  };
  return (
    <div className="bg-white w-11/12 md:w-5/6 max-w-screen-xl p-3 border border-slate-300 rounded">
      <div>
        <h3 className="text-lg md:text-xl lg:text-2xl my-1 text-center mb-3">
          Find your perfect place to stay at lowest prices.
        </h3>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col lg:flex-row justify-between md:my-6"
      >
        <div className="lg:w-1/4 ">
          <label
            htmlFor="destination"
            className="block mb-2 dark:text-white pl-1 uppercase text-sm md:text-base "
          >
            Select Destination
          </label>
          <select
            id="destination"
            className="bg-gray-50 border border-gray-300 rounded-lg block p-3 w-full"
          >
            {destination.map((d, i) => (
              <option key={i} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
        <div className="lg:w-1/5 ">
          <label
            htmlFor="checkIn"
            className="block mb-2  dark:text-white pl-1 uppercase"
          >
            Check In
          </label>
          <input
            type="date"
            name="checkIn"
            min={checkInMinDate}
            defaultValue={checkInMinDate}
            className="bg-gray-50 border border-gray-300 rounded-lg block p-[8.5px] w-full"
          />
        </div>
        <div className="lg:w-1/5">
          <label
            htmlFor="checkOut"
            className="block mb-2  dark:text-white pl-1 uppercase"
          >
            Check Out
          </label>
          <input
            type="date"
            name="checkOut"
            min={checkOutMinDate}
            defaultValue={checkOutMinDate}
            className="bg-gray-50 border border-gray-300 rounded-lg block p-[8.5px] w-full"
          />
        </div>
        <div className="lg:w-1/6">
          <label
            htmlFor="guest"
            className="block mb-2 font-medium dark:text-white pl-1 uppercase"
          >
            Guests
          </label>
          <select
            id="guest"
            name="guest"
            className="bg-gray-50 border border-gray-300 rounded-lg block p-3 w-full"
          >
            <option defaultValue value="1">
              1 Person
            </option>
            <option value="2">2 Person</option>
            <option value="3">3 Person</option>
          </select>
        </div>
        <div className="flex items-end mt-3 lg:mb-1.5 ">
          <button
            type="submit"
            className="bg-yellow-400 px-8 py-2.5 rounded font-semibold w-full"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchHotels;

/* 
<div className="w-1/3">
          <label
            htmlFor="destination"
            className="block mb-2 text-sm font-medium dark:text-white"
          >
            Select an option
          </label>
          <select
            id="destination"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-slate-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-slate-500 outline-none"
          >
            <option
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              value="Cox's Bazar"
            >
              Cox's Bazar
            </option>
            <option value="Dhaka">Dhaka</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>





<div className="w-1/4">
          <div className="p-2 flex justify-between bg-red-500">
            Select Destination
            <BiChevronDown size={20} />
          </div>
          <ul className="mt-2 max-h-60 overflow-y-auto">
            <div className="flex justify-between items-center sticky top-0 bg-white py-1">
              <AiOutlineSearch size={24} />
              <input
                onChange={(e) =>
                  setDestinationValue(e.target.value.toLowerCase())
                }
                type="text"
                placeholder="Search Destination"
                className="placeholder:text-gray-700 outline-none w-[85%]"
              />
            </div>

            {destination.map((d, i) => (
              <li
                key={i}
                className={`p-2 text-sm hover:bg-sky-600 hover:text-white ${
                  d.toLowerCase().startsWith(destinationValue)
                    ? "block"
                    : "hidden"
                }`}
              >
                {d}
              </li>
            ))}
          </ul>
        </div>




*/
