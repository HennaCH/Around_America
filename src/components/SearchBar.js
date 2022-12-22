import { useCallback, useEffect, useState } from "react";
import React from "react";

// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   Marker
// } from "react-simple-maps";

// const geoUrl1 =
//   "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/north-america.json";

//   const markers = [
//     {
//       markerOffset: -15,
//       name: "United States",
//       coordinates: [75.3816, 140.6037]
//     },
//     { markerOffset: -15, name: "Mexico", coordinates: [77, 156.4897] },
//     { markerOffset: 25, name: "Canada", coordinates: [75.5260, 115.2551] },
//     { markerOffset: 25, name: "Havana", coordinates: [100.11361, 157.3666] },
//     { markerOffset: -15, name: "Santo Domingo ", coordinates: [110.4678, 160.3666] },
//     { markerOffset: -15, name: "Nuuk", coordinates: [-45.598, 76.88] },
//     { markerOffset: -15, name: "Guatemala City", coordinates: [89.5759, 164.2637] },
//     { markerOffset: 15, name: "Panama City", coordinates: [99.5759, 171.2637] },
//     { markerOffset: 15, name: "Tegucigalpa", coordinates: [92.5759, 165.2637] }

//   ];
  

// const NorthAmerica = () => {
//   return (
//     <div>
//     <ComposableMap
//       projection="geoAzimuthalEqualArea"
//       projectionConfig={{
//         rotate: [100, -46, 0],
//         scale: 400
//       }}
//     >
//       <Geographies geography={geoUrl1}>
//         {({ geographies }) =>
//           geographies.map((geo) => (
//             <Geography
//               key={geo.rsmKey}
//               geography={geo}
//               fill="#EAEAEC"
//               stroke="#D6D6DA"
//             />
//           ))
//         }
//       </Geographies>

//       {markers.map(({ name, coordinates, markerOffset }) => (
//         <Marker key={name} coordinates={coordinates}>
//           <circle name="circle" r={5} fill="#F00" stroke="#fff" strokeWidth={2} />
//           <text
//             textAnchor="middle"
//             y={markerOffset}
//             style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
//           >
//             {name}
//           </text>
//         </Marker>
//       ))}
//     </ComposableMap>
//     </div>
//   )
// };


function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const capitals = [

    { name: "Bolivia", capital: "La Paz", continent: "South America" },
    { name: "Bresil", capital:"Brasilia", continent: "South America" },
    { name: "Chili", capital:"Santiago", continent: "South America" },
    { name: "Colombie", capital:"Bogota", continent: "South America" },
    { name: "Ecuador", capital:"Quito", continent: "South America" },
    { name: "Guyana", capital:"Georgetown", continent: "South America" },
    { name: "Paraguaw", capital:"Asuncion", continent: "South America" },

    { name: "Greenland", capital:"Nuuk", continent: "North America" },
    { name: "United States", capital:"Washington", continent: "North America" },
    { name: "Canada", capital:"Ottawa", continent: "South America" },
    { name: "Guatemala", capital:"Guatemala City", continent: "North America" },
    { name: "Mexico", capital:"Mexico City", continent: "North America" },
    { name: "Honduras", capital:"Tegucigalpa", continent: "North America" },
    { name: "Panama", capital:"Panama City", continent: "North America" },
    { name: "Cuba", capital:"Havana", continent: "North America" },
    { name: "Dominican Republic", capital:"Santo Domingo", continent: "North America" }
  ];
  
  return  <div>
    <p><b>Find the capital of a country !</b></p>
  <input
     type="search"
     placeholder="Search a country..."
     onChange={(e) => {setSearchInput(e.target.value)}}
     value={searchInput} />
  

      <p><b className='capitalFont'>Capital</b></p>
  
  {capitals.filter((country) => {
    if(searchInput == "")
    {
        return ;
    }
    else if(country.name.toLowerCase().includes(searchInput.toLowerCase()))
    {
        // {markers.filter((country2) => {
        //     if(searchInput == country2.name){
        //         window.confirm("are you ok")
        //     }})}
        return country;
    } 
    }).map((capital) => 
     {
        return(
          <p> {capital.capital}</p>
        );
     }
     )
   }
  </div>
  }
  export default SearchBar;

  