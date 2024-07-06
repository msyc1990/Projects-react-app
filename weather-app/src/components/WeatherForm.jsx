import { useState } from "react";

const WeatherForm = ({ fetchWeather }) => {
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.trim() !== "") {
      fetchWeather(location);
      setLocation("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex mb-4">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter location"
        />
        <button
          type="submit"
          className="p-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Get Weather
        </button>
      </div>
    </form>
  );
};
export default WeatherForm;
