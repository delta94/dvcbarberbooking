import FormHeader from '@commons/components/FormHeader';
import PageHeader from '@commons/components/PageHeader';
import { getHistory } from '@helpers/history';
import ProductBarberForm from '@modules/ProductBarbers/components/ProductBarberForm';

import useDetailProductBarber from '@modules/ProductBarbers/hooks/useDetailProductBarber';
import { Modal, Empty } from 'antd';
import React from 'react';
import { useParams } from 'react-router';
import FormSkeleton from '@commons/components/Skeletons/FormSkeleton';
import { getListProduct } from '@helpers/url';

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

export default function DetailProductBarberPage() {
  const params = useParams<{ id: string; idCol: string }>();
  const { loading, data } = useDetailProductBarber(params.id, params.idCol);
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
      path: '/productsBarber/:id/:idCol',
      breadcrumbName: 'Chi tiết sản phẩm',
    },
  ];

  const showAddConfirm = (props: any) => {
    confirm({
      title: 'Xác nhận',
      content: 'Bạn có chắc chắn muốn chỉnh sửa sản phẩm này không?',
      okText: 'Xác nhận',
      cancelText: 'Hủy',
      onOk() {
        // submit(props);
      },
    });
  };

  return (
    <>
      <PageHeader title="Chi tiết sản phẩm" breadcrumb={{ routes }} />
      <FormHeader title="Thông tin chung">
        <FormSkeleton loading={loading}>
          {data ? (
            <ProductBarberForm onCancel={showCancelConfirm} item={data} loading={loading} onSave={showAddConfirm} />
          ) : (
            <Empty description={'Không tìm thấy bản ghi'} />
          )}
        </FormSkeleton>
      </FormHeader>
    </>
  );
}
