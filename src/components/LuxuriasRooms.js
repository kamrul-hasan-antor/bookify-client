import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LuxuriasRooms = () => {
  const [topRooms, setTopRooms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/luxuriasRooms")
      .then((res) => res.json())
      .then((data) => setTopRooms(data));
  }, []);

  return (
    <div
      id="luxuriasRooms"
      className="h-max w-11/12 lg:w- max-w-screen-2xl mx-auto pt-12"
    >
      <p className="py-4 font-semibold text-2xl">Luxurias Rooms</p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 md:px-8 lg:px-0 md:gap-3">
        {topRooms.map((rooms, i) => {
          const { hotelName, roomName, roomImgs, rackRate, discount, hotleId } =
            rooms;
          return (
            <div
              className="border rounded-sm hover:shadow-md h-max mb-4 md:mb-0 md:h-[300px]"
              key={i}
            >
              <img
                src={roomImgs}
                alt=""
                className="rounded-t-sm w-full md:h-[150px]"
              />
              <div className="p-2 h-1/2 relative">
                <div className="pb-16">
                  <small>{roomName}</small>
                  <p className="font-semibold">{hotelName}</p>
                  <p>
                    <span className="font-semibold">{rackRate} </span>
                    <small>BDT/Night</small>
                  </p>
                  <p>
                    <small className="font-semibold">Discount: </small>
                    <small>{discount}%</small>
                  </p>
                </div>

                <div className="absolute bottom-2">
                  <Link
                    to={`/hotels/${hotleId}`}
                    className="flex items-center font-semibold "
                  >
                    <svg
                      stroke="#1c3c6b"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-1"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LuxuriasRooms;
