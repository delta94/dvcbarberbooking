import { QuestionCircleOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Space, Popconfirm, Button } from 'antd';
import React from 'react';
import { getHistory } from '@helpers/history';
import { getDetailStaffUrl } from '@helpers/url';
import { StaffFields } from '@modules/StaffBarbers/redux/action-types';

export default function StaffRowActions(props: { record: StaffFields }) {
  return (
    <Space size="small">
      <Popconfirm
        title="Bạn có chắc chắn muốn chi nhánh này không? Sẽ bao gốm cả nhân viên và chi nhánh của thành phố này"
        cancelText="Hủy"
        okText="Xác nhận"
        placement="left"
        // onConfirm={submit}
        icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
      >
        <Button type="ghost" shape="circle" icon={<DeleteOutlined />} size="middle" title="Xóa" />
      </Popconfirm>
      <Button
        onClick={() => {
          getHistory().push(getDetailStaffUrl(props.record.id, props.record.idCity, props.record.idBranch));
        }}
        type="ghost"
        shape="circle"
        icon={<EditOutlined />}
        size="middle"
        title="Sửa"
      />
    </Space>
  );
}
