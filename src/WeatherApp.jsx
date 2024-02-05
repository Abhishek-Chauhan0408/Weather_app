import React, { useState } from "react";
import Search from "./Search";
import Infobox from "./Infobox";

const WeatherApp = () => {
  const [weatherInfo, setweatherInfo] = useState({
    
        city: "philipins",
        feelslike: 24,
        temp: 34,
        tempMin: 34.55,
        tempMax: 43.43,
        humidity: 54,
        weather: "haze",
      
  });

  let updateInfo =(newInfo)=>{
    setweatherInfo(newInfo);
  }

  return (
    <div style={{ textAlign: "center", fontFamily: "gilroy" }}>
      <h2>Weather APP</h2>
      <Search updateInfo={updateInfo}/>
      <br />
      <Infobox  info={weatherInfo}/>
    </div>
  );
};

export default WeatherApp;
