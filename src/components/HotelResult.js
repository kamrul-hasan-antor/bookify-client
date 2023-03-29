import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const HotelResult = ({ setShowFilter, hotelResult }) => {
  const [rooms, setRooms] = useState([]);

  const handleShowFilter = () => {
    setShowFilter(true);
  };

  useEffect(() => {
    fetch("http://localhost:5000/roomPrice")
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
      });
  }, []);

  if (!hotelResult) {
    return <div className="text-5xl">Loading...</div>;
  }

  return (
    <div>
      <div className="bg-white flex py-3 px-3.5 justify-between items-center border rounded">
        <h4 className="font-semibold">{hotelResult.length} results</h4>
        <div className="flex items-center">
          <button
            className={`bg-gray-50 border border-gray-300 py-2 px-6 rounded lg:hidden`}
            onClick={handleShowFilter}
          >
            Filters
          </button>
          <select
            id="guest"
            name="guest"
            className="bg-gray-50 border border-gray-300 block py-2 px-4 rounded ml-3"
          >
            <option defaultValue value="popularity">
              Popularity
            </option>
            <option value="price">Price</option>
          </select>
        </div>
      </div>

      {/* Hotels */}
      {hotelResult.map((hotel, i) => {
        const {
          _id,
          hotelName,
          images,
          address,
          upazila,
          district,
          describtion,
        } = hotel;

        return (
          <div
            key={i}
            className="bg-white  lg:h-56 p-3.5 lg:flex my-3.5 border rounded-sm"
          >
            <div className="w-full lg:w-1/3">
              <img
                src={images[images.length - 1]}
                alt=""
                className="h-full w-full"
              />
            </div>
            <div className="lg:pl-3.5 lg:w-2/3 mt-4 lg:mt-0 flex flex-col justify-between">
              <div>
                <h3 className="text-xl mb-1">{hotelName}</h3>
                <small className="flex items-center">
                  <FaMapMarkerAlt className="mr-1" /> {address}, {upazila},{" "}
                  {district}
                </small>
                <p className="text-sm my-1">{describtion.slice(0, 220)}</p>
              </div>
              <div className="flex items-center justify-between w-full">
                <div>
                  {rooms
                    .filter((room) => room.hotleId === _id)
                    .sort((a, b) => a.rackRate - b.rackRate)
                    .map((r, i) => {
                      return (
                        <div key={i}>
                          {i === 0 ? (
                            <>
                              <p className="text-[15px]">
                                <span className="font-semibold mr-1.5">
                                  Min Rent:
                                </span>{" "}
                                BDT {r.rackRate} /per night
                              </p>
                              <p className="text-[15px]">
                                <span className="font-semibold mr-1.5">
                                  Discount:
                                </span>{" "}
                                {r.discount}%
                              </p>
                              <p className="text-[15px]">
                                <span className="font-semibold mr-1.5">
                                  Total:
                                </span>{" "}
                                BDT {(r.rackRate * (100 - r.discount)) / 100}{" "}
                                /per night
                              </p>
                              <p> </p>
                            </>
                          ) : (
                            ""
                          )}
                        </div>
                      );
                    })}
                </div>
                <Link
                  type="submit"
                  className="bg-[#1c3c6b] text-white py-3 rounded font-semibold text-sm px-3 hover:bg-[#2a5699]"
                >
                  All Rooms
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HotelResult;
