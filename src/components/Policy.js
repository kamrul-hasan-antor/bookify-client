import React from "react";
import { BsFileEarmarkRuled } from "react-icons/bs";
import { MdOutlineChildCare } from "react-icons/md";
import { TbDog } from "react-icons/tb";
import { FiInfo } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";
import { RxCheckCircled } from "react-icons/rx";
const Policy = () => {
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
            <p>12.00 PM</p>
          </div>
        </div>
        <div className="flex mt-3">
          <div className="w-1/2 lg:w-1/5">
            <p className="flex items-center">
              <RxCrossCircled size={18} className="mr-1" /> Check Out
            </p>
          </div>
          <div className="w-4/5">
            <p>11.00 AM</p>
          </div>
        </div>
        <div className="flex mt-3">
          <div className="w-1/2 lg:w-1/5">
            <p className="flex items-center">
              <BsFileEarmarkRuled size={18} className="mr-1" /> Instructions
            </p>
          </div>
          <div className="w-4/5">
            <p className="block list-disc">
              Extra-person charges may apply and vary depending on property
              policy Government-issued photo identification and a credit card,
              debit card, or cash deposit may be required at check-in for
              incidental charges
            </p>
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
            <p>Maximum 2 child allowed in one room.</p>
          </div>
        </div>
        <div className="flex mt-3">
          <div className="w-1/2 lg:w-1/5">
            <p className="flex items-center">
              <TbDog size={18} className="mr-1" />
              Pet Policy
            </p>
          </div>
          <div className="w-4/5">
            <p>Not Allowed</p>
          </div>
        </div>
        <div className="flex mt-3">
          <div className="w-1/2 lg:w-1/5">
            <p className="flex items-center">
              <FiInfo size={18} className="mr-1" />
              House Rules
            </p>
          </div>
          <div className="w-4/5">
            <p>
              Each guest has to present a copy of their valid NID/other forms of
              identification documents during check-in.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
