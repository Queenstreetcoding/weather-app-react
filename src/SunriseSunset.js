import React from "react";
import { Sunrise } from "react-bootstrap-icons";
import { Sunset } from "react-bootstrap-icons";

export default function SunriseSunset(props) {
  
  return (
    <div className="SunriseSunset">
      <span class="icon-sunrise">
        <Sunrise size={32} />
      </span>
      <span class="time-sunrise">{new Date(props.sunrise * 1000).toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute:'2-digit'
  })}</span>
      <span class="icon-sunset">
        <Sunset size={32} />
      </span>
      <span class="time-sunset">{new Date(props.sunset * 1000).toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute:'2-digit'
  })}</span>
    </div>
  );
}