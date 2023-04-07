import React, { useState } from "react";
import {
  time,
  foods,
  general,
  media,
  tranport,
  others,
} from "../facilitiesData";
import { useLoaderData } from "react-router-dom";

const UpdateHotels = () => {
  const data = useLoaderData();
  const hotels = data[0];
  const {
    businessFacilities,
    fitnessFacilities,
    foodFacilities,
    generalFacilities,
    mediaFacilities,
    transportFacilities,
    othersFacilities,
  } = hotels.facilities;

  const [hotelNm, setHotelNm] = useState(hotels.hotelName);
  const [phoneNum, setPhoneNum] = useState(hotels.hotelPhoneNumber);
  const [htlAddress, setHtlAddress] = useState(hotels.address);
  const [city, setCity] = useState(hotels.upazila);
  const [rooms, setRooms] = useState(hotels.totalRooms);
  const [floorNumb, setFloorNumb] = useState(hotels.floors);
  const [near, setNear] = useState(hotels.nearBy);
  const [year, setYear] = useState(hotels.constructionYear);
  const [accoType, setAccoType] = useState(hotels.accomodation);
  const [htlCheckIn, setHtlCheckIn] = useState(hotels.checkIn);
  const [htlCheckOut, setHtlCheckOut] = useState(hotels.checkOut);
  const [childNum, setChildNum] = useState(hotels.child);
  const [describ, setDescrib] = useState(hotels.describtion);

  // facilities
  const [businessFac, setBusinessFac] = useState(businessFacilities);
  const [fitnessFac, setFitnessFac] = useState(fitnessFacilities);

  const [foodFac, setFoodFac] = useState(foodFacilities);

  const [generalFac, setGeneralFac] = useState(generalFacilities);
  const [mediaFac, setMediaFac] = useState(mediaFacilities);

  const [transportFac, setTransportFac] = useState(transportFacilities);
  const [othersFac, setOthersFac] = useState(othersFacilities);

  const handleUpdateFacility = (e) => {
    const { checked, value, name } = e.target;

    const facilityTypes = {
      business: businessFac,
      fitness: fitnessFac,
      food: foodFac,
      general: generalFac,
      media: mediaFac,
      transport: transportFac,
      others: othersFac,
    };

    const setFacilityTypes = {
      business: setBusinessFac,
      fitness: setFitnessFac,
      food: setFoodFac,
      general: setGeneralFac,
      media: setMediaFac,
      transport: setTransportFac,
      others: setOthersFac,
    };

    const updatedFacilityTypes = checked
      ? [...facilityTypes[name], value]
      : facilityTypes[name].filter((f) => f !== value);

    setFacilityTypes[name](updatedFacilityTypes);
  };

  const handleUpdateHotel = (e) => {
    e.preventDefault();
    const updatedData = {
      hotelName: hotelNm,
      hotelPhoneNumber: phoneNum,
      address: htlAddress,
      upazila: city,
      totalRooms: rooms,
      floors: floorNumb,
      nearBy: near,
      constructionYear: year,
      accomodation: accoType,
      checkIn: htlCheckIn,
      checkOut: htlCheckOut,
      child: childNum,
      facilities: {
        businessFacilities: businessFac,
        fitnessFacilities: fitnessFac,
        foodFacilities: foodFac,
        generalFacilities: generalFac,
        mediaFacilities: mediaFac,
        transportFacilities: transportFac,
        othersFacilities: othersFac,
      },
      describtion: describ,
    };

    fetch(`http://localhost:5000/updateHotel/${hotels._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="pb-6">
      <p className="px-3.5 py-2.5 md:text-xl font-bold uppercase mb-3 border-b">
        Update Hotel
      </p>
      <form onSubmit={handleUpdateHotel}>
        <div className="flex flex-wrap px-2 lg:px-2">
          {/* name */}
          <div className="w-full md:w-1/4 px-2 mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="hotel-name"
            >
              Hotel Name
            </label>
            <input
              className="appearance-none block w-full border border-red-500 rounded py-3 px-4 focus:outline-none focus:border-[#1c3c6b]"
              id="hotel-name"
              type="text"
              placeholder="Hotel Sea Pearl"
              name="hotelName"
              required
              value={hotelNm}
              onChange={(e) => setHotelNm(e.target.value)}
            />
          </div>

          {/* phone number */}
          <div className="w-full md:w-1/3 lg:w-1/4 px-2  mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-phone"
            >
              Phone Number
            </label>
            <input
              className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              id="grid-phone"
              type="text"
              name="hotelPhoneNumber"
              placeholder="01912345678"
              required
              value={phoneNum}
              onChange={(e) => setPhoneNum(e.target.value)}
            />
          </div>

          {/* address */}
          <div className="w-full md:w-1/3 lg:w-1/4 px-2  mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-address"
            >
              Address
            </label>
            <input
              className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              id="grid-address"
              type="text"
              name="address"
              placeholder="Lighthouse Road, 84/A . . . . . ."
              required
              value={htlAddress}
              onChange={(e) => setHtlAddress(e.target.value)}
            />
          </div>

          {/* upazila */}
          <div className="w-full md:w-1/3 lg:w-1/4 px-2  mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-upazila"
            >
              upazila
            </label>
            <input
              className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              id="grid-upazila"
              type="text"
              name="upazila"
              placeholder="Kolatoli"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          {/* number of rooms */}
          <div className="w-full md:w-1/3 lg:w-1/4 px-2  mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-rooms"
            >
              Number of Rooms
            </label>
            <input
              className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              id="grid-rooms"
              type="text"
              name="totalRooms"
              placeholder="10"
              required
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
            />
          </div>

          {/*  Number of Floors */}
          <div className="w-full md:w-1/3 lg:w-1/4 px-2  mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-floors"
            >
              Number of Floors
            </label>
            <input
              className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              id="grid-floors"
              type="text"
              name="floors"
              placeholder="8"
              required
              value={floorNumb}
              onChange={(e) => setFloorNumb(e.target.value)}
            />
          </div>

          {/*  What's Nearby */}
          <div className="w-full md:w-1/3 lg:w-1/4 px-2  mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-nearBy"
            >
              What's Nearby
            </label>
            <input
              className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              id="grid-nearBy"
              type="text"
              name="nearBy"
              placeholder="0.22 km from Sugandha Point"
              required
              value={near}
              onChange={(e) => setNear(e.target.value)}
            />
          </div>

          {/*  Year of construction */}
          <div className="w-full md:w-1/3 lg:w-1/4 px-2  mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-construction"
            >
              Year of construction
            </label>
            <input
              className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              id="grid-construction"
              type="text"
              name="constructionYear"
              placeholder="2010"
              required
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>

          {/*  accomodation */}
          <div className="w-full md:w-1/3 lg:w-1/4 px-2  mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-accomodation"
            >
              accomodation type
            </label>
            <select
              id="grid-accomodation"
              className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              name="accomodation"
              value={accoType}
              onChange={(e) => setAccoType(e.target.value)}
            >
              <option defaultValue value="hotel">
                Hotel
              </option>
              <option value="Resort">Resort</option>
              <option value="Apartment">Apartment</option>
            </select>
          </div>

          {/*  check in time */}
          <div className="w-full md:w-1/3 lg:w-1/4 px-2  mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-checkIn"
            >
              check in
            </label>
            <select
              id="grid-checkIn"
              className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              name="checkIn"
              value={htlCheckIn}
              onChange={(e) => setHtlCheckIn(e.target.value)}
            >
              {time.map((d, i) => (
                <option key={i} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          {/*  check out time */}
          <div className="w-full md:w-1/3 lg:w-1/4 px-2  mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-checkOut"
            >
              check out
            </label>
            <select
              id="grid-checkOut"
              className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              name="checkOut"
              value={htlCheckOut}
              onChange={(e) => setHtlCheckOut(e.target.value)}
            >
              {time.map((d, i) => (
                <option key={i} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          {/*  child */}
          <div className="w-full md:w-1/3 lg:w-1/4 px-2  mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-child"
            >
              child
            </label>
            <select
              id="grid-child"
              className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              name="child"
              value={childNum}
              onChange={(e) => setChildNum(e.target.value)}
            >
              <option defaultValue value="0">
                0
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>

          {/* bussiness facilities */}
          <div className="mb-4 w-full">
            <p className="block uppercase px-2 text-sm font-semibold mb-2">
              Business Facilities
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <label className="flex items-center px-2 mb-2">
                <input
                  type="checkbox"
                  name="business"
                  value="Conference Hostess"
                  checked={businessFac.includes("Conference Hostess")}
                  onChange={(e) => handleUpdateFacility(e)}
                />
                <span className="checkbox-label pl-2">Conference Hostess</span>
              </label>
              <label className="flex items-center px-2 mb-2">
                <input
                  type="checkbox"
                  name="business"
                  value="Auditorium"
                  checked={businessFac.includes("Auditorium")}
                  onChange={(e) => handleUpdateFacility(e)}
                />
                <span className="checkbox-label pl-2">Auditorium</span>
              </label>
              <label className="flex items-center px-2 mb-2">
                <input
                  type="checkbox"
                  name="business"
                  value="Sound System"
                  checked={businessFac.includes("Sound System")}
                  onChange={(e) => handleUpdateFacility(e)}
                />
                <span className="checkbox-label pl-2">Sound System</span>
              </label>
            </div>
          </div>

          {/* Fitness & Wellness Facilities */}
          <div className="mb-4 w-full">
            <p className="block uppercase px-2 text-sm font-semibold mb-2">
              Fitness & Wellness Facilities
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <label className="flex items-center   px-2 mb-2">
                <input
                  type="checkbox"
                  name="fitness"
                  value="Swimming Pool"
                  checked={fitnessFac.includes("Swimming Pool")}
                  onChange={(e) => handleUpdateFacility(e)}
                />
                <span className="checkbox-label pl-2">Swimming Pool</span>
              </label>
              <label className="flex items-center px-2 mb-2">
                <input
                  type="checkbox"
                  name="fitness"
                  value="Gym"
                  checked={fitnessFac.includes("Gym")}
                  onChange={(e) => handleUpdateFacility(e)}
                />
                <span className="checkbox-label pl-2">Gym</span>
              </label>
              <label className="flex items-center px-2 mb-2">
                <input
                  type="checkbox"
                  name="fitness"
                  value="Massage"
                  checked={fitnessFac.includes("Massage")}
                  onChange={(e) => handleUpdateFacility(e)}
                />
                <span className="checkbox-label pl-2">Massage</span>
              </label>
            </div>
          </div>

          {/* Food & Drink */}
          <div className="mb-4 w-full">
            <p className="block uppercase px-2 text-sm font-semibold mb-2">
              Food & Drinks
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {foods.map((f, i) => {
                return (
                  <label className="flex items-center px-2 mb-2" key={i}>
                    <input
                      type="checkbox"
                      name="food"
                      value={f}
                      checked={foodFac.includes(f)}
                      onChange={(e) => handleUpdateFacility(e)}
                    />
                    <span className="checkbox-label pl-2">{f}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* General Facilities */}
          <div className="mb-4 w-full">
            <p className="block uppercase px-2 text-sm font-semibold mb-2">
              General Facilities
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {general.map((f, i) => {
                return (
                  <label className="flex items-center px-2 mb-2" key={i}>
                    <input
                      type="checkbox"
                      name="general"
                      value={f}
                      checked={generalFac.includes(f)}
                      onChange={(e) => handleUpdateFacility(e)}
                    />
                    <span className="checkbox-label pl-2">{f}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Media Facilities */}
          <div className="mb-4 w-full">
            <p className="block uppercase px-2 text-sm font-semibold mb-2">
              Media & Technology
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {media.map((f, i) => {
                return (
                  <label className="flex items-center px-2 mb-2" key={i}>
                    <input
                      type="checkbox"
                      name="media"
                      value={f}
                      checked={mediaFac.includes(f)}
                      onChange={(e) => handleUpdateFacility(e)}
                    />
                    <span className="checkbox-label pl-2">{f}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Transportation Facilities */}
          <div className="mb-4 w-full">
            <p className="block uppercase px-2 text-sm font-semibold mb-2">
              Transportation
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {tranport.map((f, i) => {
                return (
                  <label className="flex items-center px-2 mb-2" key={i}>
                    <input
                      type="checkbox"
                      name="transport"
                      value={f}
                      checked={transportFac.includes(f)}
                      onChange={(e) => handleUpdateFacility(e)}
                    />
                    <span className="checkbox-label pl-2">{f}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Others Facilities */}
          <div className="mb-4 w-full">
            <p className="block uppercase px-2 text-sm font-semibold mb-2">
              Others Facilities
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {others.map((f, i) => {
                return (
                  <label className="flex items-center px-2 mb-2" key={i}>
                    <input
                      type="checkbox"
                      name="others"
                      value={f}
                      checked={othersFac.includes(f)}
                      onChange={(e) => handleUpdateFacility(e)}
                    />
                    <span className="checkbox-label pl-2">{f}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/*  hotel describtion */}
          <div className="w-full px-2  mb-3">
            <label
              className="block uppercase text-sm font-semibold mb-2"
              htmlFor="grid-describtion"
            >
              hotel describtion
            </label>
            <textarea
              className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
              id="grid-describtion"
              type="text"
              name="describtion"
              rows={4}
              placeholder="Write hotel describtion here . . . . . . . "
              required
              value={describ}
              onChange={(e) => setDescrib(e.target.value)}
            />
          </div>

          <div className="px-2">
            <button
              type="submit"
              className="bg-[#1c3c6b] hover:bg-[#2a5699] text-white py-2 rounded font-semibold mt-3 px-14"
            >
              Add Hotel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateHotels;
