import React from "react";

import './App.css'
import TrafficLight from "./TrafficLight";


const trafficState = {
   red:{
      duration: 4000,
      backgroundColor: "red",
      next: "green"
   },

   yellow: {
    duration: 2500,
    backgroundColor: "yellow",
    next: "red"
   },

   green: {
    duration: 5000,
    backgroundColor: "green",
    next: "yellow"


   }
}

function App() {
  return <div className="wrapper">
   <TrafficLight trafficState={trafficState}></TrafficLight>
  </div>;
}

export default App;
