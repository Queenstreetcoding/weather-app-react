import React, {useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false)
    let [forecast, setForecast] = useState(null)
    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if(loaded) {
        console.log(forecast);
        return(
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                        <div className="WeatherForecast-day">{forecast[0].dt}</div>
                        <div className="WeatherForecast-icon">{forecast[0].weather[0].icon}</div>
                         <div className="WeatherForecast-temperatures">
                          <span className="WeatherForecast-max">{Math.round(forecast[0].temp.max)}°</span>  
                          <span className="WeatherForecast-min">{Math.round(forecast[0].temp.min)}°</span>
                         </div>
                    </div>
                </div>
            </div>
        
       )} else {
        let apiKey="0ebc654fccbc00189d5408f3d6f15b08"
        let latitude=props.coordinates.lat
        let longitude=props.coordinates.lon
        let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    
        axios.get(apiUrl).then(handleResponse);
    
        return null;
        }
    }