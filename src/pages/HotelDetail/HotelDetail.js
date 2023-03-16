import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Cart from "../../components/Cart";
import Facilities from "../../components/Facilities";
import Policy from "../../components/Policy";
import RoomDetails from "../../components/RoomDetails";

const HotelDetail = () => {
  return (
    <div className="h-max w-11/12 lg:w-5/6 pt-24 lg:w- max-w-screen-xl mx-auto">
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

          <h3 className="md:text-2xl text-lg mt-3 md:mt-0">
            Sea Pearl Beach Resort & Spa
          </h3>
          <small className="flex items-center">
            <FaMapMarkerAlt className="mr-1" /> Hotel Regal Palace, Kolatoli,
            Jhilwanja, Cox's Bazar, Bangladesh
          </small>

          {/* rating */}
          <div className="flex my-2">
            <svg viewBox="0 0 20 20" fill="#facc15" className="w-4">
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              viewBox="0 0 20 20"
              stroke="#facc15"
              fill="none"
              className="w-4"
            >
              <path
                fillRule=""
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
          </div>

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
          <small className="bg-[#ecf3fe] px-2 py-1 m-0.5 inline-block">
            Heated Swimming Pool
          </small>
          <small className="bg-[#ecf3fe] px-2 py-1 m-[3px] inline-block">
            Key Collection
          </small>
          <small className="bg-[#ecf3fe] px-2 py-1 m-[3px] inline-block">
            Medical Service
          </small>
          <small className="bg-[#ecf3fe] px-2 py-1 m-[3px] inline-block">
            Mobile Phone Coverage
          </small>
          <small className="bg-[#ecf3fe] px-2 py-1 m-[3px] inline-block">
            Free Airport Shuttle Service
          </small>
          <small className="bg-[#ecf3fe] px-2 py-1 m-[3px] inline-block">
            Elevator
          </small>
        </div>
      </div>

      {/* -------Details and Rooms------- */}
      {/* Hotel Description */}
      <div className="bg-white mt-10 rounded-md border">
        <h4 className="bg-[#ecf3fe]  p-4 text-lg font-semibold">
          Hotel Description
        </h4>
        <div className="flex pl-4 pt-2">
          <p className="font-semibold mr-4 text-xs md:text-base">
            Number of Rooms: 493
          </p>
          <p className="font-semibold mr-4 text-xs md:text-base">
            Number of Floors: 9
          </p>
          <p className="font-semibold mr-4 text-xs md:text-base">
            Year of construction: 2015
          </p>
        </div>
        <p className="pl-4 py-3">
          Sea Pearl Beach Resort & Spa is located on Inani beach, Cox's Bazar
          with lush green hills rise from the east and endless sea stretching on
          the west, the resort offers panoramic visuals of Bay of Bengal.
          Nestled in the heart of nature along the world’s longest natural sandy
          beach, the resort is spread over 15 acres, located 40 minutes away
          from the hustle of the Cox's Bazar city with easy accessibility to all
          the major tourist. Apart from luxurious rooms & suites and two
          swimming pools (one exclusively for ladies) the resort boasts of a
          plethora of indoor & outdoor activities for both adults and kids which
          include an internationally acclaimed water park, tennis & badminton
          courts, billiards, amphitheater, a luxurious spa and a well-appointed
          gym.
        </p>
      </div>

      {/* Room Details and Cart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-3 mt-10 relative">
        <RoomDetails />
        <Cart />
      </div>
      <Facilities />
      <Policy />
    </div>
  );
};

export default HotelDetail;
