import React from "react";
import "./Weather.css";

export default function Weather(){
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

                <h2>Delft, the Netherlands</h2>
                <ul>
                    <li>Friday 14:00</li>
                    <li>Mostly Cloudy</li>
                </ul>
                <div class="row mt-4">
                    <div class="col-6">
                        <div class="clearfix">
                        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny" class="float-left"/>
                        <div class="float-left">
                        <span class="degrees">26</span>
                        <span class="unit">°C</span>
                        <span class="unit">|</span>
                        <span class="unit">°F</span>
                        </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <ul>
                            <li>Precipitation: 24%</li>
                            <li>Humidity: 65%</li>
                            <li>Wind: 3 km/h</li>
                        </ul>
                <div className="col-2">

                </div>
                </div>
            </div>
        </div>
        <footer>This app is coded by Cindy Verboog and is <a>open-sourced on GitHub</a></footer>

    </div>    
    </div>  
    </div>  
    )
}