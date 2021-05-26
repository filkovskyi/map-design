import React, { useState, useEffect } from 'react';
import ReactMapGL, { Source, Layer } from 'react-map-gl';

const Map = ({ mapStyle, defaultLatitude, defaultLongitude, defaultCity }) => {
  const initialViewportValues = {
    latitude: defaultLatitude,
    longitude: defaultLongitude,
    zoom: 16,
    pitch: 45,
    bearing: -17.6,
    container: 'map',
    antialias: true,
    width: '100%',
    height: '500px',
    labels: false,
  }

  const [viewport, setViewport] = useState(initialViewportValues);

  const layerStyle = {
    id: 'add-3d-buildings',
    source: 'composite',
    'source-layer': 'building',
    filter: ['==', 'extrude', 'true'],
    type: 'fill-extrusion',
    minzoom: 15,
    paint: {
      'fill-extrusion-color': '#aaa',
      'fill-extrusion-height': [
        'interpolate',
        ['linear'],
        ['zoom'],
        15,
        0,
        15.05,
        ['get', 'height']
      ],
      'fill-extrusion-base': [
        'interpolate',
        ['linear'],
        ['zoom'],
        15,
        0,
        15.05,
        ['get', 'min_height']
      ],
      'fill-extrusion-opacity': 0.6
    }
  };

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
        mapboxApiAccessToken={'pk.eyJ1IjoiaXZhbmRyYWdvIiwiYSI6ImNrZ2Rzdng3dzEwam4yeXFhNmtkM2FlejMifQ.lhT4dTPZIMEBqm6wLQtxaQ'}
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        <Layer {...layerStyle} />
      </ReactMapGL>
    </div>
  );
};

export default Map;