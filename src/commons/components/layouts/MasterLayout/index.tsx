import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import React, { useState } from 'react';
import { renderRoutes } from 'react-router-config';
import LoggedInUser from '../Header/LoggedInUser';
import LeftNavigation from '../Navigation/Left';
import TopNavigation from '../Navigation/Top';
import './style.scss';

const { Header, Sider, Content } = Layout;

const MasterLayout = (props: any) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggle = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <Layout className="master-layout">
      <Layout className="master-header">
        <Sider trigger={null} collapsible collapsed={isCollapsed} theme="dark">
          <div className="logo">
            {/* <img src={barbershop} style={{ width: 50, height: 50 }} alt="logo"></img> */}
            <p style={{ color: 'white', fontSize: 27 }}>DVC barbers</p>
          </div>
        </Sider>
        <Content>
          <Header className="header d-flex justify-content-between pr-3 align-items-center bg-white border-bottom">
            {React.createElement(isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
            <TopNavigation />
            <LoggedInUser />
          </Header>
        </Content>
      </Layout>
      <Layout className="master-content" hasSider={true}>
        <Sider trigger={null} collapsible collapsed={isCollapsed} theme="dark">
          <LeftNavigation />
        </Sider>
        <Layout>
          {/* <Breadcrumbs /> */}
          <Content
            className="master-layout"
            style={{
              // margin: '12px 16px',
              minHeight: 280,
            }}
          >
            {props.children}
            {!!props.route && renderRoutes(props.route.routes)}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default React.memo(MasterLayout);
