import FormHeader from '@commons/components/FormHeader';
import PageHeader from '@commons/components/PageHeader';
import { getHistory } from '@helpers/history';
import StaffBarberForm from '@modules/StaffBarbers/components/StaffBarberForm/create';
import { Modal } from 'antd';
import React from 'react';
import useCreateStaff from '@modules/StaffBarbers/hooks/useCreateStaff';

const { confirm } = Modal;

const showCancelConfirm = () => {
  confirm({
    title: 'Xác nhận',
    content: 'Bạn có chắc chắn muốn hủy lưu không?',
    okText: 'Xác nhận',
    cancelText: 'Hủy',
    onOk() {
      getHistory().push('/citybarber');
    },
  });
};

export default function NewStaffBarberPage() {
  const { loading, submit } = useCreateStaff();
  const routes = [
    {
      path: '/',
      breadcrumbName: 'Trang chủ',
    },
    {
      path: '/staff',
      breadcrumbName: 'Quản lý loại thành phố',
    },
    {
      path: '/staff/new',
      breadcrumbName: 'Thêm mới thành phố',
    },
  ];

  const showAddConfirm = (props: any) => {
    confirm({
      title: 'Xác nhận',
      content: 'Bạn có chắc chắn muốn thêm mới nhân viên này không?',
      okText: 'Xác nhận',
      cancelText: 'Hủy',
      onOk() {
        submit(props);
      },
    });
  };

  return (
    <>
      <PageHeader title="Thêm mới nhân viên" breadcrumb={{ routes }} />
      <FormHeader title="Thông tin chung">
        <StaffBarberForm onCancel={showCancelConfirm} loading={loading} onSave={showAddConfirm} />
      </FormHeader>
    </>
  );
}
