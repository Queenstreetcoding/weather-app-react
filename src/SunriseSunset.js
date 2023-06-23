import React from "react";
import { Sunrise } from "react-bootstrap-icons";
import { Sunset } from "react-bootstrap-icons";

export default function SunriseSunset(props){
    return(
        <div className="SunriseSunset">
                <span class="icon-sunrise"><Sunrise size={40}/></span>
                <span class="time-sunrise">{props.data.sunrise}</span>
                <span class="icon-sunset"><Sunset size={40}/></span>
                <span class="time-sunset">{props.data.sunset}</span>
          </div>
    )
}