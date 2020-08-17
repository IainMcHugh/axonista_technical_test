import React, { useState, useEffect } from "react";
import Form from "../Form/Form";
import UserTile from "../UserTile/UserTile";
import Card from "../Card/Card";
import Tags from "../Tags/Tags";

import "./Home.scss";

const Home = (props) => {
  const [userTemp, setUserTemp] = useState(0);
  const [cities, setCities] = useState([]);
  
  const formCallback = (data, isLocal) => {
    // console.log(data);
    setCities((cities) => [...cities, data]);
    console.log(cities);
    // check if already exists in local storage
    if(!isLocal){
      let cityArr = cities;
      cityArr.push(data);
      localStorage.setItem("cities", JSON.stringify(cityArr));
    }
  };

  const tagCloseCallback = (cityIndex) => {
    let currCities = [...cities];
    console.log(cityIndex);
    currCities.splice(cityIndex, 1);
    setCities(currCities);
    
  }

  useEffect(() => {
    console.log(cities);
  }, [cities]);

  return (
    <div id="home-wrapper">
      <Form getWeather={formCallback} activeCities={cities}/>
      <div id="tags-wrapper">
      {cities.map((city, i) => (
        <Tags key={i} index={i} data={city.name} close={tagCloseCallback}/>
      ))}
      </div>
      <UserTile unit={props.unit} temp={(temp)=>setUserTemp(temp)}/>
      {cities.map((city, i) => (
        <Card key={i} unit={props.unit} data={city} userTemp={userTemp}/>
      ))}
    </div>
  );
};

export default Home;
