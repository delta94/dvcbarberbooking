import FormHeader from '@commons/components/FormHeader';
import PageHeader from '@commons/components/PageHeader';
import CityBarberUpdateForm from '@modules/CityBarbers/components/CityBarberForm/update';
import useCityBarber from '@modules/CityBarbers/hooks/useCityBarber';
import React from 'react';
import { useParams } from 'react-router';

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
        <CityBarberUpdateForm item={data} loading={loading} />
      </FormHeader>
    </>
  );
}
