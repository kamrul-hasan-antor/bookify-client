import React, { useContext } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { PaymentContext } from "../context/PayMentProvider";

import { AuthContext } from "../context/AuthProvider";

const Cart = ({ roomToCart, setRoomToCart }) => {
  const { setAddedRoom } = useContext(PaymentContext);
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  const { discount, hotelName, rackRate, roomImgs, roomName, hotleId, _id } =
    roomToCart;

  const discountAmount = (rackRate * discount) / 100;
  const roomRent = (rackRate * (100 - discount)) / 100;
  const taxAmount = roomRent * 0.1;
  const subTotal = roomRent + taxAmount;

  const handleCheckOut = () => {
    const roomInfo = {
      hotleId,
      discount,
      hotelName,
      rackRate,
      roomImgs,
      roomName,
      discountAmount,
      roomRent,
      taxAmount,
      subTotal,
      roomId: _id,
      userEmail: user?.email,
    };
    setAddedRoom(roomInfo);
    navigate("/payment");
  };

  return (
    <div className="col-span-1 mt-5 lg:mt-0 h-full">
      <div className="border rounded-md sticky top-20">
        <div
          className="bg-[#ecf3fe]  text-lg font-semibold
        pl-2 py-3 rounded-md rounded-b-none"
        >
          <h4>Pricing Summary</h4>
        </div>
        <div
          className={`${
            roomName ? "hidden" : "block"
          } h-[264px] text-lg bg-white rounded-b-md flex justify-center items-center`}
        >
          <p>Add Room to Continue</p>
        </div>
        <div className={`${roomName ? "block" : "hidden"} p-4 bg-white`}>
          <div className="pb-2 border-b">
            <div className="flex items-cnter">
              <div className="w-1/4">
                <img className="w-full h-full" src={roomImgs} alt="" />
              </div>
              <div className="w-3/4 pl-2 flex items-center justify-between">
                <div>
                  <p className="font-semibold lg:text-lg">{roomName}</p>
                  <small className="text-sm font-semibold">{hotelName}</small>
                </div>
                <button onClick={() => setRoomToCart({})}>
                  <RxCrossCircled className="text-[#2a5699]" size={28} />
                </button>
              </div>
            </div>
          </div>
          <div className="flex mt-4 justify-between">
            <div>
              <p>Rack Rate</p>
              <p className="my-2 ">
                Hotel Offer
                <small className="ml-1 px-2 py-1 bg-[#ecf3fe] font-semibold rounded-md ">
                  {discount}%
                </small>
              </p>
              <p> Room Rate</p>
              <p className="my-2"> Taxes & Fees</p>
            </div>
            <div className="text-end">
              <p className="font-semibold">
                {rackRate}
                <span className="text-[11px]"> BDT</span>
              </p>
              <p className="my-2 font-semibold text-green-600">
                - {discountAmount}
                <span className="text-[11px]"> BDT</span>
              </p>
              <p className="font-semibold">
                {roomRent}
                <span className="text-[11px]"> BDT</span>
              </p>
              <p className="my-2 font-semibold">
                + {taxAmount}
                <span className="text-[11px]"> BDT</span>
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={handleCheckOut}
          className={`${
            roomName ? "block" : "hidden"
          } rounded-b-md bg-[#2a5699] hover:bg-[#1c3c6b] w-full py-3 font-semibold flex justify-between px-4 text-lg text-white`}
        >
          Continue
          <p className="text-white">
            {subTotal}
            <small className="text-white"> BDT</small>
          </p>
        </button>
      </div>
    </div>
  );
};

export default Cart;
