import FormHeader from '@commons/components/FormHeader';
import PageHeader from '@commons/components/PageHeader';
import { getHistory } from '@helpers/history';
import { getListUserUrl } from '@helpers/url';
import UserForm from '@modules/User/component/UserForm';
import useCreateUser from '@modules/User/hooks/useCreateUser';
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
      getHistory().push(getListUserUrl());
    },
  });
};

export default function NewUserPage() {
  const { loading, submit } = useCreateUser();
  const routes = [
    {
      path: '/',
      breadcrumbName: 'Trang chủ',
    },
    {
      path: '/users',
      breadcrumbName: 'Quản lý nhà cung cấp',
    },
    {
      path: '/users/new',
      breadcrumbName: 'Thêm mới',
    },
  ];

  const showAddConfirm = (props: any) => {
    confirm({
      title: 'Xác nhận',
      content: 'Bạn có chắc chắn muốn thêm mới Người dùng này không?',
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
        <UserForm loading={loading} onSave={showAddConfirm} onCancel={showCancelConfirm} />
      </FormHeader>
    </>
  );
}
