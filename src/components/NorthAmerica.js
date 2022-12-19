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
      name: "Washington",
      coordinates: [75.3816, 140.6037]
    },
    { markerOffset: -15, name: "Mexico City", coordinates: [77, 156.4897] },
    { markerOffset: 25, name: "Ottawa", coordinates: [75.5260, 115.2551] },
    { markerOffset: 25, name: "Havana", coordinates: [100.11361, 157.3666] },
    { markerOffset: -15, name: "Santo Domingo ", coordinates: [110.4678, 160.3666] },
    { markerOffset: -15, name: "Nuuk", coordinates: [-45.598, 76.88] },
    { markerOffset: -15, name: "Guatemala City", coordinates: [89.5759, 164.2637] },
    { markerOffset: 15, name: "Panama City", coordinates: [99.5759, 171.2637] },
    { markerOffset: 15, name: "Tegucigalpa", coordinates: [92.5759, 165.2637] }
    // { markerOffset: 25, name: "San Juan", coordinates: [66.1185, 18.4671] },
    // { markerOffset: -15, name: "San José", coordinates: [121.8853,37.3387] },
    // { markerOffset: -15, name: "Port-au-Prince", coordinates: [-57.5759, -25.2637] },
    // { markerOffset: -15, name: "Kingston", coordinates: [-57.5759, -25.2637] },
    // { markerOffset: -15, name: "San Salvador", coordinates: [-57.5759, -25.2637] },
    // { markerOffset: -15, name: "Managua", coordinates: [-57.5759, -25.2637] },
    // { markerOffset: -15, name: "Nassay", coordinates: [-57.5759, -25.2637] },
    // { markerOffset: -15, name: "Belmopan", coordinates: [-57.5759, -25.2637] },
    // { markerOffset: -15, name: "Cockburn Town", coordinates: [-57.5759, -25.2637] },
    // { markerOffset: -15, name: "Bridgetown", coordinates: [-57.5759, -25.2637] },
    // { markerOffset: -15, name: "George Town", coordinates: [-57.5759, -25.2637] },
    // { markerOffset: -15, name: "Castries", coordinates: [-57.5759, -25.2637] },
    // { markerOffset: -15, name: "Charlotte Amalie", coordinates: [-57.5759, -25.2637] },
    // { markerOffset: -15, name: "Fort-de-France", coordinates: [-57.5759, -25.2637] },
    // { markerOffset: -15, name: "Basse-Terre", coordinates: [-57.5759, -25.2637] },
    // { markerOffset: -15, name: "Saint George's", coordinates: [-57.5759, -25.2637] },
    // { markerOffset: -15, name: "Roseau", coordinates: [-57.5759, -25.2637] },
    // { markerOffset: -15, name: "Basseterre", coordinates: [-57.5759, -25.2637] },
    // { markerOffset: -15, name: "Saint Johns", coordinates: [-57.5759, -25.2637] },
    // { markerOffset: -15, name: "Road Town ", coordinates: [-57.5759, -25.2637] },
    // { markerOffset: -15, name: "Gustavia", coordinates: [-57.5759, -25.2637] },
    // { markerOffset: -15, name: "The Valley", coordinates: [-57.5759, -25.2637] },
    // { markerOffset: -15, name: "Philipsburg", coordinates: [-57.5759, -25.2637] },
    // { markerOffset: -15, name: "Kingstown", coordinates: [-57.5759, -25.2637] },
    // { markerOffset: -15, name: "Saint-Pierre", coordinates: [-57.5759, -25.2637] },
    // { markerOffset: -15, name: "Brades", coordinates: [-57.5759, -25.2637] },
    // { markerOffset: -15, name: "Plymouth", coordinates: [-57.5759, -25.2637] },
    // { markerOffset: -15, name: "Marigot", coordinates: [-57.5759, -25.2637] }
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
