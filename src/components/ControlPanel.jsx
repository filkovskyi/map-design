import React, { useState } from 'react';
import { Radio, Input, Space } from 'antd';

const ControlPanel = () => {
  const [style, setStyle] = useState(1)

  return (
    <>
      <Radio.Group onChange={(value) => setStyle(value)} value={style}>
        <Space direction="vertical">
          <Radio value={1}>Option A</Radio>
          <Radio value={2}>Option B</Radio>
          <Radio value={3}>Option C</Radio>
        </Space>
      </Radio.Group>
    </>
  );
};

export default ControlPanel;