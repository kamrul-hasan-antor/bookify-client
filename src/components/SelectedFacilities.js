import { useState } from "react";

function SelectedFacilities() {
  const [selectedFruits, setSelectedFruits] = useState([]);

  const handleFruitChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedFruits([...selectedFruits, value]);
    } else {
      setSelectedFruits(selectedFruits.filter((fruit) => fruit !== value));
    }
  };

  console.log(selectedFruits);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="apple"
          value="apple"
          checked={selectedFruits.includes("apple")}
          onChange={handleFruitChange}
        />
        Apple
      </label>
      <label>
        <input
          type="checkbox"
          name="orange"
          value="orange"
          checked={selectedFruits.includes("orange")}
          onChange={handleFruitChange}
        />
        Orange
      </label>
      <label>
        <input
          type="checkbox"
          name="guava"
          value="guava"
          checked={selectedFruits.includes("guava")}
          onChange={handleFruitChange}
        />
        Guava
      </label>
      <p>Selected fruits: {selectedFruits.join(", ")}</p>
    </div>
  );
}

export default SelectedFacilities;
