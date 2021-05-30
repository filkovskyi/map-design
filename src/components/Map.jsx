import React, { useState, useEffect } from 'react';
import ReactMapGL, { Layer, Source } from 'react-map-gl';
import dataAll from '../assets/building-level-all.geojson'
import dataLowest from '../assets/building-level-9-16.geojson'
import dataMiddle from '../assets/building-level-17-20.geojson'
import dataHigher from '../assets/building-level-21-29.geojson'

const Map = ({ mapStyle, defaultLatitude, defaultLongitude, activeMenuKey }) => {
  const initialViewportValues = {
    latitude: defaultLatitude,
    longitude: defaultLongitude,
    zoom: 14,
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
    'source': {
      "type": "geojson",
      "data": {
        "type": "FeatureCollection",
        "features": []
      },
    },
    'paint': {
      'fill-extrusion-color': '#fff',
      'fill-extrusion-height': 20,
      'fill-extrusion-opacity': 0.9
    }
  };

  const [viewport, setViewport] = useState(initialViewportValues);
  const [layerStyle, setLayerStyle] = useState(initialLayerStyle)
  const [layerSource, setLayerSource] = useState(dataAll)

  useEffect(() => {
    setViewport({
      ...initialViewportValues,
      latitude: defaultLatitude,
      longitude: defaultLongitude,
    })
  }, [defaultLatitude, defaultLongitude]);


  useEffect(() => {
    onBuildingHeightChange(activeMenuKey)
  }, [activeMenuKey]);

  const onBuildingHeightChange = ({ activeMenuKey }) => {
    switch (activeMenuKey) {
      case 'all':
        setLayerStyle(initialLayerStyle)
        setLayerSource(dataAll)
        break;
      case '9-16':
        setLayerStyle({
          ...initialLayerStyle,
          paint: {
            'fill-extrusion-color': 'yellow',
            // set height in meeters for average building level (13 level, level height = 3.5m) in range from 9 to 16
            'fill-extrusion-height': 45.5,
          }
        })
        setLayerSource(dataLowest)
        break;
      case '17-20':
        setLayerStyle({
          ...initialLayerStyle,
          paint: {
            'fill-extrusion-color': 'orange',
            // set height in meeters for average building level (18 level, level height = 3.5m) in range from 16 to 20
            'fill-extrusion-height': 63,
          }
        })
        setLayerSource(dataMiddle)
        break;
      case '21-29':
        setLayerStyle({
          ...initialLayerStyle,
          paint: {
            'fill-extrusion-color': 'red',
            // set height in meeters for average building level (25 level, level height = 3.5m) in range from 20 to 29
            'fill-extrusion-height': 87.5,
          }
        })
        setLayerSource(dataHigher)
        break;
      default:
        setLayerStyle(initialLayerStyle)
        setLayerSource(dataAll)
    }
  };

  return (
    <div className={'map-box-wrapper'}>
      <ReactMapGL
        {...viewport}
        style={{
          margin: '0 auto'
        }}
        mapStyle={mapStyle}
        //better to use environment variable to store mapboxApiAccessToken
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