const WeatherCard = ({ weather, forecast }) => {
  if (!weather || !weather.main || !weather.weather) {
    return <div>Weather data is not available.</div>;
  }

  return (
    <div className="p-6 bg-white shadow-md rounded-lg mb-6">
      <h2 className="text-2xl font-bold mb-2">{weather.name}</h2>
      <p className="text-lg">Temperature: {weather.main.temp} °C</p>
      <p className="text-lg">Humidity: {weather.main.humidity} %</p>
      <p className="text-lg">Condition: {weather.weather[0].description}</p>
      {forecast && forecast.length > 0 && (
        <>
          <h3 className="text-xl font-bold mt-4">Forecast:</h3>
          {forecast.map((day, index) => (
            <div key={index} className="mt-2">
              <p>
                {new Date(day.dt * 1000).toLocaleDateString()}: {day.temp.day}{" "}
                °C, {day.weather[0].description}
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default WeatherCard;
