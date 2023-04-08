import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);

  const handleDeleteRoom = (id) => {
    const agree = window.confirm("Do you want to delete ?");
    if (agree) {
      fetch(`http://localhost:5000/deleteRoom/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const afterDeleted = rooms.filter((room) => room._id !== id);
            setRooms(afterDeleted);
            alert("room delted succesfully.");
          }
        });
    }
  };

  return (
    <div>
      <div className="pb- pt-1">
        <p className="px-2 md:text-xl font-bold uppercase mb- pb-3 border-b">
          Total {rooms.length} rooms
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
                      <th className="pl-2 pr-4 align-middle whitespace-nowrap uppercase">
                        Room Name
                      </th>
                      <th className="px-4 align-middle  whitespace-nowrap py-4 uppercase">
                        Hotel name
                      </th>
                      <th className="px-4 align-middle  whitespace-nowrap uppercase">
                        Rack rate
                      </th>
                      <th className="px-4 align-middle text-center whitespace-nowrap uppercase">
                        Discount
                      </th>
                      <th className="px-4 align-middle text-center  whitespace-nowrap uppercase">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {rooms.reverse().map((room, i) => {
                      const { hotelName, roomName, rackRate, discount, _id } =
                        room;
                      return (
                        <tr
                          key={i}
                          className={`${
                            i % 2 !== 0 ? "bg-gray-100" : ""
                          } text-left text-xs hover:bg-[#ecf3fe]`}
                        >
                          <th className="pl-2 pr-4 align-middle whitespace-nowrap">
                            {roomName}
                          </th>
                          <td className="px-4 align-middle whitespace-nowrap py-4">
                            {hotelName}
                          </td>
                          <td className="px-4 align-middle whitespace-nowrap">
                            {rackRate}
                          </td>
                          <td className="px-4 align-middle text-center whitespace-nowrap">
                            {discount}
                          </td>

                          <td className="px-4 align-middle whitespace-nowrap flex py-2">
                            <div className="w-1/2 pr-1 ">
                              <Link
                                to={`/admin/editRoom/${_id}`}
                                className="bg-green-400 font-semibold w-full px-4 py-2 block text-center rounded-sm"
                              >
                                Edit
                              </Link>
                            </div>
                            <div className="w-1/2 pl-1">
                              <button
                                onClick={() => handleDeleteRoom(_id)}
                                className="bg-red-400 font-semibold w-full px-4 py-2 block text-center rounded-sm"
                              >
                                Delete
                              </button>
                            </div>
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

export default AllRooms;
