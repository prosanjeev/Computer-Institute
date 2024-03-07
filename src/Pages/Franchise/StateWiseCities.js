import React, { useState } from "react";
import data from "./data/StateWiseDistrictData";

const StateWiseCities = () => {
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);

  const handleStateChange = (event) => {
    const newState = event.target.value;
    setSelectedState(newState);
    setCities(getCitiesForState(newState));
  };

  const getCitiesForState = (state) => {
    const selectedState = data.states.find((s) => s.name === state);
    return selectedState ? selectedState.cities : [];
  };

  return (
    <div>
      <label htmlFor="state">Select a state:</label>
      <select id="state" onChange={handleStateChange} value={selectedState}>
        <option value="">Select a state</option>
        {data.states.map((state) => (
          <option key={state.name} value={state.name}>
            {state.name}
          </option>
        ))}
      </select>
      <br />
      <label htmlFor="city">Select a city:</label>
      <select id="city" value={cities}>
        <option value="">Select a city</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StateWiseCities;
