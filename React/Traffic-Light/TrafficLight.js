import React, { useEffect, useState } from "react";

const TrafficLight = ({ trafficState }) => {
  const [currentColor, setCurrentColor] = useState("green");

  useEffect(()=> {
  const { duration, next} = trafficState[currentColor];
 const timerId = setTimeout(()=> {
  setCurrentColor(next)
 }, duration);

 return ()=> {
    clearTimeout(timerId)
 }

  },[currentColor])
  return (
    <div className="traffic-light-container">
      {Object.keys(trafficState).map((color) => {
        return (
          <div
            className="traffic-light"
            style={{
              backgroundColor:
                color === currentColor && trafficState[color].backgroundColor,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default TrafficLight;
