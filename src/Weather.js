import React, { useState } from "react";
import FormattedDate from "./FormattedDate.js";
import axios from "axios";
import "./Weather.css";


export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ loaded: false });
    function handleResponse(response){
        console.log(response.data)
        setWeatherData({
            loaded: true,
            city: response.data.main.name,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            temperature: response.data.main.temp,
            precipitation: response.data.main.precipitation,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            icon: response.data.weather[0].icon,
        });

    }

    if (weatherData.loaded) {
        return(
            <div className="Weather-forecast">
                <h1>Weather App</h1>
                <div className="row">
                    <div className="col-10">
                    <div className="Weather">
                    <form>
                        <div class="row">
                            <div class="col-8">
                             <input type="Search" placeholder="Enter a city" class="form-control"/>
                         </div>
                        <div class="col-4">
                             <input type="Submit" value="Search" class="btn btn-outline-light"/>
                          </div>
                        </div>
                    </form>
    
                    <h2>{weatherData.city}</h2>
                    <ul>
                        <li><FormattedDate date={weatherData.date}/></li>
                        <li class="text-capitalize">{weatherData.description}</li>
                    </ul>
                    <div class="row mt-4">
                        <div class="col-6">
                            <div class="clearfix">
                            <img src={weatherData.icon} alt={weatherData.description} class="float-left"/>
                            <div class="float-left">
                            <span class="degrees">{Math.round(weatherData.temperature)}</span>
                            <span class="unit">°C</span>
                            <span class="unit"> | </span>
                            <span class="unit">°F</span>
                            </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <ul>
                                <li>Precipitation: {weatherData.precipitation}%</li>
                                <li>Humidity: {weatherData.humidity}%</li>
                                <li>Wind: {weatherData.wind} km/h</li>
                            </ul>
                    <div className="col-2">
                        
                    </div>
                    </div>
                </div>
            </div>
            <footer>This app is coded by Cindy Verboog and is <a href="https://github.com/Queenstreetcoding/weather-app-react">open-sourced</a> on GitHub</footer>
        </div>    
        </div>  
        </div>  
        )
    } else {

    const apiKey = "b9ba0314a93083136d968577c718e31d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse)

    return(
        "Loading..."
    )
}
}