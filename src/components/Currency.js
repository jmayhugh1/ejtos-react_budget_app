import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { currency, dispatch } = useContext(AppContext);
  const [currentLocation, setCurrentLocation] = useState(currency);
  const handleOptionChange = (event) => {
    const selectedLocation = event.target.value;
    console.log("the selected location is " + selectedLocation);

    setCurrentLocation(selectedLocation);
    console.log("the current location is " + currentLocation);
  };
  useEffect(() => {
    // This will run after the state has been updated
    console.log("The location was set to " + Location);
    console.log("the loaction is supposed to be " + Location);

    // If you want to dispatch the updated location, you can do it here
    dispatch({
      type: "CHG_CURRENCY",
      payload: currentLocation,
    });
  }, [currentLocation, dispatch, Location]);

  return (
    <div
      style={{
        backgroundColor: "green",
        padding: "10px",
        borderRadius: "8px",
        marginBottom: "10px",
      }}
    >
      <label>Currency:</label>
      <select className=""
        value={currentLocation}
        onChange={handleOptionChange}
      >
        <option value="$">Dollar</option>
        <option value="€">Pound</option>
        <option value="£">Euro </option>
        <option value="₹">Ruppee</option>
      </select>
    </div>
  );
};
export default Currency;
