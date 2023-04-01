import React from "react";
import { BsFileEarmarkRuled } from "react-icons/bs";
import { MdOutlineChildCare } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { RxCheckCircled } from "react-icons/rx";
const Policy = ({ policy }) => {
  const { checkIn, checkOut, child, instruction } = policy;
  return (
    <div className="mt-10">
      <h4 className="bg-[#ecf3fe] p-4 py-3 text-lg font-semibold rounded-md border border-b-0 rounded-b-none">
        Hotel Policies
      </h4>
      <div className="p-4 bg-white border border-t-0 rounded-b-md mb-10">
        <div className="flex">
          <div className="w-1/2 lg:w-1/5">
            <p className="flex items-center">
              <RxCheckCircled size={18} className="mr-1" /> Check In
            </p>
          </div>
          <div className="w-4/5">
            <p>{checkIn}</p>
          </div>
        </div>
        <div className="flex mt-3">
          <div className="w-1/2 lg:w-1/5">
            <p className="flex items-center">
              <RxCrossCircled size={18} className="mr-1" /> Check Out
            </p>
          </div>
          <div className="w-4/5">
            <p>{checkOut}</p>
          </div>
        </div>
        <div className="flex mt-3">
          <div className="w-1/2 lg:w-1/5">
            <p className="flex items-center">
              <BsFileEarmarkRuled size={18} className="mr-1" /> Instructions
            </p>
          </div>
          <div className="w-4/5">
            <p className="block list-disc">{instruction}</p>
          </div>
        </div>
        <div className="flex mt-3">
          <div className="w-1/2 lg:w-1/5">
            <p className="flex items-center">
              <MdOutlineChildCare size={18} className="mr-1" />
              Child Policy
            </p>
          </div>
          <div className="w-4/5">
            <p>Maximum {child} child allowed for free</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
