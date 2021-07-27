import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { ReactMediaRecorder } from "react-media-recorder";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import './GeneralView.css'
import MapChart from "./mapChart/MapChart";
const { Header, Sider, Content } = Layout;
const GeneralView = () => {
  const [collapsed, setCollapsed] = useState(false)
  const toggleVisible = () => setCollapsed(!collapsed);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background">
          {React.createElement(collapsed
            ? MenuUnfoldOutlined
            : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggleVisible,
          })}
        </Header>
        <Content className="site-layout-background">
          <ReactMediaRecorder
            screen={true}
            render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
              <div>
                <p>{status}</p>
                <button onClick={startRecording}>Start Recording</button>
                <button onClick={stopRecording}>Stop Recording</button>
                <video src={mediaBlobUrl} controls autoPlay loop />
              </div>
            )}
          />
          <MapChart />
        </Content>
      </Layout>
    </Layout>
  );
};

export default GeneralView;