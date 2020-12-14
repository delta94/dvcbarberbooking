import PageHeader from '@commons/components/PageHeader';
// import { Tabs } from 'antd';
import React from 'react';
import TableTK from '@modules/Statistical/Components/tableTk';
import FormHeader from '@commons/components/FormHeader';

export default function StatisticalPage() {
  const routes = [
    {
      path: '/',
      breadcrumbName: 'Trang chủ',
    },
    {
      path: '/statistical',
      breadcrumbName: 'Thống kê',
    },
  ];
  return (
    <>
      <PageHeader title="Thống kê" breadcrumb={{ routes }} />
      <FormHeader>
        <TableTK />
      </FormHeader>
    </>
  );
}
