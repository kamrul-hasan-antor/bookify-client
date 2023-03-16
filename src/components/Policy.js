import React from "react";
import { AiFillCarryOut } from "react-icons/ai";
import { BsFillFileEarmarkRuledFill } from "react-icons/bs";
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
              <AiFillCarryOut size={18} className="mr-1" /> Check In
            </p>
          </div>
          <div className="w-4/5">
            <p>12.00 PM</p>
          </div>
        </div>
        <div className="flex mt-3">
          <div className="w-1/2 lg:w-1/5">
            <p className="flex items-center">
              <AiFillCarryOut size={18} className="mr-1" /> Check Out
            </p>
          </div>
          <div className="w-4/5">
            <p>11.00 AM</p>
          </div>
        </div>
        <div className="flex mt-3">
          <div className="w-1/2 lg:w-1/5">
            <p className="flex items-center">
              <BsFillFileEarmarkRuledFill size={18} className="mr-1" />{" "}
              Instructions
            </p>
          </div>
          <div className="w-4/5">
            <ul className="block list-disc">
              <li>
                Extra-person charges may apply and vary depending on property
                policy
              </li>
              <li>
                Government-issued photo identification and a credit card, debit
                card, or cash deposit may be required at check-in for incidental
                charges
              </li>
            </ul>
          </div>
        </div>
        <div className="flex mt-3">
          <div className="w-1/2 lg:w-1/5">
            <p className="flex items-center">
              <BsFillFileEarmarkRuledFill size={18} className="mr-1" /> Special
              Instructions
            </p>
          </div>
          <div className="w-4/5">
            <p>Front desk staff will greet guests on arrival.</p>
          </div>
        </div>
        <div className="flex mt-3">
          <div className="w-1/2 lg:w-1/5">
            <p className="flex items-center">
              <BsFillFileEarmarkRuledFill size={18} className="mr-1" />
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
              <BsFillFileEarmarkRuledFill size={18} className="mr-1" />
              Pet Policy
            </p>
          </div>
          <div className="w-4/5">
            <p>Not Allowed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
