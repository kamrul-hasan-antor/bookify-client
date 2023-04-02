import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import FilterSearch from "../../components/FilterSearch";
import HotelResult from "../../components/HotelResult";
import SearchHotels from "../../components/SearchHotels";

const AllHotels = () => {
  const hotels = useLoaderData();
  const [showFilter, setShowFilter] = useState(false);

  const search = JSON.parse(sessionStorage.getItem("searchObject"));

  const hotelResult = hotels.filter(
    (hotel) => hotel.district === search?.district
  );

  return (
    <div className="h-max w-11/12 pt-20 lg:w- max-w-screen-2xl mx-auto  lg:static">
      <div className="my-4">
        <SearchHotels />
      </div>
      <div className="flex lg:flex-row flex-col relative">
        <FilterSearch showFilter={showFilter} setShowFilter={setShowFilter} />
        <div className="lg:w-3/4 lg:pl-3.5">
          <HotelResult
            showFilter={showFilter}
            hotelResult={hotelResult}
            setShowFilter={setShowFilter}
          />
        </div>
      </div>
    </div>
  );
};

export default AllHotels;
