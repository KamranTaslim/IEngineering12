import React from "react";
import "./SolarFarm.css";

import "react-multi-carousel/lib/styles.css";
import { solar_farm_data } from "../../../../assets/assets";

function SolarFarm() {
  return (
    <>
      {solar_farm_data.map((data, index) => (
        <div className="" key={index} id={`item-${index}`}>
          <div className="solar_farm_content">
            <ul>
              <li>
                <h2 className="solar_farm_title">{data.title}</h2>
              </li>
              <li>
                <h4 className="solar_farm_voltage">{data.voltage}</h4>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}

export default SolarFarm;
