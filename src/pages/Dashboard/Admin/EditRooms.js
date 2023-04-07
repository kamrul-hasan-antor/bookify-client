import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { roomFacilities } from "./facilitiesData";
const EditRooms = () => {
  const data = useLoaderData();

  const [roomNm, setRoomNm] = useState(data.roomName);
  const [guestNum, setGuestNum] = useState(data.maxGuest);
  const [compliment, setCompliment] = useState(data.complimentary);
  const [rack, setRack] = useState(data.rackRate);
  const [disc, setDisc] = useState(data.discount);
  const [roomNum, setRoomNum] = useState(data.totalRoom);
  const [roomFaci, setRoomFaci] = useState(data.facilities);

  const handleUpdateFacilities = (e) => {
    const facility = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setRoomFaci([...roomFaci, facility]);
    } else {
      setRoomFaci(roomFaci.filter((f) => f !== facility));
    }
  };

  const handleUpdateRooms = (e) => {
    e.preventDefault();
    const room = {
      roomName: roomNm,
      maxGuest: guestNum,
      complimentary: compliment,
      rackRate: rack,
      discount: disc,
      totalRoom: roomNum,
      facilities: roomFaci,
    };
    console.log(room);

    fetch(`http://localhost:5000/updateRoom/${data._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(room),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  // console.log(data);
  return (
    <div className="pb-6">
      <p className=" px-3.5 py-2.5 md:text-xl font-bold uppercase mb-3 border-b">
        Edit Room
      </p>
      <form onSubmit={handleUpdateRooms}>
        <div className="flex flex-wrap px-2 lg:px-2">
          {/* room name */}
          <div className="w-full md:w-1/2  px-2 mb-3">
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
              value={roomNm}
              onChange={(e) => setRoomNm(e.target.value)}
            />
          </div>

          {/* maxGuest */}
          <div className="w-full md:w-1/2  px-2  mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-maxGuest"
            >
              Max Guests
            </label>
            <select
              id="grid-maxGuest"
              className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              name="maxGuest"
              value={guestNum}
              onChange={(e) => setGuestNum(e.target.value)}
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
            </select>
          </div>

          {/* Complimentary */}
          <div className="w-full md:w-1/4  px-2  mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-complimentary"
            >
              Complimentary
            </label>
            <input
              className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              id="grid-complimentary"
              type="text"
              name="complimentary"
              placeholder="Breakfast"
              required
              value={compliment}
              onChange={(e) => setCompliment(e.target.value)}
            />
          </div>

          {/* rack rate */}
          <div className="w-full md:w-1/4  px-2  mb-3">
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
              placeholder="7000"
              required
              value={rack}
              onChange={(e) => setRack(e.target.value)}
            />
          </div>

          {/* discount */}
          <div className="w-full md:w-1/4  px-2  mb-3">
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
              value={disc}
              onChange={(e) => setDisc(e.target.value)}
            >
              <option defaultValue value="10">
                10%
              </option>
              <option value="20">20%</option>
              <option value="30">30%</option>
              <option value="40">40%</option>
            </select>
          </div>

          {/* Number of rooms */}
          <div className="w-full md:w-1/4  px-2  mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-roomName"
            >
              Number of rooms
            </label>
            <input
              className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              id="grid-totalRoom"
              type="text"
              name="totalRoom"
              placeholder="5"
              required
              value={roomNum}
              onChange={(e) => setRoomNum(e.target.value)}
            />
          </div>

          {/* room facilities */}
          <div className="mb-4 w-full">
            <p className="block uppercase  px-2 text-sm font-semibold mb-2">
              room facilities
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
              {roomFacilities.map((fac, i) => {
                return (
                  <label className="flex items-center  px-2 mb-2" key={i}>
                    <input
                      type="checkbox"
                      name="food"
                      value={fac}
                      checked={roomFaci.includes(fac)}
                      onChange={handleUpdateFacilities}
                    />
                    <span className="checkbox-label pl-2">{fac}</span>
                  </label>
                );
              })}
            </div>
          </div>

          <div className=" px-2">
            <button
              type="submit"
              className="bg-[#1c3c6b] hover:bg-[#2a5699] text-white py-2 rounded font-semibold mt-2 px-14"
            >
              Update Room
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditRooms;
