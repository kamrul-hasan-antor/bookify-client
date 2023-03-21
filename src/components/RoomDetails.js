import React from "react";
import { FaSmokingBan } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { GiKnifeFork } from "react-icons/gi";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import Coupon from "./Coupon";
const RoomDetails = () => {
  return (
    <div className="col-span-2">
      <h4 className="bg-[#ecf3fe] p-4 py-3 text-lg font-semibold rounded-md border border-b-0 rounded-b-none ">
        Room Details
      </h4>
      <div className="p-4 flex flex-col lg:flex-row bg-white border border-t-0 rounded-b-md mb-10">
        {/* Left side */}
        <div className="lg:w-2/5">
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
        <div className="lg:pl-8 lg:w-3/5">
          <div className="flex justify-between mt-4 lg:mt-0">
            <small className="bg-[#ecf3fe] font-semibold p-2 rounded-sm">
              Option 1
            </small>
            <small className="bg-orange-500 font-semibold p-2 rounded-sm text-white">
              62% off
            </small>
          </div>
          {/* room price */}
          <div className="flex flex-col lg:flex-row justify-between lg:mt-6 text-sm lg:text-base">
            <div className="lg:w-2/3">
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
                <HiOutlineReceiptRefund className="mr-2" /> Refund comming soon
              </p>
              <div className="flex flex-wrap my-1">
                <span className="flex items-center mr-4">
                  <AiOutlineCheck size={20} className="mr-1" /> Ceiling Fan
                </span>
                <span className="flex items-center mr-4">
                  <AiOutlineCheck size={20} className="mr-1" /> Air Conditioning
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
            <div className="flex justify-between items-center lg:justify-start lg:flex-col lg:items-end mt-3 lg:mt-0 lg:text-end">
              <div>
                <small>Starts from</small>
                <div className="relative bg-red-100 w-max">
                  <p className="text-red-500"> BDT 14230 </p>
                  <div className="h-[1px] w-full -rotate-6 absolute bg-red-700 top-1/2"></div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg lg:text-2xl">BDT 5270</h4>
                <p>Tax & Fees: 10% </p>
              </div>
              <button className="bg-[#1c3c6b] hover:bg-[#2a5699] text-white px-3 py-2 rounded font-semibold mt-3">
                Add Room
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* anther room */}
      <div className="p-4 flex flex-col lg:flex-row bg-white border border-t-0 rounded-b-md mb-10">
        {/* Left side */}
        <div className="lg:w-2/5">
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
        <div className="lg:pl-8 lg:w-3/5">
          <div className="flex justify-between mt-4 lg:mt-0">
            <small className="bg-[#ecf3fe] font-semibold p-2 rounded-sm">
              Option 1
            </small>
            <small className="bg-orange-500 font-semibold p-2 rounded-sm">
              62% off
            </small>
          </div>
          {/* room price */}
          <div className="flex flex-col lg:flex-row justify-between lg:mt-6 text-sm lg:text-base">
            <div className="lg:w-2/3">
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
                <HiOutlineReceiptRefund className="mr-2" /> Refund comming soon
              </p>
              <div className="flex flex-wrap my-1">
                <span className="flex items-center mr-4">
                  <AiOutlineCheck size={20} className="mr-1" /> Ceiling Fan
                </span>
                <span className="flex items-center mr-4">
                  <AiOutlineCheck size={20} className="mr-1" /> Air Conditioning
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
            <div className="flex justify-between items-center lg:justify-start lg:flex-col lg:items-end mt-3 lg:mt-0 lg:text-end">
              <div>
                <small>Starts from</small>
                <div className="relative bg-red-100 w-max">
                  <p className="text-red-500"> BDT 14230 </p>
                  <div className="h-[1px] w-full -rotate-6 absolute bg-red-700 top-1/2"></div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg lg:text-2xl">BDT 5270</h4>
                <p>Tax & Fees: 10% </p>
              </div>
              <button className="bg-yellow-400 px-3 py-2 rounded font-semibold mt-3">
                Add Room
              </button>
            </div>
          </div>
        </div>
      </div>

      <Coupon />
    </div>
  );
};

export default RoomDetails;
