import React, { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';

const Map = ({ mapStyle, defaultLatitude, defaultLongitude, defaultCity }) => {
  const initialViewportValues = {
    latitude: defaultLatitude,
    longitude: defaultLongitude,
    zoom: 11,
    width: '100%',
    height: '500px',
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
    <div className={'map-box-wrapper'}>
      <ReactMapGL
        {...viewport}
        style={{
          margin: '0 auto'
        }}
        mapStyle={mapStyle}
        mapboxApiAccessToken={'pk.eyJ1IjoiaXZhbmRyYWdvIiwiYSI6ImNrcG9odnc2eTBscGgzMXA0dTdseHh3Z2oifQ.BcuLTD0qDBvUY1tYyXzDEA'}
        onViewportChange={(viewport) => setViewport(viewport)}
      />
      <div className={'map-box-city'}>
        <p className={'map-box-city-title'}>{defaultCity}</p>
      </div>
    </div>
  );
};

export default Map;