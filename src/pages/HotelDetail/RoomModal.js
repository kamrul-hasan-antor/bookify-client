import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";

const RoomModal = ({ modalData, showModal, setShowModal }) => {
  const { roomName, facilities } = modalData;
  return (
    <div
      className={`${
        showModal ? "fixed" : "hidden"
      } inset-0 z-50 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center`}
    >
      <div className="bg-white w-3/4 md:w-1/2 max-w-screen-lg rounded-md">
        <div className="bg-[#ecf3fe]  pl-3 font-semibold rounded-md border rounded-b-none flex items-center justify-between border-b">
          <h4 className="text-lg">{roomName}</h4>
          <button
            onClick={() => setShowModal(false)}
            className="bg-white p-3 py-3 "
          >
            <RxCrossCircled className="text-[#1c3c6b]" size={28} />
          </button>
        </div>
        <div className="grid mt-2 grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {facilities
            ? facilities?.map((facility, i) => (
                <small key={i} className="flex items-center text-sm">
                  <AiOutlineCheck size={18} className="mr-1 text-[#056998]" />{" "}
                  {facility}
                </small>
              ))
            : "Not Available"}
        </div>
      </div>
    </div>
  );
};

export default RoomModal;
