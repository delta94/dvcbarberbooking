import { QuestionCircleOutlined, EditOutlined, DeleteOutlined, HistoryOutlined } from '@ant-design/icons';
import { getHistory } from '@helpers/history';
import { getUserUrl } from '@helpers/url';
import useDeleteUser from '@modules/User/hooks/useDeleteUser';
import { Space, Popconfirm, Button } from 'antd';
import React from 'react';

export default function ProductRowActions(props: { record: any }) {
  const { submit } = useDeleteUser(props.record.id);

  return (
    <Space size="small">
      <Button
        type="ghost"
        onClick={() => {
          getHistory().push(getUserUrl(props.record.id));
        }}
        shape="circle"
        title="Chỉnh sửa"
        icon={<EditOutlined />}
        size="middle"
      />

      <Popconfirm
        title="Bạn có chắc chắn muốn xóa người dùng này không?"
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
