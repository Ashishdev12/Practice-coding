import React, { useState } from "react";

const countries = [
  {
    name: "India",
    value: "IN",
    cities: ["Delhi", "Mumbai"],
  },

  {
    name: "Pak",
    value: "PK",
    cities: ["Lahore", "Karachi"],
  },

  {
    name: "America",
    value: "USA",
    cities: ["Chicago", "California"],
  },
];

function TodoList() {
  const [country, setCountry] = useState('');
  return (
    <div>
        {/* 1st drop down */}
      <select
      value={country} 
      onChange={(e) => setCountry([e.target.value])}>

        {countries.map((item, index) => {
          return( 
          <option key={index} value={index}>
              {item.name}
            </option>
          );
        })}
      </select>

      {/* 2nd drop down */}
      <select>
     {
         countries[country]&&countries[country].cities.map((item, index)=> {
            return <option key={index} value={index}>{item}</option>
        })
     }
      </select>
    </div>
  );
}

export default TodoList;
