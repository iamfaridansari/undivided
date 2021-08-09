import React, { useEffect, useState } from "react";

const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let api = "994b89dea3910fe2fbb686dd30811146";
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api}&units=metric`;
    let getWeather = async () => {
      try {
        let response = await fetch(url);
        let data = await response.json();
        setCity(data.main);
        console.clear();
      } catch (error) {
        alert(error);
      }
    };
    getWeather();
  }, [search]);

  return (
    <>
    <h5 className="text-center text-white">Weather information application</h5>
    <div
      className="container bg-dark bg-gradient text-white rounded shadow p-2"
      style={{ maxWidth: "500px", height: "auto" }}
    >
      <form>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control"
          placeholder="Eg: Mumbai"
        />
      </form>
      {!city ? (
        <h4 className="text-center mt-2">Enter a city name</h4>
      ) : (
        <ul className="list-group mt-3">
          <li className="list-group-item">
            <b>City: </b>
            {search.toUpperCase()}
          </li>
          <li className="list-group-item">
            <b>Temperature: </b>
            {city.temp}&deg;C
          </li>
          <li className="list-group-item">
            <b>Humidity: </b>
            {city.humidity}%
          </li>
        </ul>
      )}
    </div>
    </>
  );
};

export default Weather;
