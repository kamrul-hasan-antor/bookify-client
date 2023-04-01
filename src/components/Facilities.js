import React from "react";

import { AiOutlineCheck } from "react-icons/ai";

const Facilities = ({ facilities }) => {
  const {
    businessFacilities,
    fitnessFacilities,
    foodFacilities,
    generalFacilities,
    mediaFacilities,
    othersFacilities,
    transportFacilities,
  } = facilities;

  return (
    <div className="mt-10">
      <h4 className="bg-[#ecf3fe] p-4 py-3 text-lg font-semibold rounded-md border border-b-0 rounded-b-none">
        Hotel Facilities
      </h4>
      <div className="p-4 bg-white border border-t-0 rounded-b-md mb-10">
        <div className="mb-5">
          <p className="">Business Facilities</p>
          <div className="grid mt-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2">
            {businessFacilities
              ? businessFacilities?.map((b, i) => (
                  <small key={i} className="flex items-center">
                    <AiOutlineCheck size={18} className="mr-1 text-[#056998]" />{" "}
                    {b}
                  </small>
                ))
              : "Not Available"}
          </div>
        </div>

        <div className="mb-5">
          <p className="">Food & Drink</p>
          <div className="grid mt-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-2">
            {foodFacilities
              ? foodFacilities?.map((f, i) => (
                  <small key={i} className="flex items-center">
                    <AiOutlineCheck size={18} className="mr-1 text-[#056998]" />{" "}
                    {f}
                  </small>
                ))
              : "Not Available"}
          </div>
        </div>

        <div className="mb-5">
          <p className="">General</p>
          <div className="grid mt-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2">
            {generalFacilities
              ? generalFacilities?.map((g, i) => (
                  <small key={i} className="flex items-center">
                    <AiOutlineCheck size={18} className="mr-1 text-[#056998]" />{" "}
                    {g}
                  </small>
                ))
              : "Not Available"}
          </div>
        </div>

        <div className="mb-5">
          <p className="">Fitness Facilities</p>
          <div className="grid mt-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-2">
            {fitnessFacilities
              ? fitnessFacilities?.map((f, i) => (
                  <small key={i} className="flex items-center">
                    <AiOutlineCheck size={18} className="mr-1 text-[#056998]" />{" "}
                    {f}
                  </small>
                ))
              : "Not Available"}
          </div>
        </div>

        <div className="mb-5">
          <p className="">Media & Technology</p>
          <div className="grid mt-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-2">
            {mediaFacilities
              ? mediaFacilities?.map((m, i) => (
                  <small key={i} className="flex items-center">
                    <AiOutlineCheck size={18} className="mr-1 text-[#056998]" />{" "}
                    {m}
                  </small>
                ))
              : "Not Available"}
          </div>
        </div>

        <div className="mb-5">
          <p className="">Transportation</p>
          <div className="grid mt-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-2">
            {transportFacilities
              ? transportFacilities?.map((t, i) => (
                  <small key={i} className="flex items-center">
                    <AiOutlineCheck size={18} className="mr-1 text-[#056998]" />{" "}
                    {t}
                  </small>
                ))
              : "Not Available"}
          </div>
        </div>

        <div className="mb-5">
          <p className="">Others</p>
          <div className="grid mt-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-2">
            {othersFacilities
              ? othersFacilities?.map((o, i) => (
                  <small key={i} className="flex items-center">
                    <AiOutlineCheck size={18} className="mr-1 text-[#056998]" />{" "}
                    {o}
                  </small>
                ))
              : "Not Available"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
