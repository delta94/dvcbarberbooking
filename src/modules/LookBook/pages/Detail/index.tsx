import FormHeader from '@commons/components/FormHeader';
import PageHeader from '@commons/components/PageHeader';
import FormSkeleton from '@commons/components/Skeletons/FormSkeleton';
import UserForm from '@modules/User/component/UserForm';
import useUser from '@modules/User/hooks/useUser';
import { Empty, Tabs } from 'antd';
import React from 'react';

import { useParams } from 'react-router';

export default function DetailProductPage() {
  const params = useParams<{ id: string }>();
  const { loading: getDataLoading, data } = useUser(params.id);

  const routes = [
    {
      path: '/',
      breadcrumbName: 'Trang chủ',
    },
    {
      path: '/users',
      breadcrumbName: 'Quản lý người dùng',
    },
    {
      path: '/users/:id',
      breadcrumbName: 'chi tiết người dùng',
    },
  ];

  return (
    <>
      <PageHeader title="Chi tiết sản phẩm" breadcrumb={{ routes }} />
      <FormHeader>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Thông tin người dùng" key="1">
            <FormSkeleton loading={getDataLoading}>
              {data ? (
                <UserForm item={data} loading={getDataLoading} />
              ) : (
                <Empty description={'Không tìm thấy bản ghi'} />
              )}
            </FormSkeleton>
          </Tabs.TabPane>
        </Tabs>
      </FormHeader>
    </>
  );
}
