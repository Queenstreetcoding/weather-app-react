import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherTemperature from "./WeatherTemperature.js";



export default function WeatherInfo (props){
    return (
        <div className="WeatherInfo">
        <div className="row">
            <div className="col-6">
            <h2>{props.data.city}</h2>
            <ul>
             <li><FormattedDate date={props.data.date}/></li>
              <li class="text-capitalize">{props.data.description}</li>
          </ul>
          </div>
        <div class="row mt-4">
            <div class="col-7">
                <div class="clearfix">
                <img src={props.data.icon} alt={props.data.description}/>
                <div className="digits">
                    <WeatherTemperature celsius={props.data.temperature}/>
            </div>
            </div>
            </div>
            <div class="col-4">
                <ul className="WeatherDetails ps-3 pt-4">
                    <li>Humidity: {props.data.humidity}%</li>
                    <li>Wind: {props.data.wind} km/h</li>
                </ul>
                </div>
                </div>
        </div>
        </div>
    )
}