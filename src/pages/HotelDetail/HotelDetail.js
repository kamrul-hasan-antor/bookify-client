import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Cart from "../../components/Cart";
import Facilities from "../../components/Facilities";
import Policy from "../../components/Policy";
import RoomDetails from "../../components/RoomDetails";

const HotelDetail = () => {
  const [rooms, setRooms] = useState([]);
  const selectedHotel = useLoaderData();
  const [hotel] = selectedHotel;
  const {
    _id,
    address,
    upazila,
    district,
    hotelName,
    facilities,
    constructionYear,
    totalRooms,
    describtion,
    checkIn,
    checkOut,
    child,
    instruction,
    nearBy,
  } = hotel;

  useEffect(() => {
    fetch(`http://localhost:5000/room/${_id}`)
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, [_id]);

  const {
    businessFacilities,
    fitnessFacilities,
    foodFacilities,
    generalFacilities,
    mediaFacilities,
    othersFacilities,
    transportFacilities,
  } = facilities;

  const someFacilities = [
    ...othersFacilities.slice(0, 2),
    ...businessFacilities.slice(0, 2),
    ...fitnessFacilities.slice(0, 2),
    ...foodFacilities.slice(0, 2),
    ...generalFacilities.slice(0, 2),
    ...mediaFacilities.slice(0, 2),
    ...transportFacilities.slice(0, 2),
  ];

  const policy = {
    checkIn,
    checkOut,
    child,
    instruction,
  };

  return (
    <div className="h-max w-11/12 pt-20 lg:w- max-w-screen-2xl mx-auto">
      <div>
        {/* -------Top Banner------- */}
        <div className="flex lg:flex-row flex-col mt-4 bg-white p-4 rounded-md">
          <div className="lg:w-[50%] bg-blue-50 lg:h-[345px]">
            <img
              src="https://images.unsplash.com/photo-1517329782449-810562a4ec2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=863&q=80"
              alt=""
              className="rounded-md h-full w-full"
            />
          </div>
          <div className="lg:w-[50%] mt-4 lg:mt-0 lg:pl-5 h-max">
            {/* Hotel name and Address */}
            <h3 className="md:text-2xl text-lg mt-3 md:mt-0">{hotelName}</h3>
            <small className="flex items-center mt-1">
              <FaMapMarkerAlt className="mr-1" /> {address}, {upazila},{" "}
              {district}
            </small>

            {/* NearBy */}

            <h4 className="mt-4 mb-1 text-lg font-semibold ">What's Nearby</h4>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-slate-400" />
              <p className="ml-1">{nearBy}</p>
            </div>

            {/* Facilities */}
            <h4 className="mt-4 mb-1 text-lg font-semibold ">Facilities</h4>
            {someFacilities.map((f, i) => (
              <small
                key={i}
                className="bg-[#ecf3fe] px-3 py-1.5 mr-1.5 mt-1.5 inline-block"
              >
                {f}
              </small>
            ))}
          </div>
        </div>

        {/* -------Details and Rooms------- */}
        {/* Hotel Description */}
        <div className="bg-white mt-10 rounded-md border">
          <h4 className="bg-[#ecf3fe]  p-4 text-lg font-semibold rounded-t-md">
            Hotel Description
          </h4>
          <div className="flex pl-4 pt-2">
            <p className="font-semibold mr-4 text-xs md:text-base">
              Number of Rooms: {totalRooms}
            </p>
            <p className="font-semibold mr-4 text-xs md:text-base">
              Number of Floors: 9
            </p>
            <p className="font-semibold mr-4 text-xs md:text-base">
              Construction Year: {constructionYear}
            </p>
          </div>
          <p className="pl-4 py-3">{describtion}</p>
        </div>
        {/* Room Details and Cart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-3 mt-10 relative">
          <RoomDetails rooms={rooms} />
          <Cart />
        </div>
        <Facilities facilities={facilities} />
        <Policy policy={policy} />
      </div>
    </div>
  );
};

export default HotelDetail;
