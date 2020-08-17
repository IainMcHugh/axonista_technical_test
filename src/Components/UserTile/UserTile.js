import React, { useState, useEffect } from "react";
import { getUserWeatherData } from "../../API";
import { KelvinToDegrees, KelvinToFahrenheit } from "../conversions";

import "../../weather_icons/css/owfont-regular.css";
import "./UserTile.scss";
import SunTrack from "../SunTrack/SunTrack";

const UserTile = (props) => {
  const [userData, setUserData] = useState();

  // watchPosition success
  const success = (position) => {
    let d = new Date();
    console.log("Getting Users Position at:" + d.toUTCString());
    try {
      getUserWeatherData(
        position.coords.latitude,
        position.coords.longitude
      ).then((data) => {
        console.log(data);
        setUserData(data);
        props.temp(data.main.temp);
      });
    } catch (error) {
      console.log(error);
    }
  };

  // watchPosition error
  const error = (err) => {
    console.warn(`Error: ${err.code}, ${err.message}`);
  };

  // watchPosition options
  const options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 60000,
  };

  // get users location on initial Render
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(success, error, options);
    } else {
      console.log("Navigation not enabled by your browser");
    }
  }, []);

  return (
    <div id="userTile-wrapper">
      {userData != null ? (
        <div id="userTile-container">
          <div id="userTile-container_text">
            <h3>{userData.name}</h3>
            {props.unit ? (
              <h2>{KelvinToDegrees(userData.main.temp)}&deg;C</h2>
            ) : (
              <h2>{KelvinToFahrenheit(userData.main.temp)}&deg;F</h2>
            )}
            <h4>{userData.weather[0].description}</h4>
          </div>
          <div id="userTile-container_img">
            <div id="weather-icon">
              <i
                className={"owf owf-" + userData.weather[0].id + " owf-5x"}
              ></i>
            </div>
            <div id="suntrack-holder">
              <SunTrack
                sunrise={userData.sys.sunrise}
                sunset={userData.sys.sunset}
              />
            </div>
          </div>
        </div>
      ) : (
        <h3>Make sure to enable Location Services</h3>
      )}
    </div>
  );
};

export default UserTile;
