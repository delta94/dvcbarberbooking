import FormHeader from '@commons/components/FormHeader';
import PageHeader from '@commons/components/PageHeader';
import { getHistory } from '@helpers/history';
import BranchBarberForm from '@modules/BranchBarber/components/BranchBarberForm/update';
import useCreateBranchBarber from '@modules/BranchBarber/hooks/useCreateBranchBarber';
import useDetailBranchBarber from '@modules/BranchBarber/hooks/useDetailBranchBarber';
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
      getHistory().push('/branchBarber');
    },
  });
};

export default function DetailBranchBarberPage() {
  const { submit } = useDetailBranchBarber();
  const routes = [
    {
      path: '/',
      breadcrumbName: 'Trang chủ',
    },
    {
      path: '/Branchbarber',
      breadcrumbName: 'Quản lý loại thành phố',
    },
    {
      path: '/Branchbarber/:id',
      breadcrumbName: 'Thêm mới thành phố',
    },
  ];

  const showAddConfirm = (props: any) => {
    confirm({
      title: 'Xác nhận',
      content: 'Bạn có chắc chắn muốn chỉnh sửa chi nhánh này không?',
      okText: 'Xác nhận',
      cancelText: 'Hủy',
      onOk() {
        // submit(props);
      },
    });
  };

  return (
    <>
      <PageHeader title="Chi tiết chi nhánh" breadcrumb={{ routes }} />
      <FormHeader title="Thông tin chung">
        <BranchBarberForm onCancel={showCancelConfirm} loading onSave={showAddConfirm} />
      </FormHeader>
    </>
  );
}
