import React from "react";
const Cart = () => {
  return (
    <div className="col-span-1  mt-5 lg:mt-0 h-full">
      <div className="border rounded-md sticky top-20">
        <div
          className="bg-[#ecf3fe]  text-lg font-semibold
        pl-2 py-3 rounded-md rounded-b-none"
        >
          <h4>Pricing Summary</h4>
        </div>
        <div className="bg-white p-4 ">
          <div className="flex border-b pb-2 items-center">
            <div className="w-1/4">
              <img
                className="w-full"
                src="https://i.travelapi.com/hotels/33000000/32420000/32415500/32415417/5952e0af_z.jpg"
                alt=""
              />
            </div>
            <div className="w-3/4 pl-2">
              <p className="">Grace Cox Smart Hotel, Cox's Bazar</p>
              <small>District and Country</small>
            </div>
          </div>
          <div className="flex mt-4 justify-between">
            <div>
              <p>Rack Rate</p>
              <p className="my-2">
                Hotel Offer
                <small className="ml-1 px-2 py-1 bg-[#ecf3fe] font-semibold rounded-md ">
                  60%
                </small>
              </p>
              <p> Room Rate</p>
              <p className="my-2"> Taxes & Fees</p>
              <p>
                Hot Deals
                <small className="ml-1 px-2 py-1 bg-[#ecf3fe] font-semibold rounded-md">
                  B123456
                </small>
              </p>
            </div>
            <div className="text-end">
              <p>
                5000
                <span className="text-[11px]"> BDT</span>
              </p>
              <p className="my-2 text-green-700">
                - 3000
                <span className="text-[11px]"> BDT</span>
              </p>
              <p>
                2000
                <span className="text-[11px]"> BDT</span>
              </p>
              <p className="my-2">
                + 200
                <span className="text-[11px]"> BDT</span>
              </p>
              <p className="">
                2000 <span className="text-[11px]">BDT</span>
              </p>
            </div>
          </div>
        </div>
        <button className="rounded-b-md bg-[#2a5699] hover:bg-[#1c3c6b] w-full py-3 font-semibold flex justify-between px-4 text-lg text-white">
          Continue
          <p className="text-white">
            2000
            <small className="text-white"> BDT</small>
          </p>
        </button>
      </div>
    </div>
  );
};

export default Cart;
