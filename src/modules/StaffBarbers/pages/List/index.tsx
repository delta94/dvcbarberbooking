import PageHeader from '@commons/components/PageHeader';
import TableHeader from '@commons/components/TableHeader';
import { Button, Table, Switch } from 'antd';
import React from 'react';
import { ColumnsType } from 'antd/lib/table/Table';
import FilterBill from '@modules/BillBarbers/containers/FilterBill';
import useStaffBarber from '@modules/StaffBarbers/hooks/useStaffBarber';
import { StaffFields } from '@modules/StaffBarbers/redux/action-types';
import { PlusOutlined } from '@ant-design/icons';
import { getHistory } from '@helpers/history';
import { getNewStaffUrl } from '@helpers/url';
import RowActions from '@modules/StaffBarbers/pages/List/RowActions';
import useUpdateStaff from '@modules/StaffBarbers/hooks/useUpdateStaff';

export default function ListStaffBarberPage() {
  const { loading, items } = useStaffBarber();
  const { submit } = useUpdateStaff();
  const rowKey = (item: StaffFields) => `${item.id}`;

  const columns: ColumnsType<StaffFields> = [
    {
      title: 'Tên nhân viên',
      dataIndex: 'name',
      key: 'barberName',
    },
    {
      title: 'Đánh giá',
      key: 'barberName',
      render: (_, record) => {
        return Number(Number(record.rating) / Number(record.ratingTimes));
      },
    },
    {
      title: 'Lương',
      dataIndex: 'salary',
      key: 'barberName',
    },
    {
      title: 'Trạng thái hoạt động12',
      key: 'status',
      render: (record: StaffFields) => (
        <Switch
          defaultChecked={record.status === true ? true : false}
          onChange={(text: any) => {
            submit({
              id: record.id,
              name: record.name,
              status: text,
              idBranch: record.idBranch,
              idCity: record.idCity,
              password: record.password,
              rating: record.rating,
              ratingTimes: record.ratingTimes,
              username: record.username,
              salary: record.salary,
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
  return (
    <>
      <PageHeader title="Quản lý nhân viên" breadcrumb={{ routes }} />
      <FilterBill />
      <TableHeader
        title="Danh sách nhân viên"
        extra={
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => {
              getHistory().push(getNewStaffUrl());
            }}
          >
            Thêm mới
          </Button>
        }
      >
        <Table columns={columns} dataSource={items} rowKey={rowKey} loading={loading}></Table>
      </TableHeader>
    </>
  );
}
