import { User } from '@modules/User/redux/action-types';
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
  item?: User;
  onSave?(item: User): void;
  onCancel?(): void;
  onChange?(): void;
}

export default function LookBookForm(props: IProp) {
  const { onCancel } = props;

  const onFinish = (values: User) => {
    props.onSave && props.onSave(values);
  };

  const onFinishFailed = (values: any) => {
    console.log('Failed:', values);
  };

  return (
    <>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          ...props.item,
        }}
        autoComplete="off"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
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
                <Button type="ghost" onClick={onCancel}>
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
