import React from "react";

const HotelDetail = () => {
  return (
    <div className="h-[200vh] w-11/12 lg:w-5/6 pt-24 lg:w- max-w-screen-xl mx-auto">
      <div className="flex md:flex-row flex-col mt-10 bg-white p-2 rounded-md">
        <div className="md:w-[55%]">
          <img
            src="https://i.travelapi.com/hotels/33000000/32420000/32415500/32415417/5952e0af_z.jpg"
            alt=""
            className="rounded-md"
          />
        </div>
        <div className="md:w-[45%] md:pl-4">
          <h3 className="md:text-2xl text-lg mt-3 md:mt-0">
            Sea Pearl Beach Resort & Spa
          </h3>
          <small>
            Hotel Regal Palace, Kolatoli, Jhilwanja, Cox's Bazar, Bangladesh
          </small>
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;
