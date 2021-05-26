import React, { useState, useEffect } from 'react';
import { Radio } from 'antd';
import ReactMapGL, { Layer } from 'react-map-gl';

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

  const initialLayerStyle = {
    id: 'add-3d-buildings',
    source: 'composite',
    'source-layer': 'building',
    filter: ['==', 'extrude', 'true'],
    type: 'fill-extrusion',
    minzoom: 15,
    paint: {
      'fill-extrusion-color': '#fff',
      'fill-extrusion-height': 10,
      'fill-extrusion-base': 0,
      'fill-extrusion-opacity': 0.9
    }
  };

  const [viewport, setViewport] = useState(initialViewportValues);

  const [layerStyle, setLayerStyle] = useState(initialLayerStyle)


  useEffect(() => {
    setViewport({
      ...initialViewportValues,
      latitude: defaultLatitude,
      longitude: defaultLongitude,
    })
  }, [defaultLatitude, defaultLongitude]);

  const options = [
    { label: '10', value: 10 },
    { label: '20', value: 20 },
    { label: '30', value: 30 },
  ];

  const onChangeHandler = e => {
    const height = e.target.value;
    switch (height) {
      case 10:
        setLayerStyle({
          ...initialLayerStyle,
          paint: {
            'fill-extrusion-color': '#fff',
            'fill-extrusion-height': 10,
            'fill-extrusion-base': 0,
            'fill-extrusion-opacity': 0.9
          }
        })
        break;
      case 20:
        setLayerStyle({
          ...initialLayerStyle,
          paint: {
            'fill-extrusion-color': 'orange',
            'fill-extrusion-height': 20,
            'fill-extrusion-base': 0,
            'fill-extrusion-opacity': 0.9
          }
        })
        break;
      case 30:
        setLayerStyle({
          ...initialLayerStyle,
          paint: {
            'fill-extrusion-color': 'red',
            'fill-extrusion-height': 30,
            'fill-extrusion-base': 0,
            'fill-extrusion-opacity': 0.9
          }
        })
        break;
      default:
        return
    }
  };

  return (
    <div className={'map-box-wrapper'}>
      <Radio.Group
        onChange={onChangeHandler}
        options={options}
        optionType="button"
        buttonStyle="solid"
      />
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