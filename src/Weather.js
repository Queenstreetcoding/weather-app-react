import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast.js";
import axios from "axios";
import "./Weather.css";


export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ loaded: false });
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response){
        console.log(response.data)
        setWeatherData({
            loaded: true,
            coordinates: response.data.coord,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            temperature: response.data.main.temp,
            precipitation: response.data.main.precipitation,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        });

    }

    function search(){
        const apiKey = "97bed167ec49bff56e6c1b63daef9c86";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse)
    }

    function handleSubmit(event){
        event.preventDefault();
        search(city);
    }

    function handleCityChange(event){
        setCity(event.target.value)
    }

    if (weatherData.loaded) {
        return(
            <div className="Weather-forecast">
                <h1>Weather App</h1>
                <div className="row">
                    <div className="col-10">
                    <div className="Weather">
                    <form onSubmit={handleSubmit}>
                        <div class="row">
                            <div class="col-8">
                             <input type="Search" 
                             placeholder="Enter a city" 
                             class="form-control"
                             onChange={handleCityChange}/>
                         </div>
                        <div class="col-4">
                             <input type="Submit" 
                             value="Search" 
                             class="btn btn-outline-light"/>
                          </div>
                        </div>
                    </form>
                    <WeatherInfo data={weatherData}/>  
                    </div>  
                    <WeatherForecast coordinates={weatherData.coordinates}/>
                    </div>  
                    </div>  
        </div>  
        )
    } else {
        search();
    return(
        "Loading..."
    )
}
}