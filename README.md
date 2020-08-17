An application that periodically gets Weather information based on the User's current location, as well as get Weather information for locations supplied by the User.

## Project Brief
"Using the API​ ​https://openweathermap.org/api​ - create an interface that periodically displays at least the difference between the temperature in the users current location and a city supplied by the user."

#### Key Features:

 - Uses Geolocation to periodically get User's current location.
 - Uses "OpenWeather" API to get weather data based on User's location.
 - Gets weather data from "OpenWeather" API based on User form input
 - Uses Local Storage to cache weather data from previously searched locations. Note: Local Storage data only used if within 5 minutes of initial search.
 - Allows User to toggle between Celsius and Fahrenheit.
 - Tags used to track and close active Weather Cards.
 - "owfont" included to get accurate weather icons based on API response
 - Unit testing for API calls and temperature conversions
 - Circular Progress bar to show percentage between Sunrise and Sunset
 - API Key secured through use of environment variables
 - Added responsiveness across varying browser widths



## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000/`  
 
