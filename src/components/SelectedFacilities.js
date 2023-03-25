import { useState } from "react";

function SelectedFacilities() {
  const [businessFacilities, setBusinessFacilities] = useState([]);
  const [fitnessFacilities, setFitnessFacilities] = useState([]);

  const handleFacilityChange = (event) => {
    const { checked, value, name } = event.target;
    if (checked) {
      if (name === "business") {
        setBusinessFacilities([...businessFacilities, value]);
      } else {
        setFitnessFacilities([...fitnessFacilities, value]);
      }
    } else {
      if (name === "business") {
        setBusinessFacilities(
          businessFacilities.filter((facility) => facility !== value)
        );
      } else {
        setFitnessFacilities(
          fitnessFacilities.filter((facility) => facility !== value)
        );
      }
    }
  };

  console.log(fitnessFacilities);
  console.log(businessFacilities);
  return (
    <div>
      <h3>Business Facilities</h3>
      <label>
        <input
          type="checkbox"
          name="business"
          value="good"
          onChange={handleFacilityChange}
        />
        Good
      </label>
      <label>
        <input
          type="checkbox"
          name="business"
          value="bad"
          onChange={handleFacilityChange}
        />
        Bad
      </label>
      <label>
        <input
          type="checkbox"
          name="business"
          value="best"
          onChange={handleFacilityChange}
        />
        Best
      </label>

      <h3>Fitness Facilities</h3>
      <label>
        <input
          type="checkbox"
          name="fitness"
          value="gym"
          onChange={handleFacilityChange}
        />
        Gym
      </label>
      <label>
        <input
          type="checkbox"
          name="fitness"
          value="pool"
          onChange={handleFacilityChange}
        />
        Pool
      </label>
      <label>
        <input
          type="checkbox"
          name="fitness"
          value="spa"
          onChange={handleFacilityChange}
        />
        Spa
      </label>
    </div>
  );
}
export default SelectedFacilities;
