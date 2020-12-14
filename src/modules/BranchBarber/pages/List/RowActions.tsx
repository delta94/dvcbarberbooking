import { QuestionCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { Space, Popconfirm, Button } from 'antd';
import React from 'react';
export default function BranchRowActions(props: { record: any }) {
  // const { submit } = userDeleteCityBarber(props.record.id);

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
    </Space>
  );
}
