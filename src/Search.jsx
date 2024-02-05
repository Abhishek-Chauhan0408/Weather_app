import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import "./Search.css";

const Search = ({updateInfo}) => {
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY='f15ac480f641c779638e45dd2855ab1d'
    const [errorr, seterrorr] = useState(false)
    let getWeatherInfo=async()=>{
        try{
            let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let jsonResponse=await response.json();
            console.log(jsonResponse);
            let result={
              city:city,
              temp:jsonResponse.main.temp, 
              tempMin:jsonResponse.main.temp_min,
              tempMax:jsonResponse.main.temp_max,
              humidity:jsonResponse.main.humidity,
              feelsLike:jsonResponse.main.feels_like,
              weather:jsonResponse.weather[0].description,
            }
            console.log(result);
            console.log(response);
            
            return result;
        }
        catch(err){
           throw(err);
        }
    };

  const [city, setcity] = useState("");
  
  let handleChange = (e) => {
    setcity(e.target.value);
  };

  let handleSumbit=async (e)=>{
    try{

        e.preventDefault();
        console.log(city);
        setcity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
    }catch(err){
        seterrorr(true);
    }
        
  }

  return (
    <div className="searchbox">
       
      <form onSubmit={handleSumbit}>
        <TextField
          value={city}
           id="city"
          label="City name"
          variant="outlined"
          required
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        
        {
          errorr && <p style={{color:"red"}}>No Such Place Exists!</p>
        }
        </form>
    </div>
  );
};

export default Search;
