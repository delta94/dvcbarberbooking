import { HomeOutlined } from '@ant-design/icons';
import { setTitle } from '@helpers/dom';
import { PageHeader as AntPageHeader } from 'antd';
import { Route } from 'antd/lib/breadcrumb/Breadcrumb';
import { PageHeaderProps } from 'antd/lib/page-header';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PageHeader(props: PageHeaderProps & { title: string }) {
  useEffect(() => {
    setTitle(props.title);
  }, [props.title]);

  const renderBreadcrumbItem = (route: Route, params: any, routes: Route[], paths: string[]) => {
    if (route.path === '/') {
      return (
        <Link to="/">
          <HomeOutlined /> Trang chủ
        </Link>
      );
    }
    console.log(routes);
    if (routes[routes.length - 1].path === route.path) {
      return route.breadcrumbName;
    }
    return <Link to={route.path}>{route.breadcrumbName}</Link>;
  };

  const routes = props.breadcrumb?.routes || [];

  return <AntPageHeader {...props} breadcrumb={{ routes, itemRender: renderBreadcrumbItem }} className="bg-white" />;
}
