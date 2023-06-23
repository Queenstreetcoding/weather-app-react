import React from "react";
import "./WeatherConditions.css";
import { Umbrella } from "react-bootstrap-icons";
import { Bicycle } from "react-bootstrap-icons";
import { Incognito } from "react-bootstrap-icons";
import { Sun } from "react-bootstrap-icons";

export default function WeatherConditions(props){

    if (props.temperature <= 0){
        <div className="WeatherConditions">
            <div class="umbrella mb-1 pt-4">
                <div><Umbrella size={30}/></div>
                          <div className="pt-2 pb-2">Umbrella</div>
                         <div>🟢 No need</div>
                     </div>
                   <div class="outdoor mb-1 pt-3">
                <div><Bicycle size={30}/></div>
                    <div className="pt-2 pb-2">Outdoor</div>
                        <div>🔴 Nope</div>
                      </div>
                <div class="clothing mb-1 pt-3" >
                         <div><Incognito size={30}/></div>
                            <div className="pt-2 pb-2">Clothing</div>
                            <div>🔴 Warm</div>
                         </div>
                <div class="heatstroke pt-3">
                          <div><Sun size={30}/></div>
                          <div className="pt-2 pb-2">Heat stroke</div>
                          <div>🟢 Safe</div>
                        </div>
                       </div>
    } else {
        if (props.temperature > 0 && props.temperature < 10){
    return(
        <div className="WeatherConditions">
            <div class="umbrella mb-1 pt-4">
                <div><Umbrella size={30}/></div>
                          <div className="pt-2 pb-2">Umbrella</div>
                         <div>🟠 Might need</div>
                     </div>
                   <div class="outdoor mb-1 pt-4">
                <div><Bicycle size={30}/></div>
                    <div className="pt-2 pb-2">Outdoor</div>
                        <div>🟠 Ok</div>
                      </div>
                <div class="clothing mb-1 pt-4" >
                         <div><Incognito size={30}/></div>
                            <div className="pt-2 pb-2">Clothing</div>
                            <div>🟢 Warm</div>
                         </div>
                <div class="heatstroke pt-4">
                          <div><Sun size={30}/></div>
                          <div className="pt-2 pb-2">Heat stroke</div>
                          <div>🟢 Safe</div>
                        </div>
                       </div>

    )}
     else {
        if (props.temperature > 10 && props.temperature< 20){
    return(
        <div className="WeatherConditions">
            <div class="umbrella mb-1 pt-4">
                <div><Umbrella size={30}/></div>
                          <div className="pt-2 pb-2">Umbrella</div>
                         <div>🟠 Might need</div>
                     </div>
                   <div class="outdoor mb-1 pt-4">
                <div><Bicycle size={30}/></div>
                    <div className="pt-2 pb-2">Outdoor</div>
                        <div>🟠 Ok</div>
                      </div>
                <div class="clothing mb-1 pt-4" >
                         <div><Incognito size={30}/></div>
                            <div className="pt-2 pb-2">Clothing</div>
                            <div>🟢 Warm</div>
                         </div>
                <div class="heatstroke pt-4">
                          <div><Sun size={30}/></div>
                          <div className="pt-2 pb-2">Heat stroke</div>
                          <div>🟢 Safe</div>
                        </div>
                       </div>

    )} else {
        if (props.temperature >= 20){
    return(
        <div className="WeatherConditions">
            <div class="umbrella mb-1 pt-4">
                <div><Umbrella size={30}/></div>
                          <div className="pt-2 pb-2">Umbrella</div>
                         <div>🟢 No need</div>
                     </div>
                   <div class="outdoor mb-1 pt-4">
                <div><Bicycle size={30}/></div>
                    <div className="pt-2 pb-2">Outdoor</div>
                        <div>🟢 Fair</div>
                      </div>
                <div class="clothing mb-1 pt-4" >
                         <div><Incognito size={30}/></div>
                            <div className="pt-2 pb-2">Clothing</div>
                            <div>🟢 Light</div>
                         </div>
                <div class="heatstroke pt-4">
                          <div><Sun size={30}/></div>
                          <div className="pt-2 pb-2">Heat stroke</div>
                          <div>🟠 Caution</div>
                        </div>
                       </div>

    )} else {
        return (
            <div className="WeatherConditions">
            <div class="umbrella mb-1 pt-3">
                <div><Umbrella size={30}/></div>
                          <div className="pt-2 pb-2">Umbrella</div>
                     </div>
                   <div class="outdoor mb-1 pt-3">
                <div><Bicycle size={30}/></div>
                    <div className="pt-2 pb-2">Outdoor</div>
                      </div>
                <div class="clothing mb-1 pt-3" >
                         <div><Incognito size={30}/></div>
                            <div className="pt-2 pb-2">Clothing</div>
                         </div>
                <div class="heatstroke pt-3">
                          <div><Sun size={30}/></div>
                          <div className="pt-2 pb-2">Heat stroke</div>
                        </div>
                       </div>
        )
    }
}}}}