import FormHeader from '@commons/components/FormHeader';
import PageHeader from '@commons/components/PageHeader';
import FormSkeleton from '@commons/components/Skeletons/FormSkeleton';
import { getHistory } from '@helpers/history';
import CityBarberUpdateForm from '@modules/CityBarbers/components/CityBarberForm/update';
import useCityBarber from '@modules/CityBarbers/hooks/useCityBarber';
import { Modal } from 'antd';
import React from 'react';
import { useParams } from 'react-router';

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

export default function DetailsCityBarberPage() {
  const params = useParams<{ id: string }>();
  const { loading, data } = useCityBarber(params.id);
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
      path: '/citybarber/:id',
      breadcrumbName: 'Thông tin thành phố',
    },
  ];

  return (
    <>
      <PageHeader title="Chi tiết thành phố" breadcrumb={{ routes }} />
      <FormHeader title="Thông tin chung">
        <FormSkeleton loading={loading}>
          <CityBarberUpdateForm item={data} onCancel={showCancelConfirm} loading={loading} />
        </FormSkeleton>
      </FormHeader>
    </>
  );
}
