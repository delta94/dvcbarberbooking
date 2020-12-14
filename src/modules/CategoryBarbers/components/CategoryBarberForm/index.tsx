import { CategoriesFields } from '@modules/CategoryBarbers/redux/action-types';
import { Button, Col, Form, Row, Space, Input } from 'antd';
import { FormItemProps, FormProps } from 'antd/es/form';
import React from 'react';

const layout: FormProps = {
  layout: 'vertical',
  labelCol: { span: 20 },
  wrapperCol: { span: 20 },
};

const tailLayout: FormItemProps = {};

interface IProp {
  loading: boolean;
  item?: CategoriesFields;
  onSave?(item: CategoriesFields): void;
  onCancel?(): void;
}

export default function CategoryBarberForm(props: IProp) {
  const onFinish = (values: CategoriesFields) => {
    props.onSave && props.onSave(values);
  };

  return (
    <>
      <Form {...layout} onFinish={onFinish} name="basic">
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

        <Row>
          <Col span={24}>
            <Form.Item {...tailLayout}>
              <Space>
                <Button type="primary" htmlType="submit">
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
