import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./Infobox.css";

const Infobox = ({ info }) => {
  const INIT_URL =
    "https://i.pinimg.com/236x/c3/09/bf/c309bf075697e0c7bebb3849915b0e57.jpg";

  const HOT_URL =
    "https://i.pinimg.com/236x/15/5b/16/155b16cc57875ee6cb53bec0d4952f15.jpg";
  const COLD_URL =
    "https://i.pinimg.com/236x/94/1a/14/941a14daa4fa4587d0a8243cba98c522.jpg";
  const RAIN_URL =
    "https://i.pinimg.com/236x/7b/bb/24/7bbb249e223bbbccec1f948cc2d3ce96.jpg";

  return (
    <div className="infobox">
      <div className="cardContainer mt-3">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 100
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{
                 info.humidity > 100
                 ? <ThunderstormIcon/>
                 : info.temp > 15
                 ?  <WbSunnyIcon />
                 :  <AcUnitIcon />
              }
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}</p>
              <p>Max Temo = {info.tempMax}</p>
              <p>
                The Weather can be described as <i>{info.weather}</i> and Feels
                Like {info.feelslike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Infobox;
