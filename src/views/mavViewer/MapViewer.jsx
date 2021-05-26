import React, { useState } from 'react';
import { Row, Col, Space } from 'antd';
import Map from '../../components/Map'
import SearchPanel from '../../components/SearchPanel'
import ControlPanel from '../../components/ControlPanel'

const defaultMapStyle = `mapbox://styles/mapbox`

const streetsV8 = `streets-v8`
const streetsV11 = `streets-v11`
const outdoorsV11 = `outdoors-v11`
const lightV10 = `light-v10`
const darkV10 = `dark-v10`
const satelliteV9 = `satellite-v9`
const satelliteStreetsV11 = `satellite-streets-v11`
const navigationPreviewDayV4 = `navigation-preview-day-v4`
const navigationPreviewNightV4 = `navigation-preview-night-v4`
const navigationGuidanceDayV4 = `navigation-guidance-day-v4`
const navigationGuidanceNightV4 = `navigation-guidance-night-v4`

const navList = [
  {
    value: `${defaultMapStyle}/${streetsV11}`,
    title: 'Simple'
  },
  {
    value: `${defaultMapStyle}/${lightV10}`,
    title: 'Light'
  },
  {
    value: `${defaultMapStyle}/${darkV10}`,
    title: 'Dark'
  },
  {
    value: `${defaultMapStyle}/${outdoorsV11}`,
    title: 'Green'
  },
  {
    value: `${defaultMapStyle}/${satelliteV9}`,
    title: 'Satellite'
  },
  {
    value: `${defaultMapStyle}/${satelliteStreetsV11}`,
    title: 'Earth'
  },
  {
    value: `${defaultMapStyle}/${navigationPreviewDayV4}`,
    title: 'Navy Day'
  },
  {
    value: `${defaultMapStyle}/${navigationPreviewNightV4}`,
    title: 'Navy Night'
  },
  {
    value: `${defaultMapStyle}/${navigationGuidanceDayV4}`,
    title: 'Guidance Day'
  },
  {
    value: `${defaultMapStyle}/${navigationGuidanceNightV4}`,
    title: 'Guidance Night'
  },
]

const MapViewer = () => {
  const [mapStyle, setMapStyle] = useState(`${defaultMapStyle}/${streetsV8}`);
  const [defaultLatitude, setDefaultLatitude] = useState(50.386030)
  const [defaultLongitude, setDefaultLongitude] = useState(30.472110)
  const [defaultCity, setDefaultCity] = useState('Kyiv')
  return (
    <>
      <Row gutter={24}>
        <Col xs={24}>
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