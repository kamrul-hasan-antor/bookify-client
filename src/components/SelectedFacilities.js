// import { useState } from "react";

// function SelectedFacilities() {
//   const [businessFacilities, setBusinessFacilities] = useState([]);
//   const [fitnessFacilities, setFitnessFacilities] = useState([]);

//   const handleFacilityChange = (event) => {
//     const { checked, value, name } = event.target;
//     if (checked) {
//       if (name === "business") {
//         setBusinessFacilities([...businessFacilities, value]);
//       } else {
//         setFitnessFacilities([...fitnessFacilities, value]);
//       }
//     } else {
//       if (name === "business") {
//         setBusinessFacilities(
//           businessFacilities.filter((facility) => facility !== value)
//         );
//       } else {
//         setFitnessFacilities(
//           fitnessFacilities.filter((facility) => facility !== value)
//         );
//       }
//     }
//   };

//   console.log(fitnessFacilities);
//   console.log(businessFacilities);
//   return (
//     <div>
//       <h3>Business Facilities</h3>
//       <label>
//         <input
//           type="checkbox"
//           name="business"
//           value="good"
//           onChange={handleFacilityChange}
//         />
//         Good
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           name="business"
//           value="bad"
//           onChange={handleFacilityChange}
//         />
//         Bad
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           name="business"
//           value="best"
//           onChange={handleFacilityChange}
//         />
//         Best
//       </label>

//       <h3>Fitness Facilities</h3>
//       <label>
//         <input
//           type="checkbox"
//           name="fitness"
//           value="gym"
//           onChange={handleFacilityChange}
//         />
//         Gym
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           name="fitness"
//           value="pool"
//           onChange={handleFacilityChange}
//         />
//         Pool
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           name="fitness"
//           value="spa"
//           onChange={handleFacilityChange}
//         />
//         Spa
//       </label>
//     </div>
//   );
// }
// export default SelectedFacilities;

// import React, { useState } from "react";

// function SelectedFacilities() {
//   const [images, setImages] = useState([]);

//   const handleImageUpload = async (event) => {
//     const files = event.target.files;

//     for (const file of files) {
//       const formData = new FormData();
//       formData.append("image", file);

//       const response = await fetch(
//         "https://api.imgbb.com/1/upload?key=5564f8ebfbaba025632123b46ff9f55c",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const data = await response.json();
//       setImages((prevState) => [...prevState, data.data.display_url]);
//     }
//   };

//   return (
//     <div>
//       <input type="file" multiple onChange={handleImageUpload} />
//       {images.map((imageUrl, index) => (
//         <img key={index} src={imageUrl} alt="" />
//       ))}
//     </div>
//   );
// }

// export default SelectedFacilities;

import React, { useState } from "react";

const SelectedFacilities = () => {
  const [selectedHotel, setSelectedHotel] = useState({
    hotelName: "",
    _id: "",
  });

  const hotels = [
    { _id: "6420088d9265ffca2e75b52a", hotelName: "Hotel Sea Pearl" },
    { _id: "64213598335e71d4773d917f", hotelName: "Hotel Sea Crown" },
    { _id: "642136d8335e71d4773d9180", hotelName: "Best Western Heritage" },
  ];

  const handleHotelChange = (e) => {
    const selectedHotelId = e.target.value;
    const selectedHotel = hotels.find((hotel) => hotel._id === selectedHotelId);
    setSelectedHotel(selectedHotel);
  };

  return (
    <div>
      <label htmlFor="hotel-select">Select a Hotel:</label>
      <select
        id="hotel-select"
        value={selectedHotel._id}
        onChange={handleHotelChange}
      >
        <option value="">--Select a hotel-</option>
        {hotels.map((hotel) => (
          <option key={hotel._id} value={hotel._id}>
            {hotel.hotelName}
          </option>
        ))}
      </select>
      <p>Selected Hotel: {selectedHotel.hotelName}</p>
      <p>Selected Hotel ID: {selectedHotel._id}</p>
    </div>
  );
};

export default SelectedFacilities;
