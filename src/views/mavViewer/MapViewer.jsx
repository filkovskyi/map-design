import React, { useState } from 'react';
import { Row, Col } from 'antd';
import Map from '../../components/Map'
import ControlPanel from '../../components/ControlPanel'

const MapViewer = () => {
  const [mapStyle, setMapStyle] = useState('');

  return (
    <>
      <Row gutter={24}>
        <Col xs={24} md={6}>
          <ControlPanel onChange={setMapStyle} />
        </Col>
        <Col xs={24} md={18}>
          <Map mapStyle={mapStyle} />
        </Col>
      </Row>
    </>
  );
};

export default MapViewer;