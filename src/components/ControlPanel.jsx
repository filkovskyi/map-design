import React, { useState } from 'react';
import {
  Radio,
  Space,
  Row,
  Col,
} from 'antd';

const ControlPanel = ({ mapStyle, setMapStyle, navList }) => {
  const onChangeHandler = event => setMapStyle(event.target.value)

  return (
    <Space>
      <Row gutter={24}>
        <Col xs={24}>
          <Radio.Group defaultValue={mapStyle} buttonStyle="solid" onChange={onChangeHandler}>
            <Space direction="horizontal" wrap={true}>
              {navList.map(item =>
                <Radio.Button key={item.value} value={item.value}>{item.title}</Radio.Button>)
              }
            </Space>
          </Radio.Group>
        </Col>
      </Row>
    </Space>
  );
};

export default ControlPanel;