import React, { useState } from "react";
import NumberSlider from "./components/NumberSlider";
import RandomRestaurantButton from "./components/RandomRestaurantButton";
import "./App.css";

function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleRestaurantPick = (restaurant) => {
    setSelectedRestaurant(restaurant);
    console.log(selectedRestaurant);
  };

  return (
    <div>
      <h1>Your App</h1>
      <NumberSlider min={1} max={100} />
      <RandomRestaurantButton
        min={1}
        max={100}
        onRestaurantPick={handleRestaurantPick}
      />
      {selectedRestaurant && (
        <div>
          <h2>Selected Restaurant</h2>
          <p>Name: {selectedRestaurant.name}</p>
          <p>Address: {selectedRestaurant.address}</p>
        </div>
      )}
    </div>
  );
}

export default App;
