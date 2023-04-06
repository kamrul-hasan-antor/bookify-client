import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import FilterSearch from "../../components/FilterSearch";
import HotelResult from "../../components/HotelResult";
import SearchHotels from "../../components/SearchHotels";

const AllHotels = () => {
  const allHotels = useLoaderData();
  const search = JSON.parse(sessionStorage.getItem("searchObject"));
  const [showFilter, setShowFilter] = useState(false);
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [accommodationType, setAccommodationType] = useState([]);

  // adding selected facilities into an array.
  const handleFilterByFacility = (facility) => {
    if (selectedFacilities.includes(facility)) {
      setSelectedFacilities((prev) => prev.filter((item) => item !== facility));
    } else {
      setSelectedFacilities([...selectedFacilities, facility]);
    }
  };

  // adding selected acco type into an array.
  const handleFilterByACcType = (type) => {
    if (accommodationType.includes(type)) {
      setAccommodationType((prev) => prev.filter((item) => item !== type));
    } else {
      setAccommodationType([...accommodationType, type]);
    }
  };

  // filter hotel results by selected district
  const hotelResult = allHotels.filter(
    (hotel) => hotel.district === search?.district
  );

  // filter hotel results by search
  const filterByName = searchText
    ? hotelResult.filter((hotel) =>
        hotel.hotelName.toLowerCase().includes(searchText.toLowerCase())
      )
    : hotelResult;

  // filter hotel results by hotels facilities
  const filterByFacility =
    selectedFacilities.length > 0
      ? filterByName.filter((hotel) =>
          hotel.facilities.generalFacilities.some((item) =>
            selectedFacilities.includes(item)
          )
        )
      : filterByName;

  // filter hotel results by accommodation type
  const hotels =
    accommodationType.length > 0
      ? filterByFacility.filter((hotel) =>
          accommodationType.includes(hotel.accomodation.toLowerCase())
        )
      : filterByFacility;

  return (
    <div className="h-max w-11/12 pt-20 lg:w- max-w-screen-2xl mx-auto  lg:static">
      <div className="my-4">
        <SearchHotels />
      </div>
      <div className="flex lg:flex-row flex-col relative">
        <FilterSearch
          showFilter={showFilter}
          setShowFilter={setShowFilter}
          handleFilterByFacility={handleFilterByFacility}
          setSearchText={setSearchText}
          handleFilterByACcType={handleFilterByACcType}
        />
        <div className="lg:w-3/4 lg:pl-3.5">
          <HotelResult
            showFilter={showFilter}
            hotels={hotels}
            setShowFilter={setShowFilter}
          />
        </div>
      </div>
    </div>
  );
};

export default AllHotels;
