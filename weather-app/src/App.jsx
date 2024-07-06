import { useState } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherCard from "./components/WeatherCard";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  const fetchWeather = async (location) => {
    const apiKey = "0a6e364e910ad3d00dcffdafa8f5b363";
    try {
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
      );
      const weatherData = await weatherResponse.json();
      if (weatherResponse.status !== 200) {
        throw new Error(weatherData.message);
      }
      setWeather(weatherData);

      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&units=metric&cnt=5&appid=${apiKey}`
      );
      const forecastData = await forecastResponse.json();
      if (forecastResponse.status !== 200) {
        throw new Error(forecastData.message);
      }
      setForecast(forecastData.list);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Weather App</h1>
      <WeatherForm fetchWeather={fetchWeather} />
      {weather && <WeatherCard weather={weather} forecast={forecast} />}
    </div>
  );
};

export default App;
