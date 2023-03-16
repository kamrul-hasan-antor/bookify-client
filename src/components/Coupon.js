import React from "react";

const Coupon = () => {
  return (
    <div className="col-span-2">
      <h4 className="bg-[#ecf3fe] p-4 py-3 text-lg font-semibold rounded-md border border-b-0 rounded-b-none ">
        Coupon Code
      </h4>
      <div className="p-4 flex flex-col lg:flex-row bg-white border border-t-0 rounded-b-md">
        <form
          className="w-full
        "
        >
          <input
            type="text"
            className="outline-none border rounded p-2.5  bg-[#ebf0f4c5] lg:w-5/6 w-2/3"
            placeholder="Have a coupon?"
          />
          <button
            type="submit"
            className="bg-[#2a5699] text-white py-2.5 px-6 ml-2 rounded"
          >
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default Coupon;