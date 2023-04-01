import React, { useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Cart from "../../components/Cart";
import Facilities from "../../components/Facilities";
import Policy from "../../components/Policy";
import RoomDetails from "../../components/RoomDetails";

const HotelInfo = () => {
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
  } = hotel;

  useEffect(() => {
    fetch(`http://localhost:5000/room/${_id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
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
  const policy = {
    checkIn,
    checkOut,
    child,
    instruction,
  };

  return (
    <div className="h-max w-11/12 lg:w-5/6 pt-24 lg:w- max-w-screen-xl mx-auto">
      <div>
        {/* -------Top Banner------- */}
        <div className="flex md:flex-row flex-col mt-10 bg-white p-2 rounded-md">
          <div className="md:w-[55%]">
            <img
              src="https://i.travelapi.com/hotels/33000000/32420000/32415500/32415417/5952e0af_z.jpg"
              alt=""
              className="rounded-md h-full"
            />
          </div>
          <div className="md:w-[45%] md:pl-4">
            {/* Hotel name and Address */}
            <h3 className="md:text-2xl text-lg mt-3 md:mt-0">{hotelName}</h3>
            <small className="flex items-center">
              <FaMapMarkerAlt className="mr-1" /> {address}, {upazila},{" "}
              {district}
            </small>

            {/* NearBy */}

            <h4 className="mt-4 mb-1 text-lg font-semibold ">What's Nearby</h4>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-slate-400" />
              <p className="ml-1">16.5 km from Himchori Waterfall</p>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-slate-400" />
              <p className="ml-1">29.5 km from Cox's Bazar Airport</p>
            </div>

            {/* Facilities */}
            <h4 className="mt-4 mb-1 text-lg font-semibold ">Facilities</h4>
            {[
              businessFacilities[0],
              fitnessFacilities[0],
              foodFacilities[0],
              generalFacilities[0],
              mediaFacilities[0],
              othersFacilities[0],
              transportFacilities[0],
            ].map((f, i) => (
              <small
                key={i}
                className="bg-[#ecf3fe] px-2 py-1 m-0.5 inline-block"
              >
                {f}
              </small>
            ))}

            <small className="bg-[#ecf3fe] px-2 py-1 m-[3px] inline-block">
              {transportFacilities}
            </small>
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
              Year of construction: {constructionYear}
            </p>
          </div>
          <p className="pl-4 py-3">{describtion}</p>
        </div>
        {/* Room Details and Cart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-3 mt-10 relative">
          <RoomDetails />
          <Cart />
        </div>
        <Facilities facilities={facilities} />
        <Policy policy={policy} />
      </div>
    </div>
  );
};

export default HotelInfo;
