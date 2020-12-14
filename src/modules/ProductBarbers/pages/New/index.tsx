import FormHeader from '@commons/components/FormHeader';
import PageHeader from '@commons/components/PageHeader';
import ProductBarberForm from '@modules/ProductBarbers/components/ProductBarberForm';
import React from 'react';

export default function NewProductBarberPage() {
  const routes = [
    {
      path: '/',
      breadcrumbName: 'Trang chủ',
    },
    {
      path: '/productbarber',
      breadcrumbName: 'Quản lý loại sản phẩm',
    },
    {
      path: '/productbarber/new',
      breadcrumbName: 'Thêm mới loại sản phẩm',
    },
  ];

  return (
    <>
      <PageHeader title="Thêm mới sản phẩm" breadcrumb={{ routes }} />
      <FormHeader title="Thông tin chung">
        <ProductBarberForm />
      </FormHeader>
    </>
  );
}
