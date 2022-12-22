import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl1 =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/north-america.json";

  const markers = [
    {
      markerOffset: -15,
      name: "United States",
      coordinates: [75.3816, 140.6037]
    },
    { markerOffset: -15, name: "Mexico", coordinates: [77, 156.4897] },
    { markerOffset: 25, name: "Canada", coordinates: [75.5260, 115.2551] },
    { markerOffset: 25, name: "Cuba", coordinates: [100.11361, 157.3666] },
    { markerOffset: -15, name: "Dominican Republic", coordinates: [110.4678, 160.3666] },
    { markerOffset: -15, name: "Greenland", coordinates: [-45.598, 76.88] },
    { markerOffset: -15, name: "Guatemala", coordinates: [89.5759, 164.2637] },
    { markerOffset: 15, name: "Panama", coordinates: [99.5759, 171.2637] },
    { markerOffset: 15, name: "Honduras", coordinates: [92.5759, 165.2637] }

  ];
  

const NorthAmerica = () => {
  return (
    <div>
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [100, -46, 0],
        scale: 400
      }}
    >
      <Geographies geography={geoUrl1}>
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

export default NorthAmerica;
