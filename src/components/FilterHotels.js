import React, { useState } from "react";

const initialFacilities = [
  {
    name: "gopro",
    facilities: ["apple", "banana", "orange", "pear", "grape"],
  },
  {
    name: "gopromey",
    facilities: ["strawberry", "banana", "orange", "pear"],
  },
];

const query = ["banana", "orange", "pear", "grape", "strawberry", "apple"];

function FilterHotels() {
  const [selectedFacilities, setSelectedFacilities] = useState([]);

  const handleCheckboxChange = (facility) => {
    if (selectedFacilities.includes(facility)) {
      setSelectedFacilities((prev) => prev.filter((item) => item !== facility));
    } else {
      setSelectedFacilities((prev) => [...prev, facility]);
    }
  };

  const filteredFacilities = initialFacilities.filter((f) =>
    f.facilities.some((item) => selectedFacilities.includes(item))
  );

  return (
    <div>
      <h2>Filter facilities based on checkbox selection</h2>
      <div className="flex justify-around">
        <div>
          {query.map((f, i) => (
            <div key={i}>
              <input
                type="checkbox"
                name={f}
                value={f}
                checked={selectedFacilities.includes(f)}
                onChange={() => handleCheckboxChange(f)}
              />
              <label htmlFor={f}>{f}</label>
            </div>
          ))}
        </div>
        <div>
          <h3>Filtered Facilities:</h3>
          {filteredFacilities.map((f) => (
            <div key={f.name}>
              <h4>{f.name}</h4>
              <ul>
                {f.facilities.map((facility, i) => (
                  <li key={i}>
                    {i + 1} {facility}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterHotels;
