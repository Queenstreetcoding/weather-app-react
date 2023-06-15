import React from "react";
import FormattedDate from "./FormattedDate.js";


export default function WeatherInfo (props){
    return (
        <div className="WeatherInfo">

            <h2>{props.data.city}</h2>
            <ul>
             <li><FormattedDate date={props.data.date}/></li>
              <li class="text-capitalize">{props.data.description}</li>
          </ul>
        <div class="row mt-4">
            <div class="col-6">
                <div class="clearfix">
                <img src={props.data.icon} alt={props.data.description} class="float-left"/>
                <div class="float-left">
                <span class="degrees">{Math.round(props.data.temperature)}</span>
                <span class="unit">°C</span>
                <span class="unit"> | </span>
                <span class="unit">°F</span>
                </div>
                </div>
            </div>
            <div class="col-6">
                <ul>
                    <li>Precipitation: {props.data.precipitation}%</li>
                    <li>Humidity: {props.data.humidity}%</li>
                    <li>Wind: {props.data.wind} km/h</li>
                </ul>
        <div className="col-2">
        </div>
        </div>
        </div>
        
<footer>This app is coded by Cindy Verboog and is <a href="https://github.com/Queenstreetcoding/weather-app-react">open-sourced</a> on GitHub</footer>
</div>
    )
}