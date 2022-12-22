import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl2 =
   "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/south-america.json";

const markers = [
  {
    markerOffset: -15,
    name: "Buenos Aires",
    coordinates: [-58.3816, -34.6037]
  },
  { markerOffset: -15, name: "Bolivia", coordinates: [-68.1193, -16.4897] },
  { markerOffset: 25, name: "Bresil", coordinates: [-47.8825, -15.7942] },
  { markerOffset: 25, name: "Chili", coordinates: [-70.6693, -33.4489] },
  { markerOffset: -10, name: "Colombia", coordinates: [-74.0721, 4.711] },
  { markerOffset: 20, name: "Ecuador", coordinates: [-78.4678, -0.1807] },
  { markerOffset: -15, name: "Gyana", coordinates: [-58.1551, 6.8013] },
  { markerOffset: -15, name: "Paraguay", coordinates: [-57.5759, -25.2637] }
];

const SouthAmerica = () => {
  return (
    <div>
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [64, 23, 0],
        scale: 400
      }}
    >
      
      <Geographies geography={geoUrl2}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#EAEAEC"
              stroke="#D6D6DA"
            />
          ))
        }
      </Geographies> 
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={5} fill="#F00" stroke="#fff" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
    </div>
  )
};

export default SouthAmerica;
