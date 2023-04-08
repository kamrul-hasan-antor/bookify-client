import React, { useEffect, useState } from "react";

const AllBookings = () => {
  const [allBookings, setAllBookings] = useState([]);

  useEffect(() => {
    fetch("https://bookify-server.vercel.app/allBooking")
      .then((res) => res.json())
      .then((data) => setAllBookings(data));
  }, []);

  return (
    <div>
      <div className="pb- pt-1">
        <p className="px-2 md:text-xl font-bold uppercase mb- pb-3 border-b">
          Total {allBookings.length} bookings
        </p>
      </div>

      <div className="rounded-sm">
        <section className="bg-blueGray-50">
          <div className="w-full xl:mb-0 mx-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 -z-0">
              <div className="block w-full overflow-x-auto">
                <table className="items-center bg-transparent w-full border-collapse">
                  <thead className="bg-gray-300">
                    <tr className="text-left text-xs">
                      <th className="pl-2 pr-4 align-middle  whitespace-nowrap py-4 uppercase">
                        Hotel name
                      </th>
                      <th className="px-4 align-middle whitespace-nowrap uppercase">
                        Room Name
                      </th>
                      <th className="px-4 align-middle  whitespace-nowrap uppercase">
                        Guest Name
                      </th>
                      <th className="px-4 align-middle  whitespace-nowrap uppercase">
                        User Email
                      </th>
                      <th className="px-4 align-middle  whitespace-nowrap uppercase">
                        Check In
                      </th>
                      <th className="px-4 align-middle whitespace-nowrap uppercase">
                        Check Out
                      </th>
                      <th className="px-4 align-middle text-center whitespace-nowrap uppercase">
                        Nights
                      </th>
                      <th className="px-4 align-middle whitespace-nowrap uppercase">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {allBookings.reverse().map((booking, i) => {
                      return (
                        <tr
                          key={i}
                          className={`${
                            i % 2 !== 0 ? "bg-gray-100" : ""
                          } text-left text-xs hover:bg-[#ecf3fe]`}
                        >
                          <th className="pl-2 pr-4 align-middle whitespace-nowrap py-4">
                            {booking.hotelName}
                          </th>
                          <td className="px-4 align-middle whitespace-nowrap">
                            {booking.roomName}
                          </td>
                          <td className="px-4 align-middle whitespace-nowrap">
                            {booking.guestName}
                          </td>
                          <td className="px-4 align-middle whitespace-nowrap">
                            {booking.userEmail}
                          </td>

                          <td className="px-4 align-middle whitespace-nowrap">
                            {booking.hotelCheckInDate
                              .split("-")
                              .reverse()
                              .join("/")}
                          </td>
                          <td className="px-4 align-middle whitespace-nowrap">
                            {booking.hotelCheckOutDate
                              .split("-")
                              .reverse()
                              .join("/")}
                          </td>
                          <td className="px-4 align-middle text-center text-xs whitespace-nowrap">
                            {booking.nights}
                          </td>
                          <td className="px-4 align-middle text-left text-xs whitespace-nowrap">
                            {booking.total} BDT
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllBookings;
