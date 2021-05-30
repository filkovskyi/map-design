import React, { useState } from 'react';
import { Row, Col } from 'antd';
import Map from '../../components/Map'

const MapViewer = (activeMenuKey) => {
  const [defaultLatitude, setDefaultLatitude] = useState(50.386030)
  const [defaultLongitude, setDefaultLongitude] = useState(30.472110)

  return (
    <Row gutter={24}>
      <Col xs={24}>
        <Map
          mapStyle={'mapbox://styles/mapbox/streets-v8'}
          defaultLatitude={defaultLatitude}
          defaultLongitude={defaultLongitude}
          activeMenuKey={activeMenuKey}
        />
      </Col>
    </Row>
  );
};

export default MapViewer;