import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaSmokingBan } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { GiKnifeFork } from "react-icons/gi";
import { HiOutlineReceiptRefund } from "react-icons/hi";

const HotelDetail = () => {
  return (
    <div className="h-max w-11/12 lg:w-5/6 pt-24 lg:w- max-w-screen-xl mx-auto">
      {/* -------Top Banner------- */}
      <div className="flex md:flex-row flex-col mt-10 bg-white p-2 rounded-md">
        <div className="md:w-[55%]">
          <img
            src="https://i.travelapi.com/hotels/33000000/32420000/32415500/32415417/5952e0af_z.jpg"
            alt=""
            className="rounded-md"
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

      {/* Room Details */}
      <div className="bg-white mt-10 rounded-md border">
        <h4 className="bg-[#ecf3fe] p-4 text-lg font-semibold">Room Details</h4>
        <div className="p-4 flex">
          {/* Left side */}
          <div className="w-2/5">
            <img
              src="https://i.travelapi.com/hotels/77000000/76670000/76664400/76664399/985b5489_z.jpg"
              alt=""
              className="rounded-md"
            />
            <h4 className="text-lg font-semibold my-2 ">
              Superior King Hill/ Garden View
            </h4>
            <small className="flex items-center font-semibold">
              <BsFillPeopleFill className="mr-1" /> Maximum Room Capacity: 2
            </small>
            <small className="flex items-center my-1">
              <FaSmokingBan className="mr-1" /> Non-Smoking Room
            </small>
          </div>

          {/* right side */}
          <div className="pl-8 w-3/5">
            <div className="flex justify-between">
              <small className="bg-[#ecf3fe] font-semibold p-2 rounded-sm">
                Option 1
              </small>
              <small className="bg-orange-500 text-white font-semibold p-2 rounded-sm">
                62% off
              </small>
            </div>
            {/* room price */}
            <div className="flex justify-between mt-6">
              <div className="w-2/3">
                <p className="text-red-500 font-semibold my-2">
                  Hurry Up! Only 4 Rooms Left
                </p>
                <p className="flex items-center">
                  <BsFillPeopleFill className="mr-2" /> 2 Adults
                </p>
                <p className="flex items-center my-1">
                  <GiKnifeFork className="mr-2" /> Breakfast Included
                </p>
                <p className="flex items-center">
                  <HiOutlineReceiptRefund className="mr-2" /> Refund comming
                  soon
                </p>
                <div className="flex flex-wrap my-1">
                  <span className="flex items-center mr-4">
                    <AiOutlineCheck size={20} className="mr-1" /> Ceiling Fan
                  </span>
                  <span className="flex items-center mr-4">
                    <AiOutlineCheck size={20} className="mr-1" /> Air
                    Conditioning
                  </span>
                  <span className="flex items-center mr-4">
                    <AiOutlineCheck size={20} className="mr-1" /> Toiletries
                  </span>
                  <span className="flex items-center mr-4">
                    <AiOutlineCheck size={20} className="mr-1" /> Wi-Fi
                  </span>
                  <span className="flex items-center mr-4">
                    <AiOutlineCheck size={20} className="mr-1" /> Telephone
                  </span>
                  <span className="flex items-center">
                    <AiOutlineCheck size={20} className="mr-1" /> TV
                  </span>
                </div>
                <button className="mt-3 underline font-semibold text-sm">
                  Show All
                </button>
              </div>
              <div className="flex flex-col items-end">
                <small>Starts from</small>
                <div className="relative bg-red-100 w-max">
                  <p className="text-red-500"> BDT 14230 </p>
                  <div className="h-[1px] w-full -rotate-6 absolute bg-red-700 top-1/2"></div>
                </div>
                <h4 className="font-semibold text-2xl">BDT 5270</h4>
                <p>Tax & Fees: 10% </p>
                <button className="bg-yellow-400 px-3 py-2 rounded font-semibold mt-3">
                  Add Room
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;
