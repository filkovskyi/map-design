import React, { useState, useEffect } from 'react';
import { Radio } from 'antd';
import ReactMapGL, { Layer, Source } from 'react-map-gl';
import dataLowest from '../assets/building-level-10-16.geojson'
import dataMiddle from '../assets/building-level-16-19.geojson'
import dataHigher from '../assets/building-level-20-29.geojson'


const Map = ({ mapStyle, defaultLatitude, defaultLongitude, defaultCity }) => {
  const initialViewportValues = {
    latitude: defaultLatitude,
    longitude: defaultLongitude,
    zoom: 16,
    pitch: 45,
    container: 'map',
    antialias: true,
    width: '100%',
    height: '500px',
    labels: false,
  }

  const initialLayerStyle = {
    'id': 'extrusion',
    'type': 'fill-extrusion',
    "source": {
      "type": "geojson",
      "data": {
        "type": "FeatureCollection",
        "features": []
      }
    },
  };

  const [viewport, setViewport] = useState(initialViewportValues);
  const [layerStyle, setLayerStyle] = useState(initialLayerStyle)
  const [layerSource, setLayerSource] = useState(dataLowest)


  useEffect(() => {
    setViewport({
      ...initialViewportValues,
      latitude: defaultLatitude,
      longitude: defaultLongitude,
    })
  }, [defaultLatitude, defaultLongitude]);

  const options = [
    { label: '9-16', value: '9-16' },
    { label: '16-20', value: '16-20' },
    { label: '20-29', value: '20-29' },
  ];

  const onChangeHandler = e => {
    const height = e.target.value;
    switch (height) {
      case '9-16':
        setLayerStyle({
          ...initialLayerStyle,
          paint: {
            'fill-extrusion-color': '#fff',
            'fill-extrusion-height': 9,
            'fill-extrusion-base': 0,
            'fill-extrusion-opacity': 0.9
          }
        })
        setLayerSource(dataLowest)
        break;
      case '16-20':
        setLayerStyle({
          ...initialLayerStyle,
          paint: {
            'fill-extrusion-color': 'orange',
            'fill-extrusion-height': 18,
            'fill-extrusion-base': 0,
            'fill-extrusion-opacity': 0.9
          }
        })
        setLayerSource(dataMiddle)
        break;
      case '20-29':
        setLayerStyle({
          ...initialLayerStyle,
          paint: {
            'fill-extrusion-color': 'red',
            'fill-extrusion-height': 25,
            'fill-extrusion-base': 0,
            'fill-extrusion-opacity': 0.9
          }
        })
        setLayerSource(dataHigher)
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
        <Source type="geojson" data={layerSource}>
          <Layer {...layerStyle} />
        </Source>
      </ReactMapGL>
    </div>
  );
};

export default Map;