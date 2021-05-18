import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 50.4501,
    longitude: 30.5234,
    zoom: 11,
    width: '400px',
    height: '400px',
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      onViewportChange={(viewport) => setViewport(viewport)}
    />
  );
};

export default Map;