import React from "react";
import moment from "moment";
import { Sunrise } from "react-bootstrap-icons";
import { Sunset } from "react-bootstrap-icons";

export default function SunriseSunset(props) {
  return (
    <div className="SunriseSunset">
      <span class="icon-sunrise">
        <Sunrise size={40} />
      </span>
      <span class="time-sunrise">{moment(props.sunrise * 1000).format('HH:mm')}</span>
      <span class="icon-sunset">
        <Sunset size={40} />
      </span>
      <span class="time-sunset">{moment(props.sunset * 1000).format('HH:mm')}</span>
    </div>
  );
}