import React from "react";

export default function WeatherForecastDay(props){
    return (
    <div>
        <div className="WeatherForecast-day">{props.data.dt}</div>
            <div className="WeatherForecast-icon">{props.data.weather[0].icon}</div>
             <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-max">{Math.round(props.data.temp.max)}°</span>  
                <span className="WeatherForecast-min">{Math.round(props.data.temp.min)}°</span>
         </div>
     </div>
     );
}