import PageHeader from '@commons/components/PageHeader';
import TableHeader from '@commons/components/TableHeader';
import { Switch, Table } from 'antd';
import React from 'react';
import FilterUser from '@modules/User/containers/FilterUser';
import { ColumnsType } from 'antd/lib/table/Table';
import useUsers from '@modules/User/hooks/useUsers';
import UserRowActions from './RowActions';
import { User } from '@modules/User/redux/action-types';
import useUpdateUser from '@modules/User/hooks/useUpdateUser';

export default function ListUserPage() {
  const { loading, items } = useUsers();
  const rowKey = (item: any) => `${item.id}`;
  const { submit } = useUpdateUser();

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
      title: 'Trạng thái hoạt động',
      key: 'status',
      render: (record: User) => (
        <Switch
          defaultChecked={record.status === true ? true : false}
          onChange={(text: any) => {
            submit({
              id: record.id,
              name: record.name,
              status: text,
              address: record.address,
              phoneNumber: record.phoneNumber,
            });
          }}
        />
      ),
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
  // const handleAdd = () => {
  //   getHistory().push(getNewUserUrl());
  // };
  return (
    <>
      <PageHeader title="Quản lý người dùng" breadcrumb={{ routes }} />
      <FilterUser />
      <TableHeader title="Danh sách người dùng">
        <Table columns={columns} dataSource={[...items]} loading={loading} rowKey={rowKey}></Table>
      </TableHeader>
    </>
  );
}
