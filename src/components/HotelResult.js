import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
const HotelResult = () => {
  return (
    <div>
      <div className="bg-white flex py-3 px-3.5 justify-between items-center border rounded">
        <h4 className="font-semibold">38 properties found </h4>
        <div className="">
          <select
            id="guest"
            name="guest"
            className="bg-gray-50 border border-gray-300 block py-2 px-4 rounded"
          >
            <option defaultValue value="popularity">
              Popularity
            </option>
            <option value="price">Price</option>
          </select>
        </div>
      </div>

      {/* Hotels */}
      <div className="bg-white p-3.5 lg:flex h-max my-3.5 border rounded-sm">
        <div className="lg:w-1/3">
          <img
            src="https://i.travelapi.com/hotels/33000000/32420000/32415500/32415417/9aca911f_z.jpg"
            alt=""
            className="h-full"
          />
        </div>
        <div className="lg:pl-3.5 lg:w-2/3 mt-4 lg:mt-0">
          <div className="flex justify-between">
            <h3 className="text-xl">Hotel Regal Palace</h3>
            <small className="bg-[#ecf3fe] px-2 py-1 m-[3px] tracking-[2px] font-semibold flex items-center text-sm border">
              <AiFillStar className="mr-0.5" size={14} /> 3/5
            </small>
          </div>
          <small className="flex items-center">
            <FaMapMarkerAlt className="mr-1" /> Sadar, Cox's Bazar, Bangladesh
          </small>
          <p className="text-sm my-1">
            Featuring a 24-hour front desk and free Wi-Fi in lobby area, Royal
            Bay Regal Palace Hotel & Resort also offers a fitness center on
            property. Bay Regal Palace Hotel & Resort also offers a fitness
            center on property.
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[15px]">
                <span className="font-semibold mr-1.5">Min Rent:</span> BDT
                1000/per night
              </p>
              <p className="text-[15px]">
                <span className="font-semibold mr-1.5">Max Rent:</span> BDT
                5000/per night
              </p>
            </div>

            <button
              type="submit"
              className="bg-[#1c3c6b] text-white py-3 rounded font-semibold text-sm px-3 hover:bg-[#2a5699]"
            >
              All Rooms
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelResult;
