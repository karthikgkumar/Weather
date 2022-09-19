/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

// API_KEY for maps api
let API_KEY = "b3234da641824031b0b45740221909";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this:
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {

  let usercity = city;

  fetch(
    `http://api.weatherapi.com/v1/current.json?key=b3234da641824031b0b45740221909&q=${usercity}&aqi=no`
  )
    .then((response) => response.json())
    .then((data) => showWeatherData(data))
    .catch((err) => console.error(err));
  //HINT: Use template literals to create a url with input and an API key

  //CODE GOES HERE
};

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async () => {
  const city = document.getElementById("city-input");
  await getWeatherData(city.value);
  // CODE GOES HERE
};

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  //CODE GOES HERE
  let weather = document.getElementById("weather-type")
  let cityname =document.getElementById('city-name')
  console.log(weather)
  let weatherdata= weatherData.current.condition.text
  let temp = weatherData.current.temp_c
  console.log(temp)
  let temperature = document.getElementById('temp')
  temperature.innerText = temp
  cityname.innerText = weatherData.location.name
  console.log(weatherdata)
  weather.innerText = weatherdata
};
