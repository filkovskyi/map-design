import React, { useState } from 'react';
import { Row, Col, Space } from 'antd';
import Map from '../../components/Map'
import SearchPanel from '../../components/SearchPanel'
import ControlPanel from '../../components/ControlPanel'

const defaultMapStyle = `mapbox://styles/mapbox`

const streetsV11 = `streets-v11`

const MapViewer = () => {
  const [mapStyle, setMapStyle] = useState(`${defaultMapStyle}/${streetsV11}`);
  const [defaultLatitude, setDefaultLatitude] = useState(50.4501)
  const [defaultLongitude, setDefaultLongitude] = useState(30.5234)
  const [defaultCity, setDefaultCity] = useState('Kyiv')
  return (
    <>
      <Row gutter={24}>
        <Col xs={24} md={16}>
          <Map
            mapStyle={mapStyle}
            defaultLatitude={defaultLatitude}
            defaultLongitude={defaultLongitude}
            defaultCity={defaultCity}
          />
        </Col>
      </Row>
    </>
  );
};

export default MapViewer;