import PageHeader from '@commons/components/PageHeader';
import TableHeader from '@commons/components/TableHeader';
import { Table, Button, Switch } from 'antd';
import React from 'react';
import RowActions from './RowActions';
import { PlusOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/lib/table/Table';
import { getHistory } from '@helpers/history';
import { branchFields } from '@modules/BranchBarber/redux/action-types';
import useBranchBarber from '@modules/BranchBarber/hooks/useBranchBarber';
import useUpdateBranchBarber from '@modules/BranchBarber/hooks/useUpdateBranchBarber';

export default function ListBranchBarberPage() {
  const { loading, items } = useBranchBarber();
  const { submit } = useUpdateBranchBarber();
  console.log('ad', items);
  const rowKey = (item: branchFields) => `${item.id}`;
  const columns: ColumnsType<branchFields> = [
    {
      title: 'Tên chi nhánh',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Website',
      width: '30%',
      dataIndex: 'website',
      key: 'website',
    },
    {
      title: 'Bắt đầu làm việc',
      dataIndex: 'openHours',
      key: 'openHours',
    },
    {
      title: 'Trạng thái hoạt động',
      key: 'status',
      render: (record: branchFields) => (
        <Switch
          defaultChecked={record.status === true ? true : false}
          onChange={(text: any) => {
            console.log(text);
            submit({
              id: record.id,
              idCity: record.idCity,
              name: record.name,
              status: text,
              address: record.address,
              openHours: record.openHours,
              phone: record.phone,
              website: record.website,
            });
          }}
        />
      ),
    },
    {
      title: '',
      key: 'action',
      width: 60,
      render: (record: any) => <RowActions record={record} />,
    },
  ];

  const routes = [
    {
      path: '/',
      breadcrumbName: 'Trang chủ',
    },
    {
      path: '/branchBarber',
      breadcrumbName: 'Quản lý chi nhánh',
    },
  ];
  const handleAdd = () => {
    getHistory().push('/branchBarber/new');
  };
  return (
    <>
      <PageHeader title="Quản lý chi nhánh" breadcrumb={{ routes }} />
      <TableHeader
        title="Danh sách chi nhánh"
        extra={
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
            Thêm mới
          </Button>
        }
      >
        <Table columns={columns} dataSource={items} rowKey={rowKey} loading={loading}></Table>
      </TableHeader>
    </>
  );
}
