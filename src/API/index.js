import axios from "axios";

const getUserWeatherData = (lat, lon) => {
  return axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`
    )
    .then((data) => {
      console.log(data);
      // return data.data.main.temp;
      return data.data;
      // setUserTemp(data.data.main.temp);
    })
    .catch((err) => {
      console.log("Something went wrong:");
      console.log(err);
    });
};

const getInputWeatherData = (inputLocation) => {
  
  return axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${inputLocation}&appid=${process.env.REACT_APP_API_KEY}`
    )
    .then((data) => {
      try {
        // console.log(data.data.main.temp);
        return data.data;
        // return data.data.main.temp;
        // props.getWeather(data.data.main.temp);
      } catch (error) {
        console.log(error);
      }
    })
    .catch((err) => console.log(err));
};

export { getUserWeatherData, getInputWeatherData };
