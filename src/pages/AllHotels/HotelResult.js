import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const HotelResult = ({ showFilter, setShowFilter, hotels }) => {
  const [rooms, setRooms] = useState([]);

  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  useEffect(() => {
    fetch("http://localhost:5000/roomPrice")
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
      });
  }, []);

  return (
    <div>
      <div className="bg-white flex py-3 px-3.5 justify-between items-center border rounded">
        <h4 className="font-semibold">{hotels.length} results</h4>
        <button
          className={`bg-gray-50 border border-gray-300 py-2 px-6 rounded lg:hidden`}
          onClick={handleShowFilter}
        >
          Filters
        </button>
      </div>

      {/* Hotels */}
      {hotels.map((hotel, i) => {
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
            className="bg-white  lg:h-56 p-3.5 md:flex my-3.5 border rounded"
          >
            <div className="w-full md:w-1/3 bg-blue-50">
              <img
                src={images[images.length - 1]}
                alt=""
                className="h-full w-full"
              />
            </div>
            <div className="md:pl-3.5 md:w-2/3 mt-4 md:mt-0 flex flex-col justify-between">
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
                    .filter((r) => r.hotleId === _id)
                    .map((r, i) => (
                      <div key={i}>
                        <p>
                          <span className="font-semibold mr-1.5 block md:inline">
                            Starts From:
                          </span>
                          <span>
                            BDT {(r.rackRate * (100 - r.discount)) / 100} / per
                            night
                          </span>
                        </p>
                      </div>
                    ))}
                </div>
                <Link
                  to={`/hotels/${_id}`}
                  type="submit"
                  className="bg-[#1c3c6b] text-white py-3 rounded font-semibold text-sm px-3 hover:bg-[#2a5699]"
                >
                  View Rooms
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
