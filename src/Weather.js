import React, { useState } from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/{response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." onChange={updateCity} />
      <button type="Submit">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        <div>
          {form}
          <ul>
            <li>Temperature: {Math.round(weather.temp)}°C</li>
            <li>
              Description: <span className="desc">{weather.description}</span>
            </li>
            <li>Wind: {weather.wind}km/h</li>
            <li>Humidity: {weather.humidity}%</li>
          </ul>
        </div>
        <Audio
          height="80"
          width="80"
          radius="9"
          color="yellow"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    );
  } else {
    return form;
  }
}
