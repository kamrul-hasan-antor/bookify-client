import React, { useEffect, useState } from "react";

const Summary = () => {
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/summary")
      .then((res) => res.json())
      .then((data) => setSummary(data));
  }, []);

  console.log(summary);

  return (
    <div className="h-max w-11/12 lg:w- max-w-screen-2xl mx-auto py-20 ">
      <div className="flex flex-wrap justify-between text-[#1c3c6b]">
        <div className="bg-[#ecf3fe] w-1/5 border-[.5px] rounded-sm flex justify-center">
          <div className="py-10 text-center">
            <p className="text-5xl">{summary.hotels - 1}+</p>
            <p className="text-2xl pt-3 font-semibold">Hotels</p>
          </div>
        </div>
        <div className="bg-[#ecf3fe] w-1/5 border-[.5px] rounded-sm flex justify-center">
          <div className="py-10 text-center">
            <p className="text-5xl">{summary.rooms - 1}+</p>
            <p className="text-2xl pt-3 font-semibold">Rooms</p>
          </div>
        </div>
        <div className="bg-[#ecf3fe] w-1/5 border-[.5px] rounded-sm flex justify-center">
          <div className="py-10 text-center">
            <p className="text-5xl">4+</p>
            <p className="text-2xl pt-3 font-semibold">Reviews</p>
          </div>
        </div>
        <div className="bg-[#ecf3fe] w-1/5 border-[.5px] rounded-sm flex justify-center">
          <div className="py-10 text-center">
            <p className="text-5xl">{summary.bookings - 1}+</p>
            <p className="text-2xl pt-3 font-semibold">Bookings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
