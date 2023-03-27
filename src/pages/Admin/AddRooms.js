import React, { useEffect, useState } from "react";

import { roomFacilities } from "./facilitiesData";

const AddRooms = () => {
  const [hotels, setHotels] = useState([]);
  const [roomF, setRoomF] = useState([]);
  const [images, setImages] = useState("");
  const [selectedHotel, setSelectedHotel] = useState({
    hotelName: "",
    _id: "",
  });
  const imgBbApi = process.env.REACT_APP_API_URL;

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

  const handleImageUpload = async (e) => {
    const photos = e.target.files;
    const formData = new FormData();
    formData.append("image", photos[0]);
    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${imgBbApi}`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    setImages(data.data.display_url);
  };

  const handleHotelChange = (e) => {
    const selectedHotelId = e.target.value;
    const selectedHotel = hotels.find((hotel) => hotel._id === selectedHotelId);
    setSelectedHotel(selectedHotel);
  };

  const handleAddRooms = async (e) => {
    e.preventDefault();

    const form = e.target;
    const roomName = form.roomName.value;
    const rackRate = form.rackRate.value;
    const discount = form.discount.value;
    const totalRoom = form.totalRoom.value;
    const { _id: hotleId, hotelName } = selectedHotel;
    const room = {
      roomName,
      hotelName,
      roomImgs: images,
      rackRate,
      discount,
      totalRoom,
      hotleId,
    };
    console.log(room);
    // /:hotelId/:hotelName/rooms

    fetch(`http://localhost:5000/addRooms`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(room),
    })
      .then((res) => res.json())
      .then((data) => {
        form.reset();
      });
  };

  return (
    <div className="pb-6 pt-2">
      <p className="px-5 lg:ml-1 text-2xl font-bold uppercase mb-3 pb-3 border-b">
        Add Rooms
      </p>
      <form onSubmit={handleAddRooms}>
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
              value={selectedHotel._id}
              onChange={handleHotelChange}
            >
              {hotels.map((hotel, i) => {
                return (
                  <option key={i} value={hotel._id}>
                    {hotel.hotelName}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/4 px-3 mb-3">
            <label
              className=" uppercase text-sm font-semibold mb-2 flex items-start"
              htmlFor="grid-img"
            >
              room Image
            </label>
            <input
              className="file:overflow-hidden file:border-0 file:bg-gray-100 file:px-4 w-full border rounded focus:outline-none py1 file:h-12 bg-white focus:border-[#1c3c6b] "
              type="file"
              name="roomImg"
              id="grid-img"
              accept="image/*"
              required
              onChange={handleImageUpload}
            />
          </div>

          {/* rack rate */}
          <div className="w-full md:w-1/4 px-3  mb-3">
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
            />
          </div>

          {/* discount */}
          <div className="w-full md:w-1/4 px-3  mb-3">
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

          {/* Number of rooms */}

          <div className="w-full md:w-1/4 px-3  mb-3">
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
            />
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
