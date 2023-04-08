import React from "react";
import searchImg from "../../images/search.png";
const About = () => {
  return (
    <div className="h-max w-11/12 lg:w- max-w-screen-2xl mx-auto pt-12">
      <p className="py-4 font-semibold text-2xl">About Us</p>
      <div className="flex lg:flex-row flex-col">
        <div className="w-full lg:w-1/2 md:pr-3 rounded-sm h-96">
          <img src={searchImg} alt="" className="w-full h-full rounded-sm" />
        </div>
        <div className="w-full lg:w-1/2 md:pl-3 rounded-sm mt-4 md:mt-0">
          <p className="mb-1">
            Welcome to Bookify hotel booking website! We provide the best hotel
            booking services in various locations around Bangladesh. Our goal is
            to make your hotel booking experience easy and hassle-free. Our
            website allows you to search for hotels in your desired location by
            entering your check-in and check-out dates and the number of guests.
            You can also filter your search results by facilities, hotel name,
            and more to find the perfect hotel for your needs. We partner with
            top-rated hotels in each location to provide you with the best
            accommodations possible. Our website provides detailed information
            about each hotel, including room types, amenities. So you can make
            an informed decision before booking. Our booking process is simple
            and secure. Once you've found your ideal hotel, you can book your
            stay with just a few clicks.
          </p>
          <p className="mt-1">
            Thank you for choosing our website for your travel needs. We look
            forward to serving you and helping you create unforgettable memories
            on your next trip!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
