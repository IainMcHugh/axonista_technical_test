import React, { useState } from "react";
import { getInputWeatherData } from "../../API";

import "./Form.scss";
import { act } from "react-dom/test-utils";

const Form = (props) => {
  const [inputLocation, setinputLocation] = useState("");

  const updateHandler = (e) => {
    // console.log(e.target.value);
    setinputLocation(e.target.value);
  };

  const submitForm = () => {
    document.getElementById("form-input").value = "";
    let isAlreadyActive = false;
    props.activeCities.map((activeCity) => {
      if (inputLocation == activeCity.name) {
        isAlreadyActive = true;
      }
    });
    if (!isAlreadyActive) {
      let isLocal = false;
      // Check local Storage first
      let cityArr = JSON.parse(localStorage.getItem("cities"));
      if (cityArr) {
        for (let i = 0; i < cityArr.length; i++) {
          if (cityArr[i].name == inputLocation) {
            // check timestamp within 5 minutes
            const timestamp = cityArr[i].dt;
            const now = Math.floor(Date.now() / 1000);
            console.log(timestamp);
            console.log(now);
            console.log(now - timestamp);
            if (now - timestamp > 3000) {
              // remove from storage
              console.log("Outdated Local Storage Data");
              break;
            } else {
              console.log("Using Local Storage Data");
              isLocal = true;
              props.getWeather(cityArr[i], isLocal);
              break;
            }
          }
        }
      }

      if (!isLocal) {
        getInputWeatherData(inputLocation).then((data) => {
          // console.log(data);
          props.getWeather(data, isLocal);
        });
      }
    } else {
      console.log("City already in list");
    }
  };

  return (
    <div id="form-wrapper">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitForm();
        }}
      >
        <label htmlFor="city">Enter a City</label>
        <input
          type="text"
          id="form-input"
          name="city"
          placeholder="..."
          onChange={updateHandler}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Form;
