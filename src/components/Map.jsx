import React, { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';

const Map = ({ mapStyle, defaultLatitude, defaultLongitude, defaultCity }) => {
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
    <div className={'map-box-wrapper'}>
      <ReactMapGL
        {...viewport}
        style={{
          margin: '0 auto'
        }}
        mapStyle={mapStyle}
        //mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapboxApiAccessToken={'pk.eyJ1IjoiaXZhbmRyYWdvIiwiYSI6ImNrZ2Rzdng3dzEwam4yeXFhNmtkM2FlejMifQ.lhT4dTPZIMEBqm6wLQtxaQ'}
        onViewportChange={(viewport) => setViewport(viewport)}
      />
      <div className={'map-box-city'}>
        <p className={'map-box-city-title'}>{defaultCity}</p>
      </div>
    </div>
  );
};

export default Map;