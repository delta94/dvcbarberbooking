import { QuestionCircleOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import useDeleteBooking from '@modules/Booking/hooks/useDeleteBooking';
import { BookingFields } from '@modules/Booking/redux/action-types';
import { getDetailsBooking } from '@modules/Booking/redux/actions/detail';
import { Space, Popconfirm, Button } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';

export default function BookingRowActions(props: { record: BookingFields }) {
  const { submit } = useDeleteBooking(props.record.id, props.record.idCol);
  const dispatch = useDispatch();
  return (
    <Space size="small">
      <Button
        type="ghost"
        onClick={() => {
          dispatch(getDetailsBooking(props.record.id, props.record.idCol));
        }}
        shape="circle"
        title="Chỉnh sửa"
        icon={<EditOutlined />}
        size="middle"
      />

      <Popconfirm
        title="Bạn có chắc chắn muốn xóa lịch đặt này không?"
        cancelText="Hủy"
        okText="Xác nhận"
        placement="left"
        onConfirm={submit}
        icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
      >
        <Button type="ghost" shape="circle" icon={<DeleteOutlined />} size="middle" title="Xóa" />
      </Popconfirm>
    </Space>
  );
}
