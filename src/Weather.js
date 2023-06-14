import React from "react";
import "./Weather.css";

export default function Weather(){
    return(
        <div className="Row">
            <h1>Weather app</h1>
        <div className="Col-10 m-0 p-0">
            <div className="Weather">
                <form>
                    <div classNameName="Row">
                        <div classNameName="Col-8">
                         <input type="Search" placeholder="Enter a city" className="form-control"/>
                     </div>
                    <div className="Col-4">
                         <input type="Submit" value="Search" className="btn btn-outline-light"/>
                      </div>
                    </div>
                </form>
                <h1>Delft, the Netherlands</h1>
                <ul>
                    <li>Friday 14:00</li>
                    <li>Mostly Cloudy</li>
                </ul>
                <div className="Row mt-4">
                    <div className="Col-6">
                        <div className="Clearfix">
                        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny" className="float-left"/>
                        <div className="Float-left">
                        <span className="Degrees">26</span>
                        <span className="Unit">°C</span>
                        <span className="Unit">|</span>
                        <span className="Unit">°F</span>
                        </div>
                        </div>
                    </div>
                    <div className="Col-6">
                        <ul>
                            <li>Precipitation: 24%</li>
                            <li>Humidity: 65%</li>
                            <li>Wind: 3 km/h</li>
                        </ul>
                    </div>
                </div>
    )
}