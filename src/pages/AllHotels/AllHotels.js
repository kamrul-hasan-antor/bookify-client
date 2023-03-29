import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import FilterSearch from "../../components/FilterSearch";
import HotelResult from "../../components/HotelResult";
import { SearchContext } from "../../context/SearchProvider";

const AllHotels = () => {
  const hotels = useLoaderData();
  const [showFilter, setShowFilter] = useState(false);

  const { searchResult } = useContext(SearchContext);

  const hotelResult = hotels.filter(
    (hotel) => hotel.district === searchResult.district
  );

  return (
    <div className="h-max w-full xl:px-4 2xl:px-0 pt-20 lg:pt-24 lg:w- max-w-screen-2xl mx-auto relative lg:static">
      <div className="flex lg:flex-row flex-col">
        <FilterSearch showFilter={showFilter} setShowFilter={setShowFilter} />
        <div className="lg:w-3/4 lg:pl-3.5">
          <HotelResult
            hotelResult={hotelResult}
            setShowFilter={setShowFilter}
          />
        </div>
      </div>
    </div>
  );
};

export default AllHotels;
