import React, { useState } from "react";

export default function City(props) {
  let [temperature, setTemperature] = useState(props.temperature);

  function fahrenheiht(event) {
    event.preventDefault();
    let fahrenheihtTemperature = Math.round(props.temperature * (9 / 5) + 32);
    setTemperature(fahrenheihtTemperature);
  }
  function celsius(event) {
    event.preventDefault();
    setTemperature(props.temperature);
  }
  return (
    <div class="City">
      It is {temperature}{" "}
      <a href="#" onClick={celsius}>
        °C
      </a>{" "}
      |
      <a href="#" onClick={fahrenheiht}>
        °F
      </a>{" "}
      in {props.name}
    </div>
  );
}
