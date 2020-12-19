import PageHeader from '@commons/components/PageHeader';
import TableHeader from '@commons/components/TableHeader';
import { Table, Tag } from 'antd';
import React from 'react';
import FilterBooking from '@modules/Booking/containers/FilterBooking';
import { ColumnsType } from 'antd/lib/table/Table';
import useBookings from '@modules/Booking/hooks/useBookings';
import UserRowActions from './RowActions';
import { BookingFields } from '@modules/Booking/redux/action-types';
// import useDetailBookings from '@modules/Booking/hooks/useDetailBookings';

export default function ListBookingPage() {
  const { loading, items } = useBookings();
  // const { loadingDetail, data } = useDetailBookings('+84979353691', 'Jzo88PrImdQeAcXOmmHj');
  const rowKey = (item: any) => `${item.id}`;

  const columns: ColumnsType<BookingFields> = [
    {
      title: 'Người đặt',
      dataIndex: 'customerName',
      align: 'center',
      key: 'customerName',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'customerPhone',
      align: 'center',
      key: 'customerPhone',
    },
    {
      title: 'Thợ cắt',
      dataIndex: 'barberName',
      align: 'center',
      key: 'barberName',
    },
    {
      title: 'Tên chi nhánh',
      dataIndex: 'salonName',
      align: 'center',
      key: 'salonName',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'salonAddress',
      align: 'center',
      key: 'salonAddress',
    },
    {
      title: 'Slot',
      align: 'center',
      dataIndex: 'slot',
      key: 'slot',
    },
    {
      title: 'Thời gian',
      align: 'center',
      dataIndex: 'time',
      key: 'time',
    },

    {
      title: 'Trạng thái',
      align: 'center',
      key: 'done',
      render: (record: BookingFields) => {
        if (record.done) {
          return (
            <Tag style={{ width: 130, textAlign: 'center' }} color="green">
              Đã hoàn thành
            </Tag>
          );
        } else {
          return (
            <Tag style={{ width: 130, textAlign: 'center' }} color="red">
              Chưa hoàn thành
            </Tag>
          );
        }
      },
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
      path: '/booking',
      breadcrumbName: 'Quản lý lịch đã đặt',
    },
  ];

  return (
    <>
      <PageHeader title="Quản lý lịch đã đặt" breadcrumb={{ routes }} />
      <FilterBooking />
      <TableHeader title="Danh sách lịch đã đặt">
        <Table columns={columns} dataSource={[...items]} loading={loading} rowKey={rowKey}></Table>
      </TableHeader>
    </>
  );
}
