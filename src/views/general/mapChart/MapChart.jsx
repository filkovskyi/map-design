import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Line
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-10m.json";

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoEqualEarth"
      projectionConfig={{
        scale: 3000,
        center: [30, 50]
      }}
    >
      <Graticule stroke="#DDD" />
      <Geographies
        geography={geoUrl}
        fill="#D6D6DA"
        stroke="#FFFFFF"
        strokeWidth={1.4}
      >
        {({ geographies }) =>
          geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
        }
      </Geographies>
      <Line
        class="path"
        coordinates={[[30, 50], [30, 46], [32, 47]]}
        stroke="#FF5533"
        strokeWidth={4}
        strokeLinecap="round"
      />
    </ComposableMap>
  );
};

export default MapChart;
