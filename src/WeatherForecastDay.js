import React from "react";

export default function WeatherForecastDay(props){
    function maxTemperature(){
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`
    }

    function minTemperature(){
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`
    }

    function day(){
        let date = new Date(props.data.dt*1000);
        let day = date.getDay();

        let days =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        return days[day];
    }

    return (
    <div>
        <div className="WeatherForecast-day pb-2">{day()}</div>
        <img src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} className="ForecastIcon" alt="icon" />
             <div className="WeatherForecast-temperatures pt-2">
                <span className="WeatherForecast-max">{maxTemperature()}</span>  
                <span className="WeatherForecast-min">{minTemperature()}</span>
         </div>
     </div>
     );
}