import { useState } from "react";
import FilterSearch from "../../components/FilterSearch";
import HotelResult from "../../components/HotelResult";

const AllHotels = () => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="h-max w-full xl:px-4 2xl:px-0 pt-20 lg:pt-24 lg:w- max-w-screen-2xl mx-auto relative lg:static">
      <div className="flex lg:flex-row flex-col">
        <FilterSearch showFilter={showFilter} setShowFilter={setShowFilter} />
        <div className="lg:w-3/4 lg:pl-3.5">
          <HotelResult setShowFilter={setShowFilter} />
        </div>
      </div>
    </div>
  );
};

export default AllHotels;
