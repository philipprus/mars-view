import React from "react-router-dom";
import Weather from "../../components/Weather";

const WeatherPage = (props) => {
  return (
    <div className="container">
      <h2>Weather</h2>
      <Weather/>
    </div>
  );
};

export default WeatherPage;
