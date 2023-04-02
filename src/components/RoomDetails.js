import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { GiKnifeFork } from "react-icons/gi";

const RoomDetails = ({ rooms }) => {
  return (
    <div className="col-span-2">
      <h4 className="bg-[#ecf3fe] p-4 py-3 text-lg font-semibold rounded-md border border-b-0 rounded-b-none ">
        Room Details
      </h4>

      {rooms.map((rooms, i) => {
        const {
          discount,
          rackRate,
          roomImgs,
          roomName,
          maxGuest,
          complimentary,
          facilities,
        } = rooms;
        const tax = 10;
        return (
          <div
            key={i}
            className={`${
              i > 0 ? "mt-10" : "border-t-0 rounded-t-none"
            } p-4 flex flex-col md:flex-row bg-white border rounded-md`}
          >
            {/* Left side */}
            <div className="md:w-2/5 border-r md:pr-4">
              <img
                src={roomImgs}
                alt=""
                className="rounded-md w-full sm:h-[300px] md:h-[167px] 2xl:h-[212px]"
              />
              <h4 className="text-lg font-semibold my-2 ">{roomName}</h4>
              <small className="flex items-center font-semibold">
                <BsFillPeopleFill className="mr-1" /> Maximum Room Capacity:{" "}
                {maxGuest}
              </small>
            </div>

            {/* right side */}
            <div className="lg:pl-4 lg:w-3/5">
              <div className="flex justify-between mt-4 md:mt-0">
                <small className="bg-[#ecf3fe] font-semibold p-2 rounded-sm">
                  Option {i + 1}
                </small>
                <small className="bg-orange-500 font-semibold p-2 rounded-sm text-white">
                  {discount}% off
                </small>
              </div>

              {/* room price */}
              <div className="flex flex-col lg:flex-row justify-between lg:mt-6 text-sm lg:text-base">
                <div className="lg:w-2/3">
                  <p className="flex items-center">
                    <BsFillPeopleFill className="mr-2" /> {maxGuest} Adults
                  </p>
                  <p className="flex items-center my-1">
                    <GiKnifeFork className="mr-2" /> {complimentary}
                  </p>
                  <div className="flex flex-wrap my-1">
                    {facilities.slice(0, 6).map((f, i) => (
                      <span key={i} className="flex items-center mr-4">
                        <AiOutlineCheck size={20} className="mr-1" /> {f}
                      </span>
                    ))}
                  </div>
                  <button className="mt-3 underline font-semibold text-sm">
                    Show All
                  </button>
                </div>
                <div className="flex justify-between items-center lg:justify-start lg:flex-col lg:items-end mt-3 lg:mt-0 lg:text-end">
                  <div>
                    <small>Starts from</small>
                    <div className="relative bg-red-100 w-max">
                      <p className="text-red-500"> BDT {rackRate} </p>
                      <div className="h-[1px] w-full -rotate-6 absolute bg-red-700 top-1/2"></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg lg:text-2xl">
                      BDT {(rackRate * (100 - discount)) / 100}
                    </h4>
                    <p>+ Tax & Fees: {tax}% </p>
                  </div>
                  <button className="bg-[#1c3c6b] hover:bg-[#2a5699] text-white px-3 py-2 rounded font-semibold mt-3">
                    Add Room
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RoomDetails;
