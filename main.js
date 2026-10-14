// Example: https://api.open-meteo.com/v1/forecast?latitude=23.8103&longitude=90.4125&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code&timezone=auto

const inputCityName = document.querySelector("#search-city");
const searcIcon = document.querySelector("#search-icon");
const temperature = document.querySelector("#temperature");
const cityBox = document.querySelector("#city-name");
const humadityBox = document.querySelector("#humadity");
const windSpeedBox = document.querySelector("#wind-speed");

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getCity();
    inputCityName.value = "";
  }
});
searcIcon.addEventListener("click", getCity);
window.addEventListener("load", getCity);

async function getCity() {
  let cityName = inputCityName.value;
  if (cityName === "") {
    cityName = "Feni";
  } else {
    cityName = inputCityName.value;
  }
  const cityAPI = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`;

  try {
    const response = await fetch(cityAPI);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const lat = data.results[0].latitude;
      const lon = data.results[0].longitude;
      const name = data.results[0].name;

      getWeather(lat, lon, name);
    } else {
      console.log("No results found");
    }
  } catch (error) {
    console.error("API request has gotten some problem", error);
  }
}

async function getWeather(lat, lon, name) {
  const TempAPI = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&timezone=auto`;

  try {
    const response = await fetch(TempAPI);
    const data = await response.json();
    if (data.current) {
      const temp = Math.round(data.current.temperature_2m);
      const tempUnit = data.current_units.temperature_2m;
      const humadity = Math.round(data.current.relative_humidity_2m);
      const humadityUnit = data.current_units.relative_humidity_2m;
      const windSpeed = Math.round(data.current.wind_speed_10m);
      const windSpeedUnit = data.current_units.wind_speed_10m;

      temperature.innerText = `${temp} ${tempUnit}`;
      cityBox.innerText = name;
      humadityBox.innerText = `${humadity} ${humadityUnit}`;
      windSpeedBox.innerText = `${windSpeed} ${windSpeedUnit}`;
    }
  } catch (error) {
    console.error("API request has gotten some problem", error);
  }
}
