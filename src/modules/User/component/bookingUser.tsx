import TableHeader from '@commons/components/TableHeader';
import { Table, Tag } from 'antd';
import React from 'react';
import FilterBookingUser from '@modules/User/component/filterBookingUser';
import { ColumnsType } from 'antd/lib/table/Table';
import { BookingUserFields } from '../redux/action-types/list-booking-user';
import useBooking from '../hooks/userBooking';
import { useParams } from 'react-router';

interface IProp {
  items: BookingUserFields[];
}

export default function ListBookingPage(prop: IProp) {
  const rowKey = (item: any) => `${item.id}`;
  const params = useParams<{ id: string }>();
  const { dataBookingUser } = useBooking(params.id);

  const columns: ColumnsType<BookingUserFields> = [
    {
      title: 'Người đặt',
      dataIndex: 'customerName',
      key: 'customerName',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'customerPhone',
      key: 'customerPhone',
    },
    {
      title: 'Thợ cắt',
      dataIndex: 'barberName',
      key: 'barberName',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'salonAddress',
      key: 'salonAddress',
    },
    {
      title: 'Slot',
      dataIndex: 'slot',
      key: 'slot',
    },
    {
      title: 'Thời gian',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Trạng thái',
      align: 'center',
      key: 'done',
      render: (record: BookingUserFields) => {
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
  ];

  // const handleAdd = () => {
  //   // getHistory().push(getNewUserUrl());
  // };
  return (
    <>
      <FilterBookingUser />
      <TableHeader title="Danh sách lịch đã đặt">
        <Table columns={columns} dataSource={[...dataBookingUser!]} rowKey={rowKey}></Table>
      </TableHeader>
    </>
  );
}
