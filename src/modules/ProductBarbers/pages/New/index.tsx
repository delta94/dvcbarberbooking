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
      path: '/productsBarber',
      breadcrumbName: 'Quản lý sản phẩm',
    },
    {
      path: '/productsBarber/new',
      breadcrumbName: 'Thêm mới sản phẩm',
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
