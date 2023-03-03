import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  let tmpCity = "";

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${tmpCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);

    setCity(tmpCity);
    tmpCity = "";
  }

  function updateCity(event) {
    event.preventDefault();
    //setCity(event.target.value);
    tmpCity = event.target.value;
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        className="seach-bar"
        placeholder="Enter a city.."
        onChange={updateCity}
      />
      <button type="Submit">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        <p>Weather Search: {city} </p>
        <div className="weather">
          {form}
          <ul>
            <li>Temperature: {Math.round(weather.temp)}°C</li>
            <li>
              Description: <span className="desc">{weather.description}</span>
            </li>
            <li>Wind: {Math.round(weather.wind)} km/h</li>
            <li>Humidity: {weather.humidity}%</li>
            <li>
              {" "}
              <img src={weather.icon} alt={weather.description} />
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
