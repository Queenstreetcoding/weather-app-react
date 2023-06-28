import React from "react";
import { Sunrise } from "react-bootstrap-icons";
import { Sunset } from "react-bootstrap-icons";

export default function SunriseSunset(props) {
  return (
    <div className="SunriseSunset">
      <span class="icon-sunrise">
        <Sunrise size={40} />
      </span>
      <span class="time-sunrise">{props.sunrise.getTime()}</span>
      <span class="icon-sunset">
        <Sunset size={40} />
      </span>
      <span class="time-sunset">{props.sunset.getTime()}</span>
    </div>
  );
}