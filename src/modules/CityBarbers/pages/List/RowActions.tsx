import { QuestionCircleOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Space, Popconfirm, Button } from 'antd';
import userDeleteCityBarber from '@modules/CityBarbers/hooks/useDeleteCityBarber';
import React from 'react';
import { getHistory } from '@helpers/history';
import { getDetailCityBarber } from '@helpers/url';
import { CityFields } from '@modules/CityBarbers/redux/action-types';

export default function CityRowActions(props: { record: CityFields }) {
  const { submit } = userDeleteCityBarber(props.record.id);

  return (
    <Space size="small">
      <Button
        onClick={() => {
          getHistory().push(getDetailCityBarber(props.record.id));
        }}
        type="ghost"
        shape="circle"
        icon={<EditOutlined />}
        size="middle"
        title="Edit"
      />
      <Popconfirm
        title="Bạn có chắc chắn muốn thành phố này không? Sẽ bao gốm cả nhân viên và chi nhánh của thành phố này"
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
