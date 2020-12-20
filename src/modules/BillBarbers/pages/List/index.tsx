import PageHeader from '@commons/components/PageHeader';
import TableHeader from '@commons/components/TableHeader';
import { Table } from 'antd';
import React from 'react';
import { ColumnsType } from 'antd/lib/table/Table';
import { BillFields } from '@modules/BillBarbers/redux/action-types';
import useBillBarber from '@modules/BillBarbers/hooks/useBillBarber';
import FilterBill from '@modules/BillBarbers/containers/FilterBill';

export default function ListBillBarberPage() {
  const { loading, items } = useBillBarber();
  const rowKey = (item: BillFields) => `${item.id}`;

  const columns: ColumnsType<BillFields> = [
    {
      title: 'Tên nhân viên',
      dataIndex: 'barberName',
      key: 'barberName',
    },
    {
      title: 'Tên người dùng',
      dataIndex: 'customerName',
      key: 'barberName',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'customerPhone',
      key: 'customerPhone',
    },
    {
      title: 'Tên cơ sở',
      dataIndex: 'salonName',
      key: 'salonName',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'salonAddress',
      key: 'salonAddress',
    },
    {
      title: 'Thời gian',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Dịch vụ đi kèm',
      dataIndex: ' shoppingItemList',
      width: 200,
      key: ' shoppingItemList',
      render: (_, record) => {
        if (record.shoppingItemList!.length > 0) {
          return record.shoppingItemList?.map((item: any) => item.productName).join(', ');
        } else {
          return 'Không có dịch vụ';
        }
      },
    },

    {
      title: 'Tổng tiền ($)',
      dataIndex: 'finalPrice',
      key: 'finalPrice',
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
      <PageHeader title="Quản lý hóa đơn" breadcrumb={{ routes }} />
      <FilterBill />
      <TableHeader title="Danh sách hóa đơn">
        <Table columns={columns} dataSource={items} rowKey={rowKey} loading={loading}></Table>
      </TableHeader>
    </>
  );
}
