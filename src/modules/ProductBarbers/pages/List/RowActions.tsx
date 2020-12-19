import { QuestionCircleOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { getHistory } from '@helpers/history';
import { getDetailProductUrl, getUserUrl } from '@helpers/url';
import useDeleteProduct from '../../hooks/useDeleteProductBarber';
import { Space, Popconfirm, Button } from 'antd';
import React from 'react';
import { ProductBarberFields } from '@modules/ProductBarbers/redux/action-types';

export default function ProductRowActions(props: { record: ProductBarberFields }) {
  const { submit } = useDeleteProduct();

  return (
    <Space size="small">
      {/* <Button
        type="ghost"
        onClick={() => {
          getHistory().push(getDetailProductUrl(props.record.id, props.record.idCol));
        }}
        shape="circle"
        title="Chỉnh sửa"
        icon={<EditOutlined />}
        size="middle"
      /> */}

      <Popconfirm
        title="Bạn có chắc chắn muốn xóa sản phẩm này không?"
        cancelText="Hủy"
        okText="Xác nhận"
        placement="left"
        onConfirm={() => {
          submit(props.record.id, props.record.idCol);
        }}
        icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
      >
        <Button type="ghost" shape="circle" icon={<DeleteOutlined />} size="middle" title="Xóa" />
      </Popconfirm>
    </Space>
  );
}
