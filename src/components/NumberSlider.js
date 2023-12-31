import React, { useState } from "react";
import PropTypes from "prop-types";
import "../App.css";

const NumberSlider = ({ min, max }) => {
  const [selectedNumber, setSelectedNumber] = useState(min);

  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setSelectedNumber(value);
  };

  return (
    <div className="number-slider">
      <div className="selected-number">Distance: {selectedNumber} miles</div>
      <input
        type="range"
        id="slider"
        name="slider"
        min={min}
        max={max}
        value={selectedNumber}
        onChange={handleSliderChange}
      />
    </div>
  );
};

NumberSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default NumberSlider;
