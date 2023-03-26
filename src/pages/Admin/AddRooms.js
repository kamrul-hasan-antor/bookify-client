import React, { useEffect, useState } from "react";

import { roomFacilities } from "./facilitiesData";

const AddRooms = () => {
  const [hotels, setHotels] = useState([]);
  const [roomF, setRoomF] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/hotelName")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);

  const handleRoomFacilities = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setRoomF([...roomF, value]);
    } else {
      setRoomF(roomF.filter((facility) => facility !== value));
    }
  };
  console.log(roomF);
  return (
    <div className="pb-6 pt-2">
      <p className="px-5 lg:ml-1 text-2xl font-bold uppercase mb-3 pb-3 border-b">
        Add Rooms
      </p>
      <form>
        <div className="flex flex-wrap px-1 lg:px-3">
          {/* room name */}

          <div className="w-full md:w-1/2 px-3  mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-roomName"
            >
              Room name
            </label>
            <input
              className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              id="grid-roomName"
              type="text"
              name="roomName"
              placeholder="Couple Delux"
              required
            />
          </div>

          {/* Hotel name */}
          <div className="w-full md:w-1/2 px-3  mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-hotelName"
            >
              hotels name
            </label>
            <select
              id="grid-hotelName"
              className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              name="hotelName"
            >
              {hotels.map((hotel, i) => {
                return (
                  <option key={i} value={hotel.hotelName}>
                    {hotel.hotelName}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/3 px-3 mb-3">
            <label
              className=" uppercase text-sm font-semibold mb-2 flex items-start"
              htmlFor="grid-img"
            >
              room Image
            </label>
            <input
              className="file:overflow-hidden file:border-0 file:bg-gray-100 file:px-4 w-full border rounded focus:outline-none py1 file:h-12 bg-white focus:border-[#1c3c6b] "
              type="file"
              name="photo"
              id="grid-img"
              accept="image/*"
              multiple
              required
              //   onChange={handleImageUpload}
            />
          </div>

          {/* rack rate */}
          <div className="w-full md:w-1/3 px-3  mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-rackRate"
            >
              rack rate
              <small className="pl-2 text-xs underline">bdt</small>
            </label>
            <input
              className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              id="grid-rackRate"
              type="text"
              name="rackRate"
              placeholder="14000"
              required
            />
          </div>

          {/* discount */}
          <div className="w-full md:w-1/3 px-3  mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-discount"
            >
              discount
            </label>
            <select
              id="grid-discount"
              className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              name="discount"
            >
              <option defaultValue value="10">
                10%
              </option>
              <option value="20">20%</option>
              <option value="30">30%</option>
              <option value="40">40%</option>
            </select>
          </div>

          {/* room facilities */}
          <div className="mb-4 w-full">
            <p className="block uppercase px-3 text-sm font-semibold mb-2">
              room facilities
            </p>
            <div className="flex flex-wrap">
              {roomFacilities.map((f, i) => {
                return (
                  <label
                    className="flex items-center md:w-1/3 lg:w-1/4 px-3 mb-2"
                    key={i}
                  >
                    <input
                      type="checkbox"
                      name="food"
                      value={f}
                      onChange={handleRoomFacilities}
                    />
                    <span className="checkbox-label pl-2">{f}</span>
                  </label>
                );
              })}
            </div>
          </div>
          <div className="px-3">
            <button
              type="submit"
              className="bg-[#1c3c6b] hover:bg-[#2a5699] text-white py-2 rounded font-semibold mt-2 px-14"
            >
              Add Room
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRooms;
