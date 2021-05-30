import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { AreaChartOutlined } from '@ant-design/icons';
import MapViewer from '../mavViewer/MapViewer'
import './GeneralView.css'

const { Header, Content, Footer, Sider } = Layout;

const GeneralView = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [activeMenuKey, setActiveMenuKey] = useState('all')
  const toggleVisible = () => setCollapsed(!collapsed);
  const menuHandler = ({ key }) => setActiveMenuKey(key)

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={toggleVisible}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={menuHandler}>
          <Menu.Item key="all" icon={<AreaChartOutlined />}>
            Show All
          </Menu.Item>
          <Menu.Item key="9-16" icon={<AreaChartOutlined />}>
            Show 9-16
          </Menu.Item>
          <Menu.Item key="17-20" icon={<AreaChartOutlined />}>
            Show 17-20
          </Menu.Item>
          <Menu.Item key="21-29" icon={<AreaChartOutlined />}>
            Show 21-29
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <MapViewer activeMenuKey={activeMenuKey} />
        </Content>
        <Footer style={{ textAlign: 'center' }}>MapBox Kyiv buildings height Created by Filkovskyi Sergey</Footer>
      </Layout>
    </Layout>
  );
}

export default GeneralView;