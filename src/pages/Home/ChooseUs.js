import React from "react";
import { MdExplore, MdFollowTheSigns } from "react-icons/md";
import { HiBriefcase } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import { BsFileEarmarkCheckFill } from "react-icons/bs";
import { FaHotel } from "react-icons/fa";
import chooseImg from "../../images/chooos_us.png";

const data = [
  {
    title: "Explore Around",
    message:
      "  Distinctively impact client-centered ideas via future-proof paradigms.",
    Icon: MdExplore,
  },
  {
    title: "Best Deals",
    message:
      "Distinctively impact client-centered ideas via future-proof paradigms.",
    Icon: HiBriefcase,
  },
  {
    title: "Best Guide",
    message:
      "Distinctively impact client-centered ideas via future-proof paradigms.",
    Icon: MdFollowTheSigns,
  },
  {
    title: "Support 24/7",
    message:
      "Distinctively impact client-centered ideas via future-proof paradigms.",
    Icon: BiSupport,
  },
  {
    title: "Luxary Hotel",
    message:
      "Distinctively impact client-centered ideas via future-proof paradigms.",
    Icon: FaHotel,
  },
  {
    title: "Easy Booking",
    message:
      "Distinctively impact client-centered ideas via future-proof paradigms.",
    Icon: BsFileEarmarkCheckFill,
  },
];

const ChooseUs = () => {
  return (
    <div className="bg-white">
      <div className="h-max w-11/12 lg:w- max-w-screen-2xl mx-auto py-16">
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-[59%]">
            {/* section title */}
            <h6 className="text-3xl mb-6 flex items-center">
              <p className="mb-2 text-[#1c3c6b]">Why Choose Us</p>
              <span className="inline-block relative h-0.5 w-10 ml-4"></span>
              <span className="inline-block relative h-0.5 w-2 mx-1"></span>
              <span className="inline-block relative h-0.5 w-2"></span>
            </h6>
            <h3 className="text-xl md:text-3xl mb-3">
              Get The Best Travel Experience
            </h3>
            <p>
              Professionally engineer world-class leadership skills after
              end-to-end growth strategies. Assertively create innovative
              schemas through installed base potentialities.
            </p>

            {/* section content */}

            <div className="flex mt-4 flex-wrap">
              {data.map((d, i) => {
                const { title, message, Icon } = d;

                return (
                  <div key={i} className="md:w-1/2 mb-2 py-3 md:pr-8">
                    <div className="flex items-center">
                      <div className="border-[5px] border-[#1c3c6b] rounded-full p-3 bg-[#ecf3fe] h-max mr-3">
                        <Icon size={40} className="text-[#1c3c6b]" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg mb-1">{title}</p>
                        <p className="text-sm">{message}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="lg:w-[40%] flex justify-center mt-4 lg:mt-0">
            <img src={chooseImg} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
