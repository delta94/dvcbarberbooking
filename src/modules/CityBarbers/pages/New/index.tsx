import FormHeader from '@commons/components/FormHeader';
import PageHeader from '@commons/components/PageHeader';
import { getHistory } from '@helpers/history';
import CityBarberForm from '@modules/CityBarbers/components/CityBarberForm/create';
import useCreateCityBarber from '@modules/CityBarbers/hooks/useCreateCityBarber';
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
      getHistory().push('/citybarber');
    },
  });
};

export default function NewCityBarberPage() {
  const { loading, submit } = useCreateCityBarber();
  const routes = [
    {
      path: '/',
      breadcrumbName: 'Trang chủ',
    },
    {
      path: '/citybarber',
      breadcrumbName: 'Quản lý loại thành phố',
    },
    {
      path: '/citybarber/new',
      breadcrumbName: 'Thêm mới thành phố',
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
      <PageHeader title="Thêm mới thành phố" breadcrumb={{ routes }} />
      <FormHeader title="Thông tin chung">
        <CityBarberForm onCancel={showCancelConfirm} loading={loading} onSave={showAddConfirm} />
      </FormHeader>
    </>
  );
}
