import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AddedHotels = () => {
  // const allHotels = useLoaderData();
  const [allHotels, setAllHotels] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/hotels")
      .then((res) => res.json())
      .then((data) => setAllHotels(data));
  }, []);

  const handleDeleteHotel = (id) => {
    const alert = window.confirm(
      "If you delete the hotel, the rooms of the deleted hotel will be removed. Do you want to delete hotel? "
    );

    fetch(`http://localhost:5000/deleteHotel/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.deletedCount > 0) {
          const afterDeleted = allHotels.filter((hotel) => hotel._id !== id);
          setAllHotels(afterDeleted);
          alert("hotel delted succesfully.");
        }
      });
  };

  return (
    <div>
      <div className="pb- pt-1">
        <p className="px-2 md:text-xl font-bold uppercase mb- pb-3 border-b">
          Total {allHotels.length} hotels
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
                        Phone Number
                      </th>
                      <th className="px-4 align-middle  whitespace-nowrap uppercase">
                        Address
                      </th>
                      <th className="px-4 align-middle  whitespace-nowrap uppercase">
                        Location
                      </th>
                      <th className="px-4 align-middle text-center  whitespace-nowrap uppercase">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {allHotels.reverse().map((hotel, i) => {
                      const {
                        hotelName,
                        hotelPhoneNumber,
                        address,
                        district,
                        _id,
                      } = hotel;
                      return (
                        <tr
                          key={i}
                          className={`${
                            i % 2 !== 0 ? "bg-gray-100" : ""
                          } text-left text-xs hover:bg-[#ecf3fe]`}
                        >
                          <th className="pl-2 pr-4 align-middle whitespace-nowrap py-4">
                            {hotelName}
                          </th>
                          <td className="px-4 align-middle whitespace-nowrap">
                            {hotelPhoneNumber}
                          </td>
                          <td className="px-4 align-middle whitespace-nowrap">
                            {address}
                          </td>
                          <td className="px-4 align-middle whitespace-nowrap">
                            {district}
                          </td>
                          <td className="px-4 align-middle whitespace-nowrap flex py-2">
                            <div className="w-1/2 pr-1">
                              <Link
                                to={`/admin/updateHotels/${_id}`}
                                className="bg-green-400 font-semibold w-full px-4 py-2 block text-center rounded-sm"
                              >
                                Edit
                              </Link>
                            </div>
                            <div className="w-1/2 pl-1">
                              <button
                                onClick={() => handleDeleteHotel(_id)}
                                className="bg-red-400 font-semibold w-full px-4 py-2"
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

export default AddedHotels;
