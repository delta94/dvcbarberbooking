import breadcrumbsRoutes from '@/breadcrumbs';
import {
  // CarOutlined,
  DashboardOutlined,
  // LaptopOutlined,
  // ShopOutlined,
  UnorderedListOutlined,
  UserOutlined,
  ContainerOutlined,
  ScissorOutlined,
  PaperClipOutlined,
  EnvironmentOutlined,
  ForkOutlined,
  ContactsOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

export default function LeftNavigation() {
  const breadcrumbs = useBreadcrumbs(breadcrumbsRoutes);
  const selectedKeys = useMemo(() => {
    let keys = breadcrumbs.length === 1 ? ['dashboard'] : breadcrumbs.map((b) => b.key);
    if (keys[keys.length - 1].endsWith('/')) {
      keys.splice(keys.length - 2, 1);
    }
    return keys;
  }, [breadcrumbs]);

  return (
    <Menu theme="dark" mode="inline" selectedKeys={selectedKeys} defaultOpenKeys={breadcrumbs.map((b) => b.key)}>
      <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
        <Link to="/">Tổng quan</Link>
      </Menu.Item>
      <Menu.Item key="/booking" icon={<ScissorOutlined />}>
        <Link to="/booking">Lịch cắt tóc</Link>
      </Menu.Item>
      <Menu.Item key="/users" icon={<ContactsOutlined />}>
        <Link to="/users">Người dùng</Link>
      </Menu.Item>
      <Menu.Item key="/staff" icon={<UserOutlined />}>
        <Link to="/staff">Nhân viên</Link>
      </Menu.Item>
      <Menu.Item key="/bill" icon={<ContainerOutlined />}>
        <Link to="/bill">Hóa đơn</Link>
      </Menu.Item>
      <Menu.Item key="/statistical" icon={<BarChartOutlined />}>
        <Link to="/statistical">Thống kê</Link>
      </Menu.Item>
      <Menu.Item key="/citybarber" icon={<EnvironmentOutlined />}>
        <Link to="/citybarber">Thành phố</Link>
      </Menu.Item>
      <Menu.Item key="/branchBarber" icon={<ForkOutlined />}>
        <Link to="/branchBarber">Chi nhánh</Link>
      </Menu.Item>
      <Menu.Item key="/categoryBarber" icon={<UnorderedListOutlined />}>
        <Link to="/categoryBarber">Loại sản phẩm</Link>
      </Menu.Item>
      <Menu.Item key="/productsBarber" icon={<PaperClipOutlined />}>
        <Link to="/productsBarber">Sản phẩm</Link>
      </Menu.Item>
    </Menu>
  );
}
