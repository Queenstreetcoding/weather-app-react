import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay.js";

export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false)
    let [forecast, setForecast] = useState(null)

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates])

    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }

    function load(){
        let apiKey="97bed167ec49bff56e6c1b63daef9c86"
        let latitude=props.coordinates.lat
        let longitude=props.coordinates.lon
        let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    
        axios.get(apiUrl).then(handleResponse);
    
        return null;
    }

    if(loaded) {
        console.log(forecast);
        return(
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function(dailyForecast, index) {
                    if (index > 0 && index < 6) {
                        return (
                            <div className="col" key={index}>
                        <WeatherForecastDay data={dailyForecast}/>
                    </div>
                        );
                    } else {
                        return null;
                    }
                    })}
                </div>
            </div>
        
       )} else {
        load();    
        }
    }