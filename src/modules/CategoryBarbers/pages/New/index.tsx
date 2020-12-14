import FormHeader from '@commons/components/FormHeader';
import PageHeader from '@commons/components/PageHeader';
import { getHistory } from '@helpers/history';
import CategoryBarberForm from '@modules/CategoryBarbers/components/CategoryBarberForm';
import useCreateCategoryBarber from '@modules/CategoryBarbers/hooks/useCreateCategoryBarber';
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
      getHistory().push('/categoryBarber');
    },
  });
};

export default function NewCategoryBarberPage() {
  const { loading, submit } = useCreateCategoryBarber();
  const routes = [
    {
      path: '/',
      breadcrumbName: 'Trang chủ',
    },
    {
      path: '/categorybarber',
      breadcrumbName: 'Quản lý loại sản phẩm',
    },
    {
      path: '/categorybarber/new',
      breadcrumbName: 'Thêm mới loại sản phẩm',
    },
  ];

  const showAddConfirm = (props: any) => {
    confirm({
      title: 'Xác nhận',
      content: 'Bạn có chắc chắn muốn thêm mới Loại sản phẩm này không?',
      okText: 'Xác nhận',
      cancelText: 'Hủy',
      onOk() {
        submit(props);
      },
    });
  };

  return (
    <>
      <PageHeader title="Thêm mới người dùng" breadcrumb={{ routes }} />
      <FormHeader title="Thông tin chung">
        <CategoryBarberForm onCancel={showCancelConfirm} loading={loading} onSave={showAddConfirm} />
      </FormHeader>
    </>
  );
}
