import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useLoaderData, useLocation } from "react-router-dom";
import Cart from "./Cart";
import Facilities from "./Facilities";
import Policy from "./Policy";
import RoomDetails from "./RoomDetails";
import ImageSlider from "./ImageSlider";

const HotelDetail = () => {
  const [rooms, setRooms] = useState([]);
  const [roomToCart, setRoomToCart] = useState({});
  const selectedHotel = useLoaderData();
  const [hotel] = selectedHotel;
  const { pathname } = useLocation();

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
    images,
    instruction,
    nearBy,
  } = hotel;

  useEffect(() => {
    fetch(`https://bookify-server.vercel.app/room/${_id}`)
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, [_id]);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

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
        <div className="flex lg:flex-row flex-col mt-4 bg-white p-4 rounded-md border">
          <div className="lg:w-[50%] lg:h-[345px] h-full">
            <ImageSlider images={images} />
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
          <RoomDetails setRoomToCart={setRoomToCart} rooms={rooms} />
          <Cart roomToCart={roomToCart} setRoomToCart={setRoomToCart} />
        </div>
        <Facilities facilities={facilities} />
        <Policy policy={policy} />
      </div>
    </div>
  );
};

export default HotelDetail;
