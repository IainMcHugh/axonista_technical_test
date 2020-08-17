import React from "react";
import SunTrack from "../SunTrack/SunTrack";
import { KelvinToDegrees, KelvinToFahrenheit } from "../conversions";

import "./Card.scss";
import "../../weather_icons/css/owfont-regular.css"

const Card = (props) => {
  const calcTempDifference = () => {
    if (props.unit) {
      const difference = (props.data.main.temp - props.userTemp).toFixed(0);
      if (difference <= 0) {
        return difference;
      } else {
        return "+" + difference;
      }
    } else {
      const difference = (
        KelvinToFahrenheit(props.data.main.temp) -
        KelvinToFahrenheit(props.userTemp)
      ).toFixed(0);
      if (difference <= 0) {
        return difference;
      } else {
        return "+" + difference;
      }
    }
  };

  return (
    <div id="card-wrapper">
      <div id="card-container">
        <div id="card-container_text">
          <h3>{props.data.name}</h3>
          {props.unit ? (
            <h2>
              {KelvinToDegrees(props.data.main.temp)}&deg;C
              <span id={calcTempDifference() <= 0 ? "negative" : "positive"}>
                ({calcTempDifference()}&deg;C)
              </span>
            </h2>
          ) : (
            <h2>
              {KelvinToFahrenheit(props.data.main.temp)}&deg;F
              <span id={calcTempDifference() <= 0 ? "negative" : "positive"}>
                ({calcTempDifference()}&deg;F)
              </span>
            </h2>
          )}
          <h4>{props.data.weather[0].description}</h4>
        </div>
        <div id="card-container_img">
          <div id="weather-icon">
            <i className={"owf owf-" + props.data.weather[0].id + " owf-5x"}></i>
          </div>
          <div id="suntrack-holder">
            <SunTrack
              sunrise={props.data.sys.sunrise}
              sunset={props.data.sys.sunset}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
