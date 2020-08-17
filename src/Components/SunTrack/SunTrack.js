import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import Brightness3Icon from "@material-ui/icons/Brightness5";
import Brightness4Icon from "@material-ui/icons/Brightness4";

import "./SunTrack.scss";

const SunTrack = (props) => {
  const [sunrise, setSunrise] = useState(0);
  const [sunset, setSunset] = useState(0);
  const [currTime, setCurrTime] = useState(0);
  const [fraction, setFraction] = useState(0);

  useEffect(() => {

    let denominator = props.sunset - props.sunrise;
    console.log("Denominator: " + denominator);
    let numerator = props.sunset - Math.floor(Date.now() / 1000);
    console.log("Numerator: " + numerator);
    let frac = (1 - numerator / denominator) * 100;
    setFraction(frac.toPrecision(2));
  }, []);

  return (
    <div id="suntrack-wrapper">
      <div className="suntrack-icons">
        <Brightness3Icon style={{color: "#FFFF00"}}/>
      </div>
      <div id="suntrack-container">
        <CircularProgressbar
          value={fraction}
          text={`${fraction}%`}
          circleRatio={0.5}
          styles={buildStyles({
            trailColor: "#ffff00",
            pathColor: "#ffff00",
            textColor: "#0C1642",
            textSize: "26px",
            rotation: 3 / 4,
            strokeLinecap: "rount",
            trailColor: "#eee",
          })}
        />
      </div>
      <div className="suntrack-icons">
          <Brightness4Icon style={{color: "#ffff00"}}/>
      </div>
      
    </div>
  );
};

export default SunTrack;
