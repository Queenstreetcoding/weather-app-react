import React from "react";
import "./Forecast.css";

export default function Forecast(){
    return(
        <div class="forecast">
        <div class="row">
            <div class="col-2 mt-1 p-0">
                <div class="days pt-4 pb-4">Monday
                    <div><img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny" class="float-left"/></div>
                    <div>24°C | 74 °F</div>
                </div>
            </div>
            <div class="col-2 mt-1 p-0">
                <div class="days pt-4 pb-4">Tuesday
                    <div><img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny" class="float-left"/></div>
                    <div>24°C | 74 °F</div>
                </div>
            </div>
            <div class="col-2 mt-1 ml-1 p-0">
                <div class="days pt-4 pb-4">Wednesday
                    <div><img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny" class="float-left"/></div>
                    <div>24°C | 74 °F</div>
                </div>
            </div>
            <div class="col-2 mt-1 p-0">
                <div class="days pt-4 pb-4">Thursday
                    <div><img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny" class="float-left"/></div>
                    <div>24°C | 74 °F</div>
                </div>
            </div>
            <div class="col-2 mt-1 p-0">
                <div class="days pt-4 pb-4">Friday
                    <div><img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny" class="float-left"/></div>
                    <div>24°C | 74 °F</div>
                </div>
            </div>
        </div>
    </div>

    )
}