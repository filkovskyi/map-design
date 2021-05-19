import React from 'react';
import {
  Radio,
  Space,
  Input,
  Divider
} from 'antd';

const { Search } = Input;

const defaultCityList = [
  {
    value: {
      latitude: 50.4501,
      longitude: 30.5234,
    },
    title: 'Kyiv'
  },
  {
    value: {
      latitude: 52.3676,
      longitude: 4.9041,
    },
    title: 'Amsterdam'
  },
  {
    value: {
      latitude: 41.0082,
      longitude: 28.9784,
    },
    title: 'Istanbul'
  },
  {
    value: {
      latitude: 41.9028,
      longitude: 12.4964,
    },
    title: 'Rome'
  },
  {
    value: {
      latitude: 48.8566,
      longitude: 2.3522,
    },
    title: 'Paris'
  },
]

const SearchPanel = ({
  setDefaultLatitude,
  setDefaultLongitude
}) => {
  const onSearch = value => console.log(value);

  const onChangeHandler = event => {
    setDefaultLatitude(event.target.latitude)
    setDefaultLongitude(event.target.longitude)
  }

  return (
    <>
      <Search
        placeholder="input city"
        style={{ paddingBottom: '10px' }}
        onSearch={onSearch}
        enterButton
      />
      <Radio.Group defaultValue={'Kyiv'} buttonStyle="solid" onChange={onChangeHandler}>
        <Space direction="horizontal" wrap={true}>
          {defaultCityList.map(item =>
            <Radio.Button
              key={item.title}
              value={item.title}
              latitude={item.value.latitude}
              longitude={item.value.longitude}
            >
              {item.title}
            </Radio.Button>)
          }
        </Space>
      </Radio.Group>
      <Divider />
    </>
  );
};

export default SearchPanel;