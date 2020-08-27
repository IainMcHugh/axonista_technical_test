import axios from "axios";

const getUserWeatherData = (lat, lon) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`
    )
    .then((data) => {
      console.log(data);
      return data.data;
    })
    .catch((err) => {
      console.log("Something went wrong:");
      console.log(err);
    });
};

const getInputWeatherData = (inputLocation) => {
  
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputLocation}&appid=${process.env.REACT_APP_API_KEY}`
    )
    .then((data) => {
      try {
        return data.data;
      } catch (error) {
        console.log(error);
      }
    })
    .catch((err) => console.log(err));
};

export { getUserWeatherData, getInputWeatherData };
