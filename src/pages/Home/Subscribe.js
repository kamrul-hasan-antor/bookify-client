import React from "react";

const Subscribe = () => {
  return (
    <div className="h-max w-11/12 lg:w- max-w-screen-2xl mx-auto pt-12">
      <div className="relative h-[200px] md:h-36 bg-red-50">
        <div className="bg-[#9dc2ff]  rounded-xl absolute w-full top-0">
          <div className="subscribe py-8 md:py-14">
            <div className="text-center px-6 lg:w-2/3 mx-auto">
              <h3 className="text-2xl md:text-4xl">
                Get Special Offers And More From Travon
              </h3>
              <p className="my-3 text-lg">
                Sign up now and get the best deals straight in your inbox!
              </p>
              <div className="text-center flex md:flex-row flex-col justify-center items-center md:w-2/3 mx-auto">
                <input
                  className="appearance-none w-full block md:w-3/4 border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-[#1c3c6b]"
                  type="email"
                  placeholder="johndoe@gmail.com"
                />
                <button className="bg-[#1c3c6b] text-white py-3 rounded font-semibold mt-3 md:mt-0 w-1/2 md:w-1/3 ml-3">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
