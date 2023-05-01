import React from "react";
import img1 from "../../images/about-1.jpg";
import img2 from "../../images/about-2.jpg";
import svg1 from "../../images/svg-1.png";
import svg2 from "../../images/svg-2.png";
const About = () => {
  return (
    <div className="bg-white relative z-20">
      <div className="h-max w-11/12 lg:w- max-w-screen-2xl mx-auto py-16">
        <div className="flex lg:flex-row flex-col lg:items-center">
          <div className="w-full lg:w-1/2 rounded-sm lg:pr-4 h-max">
            <div className="relative aboute_lef">
              <div className="h-full relative pb-16 ">
                <img src={img1} alt="" className="w-2/3 rounded-sm" />
                <div className="absolute w-1/2 pr- object-cover bottom-1 right-1 border-t-[20px] border-l-[20px] border-white rounded-sm">
                  <img src={img2} alt="" className="w-full " />
                </div>
              </div>
              <img className="absolute top-0 -z-10 right-0" src={svg1} alt="" />
              <img
                className="absolute bottom-0 -z-10 left-0"
                src={svg2}
                alt=""
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 md:pl-2 lg:pl-4 rounded-sm mt-8 md:mt-0">
            <h6 className="text-3xl mb-6 flex items-center">
              <p className="mb-2 text-[#1c3c6b]">Get About Us</p>
              <span className="inline-block relative h-0.5 w-10 ml-4"></span>
              <span className="inline-block relative h-0.5 w-2 mx-1"></span>
              <span className="inline-block relative h-0.5 w-2"></span>
            </h6>
            <h3 className="text-xl md:text-3xl">
              We Create Journeys Worth Taking For The Traveler
            </h3>
            <p className="my-4">
              We provide the best hotel booking services in various locations
              around Bangladesh. Our goal is to make your hotel booking
              experience easy and hassle-free. Our website allows you to search
              for hotels in your desired location by entering your check-in and
              check-out dates and the number of guests. You can also filter your
              search results by facilities, hotel name, and more to find the
              perfect hotel for your needs. We partner with top-rated hotels in
              each location to provide you with the best accommodations
              possible. Our website provides detailed information about each
              hotel, including room types, amenities. So you can make an
              informed decision before booking. Once you've found your ideal
              hotel, you can book your stay with just a few clicks.
            </p>
            <a
              href="#header"
              className="bg-[#1c3c6b] text-white py-3 rounded font-semibold px-8 inline-block"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
