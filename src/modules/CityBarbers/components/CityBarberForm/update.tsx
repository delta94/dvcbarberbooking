import useUpdateCityBarber from '@modules/CityBarbers/hooks/useUpdateCityBarber';
import { CityFields } from '@modules/CityBarbers/redux/action-types';
import { Button, Col, Form, Row, Space, Input, Switch } from 'antd';
import { FormItemProps, FormProps } from 'antd/es/form';
import React, { useState } from 'react';

const layout: FormProps = {
  layout: 'vertical',
  labelCol: { span: 20 },
  wrapperCol: { span: 20 },
};

const tailLayout: FormItemProps = {};

interface IProp {
  loading: boolean;
  item?: CityFields;
  onSave?(item: CityFields): void;
  onCancel?(): void;
}

export default function CityBarberUpdateForm(props: IProp) {
  const { loading, submit } = useUpdateCityBarber();
  const [statusCity, setStatusCity] = useState<boolean>(true);

  const onFinish = (values: CityFields) => {
    submit({ id: props.item!.id, name: values.name, status: statusCity });
  };

  return (
    <>
      <Form {...layout} initialValues={props.item} onFinish={onFinish} name="basic">
        <Row>
          <Col span={16}>
            <Row>
              <Col span={12}>
                <Form.Item label="Name" name="name" {...tailLayout}>
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
        <Col span={16}>
          <Row>
            <Col span={12}>
              <Form.Item label="Trạng thái hoạt động" name="status" {...tailLayout}>
                <Switch
                  onChange={(values) => {
                    setStatusCity(values);
                  }}
                  defaultChecked={true}
                />
              </Form.Item>
            </Col>
          </Row>
        </Col>
        <Row>
          <Col span={24}>
            <Form.Item {...tailLayout}>
              <Space>
                <Button loading={loading} type="primary" htmlType="submit">
                  Lưu
                </Button>
                <Button onClick={props.onCancel} type="ghost">
                  Hủy
                </Button>
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
}
