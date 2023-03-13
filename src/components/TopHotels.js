import React from "react";
import { Link } from "react-router-dom";

const arr = [1, 23, 4, 5, 67, 89];

const TopHotels = () => {
  return (
    <div className="h-max py-10 max-w-screen-xl mx-auto">
      <p className="pl-3 md:pl-8 lg:pl-0 py-3 font-semibold text-2xl">
        Popular Hotels
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 px-3 md:px-8 lg:px-0 gap-3">
        {arr.map((d, i) => {
          return (
            <div className="border rounded-md hover:shadow-lg h-max" key={i}>
              <img
                src="http://s3.amazonaws.com/redqteam.com/tripfinder-images/hotel-14_thumb.jpg"
                alt=""
                className="rounded-t-md w-full h-1/2"
              />
              <div className="p-2 pr-0 h-1/2 relative ">
                <div className=" pb-16">
                  <small>Executive Suite Hill View</small>
                  <p className="font-semibold">Sea Pearl Beach Resort & Spa</p>
                  <p>
                    2499 <small>BDT/Night</small>
                  </p>
                </div>

                <div className="absolute bottom-2">
                  <Link
                    to={`/details/${i + 1}`}
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

export default TopHotels;
