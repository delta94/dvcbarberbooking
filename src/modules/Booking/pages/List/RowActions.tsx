import { QuestionCircleOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import useDeleteBooking from '@modules/Booking/hooks/useDeleteBooking';
import { BookingFields } from '@modules/Booking/redux/action-types';
import { getDetailsBooking } from '@modules/Booking/redux/actions/detail';
import { Space, Popconfirm, Button } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { DeleteBookingStaffFirebase } from '@modules/firebaseConnect/firebaseConnect';
import useDeleteBookingStaff from '@modules/Booking/hooks/useDeleteBookingStaff';

export default function BookingRowActions(props: { record: BookingFields }) {
  const { submit } = useDeleteBooking(props.record.id, props.record.idCol);
  const { submit: deleteBKstaff } = useDeleteBookingStaff(
    props.record.cityBook,
    props.record.salonId,
    props.record.barberId,
    props.record.time.slice(0, 2),
    props.record.time.slice(3, 5),
    props.record.time.slice(6, 10),
    props.record.slot.toString(),
  );

  return (
    <Space size="small">
      <Popconfirm
        title="Bạn có chắc chắn muốn xóa lịch đặt này không?"
        cancelText="Hủy"
        okText="Xác nhận"
        placement="left"
        onConfirm={() => {
          deleteBKstaff();
          submit();
        }}
        icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
      >
        <Button type="ghost" shape="circle" icon={<DeleteOutlined />} size="middle" title="Xóa" />
      </Popconfirm>
    </Space>
  );
}
