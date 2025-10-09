import axios from 'axios'
import { useState } from 'react'


const CountryContent = ({country}) => {
    const [weather, setWeather] = useState(null)
    const imgurl = country.flags.png
    const cityname = country.capital
    const countrycode = country.cca2
    const API_key = import.meta.env.VITE_SOME_KEY
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityname},${countrycode}&limit=1&appid=${API_key}`

    axios.get(url)
    .then((response) => {
        const lat = response.data[0].lat;
        const lon = response.data[0].lon;
        const weatherurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_key}`;
        return axios.get(weatherurl);
    })
    .then((weatherResponse) => {
        setWeather(weatherResponse.data);
    })
    .catch((error) => {
        console.error(error);
    });

    console.log(weather)

    return( <div>
    <h3>{country.name.common}</h3>
    <p>Capital: {country.capital}</p>
    <p>Area: {country.area}</p>
    <h3>Languages</h3>

    <ul>
    {Object.values(country.languages).map((lang, index) => (
        <li key={index}>{lang}</li>
    ))}
    </ul>
    <img src = {imgurl} alt = "Flag not found"/>
    {weather && (
  <> 
  {/* adsjlifjoiasdhgfl */}
    <h3>Weather in {country.capital}</h3>
    <p>Temp {weather.main.temp} Celsius</p>
    <p>{weather.weather[0].main}</p>
    <img 
      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
      alt="Weather icon not found" 
    />
    <p>Wind {weather.wind.speed} m/s</p>
  </>
)}
    </div>)
}

export default CountryContent