import FormHeader from '@commons/components/FormHeader';
import PageHeader from '@commons/components/PageHeader';
import { getHistory } from '@helpers/history';
import { getListProduct } from '@helpers/url';
import ProductBarberForm from '@modules/ProductBarbers/components/ProductBarberForm';
import { Modal } from 'antd';
import React from 'react';

const { confirm } = Modal;

const showCancelConfirm = () => {
  confirm({
    title: 'Xác nhận',
    content: 'Bạn có chắc chắn muốn hủy lưu không?',
    okText: 'Xác nhận',
    cancelText: 'Hủy',
    onOk() {
      getHistory().push(getListProduct());
    },
  });
};

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
        <ProductBarberForm onCancel={showCancelConfirm} />
      </FormHeader>
    </>
  );
}
