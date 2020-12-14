import { QuestionCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import useDeleteCategoryBarber from '@modules/CategoryBarbers/hooks/useDeleteCategoryBarber';
import { Space, Popconfirm, Button } from 'antd';
import React from 'react';

export default function ProductRowActions(props: { record: any }) {
  const { submit } = useDeleteCategoryBarber(props.record.id);

  return (
    <Space size="small">
      <Popconfirm
        title="Bạn có chắc chắn muốn xóa loại sản phẩm này không?"
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
