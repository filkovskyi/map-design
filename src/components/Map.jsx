import React, { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';


const Map = ({ mapStyle, defaultLatitude, defaultLongitude }) => {
  const initialViewportValues = {
    latitude: defaultLatitude,
    longitude: defaultLongitude,
    zoom: 11,
    width: '400px',
    height: '400px',
    labels: false,
  }
  const [viewport, setViewport] = useState(initialViewportValues);

  useEffect(() => {
    setViewport({
      ...initialViewportValues,
      latitude: defaultLatitude,
      longitude: defaultLongitude,
    })
  }, [defaultLatitude, defaultLongitude]);

  return (
    <ReactMapGL
      {...viewport}
      mapStyle={mapStyle}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      onViewportChange={(viewport) => setViewport(viewport)}
    />
  );
};

export default Map;