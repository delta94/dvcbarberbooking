import PageHeader from '@commons/components/PageHeader';
import React from 'react';

export default function DashboardPage() {
  const routes = [
    {
      path: '/',
      breadcrumbName: 'Trang chủ',
    },
  ];
  return (
    <>
      <PageHeader title="Tổng quan" breadcrumb={{ routes }} />
    </>
  );
}
