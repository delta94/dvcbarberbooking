import UploadDragger from '@modules/Media/containers/UploadDragger';
import { Button, Col, Form, Row, Space, Input } from 'antd';
import { FormItemProps, FormProps } from 'antd/es/form';
import React from 'react';

const layout: FormProps = {
  layout: 'vertical',
  labelCol: { span: 20 },
  wrapperCol: { span: 20 },
};

const tailLayout: FormItemProps = {};

// interface IProp {
//   loading: boolean;
//   item?: ;
//   onSave?(item: CategoriesFields): void;
// }

export default function ProductBarberForm() {
  // const onFinish = (values: CategoriesFields) => {
  //   props.onSave && props.onSave(values);
  // };

  return (
    <>
      <Form {...layout} name="basic">
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
          <Col span={16}>
            <Row>
              <Col span={12}>
                <Form.Item label="Gía" name="name" {...tailLayout}>
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={16}>
            <Row>
              <Col span={12}>
                <Form.Item label="" name="meida" {...tailLayout}>
                  <UploadDragger />
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
                <Button type="ghost">Hủy</Button>
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
}
