import React, { useState } from "react";
import PropTypes from "prop-types";

const RandomRestaurantButton = ({ min, max, onRestaurantPick }) => {
  const [loading, setLoading] = useState(false);

  const handleButtonClick = async () => {
    try {
      setLoading(true);

      // Replace the API_URL with the actual URL of the restaurant API
      const API_URL = `https://example.com/api/restaurants?min=${min}&max=${max}`;
      const response = await fetch(API_URL);
      const data = await response.json();

      if (data.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.length);
        const selectedRestaurant = data[randomIndex];
        onRestaurantPick(selectedRestaurant);
      } else {
        // Handle the case where no restaurants are found
        console.error("No restaurants found within the specified range.");
      }
    } catch (error) {
      // Handle errors
      console.error("Error fetching restaurant data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleButtonClick} disabled={loading}>
      {loading ? "Fetching..." : "Give me a restaurant!"}
    </button>
  );
};

RandomRestaurantButton.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onRestaurantPick: PropTypes.func.isRequired,
};

export default RandomRestaurantButton;
