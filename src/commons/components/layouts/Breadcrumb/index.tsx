import breadcrumbsRoutes from '@/breadcrumbs';
import { Breadcrumb } from 'antd';
import React from 'react';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

const Breadcrumbs = (props: any) => {
  const breadcrumbs = useBreadcrumbs(breadcrumbsRoutes);
  return (
    <Breadcrumb style={{ margin: '12px 16px 0 16px' }}>
      {breadcrumbs.map(({ breadcrumb }: any, index: number) => {
        return <Breadcrumb.Item key={index}>{breadcrumb}</Breadcrumb.Item>;
      })}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
