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
        className="grid md:grid-cols-2 lg:grid-cols-5 gap-2 w-full mt-10"
      >
        <div className="w-full">
          <label
            htmlFor="destination"
            className="block mb-2 font-medium dark:text-white pl-0.5  uppercase"
          >
            Select Destination
          </label>
          <select
            id="destination"
            className="bg-gray-50 border border-gray-300 rounded-lg block p-3 w-full px-1"
          >
            {destination.map((d, i) => (
              <option key={i} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
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
            className="bg-gray-50 border border-gray-300 rounded-lg block p-3 w-full px-1"
          >
            <option defaultValue value="1">
              1 Person
            </option>
            <option value="2">2 Person</option>
            <option value="3">3 Person</option>
          </select>
        </div>
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
            defaultValue={checkInMinDate}
            className="bg-gray-50 border border-gray-300 rounded-lg block p-2.5 w-full px-1"
          />
        </div>
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
            defaultValue={checkOutMinDate}
            className="bg-gray-50 border border-gray-300 rounded-lg block p-2.5 w-full px-1"
          />
        </div>

        <div className="flex items-end md:col-span-2 lg:col-span-1 mt-3 lg:mt-0">
          <button
            type="submit"
            className="bg-yellow-400 py-3 rounded font-semibold w-full"
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
<form
        onSubmit={handleSubmit}
        className="flex flex-col lg:flex-row justify-between md:my-6"
      >
        <div className="lg:w-1/4 ">
          <label
            htmlFor="destination"
            className="block mb-2 dark:text-white  uppercase text-sm md:text-base "
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
        <div className="lg:w-1/5 md:w-1/3 ">
          <label
            htmlFor="checkIn"
            className="block mb-2  dark:text-white  uppercase"
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
            className="block mb-2  dark:text-white  uppercase"
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
            className="block mb-2 font-medium dark:text-white  uppercase"
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


*/
