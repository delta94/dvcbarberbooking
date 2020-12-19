import PageHeader from '@commons/components/PageHeader';
import TableHeader from '@commons/components/TableHeader';
import { Table, Button } from 'antd';
import React from 'react';
import FilterUser from '@modules/User/containers/FilterUser';
import { PlusOutlined } from '@ant-design/icons';
import { getHistory } from '@helpers/history';
import { getNewUserUrl } from '@helpers/url';
import { ColumnsType } from 'antd/lib/table/Table';
import useUsers from '@modules/User/hooks/useUsers';
import UserRowActions from './RowActions';
import { User } from '@modules/User/redux/action-types';

export default function ListUserPage() {
  const { loading, items } = useUsers();
  const rowKey = (item: any) => `${item.id}`;

  const columns: ColumnsType<User> = [
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'PhoneNumber',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '',
      key: 'action',
      width: 60,
      render: (record: any) => <UserRowActions record={record} />,
    },
  ];

  const routes = [
    {
      path: '/',
      breadcrumbName: 'Trang chủ',
    },
    {
      path: '/users',
      breadcrumbName: 'Quản lý người dùng',
    },
  ];
  const handleAdd = () => {
    getHistory().push(getNewUserUrl());
  };
  return (
    <>
      <PageHeader title="Quản lý người dùng" breadcrumb={{ routes }} />
      <FilterUser />
      <TableHeader
        title="Danh sách người dùng"
        extra={
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
            Thêm mới
          </Button>
        }
      >
        <Table columns={columns} dataSource={[...items]} loading={loading} rowKey={rowKey}></Table>
      </TableHeader>
    </>
  );
}
